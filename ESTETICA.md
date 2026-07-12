# Estética VibeSurfDev

Documentação completa da linguagem visual do site **vibesurfdev.com** — tokens, tipografia, ritmo, componentes, movimento e princípios. Pensado como referência para recriar o "vibe" em outras superfícies (decks, redes, sub-sites) sem improvisar.

> **Resumo em uma frase:** **navy oceânico profundo + amarelo VSD elétrico, tipografia tripla (grotesk + serif itálico + mono técnico), camadas de ondas SVG paralaxe, microinterações com `cubic-bezier(0.16, 1, 0.3, 1)` e cantos arredondados generosos.**

---

## 1. Identidade & princípios

| Eixo | Postura |
|---|---|
| **Vibe** | Estúdio sênior. Editorial italiano misturado com terminal técnico e mar dos anos 90. |
| **Tom** | Confiante, calmo, raramente enfático. Texto em PT-BR, marca em inglês ("Build · Surf · Ship"). |
| **Densidade** | Espaçamento alto. Cada seção respira. Nada está "cheio". |
| **Movimento** | Discreto e contínuo. Ondas e cards flutuam o tempo todo; entrada de elementos com `IntersectionObserver`. |
| **Decoração** | Funcional. Tudo decorativo (waves, grids, glow) tem `pointer-events:none` e `aria-hidden`. |
| **Anti-padrões** | Sem gradientes saturados, sem glassmorphism agressivo, sem stock photography, sem emojis na UI, sem ícones genéricos de biblioteca — todos os ícones são SVG inline desenhados sob medida. |

A escolha por **vanilla HTML/CSS/JS** (sem framework, sem bundler) é deliberada e parte da estética: o site se sente *artesanal*.

---

## 2. Paleta de cores

Todas as cores ficam em `:root` no topo de `styles.css` — mudar uma propaga pelo site inteiro.

```css
:root{
  --navy:        #0D1B2A;   /* fundo base — azul-marinho profundo  */
  --navy-2:      #0a1421;   /* card escuro — gradiente bottom       */
  --navy-3:      #14273d;   /* card escuro — gradiente top          */
  --yellow:      #F5C518;   /* acento principal — amarelo VSD       */
  --yellow-soft: #ffd84a;   /* hover/glow do amarelo                */
  --white:       #f4f6fa;   /* texto principal — off-white frio     */
  --muted:       #8a99b3;   /* texto secundário — azul acinzentado  */
  --line:        rgba(245, 197, 24, 0.14);  /* divisórias amareladas */
}
```

### Hierarquia de uso

| Token | Onde aparece | Regra |
|---|---|---|
| `--navy` | Background do `body` (em gradiente) | Nunca puro como CTA. |
| `--navy-2 → --navy-3` | Cards (`service-card`, `pain-card`, `market-card`, `browser-frame`) | Sempre como gradiente vertical `180deg, navy-3 → navy-2`. |
| `--yellow` | Acento, CTAs, ícones, eyebrows, números, sublinhados, dots | **Cor sagrada.** Não use para texto longo nem fundo de blocos grandes. |
| `--yellow-soft` | Glow/shadow no hover do `btn-primary` | Apenas em estados ativos. |
| `--white` | Headlines, parágrafos importantes | Nunca `#fff` puro — sempre `#f4f6fa`. |
| `--muted` | Subtítulos, eyebrows não acentuados, metas, hints | ~60–70% de luminância do `--white`. |
| `--line` | Bordas de cards, divisores, separadores de seção | Amarelo translúcido — toda divisória "lembra" o acento. |

### Background do body

```css
body{
  background: linear-gradient(180deg,
    #0d1b2a 0%, #0c1826 18%, #0b1522 38%,
    #0a1320 58%, #091220 78%, #08111e 100%);
  background-attachment: fixed;
}
```

Gradiente vertical sutil **escurecendo do topo para o rodapé** — simula a profundidade do oceano. `fixed` no desktop, `scroll` no mobile (perf).

### Verde ativo (único uso)

```css
.live::before { background:#4ade80; box-shadow:0 0 12px #4ade80; }
```

