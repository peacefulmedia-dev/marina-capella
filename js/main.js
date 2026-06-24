// Dr. Marina Capella — Homepage Concept v2 · Peaceful Media

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

// Standalone/bundled safety: above-the-fold reveals can be marked ".in" while
// the page is still hidden behind a splash, which freezes their opacity
// transition at 0. Once the page is genuinely visible, snap any reveal that
// is still stalled to its final state. (Elements that animated normally are
// already ~opacity:1 by now, so this leaves the scroll animation untouched.)
function settleStalledReveals() {
  document.querySelectorAll('.reveal.in').forEach((el) => {
    if (parseFloat(getComputedStyle(el).opacity) < 0.9) {
      const t = el.style.transition;
      el.style.transition = 'none';
      el.style.opacity = '1';
      el.style.transform = 'none';
      void el.offsetWidth;
      el.style.transition = t;
    }
  });
}
window.addEventListener('load', () => setTimeout(settleStalledReveals, 1000));
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) setTimeout(settleStalledReveals, 50);
});

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.classList.remove('open')));

// Contact form: intent-based routing notes
const intent = document.getElementById('intent');
const routes = { clinic: 'route-clinic', consulting: 'route-consulting', nonprofit: 'route-nonprofit' };
intent.addEventListener('change', () => {
  document.querySelectorAll('.route-note').forEach((n) => (n.style.display = 'none'));
  const id = routes[intent.value];
  if (id) document.getElementById(id).style.display = 'block';
});

// Any CTA carrying data-intent pre-selects the contact gatekeeper
document.querySelectorAll('[data-intent]').forEach((el) => {
  el.addEventListener('click', () => {
    setTimeout(() => {
      intent.value = el.getAttribute('data-intent');
      intent.dispatchEvent(new Event('change'));
    }, 400);
  });
});

// Prototype-only form handlers
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.innerHTML = "<p style='font-weight:600;color:var(--sage)'>You're on the list. Thank you for walking this journey with me.</p>";
});
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Prototype only — form routing to support inbox to be configured in build phase.');
});
