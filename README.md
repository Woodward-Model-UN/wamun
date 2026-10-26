# Woodward Model UN — website

Static site, no build step. 4 pages plus a redirect, shared stylesheet, one small JS file.

## Files

| File | What it is |
|---|---|
| `index.html` | Home |
| `wamun-xii.html` | Conference: committees, logistics, registration |
| `wamun-xi.html` | Redirect to `wamun-xii.html`, so links to the old WAMUN XI address still work |
| `resources.html` | Position papers, procedure, resolutions |
| `photos.html` | Club photo gallery |
| `styles.css` | All layout, type, and color (Times New Roman throughout, no webfonts) |
| `motifs.css` | Background motif positioning |
| `site.js` | Injects the background motifs |
| `emblem.svg` | Globe-and-laurel mark. Each page carries its own inline copy, so a change here has to be pasted into every page |
| `guides/` | PDFs: the two committee background guides (linked from `wamun-xii.html`); the WAMUN Handbook, three sample position papers, and the resolution writing guide (linked from `resources.html`) |

## Deploy to GitHub Pages

Already configured: **Settings → Pages**, source `main`, folder `/ (root)`.
Push to `main` and the site rebuilds automatically at
`https://woodward-model-un.github.io/wamun/`.

For a custom domain: **Settings → Pages → Custom domain**, then add the DNS
records GitHub specifies at your registrar.

## Design notes

- **Colors** live as CSS variables at the top of `styles.css` (`:root`) — a
  UN-blue ramp from `--navy` (#0B2545) through `--blue-deep`, `--blue`,
  `--blue-un`, `--blue-mid`, `--blue-pale`, to `--blue-wash` (#EDF4FB).
  Changing those values re-skins every page at once.
- **The emblem** (globe + laurel wreath) is inline SVG in each page: small in
  the header/footer wordmark, large and faint as the hero watermark. It's
  vector, so it stays sharp at any size and takes its color from CSS.
- **Background motifs** (globe, country polygons, seated delegates, dot grid)
  are static SVGs injected by `site.js` and positioned by `motifs.css`.
  Adjust `.motif { opacity }` to make them more or less visible.
- **The Instagram orb** is the floating link in the bottom-right corner, on
  every page. It only spins on hover — no idle motion. Edit the handle in the
  `.ig-orb` anchor if it ever changes.
- **Motion**: the only animation on the site is a one-time settle-in on the
  hero (`h1`, lede, buttons) when a page loads. Nothing animates on scroll —
  an earlier version faded each section in as it scrolled into view, but that
  meant content below the fold never rendered for anyone who didn't scroll
  (a static export or a screen reader landing mid-page saw blank sections),
  so it's gone. `prefers-reduced-motion` still disables the hero settle-in.
- **No eyebrow badges.** Section headings stand on their own instead of
  carrying a small-caps label above them. The `.section-label` class is for
  a genuine standalone caption (the gallery heading uses it), not
  decoration above another heading.
- `.placard[data-code]` only draws its little tab when a `data-code`
  attribute is actually set — used for real committee shorthand (`GA`, `CC`)
  and real step numbers (`01`, `02`), not decoration.

## Content still needed

| Page | What's missing |
|---|---|
| `wamun-xii.html` | Campus map with this year's locations and the drop-off point; registration forms for outside schools and independent delegates |
| `resources.html` | Archive of resolutions passed at past WAMUN conferences |
| `photos.html` | Real photos for the six placeholder tiles |

Anything marked **Content to add** in a page is a placeholder meant to be
replaced, not styled around.
