/* @ds-bundle: {"format":3,"namespace":"MarinaCapellaDesignSystem_53e3f9","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"PullQuote","sourcePath":"components/core/PullQuote.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StatBlock","sourcePath":"components/feedback/StatBlock.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"codebase/js/main.js":"b6121bea4f3d","components/core/Button.jsx":"f7dfc743385f","components/core/Card.jsx":"d15764fa2e9f","components/core/Divider.jsx":"42aacf5572e0","components/core/Eyebrow.jsx":"f6fc63ee8f81","components/core/PullQuote.jsx":"d9c3dfc57cde","components/core/Tag.jsx":"91d02819bfed","components/feedback/StatBlock.jsx":"24d24c8eeae7","components/forms/Field.jsx":"7f656a34fbea","components/forms/Input.jsx":"ca33145db49b","components/forms/Select.jsx":"b5503ecc7e11","ui_kits/homepage/Avenues.jsx":"bf93c0966265","ui_kits/homepage/Chrome.jsx":"ca3340741890","ui_kits/homepage/Connect.jsx":"f924da521d48","ui_kits/homepage/Hero.jsx":"4baace7206dd","ui_kits/homepage/Offerings.jsx":"3b7f0572a84b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MarinaCapellaDesignSystem_53e3f9 = window.MarinaCapellaDesignSystem_53e3f9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// codebase/js/main.js
try { (() => {
// Dr. Marina Capella — Homepage Concept v2 · Peaceful Media

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, {
  threshold: 0.12
});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Contact form: intent-based routing notes
const intent = document.getElementById('intent');
const routes = {
  clinic: 'route-clinic',
  consulting: 'route-consulting',
  nonprofit: 'route-nonprofit'
};
intent.addEventListener('change', () => {
  document.querySelectorAll('.route-note').forEach(n => n.style.display = 'none');
  const id = routes[intent.value];
  if (id) document.getElementById(id).style.display = 'block';
});

// Speaking CTA pre-selects intent
document.querySelector('[data-intent="speaking"]').addEventListener('click', () => {
  setTimeout(() => {
    intent.value = 'speaking';
    intent.dispatchEvent(new Event('change'));
  }, 400);
});

// Prototype-only form handlers
document.getElementById('signup-form').addEventListener('submit', e => {
  e.preventDefault();
  e.target.innerHTML = "<p style='font-weight:600;color:var(--sage)'>You're on the list. Thank you for walking this journey with me.</p>";
});
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Prototype only — form routing to support inbox to be configured in build phase.');
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "codebase/js/main.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Button
 * Terracotta = clickable. Primary CTAs only carry the solid fill.
 * Renders as <a> when `href` is set, otherwise <button>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const pad = size === 'sm' ? '.55rem 1.3rem' : size === 'lg' ? '1rem 2.2rem' : '.85rem 1.8rem';
  const fontSize = size === 'lg' ? '1.02rem' : '.95rem';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
    fontFamily: 'var(--mc-font-sans)',
    fontWeight: 600,
    fontSize,
    lineHeight: 1.1,
    padding: pad,
    borderRadius: 'var(--mc-radius-pill)',
    textDecoration: 'none',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--mc-dur-fast) var(--mc-ease), box-shadow var(--mc-dur-fast) var(--mc-ease), background var(--mc-dur-fast) var(--mc-ease), color var(--mc-dur-fast) var(--mc-ease)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--mc-terracotta-deep)',
      color: 'var(--mc-on-dark)',
      borderColor: 'var(--mc-terracotta-deep)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--mc-terracotta-deep)',
      borderColor: 'var(--mc-terracotta-deep)'
    },
    'light-ghost': {
      background: 'transparent',
      color: 'var(--mc-on-dark)',
      borderColor: 'rgba(242,232,214,.75)'
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.primary)
  };
  const hoverIn = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = 'translateY(-2px)';
    if (variant === 'primary') {
      el.style.background = 'var(--mc-terracotta-darker)';
      el.style.boxShadow = 'var(--mc-shadow-btn)';
    }
    if (variant === 'ghost') {
      el.style.background = 'var(--mc-terracotta-deep)';
      el.style.color = 'var(--mc-on-dark)';
    }
    if (variant === 'light-ghost') {
      el.style.background = 'rgba(242,232,214,.16)';
    }
  };
  const hoverOut = e => {
    const el = e.currentTarget;
    el.style.transform = 'none';
    el.style.boxShadow = 'none';
    Object.assign(el.style, variants[variant] || variants.primary);
  };
  const props = {
    className: `mc-button ${className}`,
    style,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    ...rest
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, props), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Card
 * Cream-card surface, ochre hairline, optional colored top edge.
 * Lifts on hover when `hover` is set.
 */
