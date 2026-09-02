# Woodward Model UN — website

Static site, no build step. 7 pages, shared stylesheet, one small JS file.

## Files

| File | What it is |
|---|---|
| `index.html` | Home |
| `wamun-xi.html` | Conference: committees, logistics, registration |
| `resources.html` | Position papers, procedure, resolutions |
| `calendar.html` | Timeline of the club year (nav label: Timeline) |
| `photos.html` | Club photo gallery |
| `cabinet.html` / `secretariat.html` | Leadership rosters |
| `styles.css` | All layout, type, and color (Times New Roman throughout, no webfonts) |
| `motifs.css` | Background motif positioning + scroll animation styles |
| `site.js` | Injects background motifs, runs scroll reveals and parallax |
| `emblem.svg` | Globe-and-laurel mark (inlined into pages by the build; edit here) |
| `images/` | Headshots and club photos |

## Deploy to GitHub Pages

Already configured: **Settings → Pages**, source `main`, folder `/root`.
Push to `main` and the site rebuilds automatically at
`https://27lyu-pixel.github.io/wamun-site/`.

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
- **Timeline entries** are `<li class="tl-item">` blocks in `calendar.html`.
  Add `major` for a larger marker on big dates, `done` to fill the marker once
  an event has passed. Duplicate or delete blocks freely.
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
  a genuine standalone caption (the roster and gallery headings use it), not
  decoration above another heading.
- `.placard[data-code]` only draws its little tab when a `data-code`
  attribute is actually set — used for real committee shorthand (`GA`, `CC`)
  and real step numbers (`01`, `02`), not decoration.

## Content still needed

| Page | What's missing |
|---|---|
| `wamun-xi.html` | Date, venue, fee, committee topics, background guides, chairs, logistics, registration form |
| `resources.html` | Position paper template, procedure sheet, resolution archive |
| `calendar.html` | Real dates, event names, and locations for each timeline entry |
| `photos.html` | Real photos for the six placeholder tiles |
| `cabinet.html` / `secretariat.html` | Names, roles, headshots |

Anything marked **Content to add** in a page is a placeholder meant to be
replaced, not styled around.
