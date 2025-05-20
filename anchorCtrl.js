document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // デフォルトのアンカー遷移を防止
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const images = targetElement.querySelectorAll('img');
        let imagesLoaded = 0;

        if (images.length === 0) {
          // 画像がない場合はすぐにスクロール
          scrollToTarget(targetElement);
        } else {
          images.forEach(img => {
            if (img.complete) {
              imagesLoaded++;
              if (imagesLoaded === images.length) {
                scrollToTarget(targetElement);
              }
            } else {
              img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === images.length) {
                  scrollToTarget(targetElement);
                }
              };
            }
          });
        }
      }
    });
  });

  function scrollToTarget(target) {
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // スムーズスクロール（任意）
    });
  }
});