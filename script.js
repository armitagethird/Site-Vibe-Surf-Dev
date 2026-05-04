/* ============================================
   VibeSurfDev — Interactions
   ============================================ */

// ---------- I18N ----------
const I18N = {
  pt: {
    'nav.process': 'Processo',
    'nav.services': 'Serviços',
    'nav.work': 'Trabalho',
    'nav.reality': 'Realidade',
    'nav.cta': 'Iniciar projeto',
    'hero.eyebrow': 'VSD · 026 · Build · Surf · Ship',
    'hero.h1.line1': 'Não apenas',
    'hero.h1.build': 'construímos.',
    'hero.h1.line2': 'Nós',
    'hero.h1.surf': 'surfamos',
    'hero.h1.line3': 'a onda da inovação.',
    'hero.sub': 'Sistemas, websites e apps criados para quem exige excelência. Somos um pequeno estúdio de engenheiros e designers seniores entregando software de produção.',
    'hero.cta1': 'Iniciar projeto',
    'hero.cta2': 'Veja nosso trabalho',
    'hero.scroll': 'Role',
    'hero.tag': 'EST · 2021 · BUILD · SURF · SHIP',
    'story.eyebrow': 'Nosso processo',
    'story.h2.l1': 'Três movimentos,',
    'story.h2.l2': 'uma',
    'story.h2.l2b': 'onda',
    'story.h2.l2c': '.',
    'story.intro': 'Cada engajamento segue o mesmo ritmo. Ouvimos com atenção, construímos com cuidado e entregamos sem drama. Sem pivôs disfarçados de progresso.',
    'story.c1.num': '01 — DESCOBERTA',
    'story.c1.title.a': 'Nós',
    'story.c1.title.b': 'ouvimos',
    'story.c1.body': 'Antes da primeira linha de código, sentamos com você. Workshops, entrevistas com usuários, arqueologia técnica. Mapeamos o sistema como ele é — incluindo as partes que ninguém quer mencionar — e encontramos os pontos de alavancagem.',
    'story.c1.t1': 'Workshops',
    'story.c1.t2': 'Auditorias',
    'story.c1.t3': 'Roadmaps',
    'story.c2.num': '02 — OFÍCIO',
    'story.c2.title.a': 'Nós',
    'story.c2.title.b': 'construímos',
    'story.c2.body': 'Dois engenheiros sêniores. Looms diários. Código que você consegue ler. Trabalhamos em sprints curtos com demos semanais — sem caixas-pretas, sem teatro de agência, sem time de dez pessoas fingindo entregar.',
    'story.c2.t1': 'TypeScript',
    'story.c2.t2': 'Rust · Go',
    'story.c2.t3': 'SwiftUI · Compose',
    'story.c3.num': '03 — LANÇAMENTO',
    'story.c3.title.a': 'Nós',
    'story.c3.title.b': 'entregamos',
    'story.c3.body': 'Produção do dia um. CI/CD, observabilidade, runbooks, plantões. Não entregamos protótipo vestido de produto. Quando saímos, seu time é dono — totalmente, com calma, sem pontas soltas.',
    'story.c3.t1': 'SLOs',
    'story.c3.t2': 'Handover',
    'story.c3.t3': 'Suporte',
    'services.eyebrow': 'O que fazemos',
    'services.h2.l1': 'Ofício sênior,',
    'services.h2.l2': 'ponta a ponta',
    'services.h2.l2b': '.',
    'services.intro': 'Quatro disciplinas, um só time. Não fazemos handoff entre prestadores — design, engenharia e ops vivem sob o mesmo teto, no mesmo Slack, com a mesma pele em jogo.',
    'svc1.title': 'Sistemas Web',
    'svc1.desc': 'Plataformas em produção, ferramentas internas, dashboards em tempo real. Construídos para escalar desde o dia um.',
    'svc2.title': 'Aplicativos Mobile',
    'svc2.desc': 'iOS e Android nativos. SwiftUI e Jetpack Compose. Rápidos, acessíveis, prontos para a loja.',
    'svc3.title': 'Websites',
    'svc3.desc': 'Sites de marketing que convertem. Liderados por design, ricos em movimento, rápidos em qualquer dispositivo.',
    'svc4.title': 'Design UX / UI',
    'svc4.desc': 'Design de interface que vale o investimento. Pesquisa, sistemas, protótipos — entregues em código, não só Figma.',
    'work.eyebrow': 'Em alto-mar · 02',
    'work.h2.l1': 'Trabalho em produção.',
    'work.h2.l2': 'Sem maquete',
    'work.h2.l2b': '.',
    'work.intro': 'Cada projeto aqui está rodando em produção. Código auditável, deploy contínuo, ondas reais.',
    'work.cta.live': 'Ver site',
    'work.cta.code': 'Código',
    'work.cta.soon': 'Em breve',
    'work.proj1.title': 'Dra. Kerly Helena',
    'work.proj1.tagline': 'Site para médica ginecologista integrativa.',
    'work.proj1.o1': 'Site institucional + questionário de captação que qualifica leads antes do primeiro contato.',
    'work.proj1.o2': 'HTML, CSS e JS puro — zero framework, zero dependência em runtime.',
    'work.proj1.o3': 'Mobile-first, navegação direta, foco em conversão.',
    'work.proj1.info1.label': 'Status',
    'work.proj1.info1.value': 'No ar · drakerlyhelena.com.br',
    'work.proj1.info2.label': 'Performance',
    'work.proj1.info2.value': 'HTML estático · zero runtime · carregamento instantâneo no mobile.',
    'work.proj1.info3.label': 'Foco',
    'work.proj1.info3.value': 'Questionário de captação que qualifica leads antes do primeiro contato.',
    'work.proj2.title': 'Motel Paraíso',
    'work.proj2.tagline': 'Site público, sistema local e dashboard remoto com IA.',
    'work.proj2.o1': 'Ecossistema completo: site institucional, sistema operacional na recepção e dashboard de gestão à distância.',
    'work.proj2.o2': 'Site em Astro 5 + Tailwind v4 — HTML estático, Lighthouse 95+, zero dependência em runtime.',
    'work.proj2.o3': 'Sistema local em Tauri + React; dashboard em Next.js com resumos diários, semanais e mensais gerados por IA.',
    'work.proj3.title': 'ProntuVet',
    'work.proj3.tagline': 'WebApp de escuta clínica por IA para prontuários veterinários.',
    'work.proj3.o1': 'A IA escuta a consulta e devolve o prontuário completo, estruturado e detalhado.',
    'work.proj3.o2': 'WebApp principal em Next.js + Node.js + React; cliente desktop em Tauri + React.',
    'work.proj3.o3': 'Google AI integrada para transcrição e organização automática dos dados clínicos.',
    'stats.eyebrow': 'Nos números',
    'stats.h2.l1': 'Código auditável.',
    'stats.h2.l2': 'Sistemas blindados.',
    'stats.h2.l2b': 'Zero enrolação.',
    'stats.l1': 'Cobertura de revisão',
    'stats.l2': 'Satisfação dos clientes',
    'stats.l3': 'Uptime SLO',
    'stats.l4': 'Vazamentos de dados',
    'reality.eyebrow': 'Computação espacial',
    'reality.h2.l1': 'Seu produto.',
    'reality.h2.l2': 'Qualquer',
    'reality.h2.l2b': 'realidade',
    'reality.h2.l2c': '.',
    'reality.body': 'A mesma interface, presente em todo lugar onde precisa estar — celular, tablet, desktop, dashboard, relógio. Desenhamos sistemas de produto que sobrevivem à troca de plataforma sem perder a alma.',
    'reality.li1': 'macOS · Windows · Linux',
    'reality.li1.meta': 'DESKTOP',
    'reality.li2': 'Three.js · WebGL · Electron',
    'reality.li2.meta': '3D',
    'reality.li3': 'Estado entre dispositivos · Handoff ao vivo',
    'reality.li3.meta': 'SYNC',
    'reality.tab1': 'Celular',
    'reality.tab2': 'Tablet',
    'reality.tab3': 'Desktop',
    'footer.h2.l1.a': 'Tem uma onda para',
    'footer.h2.l1.b': 'pegar',
    'footer.h2.l1.c': '?',
    'footer.h2.l2': 'Vamos construir juntos.',
    'footer.cta.body': 'Aceitamos cerca de um novo engajamento por mês. Se você leu até aqui, provavelmente deveríamos conversar.',
    'footer.col1': 'Estúdio',
    'footer.col2': 'Disciplinas',
    'footer.col3': 'Conecte-se',
    'footer.col1.l1': 'Trabalho',
    'footer.col1.l2': 'Processo',
    'footer.col1.l3': 'Serviços',
    'footer.col1.l4': 'Realidade',
    'footer.col2.l1': 'Sistemas Web',
    'footer.col2.l2': 'Aplicativos Mobile',
    'footer.col2.l3': 'Websites',
    'footer.col2.l4': 'UX / UI',
    'footer.live': 'Disponível · 3º trim. 2026',
    'footer.meta1': 'SINAL · forte e limpo',
    'footer.meta2': 'SISTEMA · todas as ondas em paz',
    'footer.meta3': 'CADÊNCIA · main @ HEAD',
    'footer.legal1': '© 2026 VibeSurfDev — Todos os sistemas em paz.',
    'footer.legal2': 'Feito com intenção, entregue sem drama.',
  },
  en: {
    'nav.process': 'Process',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.reality': 'Reality',
    'nav.cta': 'Start a project',
    'hero.eyebrow': 'VSD · 026 · Build · Surf · Ship',
    'hero.h1.line1': "We don't just",
    'hero.h1.build': 'build.',
    'hero.h1.line2': 'We',
    'hero.h1.surf': 'surf',
    'hero.h1.line3': 'the wave of innovation.',
    'hero.sub': "Systems, websites and apps crafted for those who demand excellence. We're a small studio of senior engineers and designers shipping production-grade software.",
    'hero.cta1': 'Start a project',
    'hero.cta2': 'See our craft',
    'hero.scroll': 'Scroll',
    'hero.tag': 'EST · 2021 · BUILD · SURF · SHIP',
    'story.eyebrow': 'Our process',
    'story.h2.l1': 'Three movements,',
    'story.h2.l2': 'one',
    'story.h2.l2b': 'wave',
    'story.h2.l2c': '.',
    'story.intro': 'Every engagement follows the same rhythm. We listen carefully, build deliberately, and ship without drama. No pivots disguised as progress.',
    'story.c1.num': '01 — DISCOVERY',
    'story.c1.title.a': 'We',
    'story.c1.title.b': 'listen',
    'story.c1.body': 'Before a single line of code, we sit with you. Workshops, user interviews, technical archeology. We map the system as it is — including the parts no one wants to talk about — and find the leverage points.',
    'story.c1.t1': 'Workshops',
    'story.c1.t2': 'Audits',
    'story.c1.t3': 'Roadmaps',
    'story.c2.num': '02 — CRAFT',
    'story.c2.title.a': 'We',
    'story.c2.title.b': 'build',
    'story.c2.body': "Two senior engineers. Daily Looms. Code you can actually read. We work in tight sprints with weekly demos — no black boxes, no agency theatre, no ten-person teams pretending to ship.",
    'story.c2.t1': 'TypeScript',
    'story.c2.t2': 'Rust · Go',
    'story.c2.t3': 'SwiftUI · Compose',
    'story.c3.num': '03 — LAUNCH',
    'story.c3.title.a': 'We',
    'story.c3.title.b': 'ship',
    'story.c3.body': "Production from day one. CI/CD, observability, runbooks, on-call rotations. We don't hand you a prototype dressed as a product. When we leave, your team owns it — fully, calmly, with zero loose ends.",
    'story.c3.t1': 'SLOs',
    'story.c3.t2': 'Handover',
    'story.c3.t3': 'Aftercare',
    'services.eyebrow': 'What we do',
    'services.h2.l1': 'Senior craft,',
    'services.h2.l2': 'end to end',
    'services.h2.l2b': '.',
    'services.intro': "Four disciplines, one team. We don't hand off between contractors — design, engineering, and ops live under the same roof, on the same Slack, with the same skin in the game.",
    'svc1.title': 'Web Systems',
    'svc1.desc': 'Production platforms, internal tools, real-time dashboards. Built to scale from day one.',
    'svc2.title': 'Mobile Apps',
    'svc2.desc': 'Native iOS & Android. SwiftUI and Jetpack Compose. Fast, accessible, store-ready.',
    'svc3.title': 'Websites',
    'svc3.desc': 'Marketing sites that convert. Design-led, motion-rich, fast on every device — no compromises.',
    'svc4.title': 'UX / UI Design',
    'svc4.desc': 'Interface design that earns its keep. Research, systems, prototypes — handed off in code, not just Figma.',
    'work.eyebrow': 'Open sea · 02',
    'work.h2.l1': 'Work in production.',
    'work.h2.l2': 'No mockups',
    'work.h2.l2b': '.',
    'work.intro': 'Every project here is live. Auditable code, continuous delivery, real waves.',
    'work.cta.live': 'Visit',
    'work.cta.code': 'Code',
    'work.cta.soon': 'Coming soon',
    'work.proj1.title': 'Dra. Kerly Helena',
    'work.proj1.tagline': 'Site for an integrative gynecologist.',
    'work.proj1.o1': 'Marketing site + intake questionnaire that qualifies leads before first contact.',
    'work.proj1.o2': 'Plain HTML, CSS and JS — no framework, zero runtime dependencies.',
    'work.proj1.o3': 'Mobile-first, direct flow, conversion-focused.',
    'work.proj1.info1.label': 'Status',
    'work.proj1.info1.value': 'Live · drakerlyhelena.com.br',
    'work.proj1.info2.label': 'Performance',
    'work.proj1.info2.value': 'Static HTML · zero runtime · instant load on mobile.',
    'work.proj1.info3.label': 'Focus',
    'work.proj1.info3.value': 'Intake questionnaire that qualifies leads before first contact.',
    'work.proj2.title': 'Motel Paraíso',
    'work.proj2.tagline': 'Public site, on-premise system and AI-powered remote dashboard.',
    'work.proj2.o1': 'Full ecosystem: marketing site, front-desk system, and remote management dashboard.',
    'work.proj2.o2': 'Site in Astro 5 + Tailwind v4 — static HTML, Lighthouse 95+, zero runtime deps.',
    'work.proj2.o3': 'On-premise system in Tauri + React; dashboard in Next.js with AI-generated daily, weekly and monthly summaries.',
    'work.proj3.title': 'ProntuVet',
    'work.proj3.tagline': 'AI clinical-listening webapp for veterinary medical records.',
    'work.proj3.o1': 'The AI listens to the consultation and returns the full structured medical record.',
    'work.proj3.o2': 'Core webapp in Next.js + Node.js + React; desktop client in Tauri + React.',
    'work.proj3.o3': 'Google AI integration for transcription and automatic structuring of clinical data.',
    'stats.eyebrow': 'By the numbers',
    'stats.h2.l1': 'Auditable code.',
    'stats.h2.l2': 'Hardened systems.',
    'stats.h2.l2b': 'Zero fluff.',
    'stats.l1': 'Review coverage',
    'stats.l2': 'Client satisfaction',
    'stats.l3': 'Uptime SLO',
    'stats.l4': 'Data breaches',
    'reality.eyebrow': 'Spatial computing',
    'reality.h2.l1': 'Your product.',
    'reality.h2.l2': 'Any',
    'reality.h2.l2b': 'reality',
    'reality.h2.l2c': '.',
    'reality.body': 'The same interface, surfaced everywhere it needs to live — phone, tablet, desktop, dashboard, watch. We design product systems that survive a platform jump without losing their soul.',
    'reality.li1': 'macOS · Windows · Linux',
    'reality.li1.meta': 'DESKTOP',
    'reality.li2': 'Three.js · WebGL · Electron',
    'reality.li2.meta': '3D',
    'reality.li3': 'Cross-device state · Live handoff',
    'reality.li3.meta': 'SYNC',
    'reality.tab1': 'Phone',
    'reality.tab2': 'Tablet',
    'reality.tab3': 'Desktop',
    'footer.h2.l1.a': 'Got a wave to',
    'footer.h2.l1.b': 'catch',
    'footer.h2.l1.c': '?',
    'footer.h2.l2': "Let's build it together.",
    'footer.cta.body': "We take on roughly one new engagement per month. If you've read this far, we should probably talk.",
    'footer.col1': 'Studio',
    'footer.col2': 'Disciplines',
    'footer.col3': 'Connect',
    'footer.col1.l1': 'Work',
    'footer.col1.l2': 'Process',
    'footer.col1.l3': 'Services',
    'footer.col1.l4': 'Reality',
    'footer.col2.l1': 'Web Systems',
    'footer.col2.l2': 'Mobile Apps',
    'footer.col2.l3': 'Websites',
    'footer.col2.l4': 'UX / UI',
    'footer.live': 'Available · Q3 2026',
    'footer.meta1': 'SIGNAL · strong & clean',
    'footer.meta2': 'SYSTEM · every wave at peace',
    'footer.meta3': 'CADENCE · main @ HEAD',
    'footer.legal1': '© 2026 VibeSurfDev — All systems calm.',
    'footer.legal2': 'Crafted with intent, shipped without drama.',
  }
};

