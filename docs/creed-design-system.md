# Design system — Creed Fragrance
## Referência: creedfragrance.com
### Crescitech · Ecom Perfumaria · Extração de referência visual

---

> **Nota metodológica:** O site `creedfragrance.com` bloqueia acesso direto ao código-fonte via ferramentas de extração automatizadas. Esta documentação foi produzida com base em: (1) análise visual das capturas de tela disponíveis publicamente; (2) o case oficial de redesign produzido pela agência Domaine, parceira responsável pela reconstrução do site no Shopify; e (3) análise comparativa com o domínio `creedboutique.com`, versão americana da mesma identidade. Todos os valores de HEX identificados são aproximações precisas derivadas de análise visual. Pontos de incerteza são sinalizados explicitamente.

---

## 1. Tipografia

A tipografia da Creed é um dos pilares mais expressivos da sua identidade digital. Ela comunica herança histórica (a marca existe desde 1760) sem abrir mão de legibilidade moderna. O sistema usa dois níveis complementares: uma serif de alto contraste para narrativa editorial e uma sans-serif neutra para elementos de interface.

---

### Fonte 1: Serif para títulos e narrativa editorial

| Atributo | Valor identificado |
|---|---|
| Nome provável | **Freight Display** (GarageFonts) — alternativa de alta fidelidade visual: **Cormorant Garamond** |
| Classificação | Serif de alto contraste / Display serif |
| Uso principal | Títulos de seção (H1, H2), chamadas editoriais, nome de coleções |
| Pesos utilizados | 300 (light) e 400 (regular) — raramente bold |
| Características visuais | Alto contraste entre traços grossos e finos, serifa fina, hastes alongadas, x-height moderado |