Ponto verde pulsante no rodapé indicando "live". Único momento em que aparece outra cor além de navy/yellow/white.

---

## 3. Tipografia

Trio carregado via Google Fonts com `preconnect` + `display=swap`.

```html
<link href="https://fonts.googleapis.com/css2?
  family=Space+Grotesk:wght@300;400;500;600;700
  &family=JetBrains+Mono:wght@400;500
  &family=Fraunces:ital,wght@0,400;1,400;1,500
  &display=swap" rel="stylesheet" />
```

| Família | Papel | Onde |
|---|---|---|
| **Space Grotesk** | Voz principal — sans grotesco contemporâneo, leve toque humano | Body, headlines, parágrafos, navegação |
| **Fraunces** *italic* | Voz emocional — serif moderno italiano com itálicos teatrais | Apenas nas palavras `.accent` (ex: *surfamos*, *Dev*, *qualquer*) |
| **JetBrains Mono** | Voz técnica — monospaced de IDE | Eyebrows, metas, números, tags, URL fake do browser-frame, footer-meta |

### `font-feature-settings`

```css
body { font-feature-settings: "ss01", "ss02"; }
```

Ativa stylistic sets do Space Grotesk — variações sutis de `a`, `g`, `l` que dão ar editorial.

### Escala fluida

Toda headline usa `clamp()`:

```css
.hero h1          { font-size: clamp(28px, 3.6vw, 54px); line-height:1.12; letter-spacing:-.03em; }
.section-head h2  { font-size: clamp(32px, 4vw, 56px);   letter-spacing:-.025em; }
.chapter h3       { font-size: clamp(40px, 5vw, 64px);   line-height:1; letter-spacing:-.03em; }
.reality h2       { font-size: clamp(40px, 5vw, 72px);   letter-spacing:-.03em; }
.stat-value       { font-size: clamp(48px, 6vw, 88px);   letter-spacing:-.04em; line-height:1; }
.work-title       { font-size: clamp(28px, 3vw, 40px);   letter-spacing:-.025em; }
.footer-cta h2    { font-size: clamp(36px, 4.5vw, 64px); letter-spacing:-.03em; }
.niche-hero h1    { font-size: clamp(36px, 5.5vw, 72px); letter-spacing:-.03em; }
```

### Regras tipográficas

- **Headlines**: `font-weight: 600`, `letter-spacing: -0.02em a -0.04em` (tighter quanto maior).
- **Body**: `line-height: 1.6` para `.muted`, `1.65` para chapter `p`.
- **Eyebrow** (label técnico):
  ```css
  font-family:"JetBrains Mono"; font-size:12px; font-weight:500;
  letter-spacing:.18em; text-transform:uppercase; color:var(--yellow);
  display:inline-flex; align-items:center; gap:10px;
  /* ::before { width:24px; height:1px; background:var(--yellow); } */
  ```
  → traço amarelo + texto técnico, sempre.

### A regra do `.accent`

Toda palavra de destaque vira **Fraunces itálico amarelo**:

```css
.accent{
  color: var(--yellow);
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 400;
}
```

> Aplicado em: `surfamos`, `Dev`, `qualquer nicho`, "*queremos surfar*", etc.
> A palavra muda de família, peso, postura e cor — é o "momento poético" no meio do grotesque.

---

## 4. Espaçamento, grid & ritmo

### Padding de seção

| Breakpoint | Section padding | Container max |
|---|---|---|
| Desktop | `96px 48px` | `1280px` |
| ≤ 700px | `64px 20px` | — |
| ≤ 480px | `48px 16px` | — |

### Espaçamentos verticais comuns

- Section-head → primeiro bloco: **56px** (desktop), **36px** (mobile).
- Story chapter → chapter: **120px** (desktop), **60px** (tablet), **48px** (mobile).
- Hero → top: **120px**, hero → bottom: **80px**.
- Footer top: **80px**, bottom: **32px**.

### Grids

