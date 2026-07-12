/* ============================================
   VibeSurfDev — Niche Landing Pages
   Vanilla JS para form→WhatsApp + reveal animations.
   ============================================ */

(() => {
  'use strict';

  const WHATSAPP_NUMBER = '5598984357980';

  /* ---------- Mensagens por nicho ---------- */
  /* Cada página /nichos/<key>.html tem <body data-niche="<key>">. */

  const NICHE_LABELS = {
    medicos:        { title: 'Médicos',                from: 'página de médicos' },
    sistemas:       { title: 'Sistemas sob medida',    from: 'página de sistemas' },
    'clinicas-vet': { title: 'Clínicas Veterinárias',  from: 'página de clínicas veterinárias' },
    motels:         { title: 'Motéis e Hospitalidade', from: 'página de motéis' },
    stack:          { title: 'Nossa stack em Rust',    from: 'página da nossa stack' },
  };

  /* Texto pré-pronto do CTA "Falar no WhatsApp" (botão direto, sem form). */
  function buildDirectMessage(nicheKey) {
    const label = NICHE_LABELS[nicheKey] || { from: 'site' };
    return `Olá! Vim pela ${label.from} da VibeSurfDev e quero conversar sobre meu projeto.`;
  }

  /* Texto formatado a partir do form qualificador. */
  function buildFormMessage(form, nicheKey) {
    const label = NICHE_LABELS[nicheKey] || { title: 'Geral', from: 'site' };
    const data = new FormData(form);

    const lines = [];
    lines.push(`Olá! Vim pela ${label.from} da VibeSurfDev.`);
    lines.push('');
    lines.push(`*Interesse:* ${label.title}`);
    lines.push('');

    /* Itera campos na ORDEM em que aparecem no DOM (não a ordem do FormData,
       que pode bagunçar radios). */
    const fields = form.querySelectorAll('[data-q]');
    const seen = new Set();
    fields.forEach((node) => {
      const name = node.name || node.dataset.qName;
      if (!name || seen.has(name)) return;
      seen.add(name);

      const question = node.dataset.q;
      const value = data.get(name);
      if (!value || String(value).trim() === '') return;

      lines.push(`*${question}*`);
      lines.push(String(value).trim());
      lines.push('');
    });

    return lines.join('\n').trim();
  }

  /* ---------- Wire up direct WhatsApp CTAs ---------- */
  /* Qualquer <a data-wa-direct> recebe href com mensagem do nicho. */

  function wireDirectCTAs() {
    const niche = document.body.dataset.niche || '';
    const message = buildDirectMessage(niche);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    document.querySelectorAll('a[data-wa-direct]').forEach((a) => {
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  /* ---------- Wire up qualifier forms ---------- */

  function wireForms() {
    const niche = document.body.dataset.niche || '';

    document.querySelectorAll('.qualify-form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = buildFormMessage(form, niche);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener');
      });
    });
  }

  /* ---------- Reveal observer ---------- */
  /* Mesma mecânica do site principal — adiciona .in quando entra na viewport. */

  function wireReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Nav scrolled state ---------- */

  function wireNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile nav toggle ---------- */

  function wireNavToggle() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav-toggle');
    if (!nav || !toggle) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('menu-open', open);
    });
    /* Close drawer on link click */
    nav.querySelectorAll('.nav-links a').forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  /* ---------- Init ---------- */

  function init() {
    wireDirectCTAs();
    wireForms();
    wireReveals();
    wireNavScroll();
    wireNavToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
