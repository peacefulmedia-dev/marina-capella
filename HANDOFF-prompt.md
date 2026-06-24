# Handoff — continue the Dr. Marina Capella homepage design

## Context
You're picking up an in-progress design project for **Dr. Marina Capella**, an integrative physician, mentor, and community builder. Peaceful Media (the user) is building her umbrella brand site. This is **iterative refinement** of a homepage she already likes — not a redesign. The most recent round of work pivoted her messaging toward a new direction (see "The new direction" below); keep building on it.

## Project + design system
- Project: **MC - Home Page**. Working folder: `Marina Capella Home/`.
- Bound design system: **Marina Capella Design System** (already attached). Follow it strictly — don't invent colors, type, or components. Warm earthy palette on cream (never stark white), Fraunces + Figtree type, two-part headlines with an italic "soul" turn, terracotta = clickable only, ochre = lines only, sage panels punctuate the scroll, footer is deep forest.
- Call transcripts in `scraps/` (incl. `Roadmap-2.pdf`, the most recent client feedback). Read them for her voice and priorities. Her **primary audience is physicians seeking coaching & mentorship** — when in doubt, write to physicians, not patients. She also wants a mailing list for her forthcoming book and a gatekeeper contact form.

## START HERE — the current design
**`Marina Capella Home/index.html`** is the live working file and your starting point. It represents the **Round 2 direction** built on her Roadmap #2 feedback + her email requesting a new messaging direction.

### The new direction (already implemented in index.html)
- **New north-star message: "the new model of medicine" / "Integrative Medicine 2.0."** This replaced the older "Healing the healer. Reimagining medicine." framing as the lead, though that line still lives as a fallback option in the control box. The voice now centers **physicians** (coaching/mentorship to heal from burnout and relearn the intuitive, soul-centered side of medicine) rather than patients.
- **New thesis section `#newmodel`** ("The new model of medicine") — a deep-sage contrast band, physician-focused, with headline "You mastered the science. *Now reclaim the soul of medicine.*" and three pillars (Relearn your intuition / Science and soul, integrated / Heal the healer first). Uses the "Integrative Medicine 2.0" line.
- **The 3 avenue boxes now point to INTERNAL anchors**, not the external sites: A new model of medicine → `#newmodel`, Coaching & mentorship → `#physicians`, The book → `#book`. (Her three most important topics.)
- **Section order**: hero → affiliations strip → avenues → **the new model** → **my story** → **the book** → **for physicians** → video → speaking → testimonials → contact. The book was deliberately moved up for prominence, then settled below My Story per her request.
- **Book section redesigned** — richer **forest gradient background** (was too beige), a standing-book cover on a pedestal shadow, an editorial pull-quote, and the mailing-list signup. Three CSS-built **cover concepts** (Sunrise / Forest / Sage) — no final cover art exists yet; when a real cover image arrives, wire an upload slot.
- **For physicians** — the "Reach out about coaching" CTA sits **below** the 3 columns (separated by a divider), and the **podcast callout is a standout deep-sage module** so the two CTAs don't compete.
- **Hero buttons**: primary = "Explore the new model" (→ `#newmodel`), ghost = "Join the mailing list" (→ `#book`).
- Footer reads "Homepage concept 2".

### The control box (internal client-review tool — important)
There's a fixed **"Headline options"** panel bottom-right of `index.html` (self-contained markup + `<style>` + `<script>` near the end of the file, just before the Tweaks panel). It is an **internal tool for showing the client options — remove it before final launch.** It lets the team:
- Toggle between **3 hero headline options** (and edit any line inline).
- Edit the **hero paragraph** and **both hero button labels** inline.
- Toggle the **book cover** concept (Sunrise / Forest / Sage).
- Toggle the **book section background style** (Forest / Sage / Cream).
- All selections + edits persist in `localStorage` (current key `mc-headline-options-v6`). When you change the defaults, **bump the KEY version** (v6 → v7…) so stale saved state doesn't mask your new defaults. The box minimizes to a pill and hides in print.

Current 3 headline options: 1) "Welcome to the *new model of medicine.*" 2) "Reimagining medicine, *starting with the healer.*" 3) "Integrative Medicine 2.0. *The next era of healing.*"

## Architecture notes
- v2-specific overrides + all the new-direction CSS (newmodel band, book redesign, control box, physicians CTA/podcast) live **inline in `index.html`'s `<head><style>`**. Shared base styles are in `css/`, scripts in `js/`, images in `assets/`. The control box logic is a standalone IIFE at the bottom of `index.html`.
- Hero uses a feathered image (`assets/img/marina-hero-feathered.webp`) whose left edge is baked transparent so it dissolves into the forest fill — don't reintroduce a fixed-width CSS mask. Background framing: `background-size: auto 122%`, position `0% 36%`, `no-repeat`.

## Other files (don't touch unless asked)
- `Home-Page-Round-1.html` — the earlier round the client wanted preserved as a clean fallback.
- `Home-Page-Round-2-v1.html` — snapshot of the Round 2 direction before this chat's edits.
- `Home-Page-original-concept.html`, `Design-Notes*.html`, `Call-Agenda.html`, `*-standalone.html`, `Book-Cover-Options.html` — archives / client-facing docs. `Book-Cover-Options.html` has a pre-existing lint finding; ignore it.

## How to work
- Iterate on `index.html`. Ask clarifying questions before substantial changes. For new versions/variations, prefer toggles in the control box (or Tweaks) over forking into many files.
- File names use hyphens, no spaces. Copy `index.html` to a versioned name before any large rewrite so prior rounds are preserved.
- End each task with `ready_for_verification`. The only expected lint finding is the pre-existing `Book-Cover-Options.html` one.

## Likely next steps (confirm with the user)
Snapshot the current state as `Home-Page-Round-2-v2.html` if not done. Open items: finalize which of the 3 headlines she picks (then the control box can be retired), real book cover art + upload slot, lock the book subtitle, gather physician/mentee testimonials, and confirm whether "Community Builder" stays in her identity line (she was mixed on it). Ask which this round should address.
