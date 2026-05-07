<div align="center">

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║              V I B E   S U R F   D E V                       ║
║              ─────────────────────────                       ║
║              Build  ·  Surf  ·  Ship                         ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

**Site oficial do estúdio VibeSurfDev — código aberto.**

[![Site](https://img.shields.io/badge/site-vibesurfdev.com-F5C518?style=flat-square&labelColor=0d1b2a)](https://vibesurfdev.com)
[![WhatsApp](https://img.shields.io/badge/whatsapp-falar%20agora-25D366?style=flat-square&labelColor=0d1b2a)](https://wa.me/5598984357980)
[![Instagram](https://img.shields.io/badge/instagram-@vibesurfdev-E4405F?style=flat-square&labelColor=0d1b2a)](https://instagram.com/vibesurfdev)
[![License](https://img.shields.io/badge/license-MIT-F5C518?style=flat-square&labelColor=0d1b2a)](#licença)

</div>

---

## Por que este repositório é público

A maior parte dos sites de estúdio é uma caixa-preta. O nosso não é.

Publicamos o código deste site por três motivos diretos:

1. **Para iniciantes terem um exemplo real.** Se você está aprendendo HTML, CSS e JavaScript do zero, ler tutorial é uma coisa, abrir o código de um site no ar é outra. Aqui você vê *como* — animações scroll-driven, internacionalização PT/EN, tipografia em camadas, ondas em SVG, transições, microinterações — sem framework, sem build pipeline, só o trio fundamental.
2. **Para inspirar quem cria.** Se você é designer, dev ou um híbrido aprendendo a costurar os dois, leve o que servir. Pegue uma curva de wave SVG, um keyframe, uma estrutura de seção. Tudo que está aqui é livre para estudar, copiar, adaptar.
3. **Para ser honesto sobre o ofício.** Software de qualidade não nasce de templates fechados. Nasce de gente que olha o que outros fizeram, entende o porquê, e faz melhor. Se este repositório acelerar uma única pessoa nesse caminho, valeu o git push.

> *“Surfar é remar em direção a algo que outros já viram da praia.”*

---

## Stack

Sem framework. Sem bundler. Sem dependência de runtime.

| Camada | Ferramenta |
|---|---|
| Marcação | HTML5 semântico |
| Estilo | CSS moderno (custom properties, `clamp()`, container queries, `prefers-reduced-motion`) |
| Comportamento | JavaScript ES2022 vanilla |
| Tipografia | Space Grotesk · JetBrains Mono · Fraunces (Google Fonts) |
| Animações | SVG paths + CSS transforms + `IntersectionObserver` |
| i18n | Sistema próprio leve (PT/EN), zero deps |
| Hospedagem | Estática — qualquer CDN serve |

A escolha por *vanilla* é deliberada. Não porque frameworks sejam ruins, mas porque para um site institucional com este escopo, vanilla é o caminho mais rápido, leve e durável. Carrega em milissegundos, sobrevive a qualquer mudança de ecossistema, e ensina os fundamentos de quem vem aprender.

---

## Estrutura

```
.
├── index.html       # Página única, acessível, com data-i18n keys
├── styles.css       # ~1.4k linhas. Tokens no topo, seções comentadas.
├── script.js        # i18n, scroll progress, parallax waves, microinterações
├── assets/          # logo, favicons, vídeo animado, screenshots de cases
└── README.md
```

---

## Assets

A pasta `assets/` contém logo, favicons, animação WebP e screenshots dos cases. Tudo está versionado para que o site rode 1:1 ao clonar — sem etapa extra de download.

```
assets/
├── favicon-32.png        favicon-180.png        favicon-192.png        favicon-512.png
├── logo.png              logo-static.jpg        logo-anim.webp
└── work/                 ← screenshots de cases
```

Se você for adaptar o site para sua marca, substitua os arquivos mantendo os mesmos nomes — ou edite os caminhos em `index.html`. Note que **a marca VibeSurfDev e os arquivos visuais** seguem direitos reservados (ver [Licença](#licença)) — o código é MIT, os assets de marca não.

---

## Rodando localmente

Não tem build. Servidor estático basta.

```bash
# opção 1 — Python
python -m http.server 8080

# opção 2 — Node
npx serve .

# opção 3 — VS Code Live Server, basta abrir index.html
```

Abra `http://localhost:8080` e pronto.

---

## Personalizando

Os pontos de extensão estão concentrados:

- **Cores e tipografia** → variáveis CSS no topo de `styles.css` (`:root { --accent: #F5C518; ... }`)
- **Conteúdo PT/EN** → atributos `data-i18n` no HTML + dicionário em `script.js`
- **Cases de trabalho** → seção `<section id="work">` em `index.html`
- **Contato** → links de WhatsApp e Instagram no `<footer>` (`id="contact"`)

Não há configuração externa. Tudo é texto.

---

## Acessibilidade & performance

Decisões que valem mencionar:

- `prefers-reduced-motion` desativa parallax e animações intensas
- Contraste AA em todo texto principal (testado em `--bg` e `--bg-elevated`)
- `aria-label` em controles sem texto, `aria-expanded` em menu mobile
- Vídeo de logo com `<img>` em WebP animado — alpha funciona em iOS, sem custo de `<video>` autoplay
- Fontes via `preconnect` + `display=swap` para evitar FOIT
- Zero JavaScript bloqueante no `<head>`

---

## Inspirações

A estética veio de mares observados de longe — Awwwards, sites de estúdios europeus, brutalismo editorial misturado com tipografia editorial italiana. Ondas SVG em camadas vieram de [@aatishb](https://aatishb.com), parallax scroll de leituras de Coyier no CSS-Tricks, paleta de revistas de surf dos anos 90.

Se você reconheceu algo aqui, provavelmente nos influenciou. Obrigado.

---

## Para iniciantes — por onde começar a ler

Se é seu primeiro código de site real, sugestão de ordem:

1. **`index.html`** — leia de cima para baixo. Note como cada `<section>` tem propósito claro e atributos `data-i18n` para tradução.
2. **`styles.css` linhas 1–80** — os tokens de design. Mude um valor (ex: `--accent`) e veja o site inteiro responder.
3. **`styles.css` busca por `@keyframes`** — onde mora a vida das animações.
4. **`script.js` topo** — o dicionário i18n. Comece por algo simples antes de ir para o `IntersectionObserver`.

Quebre coisas. Inverta cores. Apague seções. É assim que se aprende.

---

## Licença

[MIT](https://opensource.org/licenses/MIT) para o código.

A marca **VibeSurfDev**, o logo, os vídeos e as imagens de cases **não** são cobertos pela licença e seguem direitos reservados. Use o código à vontade — substitua a marca pela sua.

---

## Contato

Tem um projeto? Quer conversar sobre o código? Achou um bug?

- **WhatsApp** — [wa.me/5598984357980](https://wa.me/5598984357980)
- **Instagram** — [@vibesurfdev](https://instagram.com/vibesurfdev)
- **Site** — [vibesurfdev.com](https://vibesurfdev.com)

<div align="center">

```
                            ~  ~  ~  ~
                         ~              ~
                      ~                    ~
                   ~     Build · Surf · Ship   ~
                ~                                ~
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

**Feito com café, sal e bastante `git push --force-with-lease`.**

</div>
