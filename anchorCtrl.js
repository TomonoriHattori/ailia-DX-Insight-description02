document.addEventListener('DOMContentLoaded', function() {
  const initialHash = window.location.hash;
  const initialReloadFlag = 'reloaded_on_anchor_initial';
  const clickReloadFlag = 'reloaded_on_anchor_click';

  // 1. ページ読み込み時にURLにハッシュがある場合
  if (initialHash) {
    if (!sessionStorage.getItem(initialReloadFlag)) {
      sessionStorage.setItem(initialReloadFlag, 'true');
      window.location.reload();
    } else {
      // 既に初回読み込みされた場合はフラグをクリア（次のセッションでの再読み込みのため）
      sessionStorage.removeItem(initialReloadFlag);
    }
  } else {
    // ハッシュがない場合はフラグをクリア
    sessionStorage.removeItem(initialReloadFlag);
  }

  // 2. ページ内のアンカーリンクをクリックした場合
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const currentHash = window.location.hash;
      const newHash = this.hash;

      // 現在のハッシュとクリックされたアンカーのハッシュが異なり、
      // かつ、セッション中にまだ再読み込みされていない場合
      if (currentHash !== newHash && !sessionStorage.getItem(clickReloadFlag)) {
        event.preventDefault(); // デフォルトのアンカー移動をキャンセル

        sessionStorage.setItem(clickReloadFlag, 'true');

        window.location.hash = newHash; // URLを新しいハッシュに変更
        window.location.reload();      // 再読み込み
      } else if (currentHash === newHash) {
        // 同じアンカーをクリックした場合は何もしない
        sessionStorage.removeItem(clickReloadFlag); // フラグをクリア
      }
    });
  });

  // ページロード時（アンカーリンク以外のナビゲーションでアクセスした場合）に、
  // クリック時の再読み込みフラグをクリア
  // これにより、他のページからアクセスし直した際に再読み込みが有効になる
  if (!window.location.hash && sessionStorage.getItem(clickReloadFlag)) {
    sessionStorage.removeItem(clickReloadFlag);
  }
});

window.onload = function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        scrollToTarget(targetElement);
      }
    });
  });

  function scrollToTarget(target) {
    // 念のため位置を再計算
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};