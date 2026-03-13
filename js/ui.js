// ===================== NAVBAR SCROLL =====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ===================== HAMBURGER MENU =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// ===================== SCROLL REVEAL =====================
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ===================== SMOOTH CLOSE MENU ON LINK CLICK =====================
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===================== TABS DE CATEGORIA =====================
document.querySelectorAll('.categoria-tabs').forEach(tabsEl => {
  tabsEl.addEventListener('click', e => {
    const tab = e.target.closest('.categoria-tab');
    if (!tab) return;
    const tabsGroup = tab.closest('.categoria-tabs');
    const gridId = tabsGroup.id.replace('-tabs', '-grid');
    const grid = document.getElementById(gridId);
    if (!grid) return;
    tabsGroup.querySelectorAll('.categoria-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filtro = tab.dataset.tab;
    grid.querySelectorAll('.product-card').forEach(card => {
      if (filtro === 'todos' || card.dataset.categoria === filtro) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
