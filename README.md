# Oud Brasil

E-commerce de alta perfumaria especializado em fragrâncias árabes, importadas e exclusivas brasileiras.

## Sobre o projeto

O Oud Brasil é um e-commerce construído em HTML5, CSS3 e JavaScript puro, com design system baseado na referência visual da Creed Fragrance. O projeto foi desenvolvido com foco em experiência de luxo, performance e clareza de código.

## Tecnologias

- HTML5 semântico
- CSS3 organizado por responsabilidade (tokens, base, componentes, seções)
- JavaScript puro ES6+ organizado por módulo (carrinho, favoritos, busca, UI, modal)
- Git e GitHub para versionamento
- Claude Code + Antigravity IDE para desenvolvimento assistido por IA

## Estrutura do projeto

```
oud-brasil/
├── index.html               ← Página inicial
├── sobre.html               ← Página institucional
├── css/
│   ├── tokens.css           ← Variáveis CSS (:root)
│   ├── base.css             ← Reset e estilos globais
│   ├── components.css       ← Navbar, cards, botões, drawers, modal
│   ├── sections.css         ← Estilos por seção
│   └── pages/
│       └── sobre.css        ← Estilos exclusivos da página Sobre
├── js/
│   ├── cart.js              ← Carrinho com localStorage
│   ├── favorites.js         ← Favoritos com localStorage
│   ├── search.js            ← Overlay de busca com filtro em tempo real
│   ├── product-modal.js     ← Modal de detalhes do produto
│   └── ui.js                ← Navbar, hamburger, carousel, tabs, filtros
├── img/                     ← Imagens e assets
└── docs/
    └── creed-design-system.md  ← Design system de referência
```

## Funcionalidades implementadas

- Mini-carrinho lateral com localStorage e badge dinâmico
- Drawer de favoritos com localStorage e integração com o carrinho
- Overlay de busca com filtro em tempo real por nome e categoria
- Modal de detalhes do produto com galeria, seletor de volume, pirâmide olfativa e accordion
- Seção Coleção Árabe com 8 produtos e tabs por subcategoria
- Seção Importados com 9 produtos e filtros por marca e faixa de preço
- Seção Gift Sets com 3 kits exclusivos
- Seção de depoimentos com carousel e autoplay
- Seção Editorial com 3 artigos
- Newsletter com validação de e-mail e localStorage
- Página Sobre Nós com missão, timeline e manifesto

## Catálogo atual

| Coleção | Produtos |
|---|---|
| Árabes | 8 produtos |
| Importados | 9 produtos |
| Gift Sets | 3 kits |
| **Total** | **20 itens** |

## Design system

Baseado na referência visual da Creed Fragrance. Documentação completa em `docs/creed-design-system.md`.

Principais diretrizes:
- Paleta restrita: `#0A0A0A`, `#F7F4EF`, `#FFFFFF`, `#C8A96E`, `#E8E4DF`, `#9B9690`
- Tipografia: Cormorant Garamond para editorial, DM Sans para interface
- Componentes sem border-radius e sem box-shadow
- Espaçamento baseado em múltiplos de 8px

## Roadmap

- [ ] Páginas de categoria: `arabes.html`, `importados.html`, `sonobrasil.html`
- [ ] Template de produto: `produto.html`
- [ ] Login e cadastro: `conta.html`
- [ ] Área do cliente: `minha-conta.html`
- [ ] Checkout completo: `checkout.html`
- [ ] Comparador de fragrâncias

## Desenvolvido por

Yan Guilherme Oliveira da Silva
Crescitech · Consultoria de IA Generativa
