# Marina Capella — Design System

A design system for the **personal brand of Dr. Marina Capella** — an integrative
physician, mentor, and community builder. This system powers her umbrella website
and any future brand assets (book launch, speaking, mailing-list funnels, decks).

Built by **Peaceful Media** during the Brand-to-Web Strategy Workshop (June 2026).

---

## Who this is for

Dr. Marina Capella is the daughter of Mexican immigrants, born in East LA, and the
first in her family to navigate the long road to medicine — Stanford, then medical
school, residency, and an MBA. She is **double board-certified in General Pediatrics
& Integrative Medicine** (MD, MEd, MBA, FAAP, FABOIM) and adjunct faculty at the
University of Utah School of Medicine.

Her brand sits at the intersection of three identities she insists are *integrated*,
not separate:

1. **Integrative Physician** — whole-person medicine that blends the best of modern
   medicine with healing modalities (clinical hypnosis, myofascial release, herbalism).
2. **Mentor & Teacher** — coaching physicians out of burnout, mentoring future doctors.
3. **Community Builder** — pouring resources into the next generation.

The umbrella site unifies **three existing "avenues"** (separate businesses she runs),
routing each audience to the right place:

| Avenue | Audience | What it is |
|---|---|---|
| **Healing Arts Pediatrics** | Families | Her integrative clinic in Salt Lake City |
| **DPC Pediatrician** | Physicians | Consulting, courses & a 200+ episode podcast on direct primary care |
| **Future Minority Doctor** | Future doctors | Her nonprofit empowering underrepresented students |

**Primary goal of the umbrella brand:** attract *physicians seeking coaching &
mentorship*, build a mailing list (for her forthcoming book), and field speaking
inquiries — all behind a single contact "gatekeeper" form. The north-star message is
**"Healing the healer. Reimagining medicine."**

---

## Sources (for reference — reader may not have access)

- **Codebase** — `drmarinacapella-homepage-v4_3_1.zip` → extracted to `codebase/`.
  A complete static homepage concept (v4.3) by Peaceful Media: `index.html`,
  `css/styles.css` (the palette + token source of truth), `js/main.js`,
  `README.txt`, `ACCESSIBILITY-NOTES.txt`. **This is the canonical design source.**
- **`graph.png`** — the client-approved 5-color swatch.
- **`Dr.+Capella+with+infant.webp`** — real brand photo (hero). Copied to
  `assets/img/capella-with-infant.webp`.
- **`Marina-Capella-Roadmap-1-…pdf`** — Roadmap call #1 transcript (discovery: voice,
  audiences, "avenues", "healing the healer" tagline origin).
- **`Peaceful-Media-x-Marina-Capella-…pdf`** — intro call transcript (background, the
  three businesses, the umbrella-site vision).
- **Live brands:** healingartspediatrics.com · dpcpediatrician.com · futureminoritydoctor.com

Interim photography is hot-linked from the Healing Arts Squarespace CDN in the original
codebase; a final brand shoot + Peaceful Media brand video will replace them in build.

---

## CONTENT FUNDAMENTALS

The copy is **soul-forward and personal** — the client explicitly chose "more soul"
over clinical credential-stacking, while still wanting her mastery to land.

- **Voice: first-person "I", speaking to "you".** "*I'm Dr. Marina Capella — a physician
  who learned, the hard way, that medicine can't heal anyone until it stops breaking its
  healers.*" Warm, honest, a little vulnerable, hard-won.
- **Calm and unhurried.** Mirrors how patients describe her: "a calming presence",
  "never sitting behind a computer". Copy steps *back* to see the big picture; it never
  hard-sells or shouts.
- **Integration is the through-line.** The recurring intellectual idea is uniting the
  **left and right brain** — science *and* soul, microscope *and* forest. Headlines lean
  on this: "*You learned to use the microscope. Let's relearn how to step back and see the
  forest.*"
- **Headlines are two-part, with an italic "soul" turn.** A grounded statement, then an
  italicized sage continuation: "*A book for every healer who forgot* **they were one.**"
  / "*Whatever brought you here,* **there's a path for you.**" This is the signature copy
  device — pair it with the `em.soul` / `.mc-soul` type treatment.
- **Empowerment, not prescription.** She helps people trust their own intuition: "*I help
  physicians reclaim their power… and the next generation of doctors see themselves in
  medicine.*" Avoid commanding/savior language.
