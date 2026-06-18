# Dr. Marina Capella — Homepage

Static marketing site for Dr. Marina Capella. Plain HTML/CSS/JS — no build step,
no framework, no dependencies to install.

## Structure

```
index.html              # the page
css/
  styles.css            # brand styles + tokens
  interactive.css       # interaction/animation styles
js/
  main.js               # scroll reveals, mobile nav
  interactive.js        # video embed, misc interactions
assets/
  img/                  # photography (webp) — hero, headshot, stethoscope, video thumb
  icons/mic.svg         # the one line-icon (podcast callout)
```

Fonts (Fraunces + Figtree) load from Google Fonts via `<link>` in `index.html`.
The "play video" button streams from YouTube on click. Both require internet at runtime.

## Deploy to Vercel

This is a zero-config static site — Vercel serves it as-is.

**Option A — Git (recommended):**
1. Push this folder to a GitHub repo (see below).
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework Preset: **Other**. Build Command: *(leave empty)*.
   Output Directory: *(leave empty / `.`)*. Click **Deploy**.

**Option B — CLI:**
```bash
npm i -g vercel
vercel            # from this folder; accept the defaults
vercel --prod     # promote to production
```

## Push to GitHub

```bash
cd deploy
git init
git add .
git commit -m "Dr. Marina Capella homepage"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

Every push to `main` triggers an automatic Vercel deploy once the repo is linked.

## Notes

- No `vercel.json` is needed for a static site at the repo root.
- To host the entire repo but keep the site in this subfolder, set Vercel's
  **Root Directory** to `deploy/` in project settings.
- The in-browser "Tweaks" editing panel from the design prototype is intentionally
  **not** included here — it is a design tool, not part of the live site.
