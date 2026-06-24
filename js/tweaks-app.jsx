// MC Tweaks — motion controls for the Marina Capella home page.
// Mounts an isolated React root; the panel only appears when the host
// activates Tweaks mode. Effects are applied as classes on <html>, which
// the vanilla interactive.js reads at runtime.
const MC_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "New model of medicine",
  "headlineFont": "Spectral",
  "bodyFont": "Hanken Grotesk",
  "motion": "balanced",
  "parallax": true,
  "tilt": true,
  "autoDemo": true
}/*EDITMODE-END*/;

const MC_HERO = {
  'New model of medicine': 'newmodel',
  'Reimagining medicine': 'reimagining',
  'Healing the healer (round 1)': 'healer'
};

const MC_DISPLAY_STACKS = {
  'Spectral': "'Spectral', Georgia, 'Times New Roman', serif",
  'Source Serif 4': "'Source Serif 4', Georgia, 'Times New Roman', serif",
  'Newsreader': "'Newsreader', Georgia, 'Times New Roman', serif",
  'Fraunces': "'Fraunces', Georgia, 'Times New Roman', serif"
};
const MC_BODY_STACKS = {
  'Hanken Grotesk': "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif",
  'Figtree': "'Figtree', system-ui, -apple-system, 'Segoe UI', sans-serif",
  'Mulish': "'Mulish', system-ui, -apple-system, 'Segoe UI', sans-serif"
};

function MCTweaks() {
  const [t, setTweak] = useTweaks(MC_TWEAK_DEFAULTS);

  React.useEffect(function () {
    const hero = document.querySelector('.hero');
    if (hero && MC_HERO[t.hero]) hero.setAttribute('data-hero', MC_HERO[t.hero]);
  }, [t.hero]);

  React.useEffect(function () {
    const s = document.documentElement.style;
    if (MC_DISPLAY_STACKS[t.headlineFont]) s.setProperty('--font-display', MC_DISPLAY_STACKS[t.headlineFont]);
    if (MC_BODY_STACKS[t.bodyFont]) s.setProperty('--font-body', MC_BODY_STACKS[t.bodyFont]);
  }, [t.headlineFont, t.bodyFont]);

  React.useEffect(function () {
    const c = document.documentElement.classList;
    c.toggle('calm-motion', t.motion === 'calm');
    c.toggle('no-parallax', !t.parallax || t.motion === 'calm');
    c.toggle('no-tilt', !t.tilt || t.motion === 'calm');
    c.toggle('no-demo', !t.autoDemo);
  }, [t.motion, t.parallax, t.tilt, t.autoDemo]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero headline" />
      <TweakSelect
        label="Headline"
        value={t.hero}
        options={['New model of medicine', 'Reimagining medicine', 'Healing the healer (round 1)']}
        onChange={function (v) { setTweak('hero', v); }}
      />
      <TweakSection label="Typography" />
      <TweakSelect
        label="Headline font"
        value={t.headlineFont}
        options={['Spectral', 'Source Serif 4', 'Newsreader', 'Fraunces']}
        onChange={function (v) { setTweak('headlineFont', v); }}
      />
      <TweakSelect
        label="Body font"
        value={t.bodyFont}
        options={['Hanken Grotesk', 'Figtree', 'Mulish']}
        onChange={function (v) { setTweak('bodyFont', v); }}
      />
      <TweakSection label="Motion" />
      <TweakRadio
        label="Overall feel"
        value={t.motion}
        options={['calm', 'balanced']}
        onChange={function (v) { setTweak('motion', v); }}
      />
      <TweakToggle
        label="Hero parallax"
        value={t.parallax}
        onChange={function (v) { setTweak('parallax', v); }}
      />
      <TweakToggle
        label="Card tilt"
        value={t.tilt}
        onChange={function (v) { setTweak('tilt', v); }}
      />
      <TweakSection label="Centerpiece" />
      <TweakToggle
        label="Auto-demo on scroll"
        value={t.autoDemo}
        onChange={function (v) { setTweak('autoDemo', v); }}
      />
    </TweaksPanel>
  );
}

(function () {
  const root = document.getElementById('mc-tweaks-root');
  if (root && window.ReactDOM && ReactDOM.createRoot) {
    ReactDOM.createRoot(root).render(<MCTweaks />);
  }
})();