```css
.hero-content     { grid-template-columns: 1.4fr 1fr; gap: 64px; }
.story-grid       { grid-template-columns: 1fr 1fr;   gap: 80px; }
.services-grid    { grid-template-columns: repeat(4,1fr); gap: 24px; }
.stats-grid       { grid-template-columns: repeat(4,1fr); gap: 24px; }
.reality-grid     { grid-template-columns: 1fr 1.2fr; gap: 80px; }
.markets-grid     { grid-template-columns: repeat(2,1fr); gap: 24px; }
.footer-cols      { grid-template-columns: repeat(3,1fr); gap: 32px; }
```

Dois ritmos coexistem: **2-col editoriais** (story, reality, markets) com gap **80px** e **4-col modulares** (services, stats) com gap **24px**.

### Border-radius

| Tamanho | Uso |
|---|---|
| `4px` | Tags `.service-tags`, `.work-tags` (chip de canto duro) |
| `8px–10px` | Inputs, screenshots, browser-url pill |
| `14px–16px` | Cards de pain, market, cross-link |
| `20px` | `service-card`, `markets-anyniche`, `qualify-shell` |
| `999px` | Pills (CTAs, lang-toggle, radios, work-controls, back-to-site, scroll-progress fallback) |
| `50%` | Logo footer, dots, browser-traffic-lights, work-prev/next, scroll-arrow circle |

> **Regra:** quanto mais "interativo" for o elemento, mais arredondado. Cards são `20px`, botões são `999px`.

---

## 5. Componentes

### 5.1 Nav (top bar)

- `position: fixed; padding: 22px 48px;`
- **Estado scrolled** (≥ 50px de scroll): `background: rgba(13,27,42,.78); backdrop-filter: blur(18px); padding: 14px 48px; border-bottom: 1px solid var(--line);`
- Logo: SVG inline de duas ondas amarelas + 1 ponto (sol/orbe) com `filter: drop-shadow(0 0 8px rgba(245,197,24,.45))`.
- Brand text: `VibeSurf` (white) + `Dev` (Fraunces itálico amarelo).
- Links: underline animado com `transform: scaleX(0) → scaleX(1)` em `transform-origin: left; transition: 0.45s var(--ease-out)`.
- CTA: pill amarelo `JetBrains Mono uppercase` com hover `translateY(-2px) + shadow amarelo`.
- Lang toggle: pill segmentado `PT/EN`, selecionado em amarelo sólido.
- Mobile menu: full-screen com `backdrop-filter: blur(28px)`, links em `Space Grotesk 32px`, animação cascata `transform: translateX(20px) → 0` com delays de `60ms, 120ms, 180ms, 240ms`.

### 5.2 Hero

Estrutura: **2 colunas** (texto à esquerda, logo animado à direita).

- Background: 4 camadas de wave SVG paralaxe (`data-speed: 0.05, 0.10, 0.18, 0.25`), grid amarelo 64×64 com mask radial e dois glows radiais amarelos.
- Logo: WebP animado 600×600 dentro de `.hero-logo-frame` que tem `::before` glow amarelo 40px de blur, animação `logoFloat 6s ease-in-out infinite` (`translateY(-12px) + rotate(2deg)` no meio).
- H1: 3 linhas, palavras em spans `.word` que entram com `slideUp` em delays escalonados (animation timing controlled via JS adding `.animate` class).
- Sub: `clamp(15px, 1.3vw, 18px)`, `--muted`, max-width 480px.
- CTA primário: pill amarelo grande (16px 28px) + chevron SVG que move 4px no hover.
- CTA secundário (`btn-ghost`): mono uppercase com underline aparecendo no hover.
- Scroll hint: linha vertical amarela 1×36px com animação `scaleY(1) → scaleY(.4)` 2s.

### 5.3 Cards (services, pain, markets)

Anatomia comum:
```css
background: linear-gradient(180deg, var(--navy-3) 0%, var(--navy-2) 100%);
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 16–20px;
transition: border-color .4s, transform .4s var(--ease-out), box-shadow .5s;
```

**Hover universal:**
- `border-color: rgba(245,197,24, .28 → .5)` (mais forte em service-card)
- `transform: translateY(-4px)` (até `-12px` em service-card)
- `box-shadow: 0 24-30px 60-80px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(245,197,24,.18)`

