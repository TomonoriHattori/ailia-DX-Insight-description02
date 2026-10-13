// ビルド後の _book 内のHTMLを走査し、<img> に実画像の width / height を付与するスクリプト。
// 目的：画像読み込み前からブラウザが表示領域（縦横比）を確保できるようにし、
//       アンカーリンクで移動した後に画像が読み込まれて位置がズレるのを防ぐ。
// 実行：npm run build の最後に自動実行（package.json の scripts.build を参照）

var fs = require('fs');
var path = require('path');
var imageSize = require('image-size').imageSize;

var BOOK_DIR = process.argv[2] || '_book'; // 引数で出力先を変更可能（テスト用）

// _book 以下の .html ファイルを再帰的に集める（gitbook 内部ファイルは対象外）
function collectHtml(dir, result) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    var full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'gitbook') collectHtml(full, result);
    } else if (/\.html$/.test(entry.name)) {
      result.push(full);
    }
  });
  return result;
}

// src から実ファイルのサイズを取得（取得できなければ null）
function getSize(htmlFile, src) {
  // 外部URL・data URI は対象外
  if (/^(https?:)?\/\//i.test(src) || /^data:/i.test(src)) return null;
  var clean = decodeURIComponent(src.split(/[?#]/)[0]);
  var file = path.resolve(path.dirname(htmlFile), clean);
  if (!fs.existsSync(file)) return null;
  try {
    var size = imageSize(fs.readFileSync(file));
    if (!size.width || !size.height) return null;
    // JPEG の EXIF 回転（5〜8）は縦横が入れ替わって表示されるため入れ替える
    if (size.orientation >= 5) return { width: size.height, height: size.width };
    return { width: size.width, height: size.height };
  } catch (e) {
    return null;
  }
}

var files = collectHtml(BOOK_DIR, []);
var total = 0;

files.forEach(function (htmlFile) {
  var html = fs.readFileSync(htmlFile, 'utf8');
  var count = 0;

  html = html.replace(/<img\b([^>]*?)(\s*\/?)>/gi, function (tag, attrs, close) {
    var wAttr = attrs.match(/\swidth\s*=\s*["']?([^"'\s>]*)/i);
    var hAttr = attrs.match(/\sheight\s*=\s*["']?([^"'\s>]*)/i);
    // 両方指定済みならすでに表示領域が決まっているので触らない
    if (wAttr && hAttr) return tag;
    var m = attrs.match(/\ssrc\s*=\s*("([^"]*)"|'([^']*)')/i);
    if (!m) return tag;
    var size = getSize(htmlFile, m[2] !== undefined ? m[2] : m[3]);
    if (!size) return tag;

    var add;
    if (wAttr) {
      // width だけ指定（例：width="600px"）→ 作者の幅に合わせて height を比率計算
      var w = parseFloat(wAttr[1]);
      if (!/^[\d.]+(px)?$/i.test(wAttr[1]) || !w) return tag; // % などは対象外
      add = ' height="' + Math.round(w * size.height / size.width) + '"';
    } else if (hAttr) {
      // height だけ指定（例：height="350px"）→ 作者の高さに合わせて width を比率計算
      var h = parseFloat(hAttr[1]);
      if (!/^[\d.]+(px)?$/i.test(hAttr[1]) || !h) return tag;
      add = ' width="' + Math.round(h * size.width / size.height) + '"';
    } else {
      // 指定なし → 実画像のサイズをそのまま付与
      add = ' width="' + size.width + '" height="' + size.height + '"';
    }
    count++;
    // data-auto-size：このスクリプトで処理した印（CSS で height:auto を当てる対象）
    return '<img' + attrs + add + ' data-auto-size' + close + '>';
  });

  if (count > 0) {
    fs.writeFileSync(htmlFile, html);
    total += count;
  }
});

console.log('ImageSize: ' + total + ' 個の画像に width/height を付与しました');
