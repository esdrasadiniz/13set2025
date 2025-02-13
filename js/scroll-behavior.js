let isScrolling = false;
let touchStartY = 0;
let lastScrollTime = 0;

// 🔥 Ajuste esses valores para sensibilidade personalizada
const SCROLL_SENSITIVITY = 3;  // Para mouse e trackpad (padrão era 30)
const TOUCH_SENSITIVITY = 10;   // Para touchscreen (padrão era 80)

document.addEventListener("wheel", handleScroll, { passive: false });
document.addEventListener("touchstart", (e) => touchStartY = e.touches[0].clientY);
document.addEventListener("touchend", handleTouchScroll, { passive: false });

function handleScroll(event) {
  event.preventDefault();

  const now = Date.now();
  if (isScrolling || now - lastScrollTime < 800) return; // Bloqueia múltiplos scrolls rápidos

  isScrolling = true;
  lastScrollTime = now;

  let scrollDirection = event.deltaY > SCROLL_SENSITIVITY ? 1 : event.deltaY < -SCROLL_SENSITIVITY ? -1 : 0;

  if (scrollDirection !== 0) {
    scrollToNextSection(scrollDirection);
  }

  setTimeout(() => isScrolling = false, 700); // Tempo de cooldown reduzido
}

function handleTouchScroll(event) {
  let touchEndY = event.changedTouches[0].clientY;
  let deltaY = touchStartY - touchEndY;

  if (Math.abs(deltaY) > TOUCH_SENSITIVITY) {
    scrollToNextSection(deltaY > 0 ? 1 : -1);
  }
}

function scrollToNextSection(direction) {
  let sections = document.querySelectorAll(".main-section");
  let currentSection = [...sections].findIndex(
    (section) => section.getBoundingClientRect().top >= 0
  );

  let nextSectionIndex = currentSection + direction;
  if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
    sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
  }
}
