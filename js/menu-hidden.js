let lastScrollY = window.scrollY;
const menu = document.querySelector('.menu-mobile');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Rolando para baixo
    menu.classList.add('hidden');
  } else {
    // Rolando para cima
    menu.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