**Service cards** (4 colunas) ainda têm:
- Animação `floatCard 6s` infinita com `animation-delay: 0, -1.5s, -3s, -4.5s` (ondulação stagger).
- `::before` mask gradient amarelo no canto inferior-direito que aparece no hover (efeito "borda iluminada").
- Ícone SVG 88×88 com `transform-style: preserve-3d` que faz `rotateY(360deg)` no hover do card (0.8s ease-out).
- Número `01/02/03/04` em mono, top-right.
- Setinha circular `36×36` com border amarelo, aparece (`opacity 0 → 1 + translate`) no hover.

**Market cards** (2 colunas) usam grid `220px 1fr` com thumbnail à esquerda e meta à direita, gradient mask no canto direito da thumbnail.

### 5.4 Botões

```css
/* Primário */
.btn-primary{
  background: var(--yellow); color: var(--navy);
  font-family:"Space Grotesk"; font-weight: 600; font-size: 15px;
  padding: 16px 28px; border-radius: 999px;
  transition: transform .3s var(--ease-out), box-shadow .3s var(--ease-out);
}
.btn-primary:hover{
  transform: scale(1.05);
  box-shadow:
    0 0 0 2px rgba(245,197,24,.3),
    0 12px 40px rgba(245,197,24,.45),
    0 0 60px rgba(245,197,24,.3);
}
.btn-primary::before{ /* glow radial seguindo o cursor (--mx, --my via JS) */ }
```

```css
/* Ghost */
.btn-ghost{
  font-family:"JetBrains Mono"; font-size: 13px; letter-spacing: .06em;
  color: var(--white); padding: 10px 0;
  border-bottom: 1px solid transparent;
  transition: border-color .3s, color .3s;
}
.btn-ghost:hover{ border-bottom-color: var(--yellow); color: var(--yellow); }
```

### 5.5 Browser frame (cases)

Pseudo-mockup de janela de browser usado nos cases (`.work-slide`).

- Chrome com 3 dots de tráfico (`#ff5f57`, `#febc2e`, `#28c840`).
- URL: pill com `JetBrains Mono`, `https://` em amarelo translúcido + host com `width: 0 → var(--url-width, 16ch)` animado em `transition: width 1.1s steps(28, end)` (efeito **typewriter**).
- Caret amarelo piscando: `animation: urlCaret .85s steps(2) infinite`.
- Viewport com `aspect-ratio: 16/10`, `object-fit: cover; object-position: top center`.
- Frame: `border-radius: 14px`, `box-shadow: 0 30px 80px -20px rgba(0,0,0,.6)`, escala de `0.985` para `1` quando entra na viewport.

### 5.6 Stats / contadores

```css
.stat              { border-left: 1px solid var(--line); padding-left: 24px; }
.stat:first-child  { border-left-color: var(--yellow); }   /* primeiro destacado */
.stat-value        { clamp(48px, 6vw, 88px); letter-spacing: -.04em; }
.stat-value .num   { color: var(--white); }
.stat-value .suffix{ color: var(--yellow); margin-left: 2px; }   /* "+", "%", "x" em amarelo */
.stat-label        { JetBrains Mono 12px; letter-spacing: .18em; uppercase; muted; }
```

### 5.7 Forms (página /nichos)

- Shell: `border: 1px solid var(--line); border-radius: 20px; backdrop-filter: blur(8px); background: 2 gradientes navy translúcidos.`
- Labels: mono 11px uppercase amarelo (`letter-spacing: .18em`).
- Inputs/selects/textareas: `font-family: Space Grotesk; background: rgba(0,0,0,.28); border: 1px solid var(--line); border-radius: 10px; padding: 14px 16px;`
- Focus: `border-color: var(--yellow); background: rgba(0,0,0,.38);` (sem outline padrão).
- Select chevron: SVG inline amarelo via `background-image` data-uri.
- Radios estilo pill: ocultos com `opacity: 0`, span renderiza pill mono. `:checked + span` vira amarelo sólido com `font-weight: 600`.

### 5.8 Footer

