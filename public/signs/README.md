# Sign clips

Drop looping clips here to populate the SIGNiFy gallery on the site —
no code changes needed, the gallery just looks for these filenames:

- hello.gif
- thank-you.gif
- please.gif
- yes.gif
- no.gif
- help.gif

## Spec that works well

- Format: animated **GIF** or **WebP** (looping) — `<img>`-compatible,
  so no video player needed
- Length: 2–4 second loop
- Size: keep each under ~2–3MB so the page stays fast
- Square-ish aspect ratio (e.g. 400×400) looks cleanest in the grid,
  but any ratio will render fine

To add a different sign, add an entry to `src/data/signClips.js` with
the word and filename, then drop the matching file in here.

Until a file exists, that sign's tile shows a placeholder — nothing
breaks, so you can add clips one at a time.