function Card({
  children,
  topEdge = 'sage',
  hover = false,
  className = '',
  style: styleOverride = {},
  ...rest
}) {
  const edgeColor = {
    sage: 'var(--mc-sage)',
    ochre: 'var(--mc-ochre)',
    none: null
  }[topEdge];
  const style = {
    background: 'var(--mc-cream-card)',
    border: '1px solid var(--mc-line)',
    borderRadius: 'var(--mc-radius-card)',
    padding: '2.5rem 2.2rem',
    transition: 'transform var(--mc-dur-base) var(--mc-ease), box-shadow var(--mc-dur-base) var(--mc-ease)',
    ...(edgeColor ? {
      borderTop: `3px solid ${edgeColor}`
    } : {}),
    ...styleOverride
  };
  const onEnter = e => {
    if (!hover) return;
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.boxShadow = 'var(--mc-shadow-card)';
  };
  const onLeave = e => {
    if (!hover) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = 'none';
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    className: `mc-card ${className}`,
    style: style,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Divider
 * Ochre hairline gradient centered on a rotated sage diamond.
 */
function Divider({
  className = '',
  ...rest
}) {
  const wrap = {
    maxWidth: 'var(--mc-maxw)',
    margin: '0 auto',
    padding: '0 var(--mc-gutter)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  };
  const line = {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, var(--mc-ochre) 30%, var(--mc-ochre) 70%, transparent)'
  };
  const diamond = {
    width: '7px',
    height: '7px',
    background: 'var(--mc-sage)',
    transform: 'rotate(45deg)',
    flex: 'none'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `mc-divider ${className}`,
    style: wrap,
    role: "presentation"
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: line
  }), /*#__PURE__*/React.createElement("span", {
    style: diamond
  }), /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Eyebrow
 * The tiny uppercase, letter-spaced label that sits above a headline.
 */
function Eyebrow({
  children,
  onDark = false,
  className = '',
  ...rest
}) {
  const style = {
    fontFamily: 'var(--mc-font-sans)',
    fontSize: 'var(--mc-text-eyebrow)',
    letterSpacing: 'var(--mc-tracking-eyebrow)',
    textTransform: 'uppercase',
    fontWeight: 600,
    color: onDark ? 'var(--mc-on-dark)' : 'var(--mc-sage-deep)',
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `mc-eyebrow ${className}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — PullQuote
 * Fraunces italic, deep-sage, with an ochre left rule.
 */
function PullQuote({
  children,
  className = '',
  ...rest
}) {
  const style = {
    fontFamily: 'var(--mc-font-serif)',
    fontStyle: 'italic',
    fontSize: '1.35rem',
    lineHeight: 'var(--mc-leading-normal)',
    color: 'var(--mc-sage-deep)',
    borderLeft: '3px solid var(--mc-ochre)',
    paddingLeft: '1.4rem',
    margin: '2rem 0'
  };
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    className: `mc-pullquote ${className}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Tag
 * The small uppercase audience tag used on cards ("For families").
 */
function Tag({
  children,
  className = '',
  ...rest
}) {
  const style = {
    fontFamily: 'var(--mc-font-sans)',
    fontSize: '.75rem',
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: 'var(--mc-sage-deep)',
    display: 'inline-block'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `mc-tag ${className}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — StatBlock
 * A social-proof stat: large Fraunces sage figure over a small label.
 */
function StatBlock({
  figure,
  label,
  className = '',
  ...rest
}) {
  const wrap = {
    textAlign: 'center'
  };
  const fig = {
    display: 'block',
    fontFamily: 'var(--mc-font-serif)',
    fontWeight: 500,
    fontSize: '1.7rem',
    lineHeight: 1.15,
    color: 'var(--mc-sage)'
  };
  const lab = {
    fontFamily: 'var(--mc-font-sans)',
    fontSize: '.85rem',
    color: 'var(--mc-forest-soft)',
    letterSpacing: '.02em'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `mc-stat ${className}`,
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("strong", {
    style: fig
  }, figure), /*#__PURE__*/React.createElement("span", {
    style: lab
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Field
 * Uppercase label + control wrapper. Label color adapts to the
 * surface: cream on dark panels, forest on light.
 */
function Field({
  label,
  htmlFor,
  onDark = false,
  children,
  className = '',
  ...rest
}) {
  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--mc-font-sans)',
    fontSize: '.82rem',
    fontWeight: 600,
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    color: onDark ? 'var(--mc-cream)' : 'var(--mc-forest)',
    marginBottom: '.35rem'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `mc-field ${className}`
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: labelStyle
  }, label), children);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Input
 * Solid cream-card field with a sage border. `pill` for the
 * mailing-list signup; default 12px soft rectangle for forms.
 */
function Input({
  pill = false,
  className = '',
  style: styleOverride = {},
  ...rest
}) {
  const style = {
    width: '100%',
    padding: pill ? '.9rem 1.2rem' : '.9rem 1.1rem',
    borderRadius: pill ? 'var(--mc-radius-pill)' : 'var(--mc-radius-field)',
    border: '1.5px solid var(--mc-sage)',
    background: 'var(--mc-cream-card)',
    color: 'var(--mc-forest)',
    fontFamily: 'var(--mc-font-sans)',
    fontSize: '.95rem',
    lineHeight: 1.4,
    outline: 'none',
    ...styleOverride
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `mc-input ${className}`,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marina Capella — Select
 * Native select styled to match Input — cream-card + sage border.
 */
function Select({
  children,
  className = '',
  style: styleOverride = {},
  ...rest
}) {
  const style = {
    width: '100%',
    padding: '.9rem 1.1rem',
    borderRadius: 'var(--mc-radius-field)',
    border: '1px solid var(--mc-sage)',
    background: 'var(--mc-cream-card)',
    color: 'var(--mc-forest)',
    fontFamily: 'var(--mc-font-sans)',
    fontSize: '.95rem',
    lineHeight: 1.4,
    outline: 'none',
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath fill=\'none\' stroke=\'%231C2F22\' stroke-width=\'1.6\' d=\'M1 1.5 6 6.5 11 1.5\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.1rem center',
    paddingRight: '2.6rem',
    cursor: 'pointer',
    ...styleOverride
  };
  return /*#__PURE__*/React.createElement("select", _extends({
    className: `mc-select ${className}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Avenues.jsx
try { (() => {
// Homepage UI kit — Avenues & Story
(() => {
  const {
    Card,
    Tag,
    Eyebrow,
    PullQuote,
    Divider
  } = window.MarinaCapellaDesignSystem_53e3f9;
  const STORY_IMG = '../../assets/img/capella-with-infant.webp';
  function Avenues() {
    const avenues = [{
      for: 'For families',
      title: 'Healing Arts Pediatrics',
      body: 'My integrative medical practice in Salt Lake City — blending the best of modern medicine with healing modalities like clinical hypnosis, myofascial release, and herbalism. Now welcoming adults seeking deeper healing, too.',
      link: 'Visit the clinic'
    }, {
      for: 'For physicians',
      title: 'DPC Pediatrician',
      body: "Consulting, courses, and a podcast for physicians ready to leave burnout behind and build a direct care practice that's aligned with their values — and their souls.",
      link: 'Explore consulting & resources'
    }, {
      for: 'For future doctors',
      title: 'Future Minority Doctor',
      body: 'My nonprofit, born from my own journey — empowering underrepresented students to become physicians, because patients deserve doctors who share their stories.',
      link: 'Meet the nonprofit'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "avenues",
      className: "s-avenues"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-head"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Three avenues, one purpose"), /*#__PURE__*/React.createElement("h2", null, "Whatever brought you here, ", /*#__PURE__*/React.createElement("em", {
      className: "soul"
    }, "there's a path for you."))), /*#__PURE__*/React.createElement("div", {
      className: "avenue-grid"
    }, avenues.map(a => /*#__PURE__*/React.createElement(Card, {
      key: a.title,
      topEdge: "sage",
      hover: true
    }, /*#__PURE__*/React.createElement(Tag, null, a.for), /*#__PURE__*/React.createElement("h3", null, a.title), /*#__PURE__*/React.createElement("p", null, a.body), /*#__PURE__*/React.createElement("a", {
      className: "avenue-link",
      href: "#contact"
    }, a.link))))));
  }
  function Story() {
    const creds = [['Double board-certified', 'General Pediatrics & Integrative Medicine'], ['MD, MEd, MBA, FAAP, FABOIM', 'Stanford · UC San Diego · Harvard · Harbor-UCLA'], ['Founder & entrepreneur', 'Built the first pediatric DPC in greater Salt Lake'], ['Educator & mentor', 'Adjunct faculty, University of Utah School of Medicine']];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("section", {
      id: "story",
      className: "s-story"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap about-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "photo-frame"
    }, /*#__PURE__*/React.createElement("img", {
      src: STORY_IMG,
      alt: "Dr. Marina Capella, integrative physician, with a young patient"
    })), /*#__PURE__*/React.createElement("div", {
      className: "about"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "My story"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: '1.1rem'
      }
    }, "I went into medicine to heal. ", /*#__PURE__*/React.createElement("em", {
      className: "soul"
    }, "First, I had to heal myself.")), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: '1.4rem'
      }
    }, "I'm the daughter of Mexican immigrants, born in East LA, and the first in my family to navigate the long road to medicine. I earned my way to Stanford, then medical school, then residency \u2014 and along the way I learned something no one teaches you: our system trains its healers by traumatizing them."), /*#__PURE__*/React.createElement("p", null, "After years in insurance-based medicine, burned out and wondering if I'd wasted a decade of my life, I made a different choice. I built a practice on presence, intuition, and time \u2014 and rediscovered the healer I'd always been."), /*#__PURE__*/React.createElement(PullQuote, null, "\"True healing begins when we integrate everything we are \u2014 the science and the soul, the left brain and the right.\""), /*#__PURE__*/React.createElement("div", {
      className: "cred-strip"
    }, creds.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
      className: "cred",
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "mark"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, t), d))))))));
  }
  Object.assign(window, {
    Avenues,
    Story
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Avenues.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Chrome.jsx
try { (() => {
// Homepage UI kit — Header & Footer chrome
(() => {
  const {
    Button
  } = window.MarinaCapellaDesignSystem_53e3f9;
  function Header() {
    const [open, setOpen] = React.useState(false);
    const links = [['#story', 'My story'], ['#avenues', 'How I serve'], ['#book', 'The book'], ['#physicians', 'For physicians'], ['#speaking', 'Speaking']];
    return /*#__PURE__*/React.createElement("header", {
      className: "mc-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap mc-nav"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mc-logo",
      href: "#top"
    }, "Dr. Marina ", /*#__PURE__*/React.createElement("em", null, "Capella")), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("button", {
      className: "mc-nav-toggle",
      "aria-label": "Open menu",
      "aria-expanded": open,
      onClick: () => setOpen(o => !o)
    }, "\u2630"), /*#__PURE__*/React.createElement("ul", {
      className: open ? 'open' : '',
      onClick: () => setOpen(false)
    }, links.map(([href, label]) => /*#__PURE__*/React.createElement("li", {
      key: href
    }, /*#__PURE__*/React.createElement("a", {
      href: href
    }, label))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      href: "#contact"
    }, "Get in touch"))))));
  }
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "mc-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap foot-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      className: "mc-logo",
      href: "#top"
    }, "Dr. Marina ", /*#__PURE__*/React.createElement("em", null, "Capella")), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '36ch',
        marginTop: '.8rem',
        fontSize: '.85rem'
      }
    }, "Integrative physician, mentor, and community builder. Healing the healer \u2014 and reimagining what medicine can be.")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#avenues"
    }, "Healing Arts Pediatrics")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#avenues"
    }, "DPC Pediatrician")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#avenues"
    }, "Future Minority Doctor")))), /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap foot-fine"
    }, "\xA9 2026 Marina Capella, LLC \xB7 Umbrella homepage \xB7 Peaceful Media Brand-to-Web Strategy Workshop"));
  }
  Object.assign(window, {
    Header,
    Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Connect.jsx
try { (() => {
// Homepage UI kit — Speaking, Testimonials, Contact gatekeeper
(() => {
  const {
    Button,
    Eyebrow,
    Divider,
    Input,
    Select,
    Field
  } = window.MarinaCapellaDesignSystem_53e3f9;
  const SPEAKING_IMG = '../../assets/img/capella-with-infant.webp';
  function Speaking({
    onSpeak
  }) {
    const topics = ['Healing the healer: physician burnout, trauma & recovery', 'Integrative medicine: blending science and intuition', 'Direct primary care & physician entrepreneurship', 'Diversity in medicine & mentoring future doctors'];
    return /*#__PURE__*/React.createElement("section", {
      className: "s-speaking",
      id: "speaking"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap speaking-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "Speaking"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: '1.1rem'
      }
    }, "Invite Dr. Capella to ", /*#__PURE__*/React.createElement("em", {
      className: "soul"
    }, "your stage.")), /*#__PURE__*/React.createElement("p", {
      className: "mc-lede",
      style: {
        marginTop: '1.4rem'
      }
    }, "Marina speaks with warmth, honesty, and hard-won wisdom on:"), /*#__PURE__*/React.createElement("ul", {
      className: "topic-list"
    }, topics.map(t => /*#__PURE__*/React.createElement("li", {
      key: t
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '2rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#contact",
      onClick: onSpeak
    }, "Inquire about speaking"))), /*#__PURE__*/React.createElement("div", {
      className: "speaking-photo"
    }, /*#__PURE__*/React.createElement("img", {
      src: SPEAKING_IMG,
      alt: "Dr. Marina Capella \u2014 speaking portrait"
    }))));
  }
  function Testimonials() {
    const quotes = [['What I am most impressed with is how much time she takes with each of my children, never sitting behind a computer. She has a whole-body approach and is really interested in supporting my children\u2019s overall wellness, not just treating a symptom.', '— Leigh, Healing Arts Pediatrics family'], ['We left a big chain pediatric office for the more personalized, authentic and caring approach provided by Dr. Capella. This is how medical care should be! You are not just a number.', '— Janell, Healing Arts Pediatrics family'], ['Dr. Capella is out of this world good. She is quick to respond when we reach out with questions and really knows her stuff. We are members with her and couldn\u2019t be happier.', '— Alicia, Healing Arts Pediatrics family']];
    return /*#__PURE__*/React.createElement("section", {
      className: "s-quotes"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-head"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "What people say"), /*#__PURE__*/React.createElement("h2", null, "A calming presence. ", /*#__PURE__*/React.createElement("em", {
      className: "soul"
    }, "A caring touch."))), /*#__PURE__*/React.createElement("div", {
      className: "quote-grid"
    }, quotes.map(([q, c]) => /*#__PURE__*/React.createElement("div", {
      className: "quote",
      key: c
    }, /*#__PURE__*/React.createElement("blockquote", null, "\"", q, "\""), /*#__PURE__*/React.createElement("cite", null, c)))), /*#__PURE__*/React.createElement("p", {
      className: "quotes-fine"
    }, "Patient quotes published at healingartspediatrics.com \u2014 physician coaching & mentee testimonials to be added.")));
  }
  function Contact({
    intent,
    setIntent
  }) {
    const [sent, setSent] = React.useState(false);
    const routes = {
      clinic: /*#__PURE__*/React.createElement(React.Fragment, null, "Looking to join the practice? You'll find everything at ", /*#__PURE__*/React.createElement("a", {
        href: "#avenues"
      }, "healingartspediatrics.com"), " \u2014 or send your note below and we'll connect you."),
      consulting: /*#__PURE__*/React.createElement(React.Fragment, null, "Ready to dive in? Explore consulting, courses, and the podcast at ", /*#__PURE__*/React.createElement("a", {
        href: "#avenues"
      }, "dpcpediatrician.com"), " \u2014 or send your note below."),
      nonprofit: /*#__PURE__*/React.createElement(React.Fragment, null, "Learn more and get involved at ", /*#__PURE__*/React.createElement("a", {
        href: "#avenues"
      }, "futureminoritydoctor.com"), " \u2014 or send your note below.")
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("section", {
      className: "s-contact",
      id: "contact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap contact-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: '1.1rem'
      }
    }, "Let's find ", /*#__PURE__*/React.createElement("em", null, "the right avenue.")), /*#__PURE__*/React.createElement("p", null, "Tell us a little about what you're looking for, and Dr. Capella's team will point you in the right direction. Messages go to her support team, who make sure every inquiry lands where it belongs.")), sent ? /*#__PURE__*/React.createElement("div", {
      className: "route-note",
      style: {
        alignSelf: 'start'
      }
    }, "Thank you \u2014 your message is on its way to Dr. Capella's team. We'll be in touch soon.") : /*#__PURE__*/React.createElement("form", {
      className: "gatekeeper",
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "I'm reaching out about\u2026",
      htmlFor: "intent",
      onDark: true
    }, /*#__PURE__*/React.createElement(Select, {
      id: "intent",
      required: true,
      value: intent,
      onChange: e => setIntent(e.target.value)
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Choose one"), /*#__PURE__*/React.createElement("option", {
      value: "coaching"
    }, "Physician coaching or mentorship"), /*#__PURE__*/React.createElement("option", {
      value: "speaking"
    }, "Inviting Dr. Capella to speak"), /*#__PURE__*/React.createElement("option", {
      value: "book"
    }, "The book / media inquiries"), /*#__PURE__*/React.createElement("option", {
      value: "clinic"
    }, "Becoming a patient (Healing Arts)"), /*#__PURE__*/React.createElement("option", {
      value: "consulting"
    }, "DPC consulting & courses"), /*#__PURE__*/React.createElement("option", {
      value: "nonprofit"
    }, "Future Minority Doctor"), /*#__PURE__*/React.createElement("option", {
      value: "other"
    }, "Something else"))), routes[intent] && /*#__PURE__*/React.createElement("div", {
      className: "route-note"
    }, routes[intent]), /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Your name",
      htmlFor: "name",
      onDark: true
    }, /*#__PURE__*/React.createElement(Input, {
      id: "name",
      type: "text",
      required: true,
      placeholder: "Full name"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Email",
      htmlFor: "email",
      onDark: true
    }, /*#__PURE__*/React.createElement(Input, {
      id: "email",
      type: "email",
      required: true,
      placeholder: "you@example.com"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "Your message",
      htmlFor: "msg",
      onDark: true
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "msg",
      placeholder: "Share a bit about what you're hoping for\u2026"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      type: "submit"
    }, "Send message"))))));
  }
  Object.assign(window, {
    Speaking,
    Testimonials,
    Contact
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Connect.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Hero.jsx
try { (() => {
// Homepage UI kit — Hero & Proof strip
(() => {
  const {
    Button,
    StatBlock
  } = window.MarinaCapellaDesignSystem_53e3f9;
  const HERO_IMG = '../../assets/img/capella-with-infant.webp';
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      className: "s-hero",
      id: "top",
      style: {
        '--hero-img': `url('${HERO_IMG}')`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-identity"
    }, /*#__PURE__*/React.createElement("span", null, "Integrative Physician"), /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), /*#__PURE__*/React.createElement("span", null, "Mentor & Teacher"), /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), /*#__PURE__*/React.createElement("span", null, "Community Builder")), /*#__PURE__*/React.createElement("h1", null, "Healing the healer.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "ital"
    }, "Reimagining medicine.")), /*#__PURE__*/React.createElement("p", {
      className: "mc-lede"
    }, "I'm Dr. Marina Capella \u2014 a physician who learned, the hard way, that medicine can't heal anyone until it stops breaking its healers. I help physicians reclaim their power, families experience whole-person care, and the next generation of doctors see themselves in medicine."), /*#__PURE__*/React.createElement("div", {
      className: "hero-ctas"
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#book"
    }, "Join the mailing list"), /*#__PURE__*/React.createElement(Button, {
      variant: "light-ghost",
      href: "#avenues"
    }, "Explore my work")))));
  }
  function ProofStrip() {
    const stats = [['15+ years', 'practicing medicine'], ['First', 'pediatric DPC in greater Salt Lake'], ['200+', 'podcast episodes recorded'], ['Hundreds', 'of future doctors mentored']];
    return /*#__PURE__*/React.createElement("div", {
      className: "s-proof"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap proof-grid"
    }, stats.map(([f, l]) => /*#__PURE__*/React.createElement(StatBlock, {
      key: l,
      figure: f,
      label: l
    }))));
  }
  Object.assign(window, {
    Hero,
    ProofStrip
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Offerings.jsx
try { (() => {
// Homepage UI kit — Video band, Book signup, For-physicians
(() => {
  const {
    Button,
    Eyebrow,
    Input
  } = window.MarinaCapellaDesignSystem_53e3f9;
  function VideoBand() {
    return /*#__PURE__*/React.createElement("section", {
      className: "s-video"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      onDark: true
    }, "In her own words"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: '1.1rem'
      }
    }, "Some things can't be read. ", /*#__PURE__*/React.createElement("em", null, "They have to be felt.")), /*#__PURE__*/React.createElement("div", {
      className: "video-frame"
    }, /*#__PURE__*/React.createElement("iframe", {
      src: "https://www.youtube-nocookie.com/embed/dLif1pKPZVw",
      title: "From Burnout to Breakthrough \u2014 Dr. Marina Capella",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      loading: "lazy"
    })), /*#__PURE__*/React.createElement("p", {
      className: "video-note"
    }, "Interim video: \"From Burnout to Breakthrough\" interview \xB7 final brand video via Peaceful Media video team")));
  }
  function BookSection({
    onSignup
  }) {
    const [done, setDone] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const submit = e => {
      e.preventDefault();
      if (!email) return;
      setDone(true);
      onSignup && onSignup();
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "s-book",
      id: "book"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap book-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "book-cover",
      "aria-label": "Book cover concept"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bk-title"
    }, "Awakening My Healer's Soul"), /*#__PURE__*/React.createElement("div", {
      className: "bk-author"
    }, "Marina Capella, MD"), /*#__PURE__*/React.createElement("div", {
      className: "bk-note"
    }, "[ Working title \xB7 cover concept only ]"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Coming soon"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: '1.1rem'
      }
    }, "A book for every healer who forgot ", /*#__PURE__*/React.createElement("em", {
      className: "soul"
    }, "they were one.")), /*#__PURE__*/React.createElement("p", {
      className: "mc-lede",
      style: {
        marginTop: '1.4rem'
      }
    }, "My first book tells the truth about how medicine breaks its healers \u2014 and how we take our power back. Part memoir, part guide, it's the story of my own burnout, healing, and return to medicine on my own terms."), done ? /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: '2rem',
        fontWeight: 600,
        color: 'var(--mc-sage-deep)',
        fontFamily: 'var(--mc-font-serif)',
        fontStyle: 'italic',
        fontSize: '1.2rem'
      }
    }, "You're on the list. Thank you for walking this journey with me.") : /*#__PURE__*/React.createElement("form", {
      className: "signup",
      onSubmit: submit
    }, /*#__PURE__*/React.createElement(Input, {
      pill: true,
      type: "email",
      required: true,
      placeholder: "Your email address",
      "aria-label": "Email address",
      value: email,
      onChange: e => setEmail(e.target.value)
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit"
    }, "Keep me posted")), /*#__PURE__*/React.createElement("p", {
      className: "book-fine"
    }, "No noise \u2014 just meaningful updates on the book, events, and new resources."))));
  }
  function Physicians() {
    const cards = [['Reclaim your power', 'Recognize the trauma woven through medical training, name your burnout honestly, and begin the work of healing — so you can keep being a healer without losing yourself.'], ['Integrate left & right brain', "You've mastered the science. I'll help you trust your intuition again — the part of you that knows what your patients, and your life, actually need."], ['Build a practice that fits', 'Practical, been-there guidance on direct care entrepreneurship — from someone who grew a startup clinic into a thriving practice without sacrificing her values.']];
    return /*#__PURE__*/React.createElement("section", {
      className: "s-physicians",
      id: "physicians"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mc-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-head wide"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "For physicians"), /*#__PURE__*/React.createElement("h2", null, "You learned to use the microscope. ", /*#__PURE__*/React.createElement("em", {
      className: "soul"
    }, "Let's relearn how to step back and see the forest.")), /*#__PURE__*/React.createElement("p", {
      className: "mc-lede",
      style: {
        marginTop: '1.4rem'
      }
    }, "Coaching and mentorship for physicians who are ready to heal from a system that taught them to override their intuition \u2014 and to build careers that feed their souls instead of consuming them.")), /*#__PURE__*/React.createElement("div", {
      className: "healer-grid"
    }, cards.map(([t, b]) => /*#__PURE__*/React.createElement("div", {
      className: "healer-card",
      key: t
    }, /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, b)))), /*#__PURE__*/React.createElement("div", {
      className: "podcast-callout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mic"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "3",
      width: "6",
      height: "11",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 11a7 7 0 0 0 14 0M12 18v3"
    }))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "200+ episodes of free guidance."), " On the DPC Pediatrician podcast, I share everything I've learned about building a direct care practice \u2014 the strategy, the mindset, and the soul work."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      href: "#contact"
    }, "Listen to the podcast"))));
  }
  Object.assign(window, {
    VideoBand,
    BookSection,
    Physicians
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Offerings.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