- Padding `80px 48px 32px`, ondas decorativas no fundo (`opacity: .5`).
- 3 zonas: **CTA gigante** (h2 com `clamp(36px, 4.5vw, 64px)`) → **bottom 3-col** (brand + cols + meta) → **legal**.
- `.live` em footer-meta: dot verde (`#4ade80`) pulsante 1.6s, único elemento não-amarelo.
- Footer cols com h4 mono amarelo uppercase + ul de links que viram amarelos no hover.
- Variante `.niche-footer` (em `_shared.css`): muito mais compacta — 2 colunas, sem CTA gigante, padding `64px 48px 32px`.

---

## 6. Movimento

### 6.1 Easings (canônicos)

```css
:root{
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);   /* "expo out" — entrada/hover */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* clip-reveal e wipes        */
}
```

> **Regra:** 90% das transições usam `--ease-out`. `--ease-in-out` é reservado a transições mais teatrais (`clip-reveal`).

### 6.2 Durações típicas

| Caso | Duração |
|---|---|
| Hover em link/border | **0.3s** |
| Hover em card (transform + shadow) | **0.4–0.5s** |
| Entrada de elemento (`.reveal.in`) | **0.8s** |
| Wipe (`.clip-reveal.in`) | **1.2s** |
| Logo float | **6s** infinite |
| Service card float | **6s** infinite com staggered `-1.5s` delays |
| Wave drift ambiente | **24s** e **32s** infinite |
| Pulse `.live` | **1.6s** infinite |
| Scroll hint | **2s** infinite |

### 6.3 Keyframes principais

```css
@keyframes logoFloat   { 0%,100%{ transform:translateY(0) rotate(0); }
                          50%   { transform:translateY(-12px) rotate(2deg); } }

@keyframes floatCard   { 0%,100%{ transform:translateY(0); }
                          50%   { transform:translateY(-8px); } }

@keyframes slideUp     { to    { opacity:1; transform:translateY(0); } }

@keyframes fadeIn      { to    { opacity:1; } }

@keyframes scrollHint  { 0%,100%{ transform:scaleY(1); transform-origin:top; }
                          50%   { transform:scaleY(.4); transform-origin:top; } }

@keyframes pulse       { 0%,100%{ opacity:1; } 50%{ opacity:.4; } }

@keyframes urlCaret    { 0%,50%{ opacity:1; } 51%,100%{ opacity:0; } }

@keyframes ambientDriftA { 0%,100%{ transform:translate3d(0,0,0); }
                            50%   { transform:translate3d(-3%, 8px, 0); } }

@keyframes ambientDriftB { 0%,100%{ transform:translate3d(0,0,0); }
                            50%   { transform:translate3d(2.5%, -10px, 0); } }
```

### 6.4 Reveal patterns

```css
.reveal       { opacity:0; transform:translateY(30px); transition: .8s var(--ease-out); }
.reveal.in    { opacity:1; transform:translateY(0); }

.clip-reveal  { clip-path: inset(0 100% 0 0); transition: clip-path 1.2s var(--ease-in-out); }
.clip-reveal.in{ clip-path: inset(0 0 0 0); }
```

`.in` é toggleado por `IntersectionObserver` no `script.js`.

### 6.5 Scroll progress

Barra fina (`height: 2px`) fixa no topo, gradiente amarelo + glow:
```css
.scroll-progress{
  position:fixed; top:0; height:2px; width:100%;
  transform: scaleX(0); transform-origin: left;
  background: linear-gradient(90deg, var(--yellow) 0, var(--yellow-soft) 100%);
  box-shadow: 0 0 12px var(--yellow);
  transition: transform 50ms linear;
}
```

### 6.6 Acessibilidade do movimento

```css
@media (prefers-reduced-motion: reduce) {
  .ambient-wave { animation: none; }
}
@media (hover: none) and (pointer: coarse) {
  body { background-attachment: scroll; }   /* perf em mobile */
}
```

---

## 7. Iconografia & decoração

Tudo desenhado **inline em SVG** dentro do HTML — zero biblioteca, zero `<i class="fa-...">`.

### Ondas (4 camadas)

Cada wave é um path bézier suave repetindo num movimento sin-like:

