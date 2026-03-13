// search.js — overlay de busca com filtro de produtos

(function () {
  'use strict';

  // ===================== PRODUCT CATALOG =====================

  var products = [
    { id: 'arab1', name: 'Royal Oud Noir', price: 890, category: 'Orientais · Amadeirados', collection: 'arabes' },
    { id: 'arab2', name: 'Attar Al Amani', price: 640, category: 'Florais · Orientais', collection: 'arabes' },
    { id: 'arab3', name: 'Bakhoor Rasmi', price: 450, category: 'Amadeirados', collection: 'arabes' },
    { id: 'arab4', name: 'Oud al Layl', price: 1150, category: 'Orientais', collection: 'arabes' },
    { id: 'imp1', name: 'Lumière Blanche', price: 1290, category: 'Florais · Frescos', collection: 'importados' },
    { id: 'imp2', name: 'Noir Absolu', price: 1580, category: 'Amadeirados · Orientais', collection: 'importados' },
    { id: 'imp3', name: 'Santal Élite', price: 980, category: 'Amadeirados', collection: 'importados' },
    { id: 'imp4', name: 'Aqua Divina', price: 760, category: 'Frescos · Cítricos', collection: 'importados' },
    { id: 'imp5', name: 'Rose de Minuit', price: 1120, category: 'Florais', collection: 'importados' },
    { id: 'imp6', name: 'Gourmand Secret', price: 870, category: 'Gourmand', collection: 'importados' }
  ];

  // ===================== HELPERS =====================

  function formatPrice(value) {
    return 'R$ ' + Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function searchProducts(query) {
    if (!query || query.trim().length < 2) return [];
    var q = normalize(query.trim());
    return products.filter(function (p) {
      return normalize(p.name).indexOf(q) > -1 || normalize(p.category).indexOf(q) > -1;
    });
  }

  // ===================== RENDER =====================

  function renderSuggestions(results, query) {
    var container = document.getElementById('search-suggestions');
    if (!container) return;

    if (!query || query.trim().length < 2) {
      container.innerHTML = '';
      return;
    }

    if (results.length === 0) {
      container.innerHTML = '<li class="search-no-results">Nenhum produto encontrado.</li>';
      return;
    }

    var html = '';
    results.forEach(function (item) {
      html += '<li><a href="#' + item.collection + '" data-action="search-go" data-id="' + item.id + '">' +
        '<span>' + item.name + ' <small style="opacity:0.5;">' + item.category + '</small></span>' +
        '<span class="search-price">' + formatPrice(item.price) + '</span>' +
        '</a></li>';
    });

    container.innerHTML = html;
  }

  // ===================== OVERLAY OPEN / CLOSE =====================

  function openSearch() {
    var overlay = document.getElementById('search-overlay');
    if (overlay) {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
    var input = document.getElementById('search-input');
    if (input) {
      input.value = '';
      setTimeout(function () { input.focus(); }, 100);
    }
    renderSuggestions([], '');
  }

  function closeSearch() {
    var overlay = document.getElementById('search-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  // ===================== EVENT LISTENERS =====================

  document.addEventListener('DOMContentLoaded', function () {
    // Search icon opens overlay
    var searchIcon = document.getElementById('search-icon');
    if (searchIcon) searchIcon.addEventListener('click', openSearch);

    // Close button
    var searchClose = document.getElementById('search-close');
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    // Click outside inner area closes overlay
    var overlay = document.getElementById('search-overlay');
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeSearch();
      });
    }

    // Input: filter on keyup
    var input = document.getElementById('search-input');
    if (input) {
      input.addEventListener('input', function () {
        var results = searchProducts(input.value);
        renderSuggestions(results, input.value);
      });
    }

    // Suggestion click: close overlay and scroll to section
    var suggestions = document.getElementById('search-suggestions');
    if (suggestions) {
      suggestions.addEventListener('click', function (e) {
        var link = e.target.closest('[data-action="search-go"]');
        if (!link) return;
        e.preventDefault();
        closeSearch();
        var href = link.getAttribute('href');
        if (href) {
          var section = document.querySelector(href);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // ESC key closes overlay
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
    });
  });
})();