let currentLang = localStorage.getItem('vsd-lang') || 'pt';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('vsd-lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = I18N[lang][key];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Re-trigger word animations on hero
  document.querySelectorAll('.hero h1 .word').forEach((w, i) => {
    w.style.animationDelay = (1.9 + i * 0.06) + 's';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.addEventListener('click', () => applyLang(b.dataset.lang));
  });
  applyLang(currentLang);
  // Enable hero entry animation only when JS is alive — graceful fallback
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('animate');
    requestAnimationFrame(() => {
      const logo = document.querySelector('.hero-logo-img, .hero-logo-frame');
      if (logo) logo.classList.add('in');
    });
  }
});

// ---------- SCROLL PROGRESS ----------
const progressBar = document.querySelector('.scroll-progress');
function updateProgress() {
  if (!progressBar) return;
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  progressBar.style.width = (scrolled * 100) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

// ---------- NAV SCROLLED STATE ----------
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (!nav) return;
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}, { passive: true });

// ---------- MOBILE NAV TOGGLE ----------
const navToggle = document.querySelector('.nav-toggle');
function closeMobileNav() {
  if (!nav) return;
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const willOpen = !nav.classList.contains('open');
    nav.classList.toggle('open', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
    navToggle.setAttribute('aria-expanded', String(willOpen));
    navToggle.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
  });
  // Close on link click and on Escape
  document.querySelectorAll('.nav-links a, .nav-right .nav-cta').forEach(a => {
    a.addEventListener('click', closeMobileNav);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeMobileNav();
  });
  // Close if viewport grows past breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800 && nav.classList.contains('open')) closeMobileNav();
  });
}

