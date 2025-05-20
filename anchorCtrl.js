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