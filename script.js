// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.classList.toggle('is-open', isOpen);
    });

    // Close menu when a nav link is clicked (useful on mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('is-open');
      });
    });
  }
});