// ---------- HERO LOGO ANIMATION ----------
function showHeroLogo() {
  const logo = document.querySelector('.hero-logo-img, .hero-logo-frame');
  if (logo) logo.classList.add('in');
}
if (document.readyState === 'complete') showHeroLogo();
else window.addEventListener('load', showHeroLogo);
document.addEventListener('DOMContentLoaded', () => setTimeout(showHeroLogo, 100));

// ---------- HERO LOGO READY (avoid flash before first frame) ----------
(function revealHeroLogo() {
  const img = document.querySelector('.hero-logo-anim');
  if (!img) return;
  const reveal = () => img.classList.add('is-ready');
  if (img.complete && img.naturalWidth > 0) {
    reveal();
  } else {
    img.addEventListener('load', reveal, { once: true });
    img.addEventListener('error', reveal, { once: true });
    setTimeout(reveal, 1200);
  }
})();

// ---------- HERO PARALLAX WAVES ----------
const waveLayers = document.querySelectorAll('.wave-layer');
let waveT = 0;
function driftWaves() {
  waveT += 0.005;
  waveLayers.forEach((layer, i) => {
    const baseX = Math.sin(waveT + i * 0.7) * (8 + i * 4);
    const sy = window.scrollY;
    const speed = parseFloat(layer.dataset.speed || (0.15 + i * 0.1));
    layer.style.transform = `translate(${baseX}px, ${sy * speed}px)`;
  });
  requestAnimationFrame(driftWaves);
}
driftWaves();

