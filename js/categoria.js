// categoria.js — filtros e ordenação das páginas de categoria

(function () {
  'use strict';

  function initCategoria(config) {
    const grid = document.getElementById(config.gridId);
    const contagem = document.getElementById(config.contagemId);
    const vazio = document.getElementById(config.vazioId);
    const ordenar = document.getElementById(config.ordenarId);
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.product-card'));
    const filtros = {};

    function aplicar() {
      let visiveis = cards.filter(card => {
        return Object.entries(filtros).every(([chave, valor]) => {
          if (valor === 'todos' || valor === undefined) return true;
          if (chave === 'preco') {
            const preco = parseInt(card.dataset.precoVal, 10);
            if (valor === '0-500') return preco <= 500;
            if (valor === '500-800') return preco > 500 && preco <= 800;
            if (valor === '800+') return preco > 800;
            if (valor === '400-800') return preco >= 400 && preco <= 800;
            if (valor === '800-1200') return preco > 800 && preco <= 1200;
            if (valor === '1200+') return preco > 1200;
            return true;
          }
          return card.dataset[chave] === valor;
        });
      });

      cards.forEach(c => c.style.display = 'none');
      visiveis.forEach(c => c.style.display = '');

      if (contagem) contagem.textContent = `${visiveis.length} produto${visiveis.length !== 1 ? 's' : ''}`;
      if (vazio) vazio.style.display = visiveis.length === 0 ? '' : 'none';
    }

    function bindFiltro(seletorEl, chave) {
      const el = document.getElementById(seletorEl);
      if (!el) return;
      el.addEventListener('click', e => {
        const btn = e.target.closest('.sidebar-btn, .filtro-btn');
        if (!btn) return;
        el.querySelectorAll('.sidebar-btn, .filtro-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtros[chave] = btn.dataset[chave] || btn.dataset.sub || btn.dataset.origem || btn.dataset.marca || btn.dataset.preco || 'todos';
        aplicar();
      });
    }

    if (config.filtros) {
      config.filtros.forEach(f => bindFiltro(f.id, f.chave));
    }

    if (ordenar) {
      ordenar.addEventListener('change', () => {
        const visCards = cards.filter(c => c.style.display !== 'none');
        const sorted = visCards.sort((a, b) => {
          const pa = parseInt(a.dataset.precoVal, 10);
          const pb = parseInt(b.dataset.precoVal, 10);
          if (ordenar.value === 'menor-preco') return pa - pb;
          if (ordenar.value === 'maior-preco') return pb - pa;
          return 0;
        });
        sorted.forEach(c => grid.appendChild(c));
      });
    }

    aplicar();
  }

  window.initCategoria = initCategoria;
})();
