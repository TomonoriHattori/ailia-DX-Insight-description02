document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      // 少し遅延させてからスクロール（必要に応じて調整）
      setTimeout(function() {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});