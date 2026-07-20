// elementler secilir
const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.melumatlar');
const navLinks = document.querySelectorAll('.melumatlar a, .hero-cont a, #logo');

// burger menyu
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');

  // ikonu deyis
  if (menu.classList.contains('active')) {
    menuBtn.textContent = '✕';
    menuBtn.setAttribute('aria-label', 'Menyunu bağla');
  } else {
    menuBtn.textContent = '☰';
    menuBtn.setAttribute('aria-label', 'Menyunu aç');
  }
});

// smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');

    if (!targetId.startsWith('#')) return;

    e.preventDefault();

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // mobil menyu aciqdirsa bagla
    menu.classList.remove('active');
    menuBtn.textContent = '☰';
    menuBtn.setAttribute('aria-label', 'Menyunu aç');
  });
});