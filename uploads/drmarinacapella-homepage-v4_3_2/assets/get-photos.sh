#!/usr/bin/env bash
# ------------------------------------------------------------------
# Dr. Marina Capella homepage — localize the interim photos (v4.2)
# Run from the assets/ folder:   bash get-photos.sh
# Downloads the three live photos currently hotlinked from the
# Healing Arts Pediatrics Squarespace CDN into this folder.
# Then flip the commented LOCAL SWAP lines in css/styles.css and
# index.html to point at these files instead of the CDN.
# ------------------------------------------------------------------
set -e

echo "Downloading hero photo (Dr. Capella with infant)…"
curl -L -o hero.png \
  "https://images.squarespace-cdn.com/content/v1/60b43dd988562054298e7f04/3b4c1f8d-e82e-48cd-9bdc-0466d89e342a/Dr.+Capella+with+infant.png?format=2500w"

echo "Downloading story portrait (H51A0927)…"
curl -L -o story.jpg \
  "https://images.squarespace-cdn.com/content/v1/60b43dd988562054298e7f04/441013dc-618b-4f36-87ef-6593a240b4ca/H51A0927.jpg?format=1500w"

echo "Downloading speaking portrait (H51A0844)…"
curl -L -o speaking.jpg \
  "https://images.squarespace-cdn.com/content/v1/60b43dd988562054298e7f04/3a0876b8-9cf3-4f56-a306-fec7c3765349/H51A0844.jpg?format=1500w"

echo
echo "Done. Files in $(pwd):"
ls -lh hero.png story.jpg speaking.jpg

# OPTIONAL — the hero mirror is currently done in CSS (transform:scaleX(-1)),
# which keeps the source file untouched. If you'd rather bake the flip into
# the file itself for the production build (and then delete the transform
# from .hero::before), ImageMagick does it in one line:
#   magick hero.png -flop hero.png
