/* ============================================================
   Dr. Marina Capella — Interactive layer
   Parallax hero · staggered reveals · count-up stats ·
   magnetic CTAs · card tilt · divider draw-in · scroll
   progress · and the "step back / see the forest" scrubber.
   Calm by default; honors prefers-reduced-motion + .calm-motion
   ============================================================ */
(function () {
  'use strict';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const calm = () => document.documentElement.classList.contains('calm-motion');
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const rAF = window.requestAnimationFrame.bind(window);

  /* ---------------- scroll progress ---------------- */
  const bar = document.querySelector('.scroll-progress span');
  let progressQueued = false;
  function paintProgress() {
    progressQueued = false;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (bar) bar.style.width = pct.toFixed(2) + '%';
  }

  /* ---------------- hero parallax ---------------- */
  const hero = document.querySelector('.hero');
  const heroInner = document.querySelector('.hero-inner');
  function paintHero() {
    if (!hero || prefersReduced || calm()) return;
    if (document.documentElement.classList.contains('no-parallax')) {
      hero.style.setProperty('--hero-py', '0px');
      if (heroInner) heroInner.style.transform = '';
      return;
    }
    const y = Math.min(Math.max(window.scrollY, 0), window.innerHeight);
    hero.style.setProperty('--hero-py', (y * 0.18).toFixed(1) + 'px');
    if (heroInner) heroInner.style.transform = 'translateY(' + (y * 0.08).toFixed(1) + 'px)';
  }

  let scrollQueued = false;
  function onScroll() {
    if (!progressQueued) { progressQueued = true; rAF(paintProgress); }
    if (!scrollQueued) { scrollQueued = true; rAF(function () { scrollQueued = false; paintHero(); }); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', paintProgress, { passive: true });
  paintProgress();

  /* ---------------- reveal fallback ----------------
     IntersectionObserver can be unreliable in some embedded/preview
     contexts. This guarantees .reveal elements still fade in as they
     enter the viewport, complementing the observer in main.js. */
  function revealInView() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('in');
    });
  }
  window.addEventListener('scroll', revealInView, { passive: true });
  window.addEventListener('resize', revealInView, { passive: true });
  window.addEventListener('load', revealInView);
  revealInView();
  setTimeout(revealInView, 200);
  setTimeout(revealInView, 800);

  /* ---------------- staggered reveals ---------------- */
  // Give children of grids an increasing delay so they cascade in.
  ['.avenue-grid', '.healer-grid', '.quote-grid', '.proof-grid', '.cred-strip', '.topic-list'].forEach(function (sel) {
    const grid = document.querySelectorAll(sel);
    grid.forEach(function (g) {
      Array.prototype.forEach.call(g.children, function (child, i) {
        child.style.setProperty('--d', (Math.min(i, 6) * 0.08) + 's');
      });
    });
  });

  /* ---------------- count-up stats ---------------- */
  function countUp(el) {
    const raw = el.textContent.trim();
    const m = raw.match(/^(\D*)(\d[\d,]*)(.*)$/s);
    if (!m || prefersReduced) return;
    const pre = m[1], target = parseInt(m[2].replace(/,/g, ''), 10), post = m[3];
    if (!isFinite(target) || target < 2) return;
    const dur = 1100, start = performance.now();
    function tick(now) {
      const t = clamp((now - start) / dur, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = pre + val.toLocaleString() + post;
      if (t < 1) rAF(tick);
    }
    rAF(tick);
  }
  const statObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { countUp(e.target); statObs.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat strong').forEach(function (el) { statObs.observe(el); });

  /* ---------------- divider draw-in ---------------- */
  const divObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('drawn'); divObs.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.divider').forEach(function (d) { divObs.observe(d); });

  /* ---------------- magnetic primary CTAs ---------------- */
  document.querySelectorAll('.btn-primary').forEach(function (btn) {
    let raf = null;
    btn.addEventListener('pointermove', function (ev) {
      if (prefersReduced || calm() || ev.pointerType === 'touch') return;
      const r = btn.getBoundingClientRect();
      const mx = (ev.clientX - r.left) / r.width - 0.5;
      const my = (ev.clientY - r.top) / r.height - 0.5;
      if (raf) return;
      raf = rAF(function () {
        raf = null;
        btn.style.transform = 'translate(' + (mx * 8).toFixed(1) + 'px,' + (my * 6 - 2).toFixed(1) + 'px)';
      });
    });
    btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
  });

  /* ---------------- avenue card pointer tilt ---------------- */
  document.querySelectorAll('.avenue').forEach(function (card) {
    let raf = null;
    card.addEventListener('pointermove', function (ev) {
      if (prefersReduced || calm() || ev.pointerType === 'touch') return;
      if (document.documentElement.classList.contains('no-tilt')) return;
      const r = card.getBoundingClientRect();
      const mx = (ev.clientX - r.left) / r.width - 0.5;
      const my = (ev.clientY - r.top) / r.height - 0.5;
      if (raf) return;
      raf = rAF(function () {
        raf = null;
        card.style.transform =
          'perspective(900px) translateY(-6px) rotateX(' + (-my * 4).toFixed(2) + 'deg) rotateY(' + (mx * 5).toFixed(2) + 'deg)';
      });
    });
    card.addEventListener('pointerleave', function () { card.style.transform = ''; });
  });

  /* ============================================================
     CENTERPIECE — the "step back / see the forest" scrubber
     ============================================================ */
  const lens = document.getElementById('lens');
  if (lens) {
    const stage = lens.querySelector('.lens-stage');
    const img = lens.querySelector('.lens-img');
    const tint = lens.querySelector('.lens-tint');
    const warm = lens.querySelector('.lens-warm');
    const vig = lens.querySelector('.lens-vignette');
    const reticle = lens.querySelector('.lens-reticle');
    const capMicro = lens.querySelector('.cap-micro');
    const capForest = lens.querySelector('.cap-forest');
    const range = document.getElementById('lens-range');
    const hint = document.getElementById('lens-hint');
    const words = Array.prototype.slice.call(lens.querySelectorAll('.lens-word'));
    let interacted = false;
    let demoRAF = null;

    function update(p) {
      const t = clamp(p / 100, 0, 1);
      img.style.transform = 'scale(' + lerp(2.5, 1.0, t).toFixed(3) + ')';
      img.style.filter =
        'saturate(' + lerp(0.5, 1.06, t).toFixed(3) + ') ' +
        'contrast(' + lerp(1.14, 1.0, t).toFixed(3) + ') ' +
        'brightness(' + lerp(0.9, 1.02, t).toFixed(3) + ')';
      tint.style.opacity = (0.85 * (1 - t)).toFixed(3);
      warm.style.opacity = clamp((t - 0.4) / 0.55, 0, 1).toFixed(3);
      vig.style.opacity = lerp(1, 0.5, t).toFixed(3);
      reticle.style.opacity = clamp(1 - t / 0.45, 0, 1).toFixed(3);
      reticle.style.transform = 'translate(-50%,-50%) scale(' + (1 + t * 0.5).toFixed(3) + ')';
      const cm = clamp(1 - (t - 0.1) / 0.32, 0, 1);
      capMicro.style.opacity = cm.toFixed(3);
      capMicro.style.transform = 'translateY(' + ((1 - cm) * -6).toFixed(1) + 'px)';
      const cf = clamp((t - 0.55) / 0.28, 0, 1);
      capForest.style.opacity = cf.toFixed(3);
      capForest.style.transform = 'translateY(' + ((1 - cf) * 8).toFixed(1) + 'px)';
      range.style.setProperty('--p', p);
      words.forEach(function (w) {
        const at = parseFloat(w.getAttribute('data-at'));
        const wt = clamp((p - at) / 12, 0, 1);
        w.style.opacity = wt.toFixed(3);
        w.style.transform = 'translate(-50%,-50%) translateY(' + ((1 - wt) * 8).toFixed(1) + 'px)';
      });
      // a11y: describe the state
      range.setAttribute('aria-valuetext',
        t < 0.2 ? 'The microscope — a tight clinical detail' :
        t < 0.6 ? 'Stepping back — the scene is opening' :
        t < 0.95 ? 'Almost the whole picture' : 'The forest — the whole person in view');
    }

    function setP(p, fromUser) {
      p = clamp(p, 0, 100);
      range.value = p;
      update(p);
      if (fromUser && !interacted) {
        interacted = true;
        if (demoRAF) cancelAnimationFrame(demoRAF);
        if (hint) hint.classList.add('dismiss');
      }
    }

    range.addEventListener('input', function () { setP(parseFloat(range.value), true); });

    // Drag directly on the image — maps horizontal position to the scrubber.
    let dragging = false;
    function pxToP(clientX) {
      const r = stage.getBoundingClientRect();
      return ((clientX - r.left) / r.width) * 100;
    }
    stage.addEventListener('pointerdown', function (ev) {
      dragging = true;
      stage.setPointerCapture(ev.pointerId);
      setP(pxToP(ev.clientX), true);
    });
    stage.addEventListener('pointermove', function (ev) {
      if (dragging) setP(pxToP(ev.clientX), true);
    });
    stage.addEventListener('pointerup', function () { dragging = false; });
    stage.addEventListener('pointercancel', function () { dragging = false; });

    // gentle invite once it scrolls into view
    function inviteDemo() {
      if (interacted || prefersReduced || calm()) { update(parseFloat(range.value)); return; }
      if (document.documentElement.classList.contains('no-demo')) { update(parseFloat(range.value)); return; }
      const start = performance.now(), dur = 2200, base = 8, peak = 30;
      function tick(now) {
        if (interacted) return;
        const t = clamp((now - start) / dur, 0, 1);
        // ease out then back: 0 -> 1 -> 0
        const wave = Math.sin(t * Math.PI);
        const p = base + (peak - base) * wave;
        update(p);
        range.value = p;
        range.style.setProperty('--p', p);
        if (t < 1) demoRAF = rAF(tick); else update(base), (range.value = base);
      }
      demoRAF = rAF(tick);
    }

    const lensObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { inviteDemo(); lensObs.unobserve(e.target); }
      });
    }, { threshold: 0.45 });
    lensObs.observe(lens);

    update(parseFloat(range.value));
  }

  /* ---------------- video: click-to-play facade ---------------- */
  const videoPlay = document.querySelector('.video-play');
  if (videoPlay) {
    videoPlay.addEventListener('click', function () {
      const id = videoPlay.getAttribute('data-yt');
      const frame = videoPlay.parentElement;
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = 'From Burnout to Breakthrough — Dr. Marina Capella';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.cssText = 'width:100%;height:100%;border:0;display:block';
      frame.replaceChild(iframe, videoPlay);
    });
  }

  /* ---------------- announcement bar dismiss ---------------- */
  const announce = document.getElementById('announce');
  if (announce) {
    const aClose = announce.querySelector('.announce-close');
    if (aClose) aClose.addEventListener('click', function () { announce.classList.add('hide'); });
  }

  window.__mcReady = true;
})();
