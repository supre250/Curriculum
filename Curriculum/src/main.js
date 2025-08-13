window.addEventListener('scroll', () => {
  const header = document.querySelector('.profile-header');
  const scrollY = window.scrollY;
  const fadePoint = window.innerHeight / 1.5;

  if (header) {
    header.style.opacity = Math.max(1 - (scrollY / fadePoint), 0);
  }
});