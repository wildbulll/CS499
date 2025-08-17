document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn-right');
  const prevBtn = document.querySelector('.carousel-btn-left');
  let currentIndex = slides.findIndex(slide => slide.classList.contains('current-slide'));

  function moveToSlide(track, currentSlide, targetSlide, targetIndex) {
    track.style.transform = 'translateX(-' + (targetIndex * 100) + '%)';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    currentIndex = targetIndex;
  }

  nextBtn.addEventListener('click', () => {
    let targetIndex = (currentIndex + 1) % slides.length;
    moveToSlide(track, slides[currentIndex], slides[targetIndex], targetIndex);
  });

  prevBtn.addEventListener('click', () => {
    let targetIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(track, slides[currentIndex], slides[targetIndex], targetIndex);
  });

  // Optional: swipe support for mobile
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  track.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) nextBtn.click();
    if (endX > startX + 50) prevBtn.click();
  });
});
