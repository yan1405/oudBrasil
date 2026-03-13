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

// ===================== DEPOIMENTOS CAROUSEL =====================
(function () {
  const track = document.getElementById('depoimentos-track');
  const prevBtn = document.getElementById('dep-prev');
  const nextBtn = document.getElementById('dep-next');
  const dotsWrap = document.getElementById('dep-dots');
  if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

  const cards = track.querySelectorAll('.depoimento-card');
  const total = cards.length;
  let idx = 0;
  let autoplayId = null;

  function visiveis() {
    return window.innerWidth > 767 ? 3 : 1;
  }

  function totalGrupos() {
    return Math.ceil(total / visiveis());
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    const n = totalGrupos();
    for (let i = 0; i < n; i++) {
      const dot = document.createElement('button');
      dot.className = 'depoimentos-dot' + (i === idx ? ' active' : '');
      dot.setAttribute('aria-label', 'Ir para grupo ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    }
  }

  function updateTrack() {
    const card = cards[0];
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    const cardW = card.offsetWidth + gap;
    const offset = idx * visiveis() * cardW;
    track.style.transform = 'translateX(-' + offset + 'px)';
    dotsWrap.querySelectorAll('.depoimentos-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === idx);
    });
  }

  function goTo(i) {
    idx = i;
    if (idx >= totalGrupos()) idx = 0;
    if (idx < 0) idx = totalGrupos() - 1;
    updateTrack();
  }

  prevBtn.addEventListener('click', function () { goTo(idx - 1); });
  nextBtn.addEventListener('click', function () { goTo(idx + 1); });

  function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(function () { goTo(idx + 1); }, 5000);
  }

  function stopAutoplay() {
    if (autoplayId) { clearInterval(autoplayId); autoplayId = null; }
  }

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  window.addEventListener('resize', function () {
    if (idx >= totalGrupos()) idx = totalGrupos() - 1;
    buildDots();
    updateTrack();
  });

  buildDots();
  updateTrack();
  startAutoplay();
})();
