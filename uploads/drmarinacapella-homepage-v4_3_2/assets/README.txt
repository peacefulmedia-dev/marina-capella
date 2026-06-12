assets/ — Dr. Marina Capella homepage v4.2

This folder ships empty on purpose. The prototype hotlinks Marina's real
photos from the Healing Arts Pediatrics Squarespace CDN so it shows real
content out of the box (internet required to view). Verified live 6/11/26.

TO LOCALIZE THE PHOTOS (recommended before the production build):
  1. From this folder, run:   bash get-photos.sh
     → saves hero.png, story.jpg, speaking.jpg here
  2. In css/styles.css (.hero::before rule) and index.html (two <img>
     tags), swap each CDN URL for the adjacent commented LOCAL SWAP line.

Expected files once localized:
  hero.png      "Dr. Capella with infant" — hero background.
                Mirrored via CSS (transform:scaleX(-1)) so she faces in
                from the right; the source file itself is NOT flipped.
  story.jpg     H51A0927 portrait — "My story" section
  speaking.jpg  H51A0844 portrait — Speaking section

These remain interim assets: the final brand photo shoot and Peaceful
Media brand video will replace them in the build phase.
