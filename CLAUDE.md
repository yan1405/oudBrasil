# Contexto do Projeto — Oud Brasil

## Sobre o projeto
E-commerce de perfumaria brasileiro chamado Oud Brasil, construído em HTML + CSS + JS puro.
Público-alvo: desde consumidores iniciantes até entusiastas e colecionadores de fragrâncias.

## Design system de referência
Antes de implementar qualquer componente visual, leia o arquivo `docs/creed-design-system.md`.

Regras obrigatórias:
- Paleta restrita: #0A0A0A, #F7F4EF, #FFFFFF, #C8A96E, #E8E4DF, #9B9690
- Tipografia: Cormorant Garamond para títulos e editorial, DM Sans para interface
- Botões: border-radius 0px, sem sombra
- Cards: sem box-shadow, sem border-radius
- Inputs: border-radius 0px, borda 1px solid #E8E4DF, foco em #0A0A0A
- Espaçamento: múltiplos de 8px
- Whitespace generoso entre seções (80px a 120px)
- Dourado: sempre #C8A96E, nunca dourado saturado
- Textos de interface em uppercase com letter-spacing mínimo de 0.08em

## Estrutura de arquivos
- `css/tokens.css` — variáveis CSS (:root)
- `css/base.css` — reset e estilos globais
- `css/components.css` — navbar, cards, botões, drawers, modais, inputs
- `css/sections.css` — estilos específicos por seção
- `js/cart.js` — lógica de carrinho com localStorage
- `js/favorites.js` — lógica de favoritos com localStorage
- `js/search.js` — overlay de busca
- `js/ui.js` — navbar scroll, hamburger, animações de reveal

## Padrão de commits
- feat: nova funcionalidade
- fix: correção de bug
- refactor: reorganização sem mudança de comportamento
- style: ajuste visual sem lógica
- docs: documentação

## Regras de desenvolvimento
- Nunca usar localStorage sem tratar erros com try/catch
- Nunca quebrar o layout existente ao adicionar novas seções
- Sempre testar responsividade em mobile (375px) e desktop (1440px)
- Commits após cada entrega concluída e validada
