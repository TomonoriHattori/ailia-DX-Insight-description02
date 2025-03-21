var fs = require('fs');
var dirutil = require('./dirutil');

function replaceContent(dir){
  dirutil.walkDir(dir, function (err, path) {
    var filterItems = path.filter(function(value) {
      return value.match(/.html/); // markdownファイルに限定
    });

    for(let i=0; i<filterItems.length; i++){
      fs.readFile(filterItems[i], 'utf8', function (err, data) {
        if (err) throw err;
        data = data.replace(/<title>.+/, '<title>ailia DX Insight</title>'); // 文字列を置き換え

        fs.writeFile(filterItems[i], data, function (err) {
          if (err) throw err;
          console.log(filterItems[i] + ' completed');
        });

      });
    }
  });
}
replaceContent('_book')