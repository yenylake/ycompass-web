// Dropdown menus (click on desktop, accordion on mobile)
const navItems = document.querySelectorAll('.nav-item.has-menu');

navItems.forEach((item) => {
  const btn = item.querySelector('.nav-link');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = item.classList.contains('open');
    navItems.forEach((i) => {
      i.classList.remove('open');
      i.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  navItems.forEach((i) => {
    i.classList.remove('open');
    i.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

// Close mobile menu after picking a link
document.querySelectorAll('.dropdown a').forEach((a) => {
  a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Subtle header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 6px 20px -12px rgba(22,27,39,.25)' : 'none';
});
