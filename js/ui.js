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

// ===================== FILTROS DE IMPORTADOS =====================
(function () {
  const grid = document.getElementById('importados-grid');
  if (!grid) return;

  let marcaAtiva = 'todos';
  let precoAtivo = 'todos';

  function aplicarFiltros() {
    grid.querySelectorAll('.product-card').forEach(card => {
      const marca = card.dataset.marca;
      const preco = parseInt(card.dataset.precoVal, 10);

      const passaMarca = marcaAtiva === 'todos' || marca === marcaAtiva;

      let passaPreco = true;
      if (precoAtivo === '400-800') passaPreco = preco >= 400 && preco <= 800;
      else if (precoAtivo === '800-1200') passaPreco = preco > 800 && preco <= 1200;
      else if (precoAtivo === '1200+') passaPreco = preco > 1200;

      card.style.display = passaMarca && passaPreco ? '' : 'none';
    });
  }

  document.getElementById('filtro-marca')?.addEventListener('click', e => {
    const btn = e.target.closest('.filtro-btn');
    if (!btn) return;
    document.querySelectorAll('#filtro-marca .filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    marcaAtiva = btn.dataset.marca;
    aplicarFiltros();
  });

  document.getElementById('filtro-preco')?.addEventListener('click', e => {
    const btn = e.target.closest('.filtro-btn');
    if (!btn) return;
    document.querySelectorAll('#filtro-preco .filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    precoAtivo = btn.dataset.preco;
    aplicarFiltros();
  });
})();
