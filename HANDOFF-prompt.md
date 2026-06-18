# Handoff — promote v2 to the primary homepage

## Today's goal
Make **`Home Page v2.html`** the primary `index.html`, and turn the **current `index.html`** into a standalone archive page (keep it, don't delete it).

## Project
- Project: **MC - Home Page**
- Working folder: `Marina Capella Home/`
- Bound design system: **Marina Capella Design System** (already attached to the project — follow it; don't invent colors/type/components).

## What these files are right now
- `index.html` — the original approved homepage concept (v4.3). Uses **interim photography** and the original copy. This is the version we're archiving.
- `Home Page v2.html` — the newer, client-reviewed version. It has the **real brand-shoot photos** and Marina's **authentic story copy**. This should become the live homepage.
- Both pages **share** `css/styles.css`, `css/interactive.css`, `js/main.js`, `js/interactive.js`, and the `assets/` folder.
- v2's differences from the original are mostly **inline** in its `<head>` `<style>` block and one inline `<script>` near the bottom — scoped so they don't affect the original. These cover: the real photos (hero/story/speaking), more-subtle video play buttons, and a second "lighter note" video.

## What changed in v2 vs original (so you understand the diff)
- **Hero photo** → Marina with the infant on the exam table; older kids cropped out; she sits right facing in; left side darkened for the copy; an unsharp pass applied so she reads crisp. File: `assets/img/marina-hero.webp`.
- **My Story photo** → warm dark-brown turtleneck portrait (`assets/img/marina-headshot.webp`).
- **Speaking photo** → green sweater + copper stethoscope, index.html crop (`assets/img/marina-speaking.webp`).
- **Story copy** → rewritten in Marina's first-person voice (humble roots, mother counting groceries, the "arrival fallacy," burnout serving safety-net/uninsured families, writing her own job description with her DPC in late 2021).
- **Credentials** → added Utah MBA + Noorda College of Osteopathic Medicine faculty; affiliation corrected to "Latino Physicians of Utah."
- **Video section** → note reads "Video placeholder — interim clip, final brand video to come."; added a second "A lighter note" *Defying Gravity* DPC-parody video; play buttons shrunk to 56px and made semi-transparent.

## The task
1. **Archive the original.** Copy the current `index.html` to a clearly-named standalone/archive page (e.g. `Home Page (original concept).html`) so it's preserved and viewable on its own. Keep its interim-photo references intact.
2. **Promote v2.** Make `Home Page v2.html`'s content the new `index.html`.
   - Watch the **shared assets**: both pages pull from the same `css/`, `js/`, and `assets/` folders. v2's photo/button changes live **inline in its own `<style>`/`<script>`**, so moving v2's full markup into `index.html` carries them along — but double-check no edit to shared `css`/`js` files would break the archived original page.
   - Keep the v2-specific inline overrides intact in the new `index.html`.
3. **Verify** the new `index.html` renders: hero photo + scrim, story portrait, speaking portrait, both videos with the smaller play buttons, correct copy/credentials. Confirm the archived original page still renders with its interim photos.
4. Leave the existing standalone bundles (`Home-Page-v2-standalone.html`, etc.) alone unless asked — regenerate a fresh standalone of the **new index.html** only if requested.

## Guardrails
- This is a **content/asset promotion**, not a redesign. Don't change layout, palette, type, or spacing.
- Don't delete anything — archive, don't remove.
- The unrelated lint finding about `Book Cover Options.html` is pre-existing; ignore it.