```svg
<path d="M0,100 C240,60 480,140 720,100 C960,60 1200,140 1440,100 L1440,200 L0,200 Z"/>
```

Ordem de profundidade (de fundo → frente):
| Camada | `data-speed` | `opacity` | `fill` |
|---|---|---|---|
| `w4` | 0.05 | .18 | `#14273d` |
| `w3` | 0.10 | .30 | `#1a3050` |
| `w2` | 0.18 | .45 | `#21406c` |
| `w1` | 0.25 | .60 | `none + stroke #F5C518 1.5px @ .5 opacity` |

A última camada **não preenche** — é um traço amarelo, "espuma".

### Grid de hero

```css
background-image:
  linear-gradient(rgba(245,197,24,.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(245,197,24,.04) 1px, transparent 1px);
background-size: 64px 64px;
mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%);
```

→ malha amarela **invisível nas bordas**, só aparece no centro. Reforça profundidade.

### Glow radial (hero-logo + hero-bg)

```css
background: radial-gradient(circle at 50% 50%,
  rgba(245,197,24,.42) 0,
  rgba(245,197,24,.24) 28%,
  rgba(245,197,24,.10) 52%,
  rgba(245,197,24,.04) 70%,
  transparent 85%);
filter: blur(40px);
```

Sempre **amarelo translúcido + blur grande** — nunca soft-light, nunca color-dodge.

### Logo SVG da nav

```svg
<path d="M2 20 C 8 12, 12 28, 16 20 S 24 12, 30 20" stroke="#F5C518" stroke-width="2"/>
<path d="M4 24 C 9 18, 13 30, 17 24 S 24 18, 28 24" stroke="#F5C518" stroke-opacity="0.4"/>
<circle cx="22" cy="10" r="1.8" fill="#F5C518"/>
```

Duas ondas sobrepostas + 1 sol/orbe. `drop-shadow` amarelo no hover.

---

## 8. Camadas atmosféricas (z-index & profundidade)

Ordem de empilhamento conceitual:

```
0     body background gradient
0     ambient-waves (z-index:0, fixed, sob tudo)
1     section content (z-index:1)
2     stats-grid / footer .container (z-index:2)
5     work-controls (sticky bottom)
99    nav-links overlay (mobile open)
100   .nav, .nav-right
101   .nav-toggle
1000  .scroll-progress
```

`ambient-waves` usa duas curvas SVG idênticas em alturas diferentes, drift-animadas (24s/32s), opacity 0.04–0.06 — **só perceptíveis subliminalmente**.

---

## 9. Variante /nichos (sub-páginas verticais)

`nichos/_shared.css` é carregado **depois** de `styles.css` e só adiciona o que muda — herda 100% dos tokens.

Mudanças:
- Hero **sem** logo animado: `.niche-hero` é 1 coluna, padding `140px 48px 80px`, max 920px, foco em mensagem + CTA.
- **Pain grid**: 3 cards verticais (similares a service-cards mas mais simples).
- **Case spotlight**: reutiliza `.work-slide` mas sem carrossel. Cases empilhados, separados por `border-top: 1px solid var(--line)` com `padding-top: 96px`.
- **Process mini**: 3 colunas de steps com `border-left: 1px solid var(--line)` (primeira amarela).
- **Qualify form**: ver §5.7.
- **Niche footer**: versão enxuta — 2 colunas, sem CTA gigante.
- `.back-to-site`: pill mono mini para voltar à raiz.

---

## 10. Responsivo

Breakpoints canônicos:

| Largura | Trigger | O que muda |
|---|---|---|
| `≤ 1100px` | `.services-grid` → 2 col |
| `≤ 1080px` | `.work-slide` → 1 col, `.markets-grid` → 1 col, `.market-card` → 200px+1fr |
| `≤ 900px` | `.story-grid`, `.reality-grid`, `.footer-bottom` → 1 col, `.footer-cols` → 2 col, `.process-grid` → 1 col |
| `≤ 800px` | `.nav` mobile menu ativa, `.stats-grid` → 2 col |
| `≤ 700px` | section padding → `64px 20px`, `.market-card` → 1 col, `.cross-links` → 1 col |
| `≤ 600px` | `.services-grid`, `.work-slide` (peek 86%), tipografia hero/section ainda menor |
| `≤ 480px` | section padding → `48px 16px`, `.stats-grid` → 1 col, `.footer-cols` → 1 col |