// ---------- INTERSECTION OBSERVER ----------
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .clip-reveal').forEach(el => revealObserver.observe(el));

// ---------- SCROLLYTELLING ----------
const chapters = document.querySelectorAll('.chapter');
const scenes = document.querySelectorAll('.iso-scene');

const chapterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const idx = parseInt(e.target.dataset.chapter, 10);
      chapters.forEach((c, i) => c.classList.toggle('active', i === idx));
      scenes.forEach((s, i) => s.classList.toggle('active', i === idx));
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

chapters.forEach(c => chapterObserver.observe(c));

// ---------- STATS COUNTERS ----------
const stats = document.querySelectorAll('.stat-value');
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target.querySelector('.num');
    const target = parseInt(el.dataset.target, 10);
    const dur = 1800;
    const start = performance.now();
    function tick(t) {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(e.target);
  });
}, { threshold: 0.5 });
stats.forEach(s => statObserver.observe(s));

// ---------- PARTICLE WAVE CANVAS ----------
const canvas = document.querySelector('.stats-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, particles;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.scale(DPR, DPR);
    initParticles();
  }

  function initParticles() {
    const count = Math.floor(W / 14);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: (i / count) * W,
        baseY: H * 0.5,
        phase: i * 0.3,
        size: 1 + Math.random() * 2,
      });
    }
  }

  let t = 0;
  function loop() {
    t += 0.012;
    ctx.clearRect(0, 0, W, H);
    for (let band = 0; band < 2; band++) {
      const amp = band === 0 ? 60 : 90;
      const offset = band === 0 ? -30 : 40;
      ctx.beginPath();
      particles.forEach((p, i) => {
        const y = p.baseY + Math.sin(t + p.phase + band * 1.2) * amp + offset;
        if (i === 0) ctx.moveTo(p.x, y);
        else ctx.lineTo(p.x, y);
      });
      ctx.strokeStyle = `rgba(245, 197, 24, ${band === 0 ? 0.08 : 0.04})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    particles.forEach((p) => {
      const y = p.baseY + Math.sin(t + p.phase) * 60;
      const op = 0.3 + Math.sin(t * 2 + p.phase) * 0.3;
      ctx.fillStyle = `rgba(245, 197, 24, ${op})`;
      ctx.beginPath();
      ctx.arc(p.x, y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(245, 197, 24, ${op * 0.15})`;
      ctx.beginPath();
      ctx.arc(p.x, y, p.size * 4, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }

  resize();
  loop();
  window.addEventListener('resize', resize);
}

// ---------- DEVICE TABS ----------
const tabs = document.querySelectorAll('.device-tabs button');
const devices = document.querySelectorAll('.device-iso');
let currentDevice = 0;
let deviceTimer;

function setDevice(i) {
  currentDevice = i;
  tabs.forEach((t, j) => t.classList.toggle('active', j === i));
  devices.forEach((d, j) => d.classList.toggle('active', j === i));
}
function autoCycle() {
  deviceTimer = setInterval(() => {
    setDevice((currentDevice + 1) % devices.length);
  }, 3500);
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    clearInterval(deviceTimer);
    setDevice(i);
    autoCycle();
  });
});
setDevice(0);
autoCycle();

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ---------- WORK CAROUSEL ----------
(function initWorkCarousel() {
  const track = document.querySelector('.work-track');
  if (!track) return;
  const slides = Array.from(track.querySelectorAll('.work-slide'));
  if (!slides.length) return;
  const dotsHost = document.querySelector('.work-dots');
  const prev = document.querySelector('.work-prev');
  const next = document.querySelector('.work-next');
  const counter = document.querySelector('.work-counter');

  // Build dots
  if (dotsHost) {
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Projeto ${i + 1}`);
      b.addEventListener('click', () => goTo(i));
      dotsHost.appendChild(b);
    });
  }

  let activeIdx = 0;
  const setActive = (i) => {
    activeIdx = i;
    if (dotsHost) {
      Array.from(dotsHost.children).forEach((d, j) => d.classList.toggle('active', i === j));
    }
    if (counter) {
      counter.textContent = `${String(i + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    }
  };

  const goTo = (i) => {
    const target = slides[Math.max(0, Math.min(slides.length - 1, i))];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  // Watch which slide is centered
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio > 0.55) {
        const i = slides.indexOf(e.target);
        if (i >= 0) setActive(i);
        e.target.classList.add('in');
      }
    });
  }, { root: track, threshold: [0, 0.55, 0.9] });
  slides.forEach(s => io.observe(s));

  // Also observe the section itself so the first slide animates in on first view
  const sectionIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        slides[0]?.classList.add('in');
        sectionIo.disconnect();
      }
    });
  }, { threshold: 0.2 });
  const section = document.querySelector('.work');
  if (section) sectionIo.observe(section);

  prev?.addEventListener('click', () => goTo(activeIdx - 1));
  next?.addEventListener('click', () => goTo(activeIdx + 1));

  // Keyboard nav when focus is in the track
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(activeIdx - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(activeIdx + 1); }
  });
  track.tabIndex = 0;

  // Per-slide: clicking a thumbnail swaps it with the main viewport image
  slides.forEach(slide => {
    const mainImg = slide.querySelector('.browser-viewport img');
    if (!mainImg) return;
    slide.querySelectorAll('.work-screens .work-screen').forEach(screen => {
      screen.addEventListener('click', () => {
        const thumbImg = screen.querySelector('img');
        if (!thumbImg) return;
        // Snapshot both BEFORE any mutation, otherwise the second assignment
        // reads a value that was already overwritten by the first.
        const newMainSrc = thumbImg.src;
        const newMainAlt = thumbImg.alt;
        const oldMainSrc = mainImg.src;
        const oldMainAlt = mainImg.alt;
        // Thumbnail updates instantly
        thumbImg.src = oldMainSrc;
        thumbImg.alt = oldMainAlt;
        // Main fades out, then in with the new image
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = newMainSrc;
          mainImg.alt = newMainAlt;
          mainImg.style.opacity = '';
        }, 180);
      });
    });
  });

  setActive(0);
})();