- **Sentence case everywhere.** Headlines and buttons are sentence case ("Join the mailing
  list", "Keep me posted", "Explore my work"). Only **eyebrows** and **audience tags** are
  uppercase, and always letter-spaced (e.g. `THREE AVENUES, ONE PURPOSE`, `FOR PHYSICIANS`).
- **Credentials stated plainly, then humanized.** Lead with the facts ("Double
  board-certified", "MD, MEd, MBA, FAAP, FABOIM · Stanford · Harvard"), then let the story
  carry the soul. Don't be shy about the pedigree — as a woman of color in medicine she
  earned it — but never lead with a wall of letters.
- **No emoji. No exclamation-point hype. No jargon-slop.** Numbers are used sparingly and
  only when true and meaningful ("15+ years", "200+ podcast episodes", "Hundreds of future
  doctors mentored").
- **Microcopy is gentle & reassuring:** "No noise — just meaningful updates." / "Tell us a
  little about what you're looking for, and Dr. Capella's team will point you in the right
  direction."

### Voice cheat-sheet
| Do | Don't |
|---|---|
| "Let's find *the right avenue*." | "Submit your inquiry below." |
| "Healing the healer." | "Unlock your potential!!!" |
| "There's a path for you." | "Choose your plan." |
| Sentence case, italic soul-turns | ALL-CAPS HYPE, emoji |

---

## VISUAL FOUNDATIONS

The aesthetic is **warm, earthy, calm, and quietly editorial** — "professional and crisp,
but earthy", a deliberate blend of feminine and masculine, nature-evoking but never
"woo". Lots of whitespace; never busy.

- **Color — a 5-swatch earthy palette on cream.** Deep Forest (`#1C2F22`) for all text &
  the footer anchor; Sage Green (`#667B57`, deep step `#526547`) for accents & contrast
  panels; Warm Ochre (`#C2A385`) strictly for *lines* (hairlines, dividers, borders,
  marks); Soft Cream (`#EADCC9`) as the **global background — never stark white**;
  Muted Terracotta (deep step `#8A5238`) **reserved for clickable CTAs & links only**.
  See `tokens/colors.css`. The discipline: *terracotta = clickable*, *ochre = decorative
  line*, *sage panels punctuate the scroll*.
- **Type — Fraunces + Figtree.** Fraunces (optical serif, set **light**, weight ~340–400,
  frequently *italic*) for every display moment; Figtree (humanist sans) for body & UI.
  Headlines are large, balanced, low letter-spacing; eyebrows are tiny uppercase
  `0.22em`-tracked sans labels.
- **Backgrounds.** Base cream everywhere. Large cream sections carry a **soft top-light
  radial wash** (only ever *lighter* than cream — `.mc-wash`). Contrast bands use the
  **deep-sage** solid (video, speaking, contact). The footer is **deep forest**. The hero
  is a **full-bleed photograph** with an engineered left-to-right forest scrim that keeps
  text readable. No purple gradients, no noise textures, no glassmorphism.
- **Photography.** Real, warm, natural-light documentary portraits — Dr. Capella with
  patients/families, soft focus, earthy wardrobe (terracotta/sage), greenery in frame.
  Cool/clinical stock is off-brand. Photos sit in soft-cornered frames with deep,
  low-opacity forest shadows; the hero photo is CSS-mirrored so the subject faces *in*.
- **Corners & cards.** Cards: `14px` radius, `1px` ochre hairline border, a **3px colored
  top edge** (sage on avenues/quotes), cream-card surface (`#F2E8D6` — a tint, not white).
  Buttons & inputs: full `999px` pills (inputs sometimes `12px` soft rectangles).
- **Shadows.** Always **low-opacity forest**, never black: card hover `0 18px 40px
  rgba(28,47,34,.14)`, photo frames `0 26px 52px /.22`, book cover `0 30px 56px /.32`.
  CTA hover adds a warm terracotta glow.
- **Borders & rules.** Ochre hairlines (`rgba(194,163,133,.55)`) separate sections;
  dividers are a gradient ochre line centered on a rotated **sage diamond**; stat
  separators are vertical ochre gradient hairlines; credentials/markers use a small
  rotated sage diamond.
- **Motion.** Restrained and soft. Scroll-reveal **fade-up** (`opacity` + 24px translateY,
  `.7s ease`) as elements enter; cards **lift** `-6px` on hover; buttons lift `-2px` with a
  shadow bloom. Easing is a gentle `cubic-bezier(.4,0,.2,1)`. **No bounces, no infinite
  loops.** Everything respects `prefers-reduced-motion`.
- **Hover / press states.** Links & ghost buttons darken (terracotta → darker terracotta)
  or fill in; primary buttons darken + lift + glow; nav links recolor forest → terracotta;
  card "→" arrows nudge right. Press isn't a shrink — it's the settled (un-lifted) state.
- **Transparency & blur.** Used sparingly and purposefully: the sticky header is
  `rgba(cream,.94)` + `backdrop-filter: blur(8px)`; the hero scrim is layered forest
  alpha. Form fields are **solid** cream-card (translucent fields were removed for
  contrast). No frosted-glass everywhere.
- **Layout.** A `1360px` max container with `clamp(24px,3.5vw,56px)` gutters; `6rem`
  vertical section rhythm (`4.5rem` on mobile); two-column splits collapse to one at
  ≤1000px; generous whitespace is the point. The header is the only fixed element.
- **Accessibility is part of the brand.** The whole palette is WCAG 2.1 AA-tuned (deeper
  shades where small text sits on color), with context-aware focus rings, skip links, and
  reduced-motion support. See `codebase/ACCESSIBILITY-NOTES.txt`.

---

## ICONOGRAPHY

The brand is **near-iconless by design** — it leans on type, photography, and hairline
ochre rules rather than an icon set. What little iconography exists is intentional:

- **Decorative diamonds (▱ rotated squares).** Small `7px` sage squares rotated 45° act as
  bullets/markers (credential strip, divider centerpiece). These are CSS shapes, not an
  icon font — recreate with a rotated `<span>`, never an emoji.
- **One line-icon: a microphone.** The "200+ episodes" podcast callout uses a single
  inline **stroked SVG mic** (1.8px stroke, cream on a sage circle). It matches a
  **Lucide / Feather** line-icon aesthetic: 24×24 viewBox, 1.5–1.8px stroke, round caps,
  no fill. If you need more icons, use **Lucide** (CDN: `lucide.dev`) at ~1.8px stroke in
  forest or cream — that is the closest match to the one icon in the system. Copied to
  `assets/icons/mic.svg`.
- **Arrows are typographic.** Links use a literal "→" character that nudges on hover, not
  an icon.
- **No emoji, ever.** No unicode-symbol icons beyond the arrow and the CSS diamond.
- **Logo / wordmark.** The brand mark is a **wordmark**, not a symbol: "Dr. Marina
  *Capella*" set in Fraunces, with "Capella" in deep-sage italic. See `assets/` and the
  Brand cards. There is no standalone logomark glyph.

Rule of thumb: reach for a **word, a rule, or a photo** before reaching for an icon.

---

## DO-NOT LIST (binding — client-rejected directions)

These are hard constraints carried over from the Peaceful Media workshop
(`guidelines/DESIGN.md` §9). Treat them as rules, not suggestions:

- **No stark white backgrounds** — cream (`#EADCC9`) is the floor, everywhere.
- **No ochre or display-sage at small text sizes** on cream (they fail AA — use
  deep-sage `#526547`). **No display-terracotta `#A36B51` on anything interactive**
  (buttons/links use deep terracotta `#8A5238`).
- **No arched portrait hero · no squiggle motif · no brown palette · no pale-sage
  tints · no taupe-rose · no narrow page width · no centered nav · no
  double-bordered photo mats.**
- The nonprofit is **Future Minority Doctor — never "Doctrine."**
- **Copy is client-approved** — solve layout problems with layout, not by rewriting copy.
- **Accessibility is binding (WCAG 2.1 AA).** Any *new* color pair must be verified,
  not eyeballed — see the ledger and verifier snippet in `guidelines/HANDOFF-v4.3.md`
  §8, and `codebase/ACCESSIBILITY-NOTES.txt`. Keep the deep steps (`#526547`, `#8A5238`)
  distinct from their display values (`#667B57`, `#A36B51`).

---

## Source documents

Two strategy/handoff docs from Peaceful Media are the binding reference for this system:

- **`guidelines/DESIGN.md`** — the brand system extracted from homepage v4.3
  (color roles, type, layout, components, imagery, motion, the do-not list). The
  authoritative spec.
- **`guidelines/HANDOFF-v4.3.md`** — project context, decision/version history,
  hero mechanics (§7), the full accessibility ledger with ratios (§8), and open
  build-phase items (§10).

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (an `@import` manifest).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill front-matter wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the
Design System tab, plus the binding source docs `DESIGN.md` and `HANDOFF-v4.3.md`.

**`components/`** — reusable React primitives (see each `*.prompt.md`):
- `core/` — `Button`, `Eyebrow`, `Card`, `Tag`, `Divider`, `PullQuote`
- `forms/` — `Input`, `Select`, `Field`
- `feedback/` — `StatBlock`

**`ui_kits/homepage/`** — high-fidelity, interactive recreation of the Dr. Marina Capella
umbrella homepage (hero, avenues, story, video, book, physicians, speaking, testimonials,
contact gatekeeper).

**`assets/`** — `img/` (brand photo), `icons/` (mic line-icon), wordmark.

**`codebase/`** — the original extracted homepage concept v4.3 (canonical source).