Fluido por padrão (`clamp`, `repeat(n, 1fr)`); breakpoints existem só onde o grid quebra de fato.

---

## 11. Acessibilidade

- **Contraste**: `--white #f4f6fa` sobre `--navy #0d1b2a` = ~14:1 (AAA). `--muted #8a99b3` sobre navy = ~6.5:1 (AA).
- **Foco visível**: `outline: 2px solid var(--yellow-soft); outline-offset: 2px;` em radios. Nav e botões usam estados `:focus-visible` herdando border amarela.
- **Movimento**: `prefers-reduced-motion: reduce` desliga waves ambiente.
- **Mobile menu**: `aria-expanded`, `aria-controls`, `aria-label` e `body.menu-open { overflow: hidden }` para travar scroll.
- **Decoração**: todos `<svg>` ornamentais têm `aria-hidden="true"`.
- **Landmarks**: `<nav>`, `<section>` por bloco, `<footer>`. Cada section tem `id` e `data-screen-label` para devtools/i18n.

---

## 12. Como recriar o vibe (cheat-sheet)

Se você for portar a estética para outra superfície (deck, rede social, e-mail, sub-domínio), cheque na ordem:

1. **Cor** — fundo `#0D1B2A` ou gradiente para `#08111e`. Acento exclusivo `#F5C518`. Off-white `#f4f6fa`. Nada saturado fora disso.
2. **Tipografia** — Space Grotesk para tudo, JetBrains Mono para etiquetas técnicas/números, Fraunces *italic* só na palavra-chave do título.
3. **Headline** — sempre tight (`-0.02 a -0.04em`), peso 600, com 1 palavra acentuada virando Fraunces amarelo italic.
4. **Eyebrow** — sempre traço amarelo de 24×1px + texto mono uppercase amarelo `letter-spacing: .18em`.
5. **Cards** — gradient `navy-3 → navy-2`, border `rgba(255,255,255,.06)`, radius 16–20px, hover `translateY(-4 a -12px) + border amarela 28–50% + sombra ampla`.
6. **CTA** — pill amarelo sólido com texto navy, hover `scale 1.05 + glow amarelo triplo`.
7. **Movimento** — `cubic-bezier(0.16,1,0.3,1)`, durações de 0.3–0.8s no hover/entrada, animações infinitas longas (6s+) para "vida ambiente".
8. **Background** — sempre algo flutuando: ondas SVG 4 camadas no topo, ambient waves no scroll inteiro.
9. **Divisor** — nunca cinza puro. Sempre `rgba(245,197,24,.14)` (token `--line`).
10. **Decoração** — desenhada à mão em SVG inline. Nunca biblioteca de ícones.

---

## 13. Inventário rápido de tokens

```css
/* Cores            */ --navy --navy-2 --navy-3 --yellow --yellow-soft --white --muted --line
/* Easings          */ --ease-out --ease-in-out
/* Fontes           */ "Space Grotesk" / "Fraunces" / "JetBrains Mono"
/* Radius           */ 4 / 8 / 10 / 14 / 16 / 20 / 999 / 50%
/* Section padding  */ 96/48 → 64/20 → 48/16
/* Container        */ max-width: 1280px
/* Sombra padrão    */ 0 24-30px 60-80px -20px rgba(0,0,0,.6)
/* Shadow CTA hover */ 0 0 0 2px y/.3 + 0 12px 40px y/.45 + 0 0 60px y/.3
/* Opacity da line  */ rgba(245,197,24, .14)
```

---

> *“Não apenas construímos. Nós **surfamos** a onda da inovação.”*
>
> A estética inteira existe para sustentar essa frase: **o navy é o oceano profundo, o amarelo é a espuma da onda quebrando, a Fraunces itálica é o gesto humano em meio à precisão técnica.** Tudo o mais é consequência.