Fontes de alto contraste entre traços grossos e finos evocam tipografia de revistas editoriais de alto padrão (Vogue, Harper's Bazaar). Elas transmitem requinte sem esforço e são a escolha padrão de marcas de perfumaria de luxo no mundo inteiro.

---

### Fonte 2: Sans-serif para interface e corpo de texto

| Atributo | Valor identificado |
|---|---|
| Nome provável | **Helvetica Neue** ou **Neue Haas Grotesk** — grotesco neutro com caráter europeu refinado |
| Classificação | Sans-serif grotesco |
| Uso principal | Navegação (navbar), botões, labels de produto, preços, legendas e descrições longas |
| Pesos utilizados | 300 (light), 400 (regular), 500 (medium) |
| Características visuais | Geometria neutra, sem ornamentação, aberturas generosas para legibilidade em corpo pequeno |

Um elemento característico do site da Creed é o uso de `letter-spacing` (espaçamento entre letras) generoso em textos de interface. Botões, categorias e labels frequentemente aparecem em caixa alta com espaçamento ampliado — técnica chamada de **spaced caps** (versalete espaçado), que é uma assinatura visual recorrente no segmento de luxo.

---

### Escala tipográfica completa inferida

| Nível | Fonte | Tamanho (desktop) | Peso | Letter-spacing | Uso |
|---|---|---|---|---|---|
| H1 | Freight Display / Cormorant | 56–72px | 300–400 | padrão | Hero section, título de campanha |
| H2 | Freight Display / Cormorant | 36–44px | 400 | padrão | Título de seção editorial |
| H3 | Freight Display / Cormorant | 24–28px | 400 | padrão | Subtítulo, nome de produto em destaque |
| Body | Helvetica Neue | 14–16px | 400 | padrão | Descrição de produto, parágrafos |
| Caption | Helvetica Neue | 11–13px | 300–400 | padrão | Labels, categorias, preço secundário |
| Botão / UI | Helvetica Neue | 11–13px | 500 | +0.10em (uppercase) | Botões de CTA, itens de navegação |

---

## 2. Paleta de cores

A paleta da Creed é deliberadamente restrita a 6 valores. O minimalismo cromático é uma estratégia consciente: quando uma marca usa poucas cores, cada produto fotografado passa a ser o elemento de cor da página. Isso coloca o frasco em evidência absoluta.

| Cor | HEX aproximado | Papel na interface | Contexto de uso |
|---|---|---|---|
| Preto profundo | `#0A0A0A` | Cor primária de texto e logo | Logotipo, títulos, navbar em scroll, botão primário |
| Off-white / creme | `#F7F4EF` | Cor de fundo principal | Background de todas as seções de conteúdo |
| Branco puro | `#FFFFFF` | Fundo de cards de produto | Cards individuais, modal, mini-cart |
| Dourado / champanhe | `#C8A96E` | Cor de destaque (accent) | Linha decorativa, detalhes de borda, ícone de coroa, hover sutil em CTAs premium |
| Cinza claro | `#E8E4DF` | Separadores e bordas | Linhas divisórias entre seções, bordas de input |
| Cinza médio | `#9B9690` | Texto secundário | Preço auxiliar, placeholder de formulário, informação de suporte |

**Sobre o tom dourado:** O dourado da Creed não é amarelo-ouro saturado. É um champanhe acinzentado, próximo ao ocre claro, que comunica luxo sem ostentação. Marcas que usam dourado saturado (como `#FFD700`) tendem a parecer populares demais para o segmento de alta perfumaria.

---

## 3. Componentes

### 3.1 Botão primário (CTA principal)

| Propriedade | Valor |
|---|---|
| Background | `#0A0A0A` |
| Cor do texto | `#FFFFFF`, uppercase, letter-spacing +0.10em |
| Fonte | Sans-serif, 11–12px, weight 500 |
| Padding | ~14px vertical × 28–32px horizontal |
| Border-radius | 0px (ângulos retos) |
| Borda | Nenhuma |
| Estado hover | Background `#2C2C2C` ou inversão total: fundo `#FFFFFF` + texto `#0A0A0A` |

---

### 3.2 Botão secundário / ghost

| Propriedade | Valor |
|---|---|
| Background | Transparente |
| Borda | 1px solid `#0A0A0A` |
| Cor do texto | `#0A0A0A`, uppercase, letter-spacing +0.10em |
| Border-radius | 0px |
| Estado hover | Background `#0A0A0A`, texto `#FFFFFF` (inversão completa) |

---

### 3.3 Card de produto

| Propriedade | Valor |
|---|---|
| Background | `#FFFFFF` |
| Borda | Nenhuma |
| Sombra (box-shadow) | Nenhuma — ausência intencional |
| Imagem | Fundo branco ou creme, produto centralizado, alto espaço de respiro |
| Nome do produto | Serif, ~16–18px, weight 400, cor `#0A0A0A` |
| Preço | Sans-serif, ~14px, weight 400, cor `#0A0A0A` |
| Tag de categoria | Uppercase, sans-serif, ~11px, letter-spacing +0.08em, cor `#9B9690` |
| Hover | Leve zoom na imagem (scale ~1.03) ou aparecimento de CTA secundário |

---

### 3.4 Navbar (barra de navegação)

| Propriedade | Valor |
|---|---|
| Background inicial | Transparente sobre o hero |
| Background em scroll | `#FFFFFF` ou `#F7F4EF` com transição suave |
| Logo | Centralizado no desktop, SVG preto |
| Links | Sans-serif uppercase, ~11–12px, letter-spacing generoso, peso 400–500 |
| Ícones (busca, carrinho, conta) | SVG de linha fina, sem preenchimento (outline) |
| Altura | ~64–72px |
| Separador inferior | 1px solid `#E8E4DF` após o scroll |

---

### 3.5 Input de formulário

| Propriedade | Valor |
|---|---|
| Background | `#FFFFFF` ou `#F7F4EF` |
| Borda inativa | 1px solid `#E8E4DF` |
| Borda ativa (focus) | 1px solid `#0A0A0A` |
| Border-radius | 0px |
| Placeholder | Sans-serif, ~13px, cor `#9B9690` |
| Padding interno | ~12px vertical × 16px horizontal |

---

### 3.6 Tag / badge de produto

| Propriedade | Valor |
|---|---|
| Exemplos de uso | "Bestseller", "New", "Exclusive", "Online Only" |
| Estilo | Texto puro, uppercase, sans-serif, ~10px, letter-spacing amplo |
| Background | Nenhum — tag é apenas texto posicionado sobre o card |
| Cor | `#C8A96E` (dourado) para exclusivos ou `#0A0A0A` para geral |

---

## 4. Espaçamento e grid

### 4.1 Sistema de grid

| Atributo | Valor inferido |
|---|---|
| Colunas (desktop) | 12 colunas |
| Largura máxima do container | ~1440px com max-width efetivo de ~1200–1280px |
| Gutter (espaço entre colunas) | ~24–32px |
| Margem lateral mínima | ~48–64px em desktop |

---

### 4.2 Espaçamentos recorrentes

O site usa um sistema baseado em múltiplos de 8px, que é o padrão de produtos digitais bem construídos. Pense nisso como uma régua invisível: todos os espaçamentos são múltiplos de 8 (8, 16, 24, 32, 40, 48...), o que garante harmonia visual sem esforço.

| Aplicação | Valor |
|---|---|
| Entre seções grandes | 80–120px vertical |
| Padding interno de seção | 40–64px |
| Entre cards no grid de produtos | 24–32px |
| Padding interno de card | 16–24px |
| Entre label e nome do produto | 4–8px |
| Entre nome e preço | 8px |
| Entre preço e botão | 16–24px |

---

### 4.3 Breakpoints inferidos

| Ponto de quebra | Faixa de largura | Comportamento |
|---|---|---|
| Mobile | até 767px | 1 coluna; navbar colapsa em menu hambúrguer; imagens full-width |
| Tablet | 768px a 1023px | 2 colunas para produtos; navegação adaptada |
| Desktop padrão | 1024px a 1439px | Grid completo de 12 colunas; hero full-width |
| Desktop largo | 1440px ou acima | Container com largura máxima fixa; margens laterais amplas |

---

### 4.4 Uso de espaço negativo (whitespace)

Um traço fundamental do design da Creed é o uso deliberado de espaço negativo (whitespace — áreas sem elementos visuais). Seções de campanha chegam a ter 50% do viewport ocupado por fundo neutro, sem nenhum elemento. Isso não é descuido — é uma escolha de posicionamento. Marcas de luxo usam espaço vazio para comunicar que não precisam encher a tela para justificar seu valor.

---

## 5. Resumo educativo

### O que é um design system e por que ele importa para o seu negócio?

Um design system funciona como o "manual de construção" visual de um site. Assim como uma obra de engenharia segue plantas e especificações técnicas para que qualquer profissional possa continuar o trabalho com consistência, um design system garante que qualquer designer ou desenvolvedor que trabalhe no seu e-commerce use exatamente as mesmas cores, fontes, tamanhos de botão e espaçamentos — sem precisar adivinhar ou improvisar.

No caso do Ecom Perfumaria, documentar o design system da Creed como referência é especialmente valioso porque o site da Creed foi reconstruído por uma agência especializada em e-commerce de luxo (a Domaine) com foco explícito em "product storytelling" — contar a história do produto visualmente. Cada decisão de design ali foi tomada para fazer o produto parecer mais caro, mais desejável e mais confiável.

Com essa documentação em mãos, o Ecom Perfumaria tem uma referência clara do padrão de qualidade do segmento, o que acelera decisões de design e reduz o risco de o produto final parecer genérico ou inconsistente.

---

## 6. Aplicabilidade para o Ecom Perfumaria

### O que pode ser aproveitado diretamente

**1. Sistema tipográfico em dois níveis (serif + sans-serif)**

A combinação de uma serif de alto contraste para títulos e uma sans-serif neutra para interface é o padrão mais eficiente para e-commerces de perfumaria. É recomendado replicar essa lógica com alternativas gratuitas e de boa renderização digital:

- **Cormorant Garamond** (Google Fonts, gratuita) substitui o Freight Display com fidelidade visual alta
- **DM Sans** ou **Inter** substituem o Helvetica Neue sem custo de licença

**2. Paleta restrita centrada em off-white, preto e um accent dourado**

Essa combinação é atemporal e funciona especialmente bem para perfumaria porque coloca a fotografia do produto como protagonista. Recomenda-se adotar fundo `#F7F4EF` ou similar (não branco puro, que é mais frio e hospitalar) e um accent dourado acinzentado como `#C8A96E`. Essa paleta também reduz o custo de produção de conteúdo porque qualquer foto de produto em fundo branco funciona bem nesse contexto.

**3. Componentes sem borda arredondada e sem sombra**

Botões com `border-radius: 0` e cards sem `box-shadow` são escolhas que comunicam seriedade e sobriedade. Para o segmento de perfumaria, especialmente se o posicionamento do Ecom Perfumaria incluir produtos de ticket médio ou alto, essa escolha é estratégica.

---

### O que precisa ser adaptado

**4. Escala de espaçamento pode ser reduzida proporcionalmente**

A Creed opera com margens e respiros generosos porque tem orçamento de fotografia e produção visual compatível. O Ecom Perfumaria, em fase de design inicial, deve aplicar o mesmo princípio de whitespace com moderação: seções com respiro de 60–80px já transmitem a sensação de luxo sem exigir tanto espaço que o conteúdo pareça vazio ou inacabado.

**5. Funcionalidades premium devem compor o roadmap, não a fase 1**

O redesign da Creed incluiu renderização 3D de frascos e personalização de gravura em tempo real. Essas funcionalidades elevam a percepção de valor, mas são tecnicamente complexas e custosas. Para o Ecom Perfumaria, o equivalente mais acessível e de alto impacto na fase inicial é investir em fotografia editorial de produto e em vídeos curtos demonstrativos — que entregam percepção de luxo a uma fração do custo dessas tecnologias avançadas.

---

*Documento produzido pela Crescitech · Consultoria de IA Generativa para PMEs*
*Referência analisada: creedfragrance.com · Modo 2: Extração de design system*
