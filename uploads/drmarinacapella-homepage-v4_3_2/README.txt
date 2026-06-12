Dr. Marina Capella — Homepage Concept v4.3
Peaceful Media · Brand-to-Web Strategy Workshop

HOW TO VIEW
Open index.html in any browser. No server or build step required.
(Google Fonts + interim photos load from the web; code is local.)

STRUCTURE
  index.html               — page markup
  css/styles.css           — all styles (palette tokens at top of file)
  js/main.js               — scroll reveal, mobile nav, form interactions
  assets/                  — photo localization kit (get-photos.sh + README)
  ACCESSIBILITY-NOTES.txt  — WCAG 2.1 AA audit summary (client-shareable)

NEW IN v4.3
- Nav links right-aligned; Dr. Capella's name sits alone on the left;
  mobile menu toggle moves to the right edge to match.
- Fixed "Get in touch" hover: a nav hover rule was recoloring the
  button label dark-on-dark; label now stays cream (6.56:1).
- Soft top-light gradient wash on the five large cream sections
  (only ever lighter than base cream — AA ratios hold or improve).
- "For physicians" headline holds to two rows (container widened);
  all headlines now balance their line breaks (text-wrap:balance).
- Speaking topics restyled as an editorial numbered index — Fraunces
  italic 01–04 numerals in cream, hairline-framed.
- Hero focal point set right-of-center via --hero-focus-x:35%
  (single tunable variable, governs desktop + mobile).

NEW IN v4.2
- Hero photo mirrored (CSS transform) so Dr. Capella faces IN from the
  RIGHT; the main subject now sits on the right side of the frame.
- Headline block left-aligned flush with the logo (the v4.1 flex
  shrink-wrap quirk that centered it is fixed); hero copy narrowed to
  640px, opening the right side to the photo.
- Scrim rebuilt on its own layer (not flipped with the photo) and
  engineered so hero text passes AA even over a pure-white photo area.
- Full WCAG 2.1 AA contrast pass: deeper terracotta for CTAs/links,
  deep-sage step for panels + small green text, light contact-form
  fields, visible focus rings, fixed input borders & footer fine print.
  Hues unchanged — see ACCESSIBILITY-NOTES.txt for every ratio.
- A11y structure: skip link, <main> landmark, aria-controls on the
  menu toggle, polite live-region routing hints, decorative SVG hidden.
- assets/get-photos.sh downloads the three live photos for local
  hosting; LOCAL SWAP comments sit next to each hotlink in the code.

v4 PALETTE — 5-COLOR SYSTEM (client-approved swatch, AA-tuned shades)
  Deep Forest      #1C2F22  all headings, body copy, nav links; footer
  Sage Green       #667B57  large display accents + decorative
    deep step      #526547  contrast panels + small green text on cream
  Warm Ochre       #C2A385  layout accent — hairlines, dividers,
                            borders, stat separators, markers
  Soft Cream       #EADCC9  global background (no stark white)
  Muted Terracotta #A36B51  approved swatch — large display use
    deep step      #8A5238  CTA buttons & text links (never decorative)

LIVE INTERIM ASSETS (verified live 6/11/26 — internet required)
  Hero bg    Squarespace CDN — "Dr. Capella with infant" (CSS-mirrored)
  Story      Squarespace CDN — H51A0927 portrait
  Speaking   Squarespace CDN — H51A0844 portrait
  Video      YouTube embed — "From Burnout to Breakthrough"
             interview (youtube-nocookie.com/embed/dLif1pKPZVw)
  Quotes     Real patient testimonials published on
             healingartspediatrics.com

FOR BUILD PHASE
- Localize photos: run assets/get-photos.sh, then flip the LOCAL SWAP
  comment lines in css/styles.css (.hero::before) and index.html
- Final brand photo shoot + Peaceful Media brand video replace
  the interim assets
- Add physician coaching + Future Minority Doctor mentee quotes
- Form routing to support inbox + email platform integration
