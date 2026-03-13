// product-modal.js — modal de detalhes do produto

(function () {
  'use strict';

  // ===================== CATÁLOGO DE PRODUTOS =====================

  var produtos = [
    {
      id: 'royal-oud',
      name: 'Royal Oud',
      category: 'Coleção Árabe',
      origin: 'Emirados Árabes Unidos',
      price: 890,
      volumes: ['50ml', '100ml'],
      img: 'https://picsum.photos/seed/royaloud/600/800',
      thumbs: [
        'https://picsum.photos/seed/royaloud1/200/200',
        'https://picsum.photos/seed/royaloud2/200/200',
        'https://picsum.photos/seed/royaloud3/200/200'
      ],
      notes: { top: 'Bergamota, Limão', heart: 'Rosa, Oud', base: 'Sândalo, Almíscar' },
      description: 'Uma composição majestosa que celebra o oud em sua forma mais pura. Royal Oud transporta o usuário às antigas caravanas do Oriente Médio, onde o precioso ingrediente era reservado apenas para realeza.'
    },
    {
      id: 'attar-al-ward',
      name: 'Attar Al Ward',
      category: 'Coleção Árabe',
      origin: 'Arábia Saudita',
      price: 650,
      volumes: ['12ml', '25ml'],
      img: 'https://picsum.photos/seed/attar/600/800',
      thumbs: [
        'https://picsum.photos/seed/attar1/200/200',
        'https://picsum.photos/seed/attar2/200/200',
        'https://picsum.photos/seed/attar3/200/200'
      ],
      notes: { top: 'Rosa Taif, Açafrão', heart: 'Oud, Âmbar', base: 'Almíscar branco, Baunilha' },
      description: 'Attar Al Ward é uma homenagem à rosa de Taif, considerada a mais preciosa do mundo árabe. Extraída por destilação a vapor, a essência pura captura a delicadeza floral com profundidade amadeirada.'
    },
    {
      id: 'bakhoor-sultani',
      name: 'Bakhoor Sultani',
      category: 'Coleção Árabe',
      origin: 'Omã',
      price: 420,
      volumes: ['50g', '100g'],
      img: 'https://picsum.photos/seed/bakhoor/600/800',
      thumbs: [
        'https://picsum.photos/seed/bakhoor1/200/200',
        'https://picsum.photos/seed/bakhoor2/200/200',
        'https://picsum.photos/seed/bakhoor3/200/200'
      ],
      notes: { top: 'Incenso, Resina', heart: 'Oud, Sândalo', base: 'Âmbar, Terra' },
      description: 'Bakhoor Sultani é uma composição de madeiras raras e resinas orientais prensadas em pastilhas para queima. A fumaça perfumada impregna ambientes com uma atmosfera de luxo e espiritualidade.'
    },
    {
      id: 'black-oud',
      name: 'Black Oud',
      category: 'Coleção Árabe',
      origin: 'Emirados Árabes Unidos',
      price: 980,
      volumes: ['50ml', '100ml', '200ml'],
      img: 'https://picsum.photos/seed/blackoud/600/800',
      thumbs: [
        'https://picsum.photos/seed/blackoud1/200/200',
        'https://picsum.photos/seed/blackoud2/200/200',
        'https://picsum.photos/seed/blackoud3/200/200'
      ],
      notes: { top: 'Pimenta negra, Couro', heart: 'Oud defumado, Cedro', base: 'Âmbar negro, Vetiver' },
      description: 'Black Oud é a expressão mais intensa e masculina da coleção árabe. Uma composição ousada que combina o oud defumado com couro e especiarias, criando uma sillage envolvente e memorável.'
    },
    {
      id: 'oud-oleo-puro',
      name: 'Oud em Óleo Puro',
      category: 'Óleo Puro',
      origin: 'Camboja',
      price: 1200,
      volumes: ['3ml', '6ml', '12ml'],
      img: 'https://picsum.photos/seed/oudoleo/600/800',
      thumbs: ['https://picsum.photos/seed/oudoleo1/200/200','https://picsum.photos/seed/oudoleo2/200/200','https://picsum.photos/seed/oudoleo3/200/200'],
      notes: { top: 'Oud puro', heart: 'Madeira de Aquilaria', base: 'Resina, Terra úmida' },
      description: 'O óleo de oud cambojano é considerado o mais refinado do mundo. Extraído de árvores centenárias, cada gota carrega décadas de transformação natural. Aplicado diretamente na pele, desenvolve uma sillage única e intransferível.'
    },
    {
      id: 'attar-musk',
      name: 'Attar Musk Al Tahara',
      category: 'Attar',
      origin: 'Índia',
      price: 480,
      volumes: ['12ml', '25ml'],
      img: 'https://picsum.photos/seed/attarmusk/600/800',
      thumbs: ['https://picsum.photos/seed/attarmusk1/200/200','https://picsum.photos/seed/attarmusk2/200/200','https://picsum.photos/seed/attarmusk3/200/200'],
      notes: { top: 'Almíscar branco, Iris', heart: 'Rosa, Sândalo', base: 'Âmbar, Baunilha' },
      description: 'Attar Musk Al Tahara é uma composição pura e sem álcool, destilada na tradição centenária de Kannauj, na Índia. O almíscar branco envolve a pele com uma segunda natureza: limpo, sensual e duradouro.'
    },
    {
      id: 'oud-rose',
      name: 'Oud Rose',
      category: 'Oud',
      origin: 'Marrocos',
      price: 760,
      volumes: ['50ml', '100ml'],
      img: 'https://picsum.photos/seed/oudrose/600/800',
      thumbs: ['https://picsum.photos/seed/oudrose1/200/200','https://picsum.photos/seed/oudrose2/200/200','https://picsum.photos/seed/oudrose3/200/200'],
      notes: { top: 'Rosa marroquina, Framboesa', heart: 'Oud, Patchouli', base: 'Sândalo, Âmbar rosa' },
      description: 'Oud Rose é a síntese entre o Oriente e o Mediterrâneo. A rosa marroquina, colhida ao amanhecer nos jardins de Kelaat Mgouna, encontra o oud em uma dança íntima e sofisticada que dura horas na pele.'
    },
    {
      id: 'bakhoor-amber',
      name: 'Bakhoor Amber Nights',
      category: 'Bakhoor',
      origin: 'Arábia Saudita',
      price: 390,
      volumes: ['50g', '100g'],
      img: 'https://picsum.photos/seed/bakhooramber/600/800',
      thumbs: ['https://picsum.photos/seed/bakhooramber1/200/200','https://picsum.photos/seed/bakhooramber2/200/200','https://picsum.photos/seed/bakhooramber3/200/200'],
      notes: { top: 'Âmbar, Baunilha', heart: 'Oud, Resina benjoin', base: 'Sândalo, Almíscar' },
      description: 'Bakhoor Amber Nights traz o calor das noites do deserto para dentro de casa. Pastilhas artesanais compostas de âmbar, baunilha e oud criam uma atmosfera de aconchego e mistério quando queimadas lentamente.'
    }
  ];

  var produtoAtivo = null;
  var volumeSelecionado = null;

  // ===================== HELPERS =====================

  function formatPrice(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // ===================== MODAL OPEN / CLOSE =====================

  function openModal(produtoId) {
    var produto = produtos.find(function (p) { return p.id === produtoId; });
    if (!produto) return;
    produtoAtivo = produto;
    volumeSelecionado = produto.volumes[0];
    preencherModal(produto);
    var modal = document.getElementById('product-modal');
    if (modal) {
      modal.classList.add('open');
      modal.removeAttribute('aria-hidden');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var modal = document.getElementById('product-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
    produtoAtivo = null;
  }

  // ===================== PREENCHER MODAL =====================

  function preencherModal(produto) {
    document.getElementById('modal-name').textContent = produto.name;
    document.getElementById('modal-category').textContent = produto.category;
    document.getElementById('modal-origin').textContent = produto.origin;
    document.getElementById('modal-price').textContent = formatPrice(produto.price);
    document.getElementById('modal-notes-top').textContent = produto.notes.top;
    document.getElementById('modal-notes-heart').textContent = produto.notes.heart;
    document.getElementById('modal-notes-base').textContent = produto.notes.base;
    document.getElementById('modal-description').textContent = produto.description;
    document.getElementById('modal-img-main').src = produto.img;
    document.getElementById('modal-img-main').alt = produto.name;

    // Miniaturas
    var thumbsEl = document.getElementById('modal-thumbs');
    var thumbsHtml = '';
    produto.thumbs.forEach(function (src, i) {
      thumbsHtml += '<img class="gallery-thumb' + (i === 0 ? ' active' : '') + '" src="' + src + '" alt="' + produto.name + ' ' + (i + 1) + '" data-src="' + src + '" />';
    });
    thumbsEl.innerHTML = thumbsHtml;

    // Volumes
    var volsEl = document.getElementById('modal-volumes');
    var volsHtml = '';
    produto.volumes.forEach(function (v, i) {
      volsHtml += '<button class="vol-btn' + (i === 0 ? ' active' : '') + '" data-volume="' + v + '">' + v + '</button>';
    });
    volsEl.innerHTML = volsHtml;
  }

  // ===================== ACCORDION =====================

  function initAccordion() {
    document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = trigger.closest('.accordion-item');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.accordion-item').forEach(function (i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // ===================== EVENT LISTENERS =====================

  document.addEventListener('DOMContentLoaded', function () {
    // Abrir modal ao clicar em "Ver detalhes"
    document.querySelectorAll('[data-modal-id]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(btn.dataset.modalId);
      });
    });

    // Fechar modal
    var closeBtn = document.getElementById('product-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    var overlay = document.querySelector('.product-modal-overlay');
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    // Miniaturas — event delegation
    var thumbsContainer = document.getElementById('modal-thumbs');
    if (thumbsContainer) {
      thumbsContainer.addEventListener('click', function (e) {
        var thumb = e.target.closest('.gallery-thumb');
        if (!thumb) return;
        document.getElementById('modal-img-main').src = thumb.dataset.src;
        document.querySelectorAll('.gallery-thumb').forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
      });
    }

    // Volumes — event delegation
    var volsContainer = document.getElementById('modal-volumes');
    if (volsContainer) {
      volsContainer.addEventListener('click', function (e) {
        var btn = e.target.closest('.vol-btn');
        if (!btn) return;
        document.querySelectorAll('.vol-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        volumeSelecionado = btn.dataset.volume;
      });
    }

    // Adicionar ao carrinho
    var addCartBtn = document.getElementById('modal-add-cart');
    if (addCartBtn) {
      addCartBtn.addEventListener('click', function () {
        if (!produtoAtivo) return;
        if (window.OudBrasilCart) {
          window.OudBrasilCart.addToCart({
            id: produtoAtivo.id,
            name: produtoAtivo.name,
            price: produtoAtivo.price,
            img: produtoAtivo.img
          });
        }
        closeModal();
      });
    }

    // Adicionar aos favoritos
    var addFavBtn = document.getElementById('modal-add-favorite');
    if (addFavBtn) {
      addFavBtn.addEventListener('click', function () {
        if (!produtoAtivo) return;
        if (window.OudBrasilFavorites) {
          window.OudBrasilFavorites.toggleFavorite({
            id: produtoAtivo.id,
            name: produtoAtivo.name,
            price: produtoAtivo.price,
            img: produtoAtivo.img
          });
        }
      });
    }

    initAccordion();
  });

  // Expose for external usage
  window.OudBrasilModal = { openModal: openModal, closeModal: closeModal };
})();
