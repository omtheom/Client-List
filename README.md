# Client List — Case Study Site

A single-page, mobile-first case study for *Client List: The Hidden Treasure Within Kenyan Small & Midsize Companies* by Frank Owen. Built on the same design system (color, type, spacing, motion) as the Mapel Firm / Legacy Codex site.

## Run it locally

No build step. Three files, plain HTML/CSS/JS.

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Or just double-click `index.html` — it works directly from the filesystem too, though a local server is recommended so relative image paths always behave the same as in production.)

## Replacing the placeholder images

Every photo on the page is currently a labelled placeholder (deep-black/stone tone, with a caption describing exactly what should go there) so the site looks intentional and on-brand even before real photography is dropped in. All placeholders live in `images/`.

| File | Where it appears | Replace with |
|---|---|---|
| `images/cover.svg` | The Book section | Product photo of the finished *Client List* hardback cover (deep black, diamond motif) — 4:5 |
| `images/founder.svg` | Author section | Portrait of Frank Owen — 3:4 |
| `images/process-01-ideation.svg` | Process gallery | Early notes / concept sketches — 4:3 |
| `images/process-02-interviews.svg` | Process gallery + Method section | Frank Owen interviewing a business owner — 4:3 |
| `images/process-03-manuscript.svg` | Process gallery | Manuscript pages / drafting — 4:3 |
| `images/process-04-design.svg` | Process gallery | Interior layout / typesetting — 4:3 |
| `images/process-05-cover.svg` | Process gallery | Cover design in progress — 4:3 |
| `images/process-06-finished.svg` | Process gallery | Stacks of the finished printed book — 4:3 |
| `images/process-07-copyright.svg` | Process gallery | The copyright certificate — 4:3 |
| `images/process-08-shipping.svg` | Process gallery | Loading, containers, bill of lading — 4:3 |
| `images/proof-design.svg` | Proof section | Frank Owen writing/designing — 4:3 |
| `images/proof-production.svg` | Proof section | The overseas print run — 4:3 |
| `images/proof-distribution.svg` | Proof section | Selling copies in a mall / public space — 4:3 |

To swap one in: save your photo into `images/` and update the matching `url('images/…')` or `src="images/…"` reference in `index.html` to point at it (any format — `.jpg`, `.png`, `.webp` — works).

## Structure

- `index.html` — markup and copy
- `styles.css` — full stylesheet (colors, type, layout, responsive breakpoints, motion)
- `script.js` — nav scroll state + mobile menu behavior
- `images/` — placeholder art (SVG) for every photo slot
