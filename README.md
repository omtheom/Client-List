# Client List — Case Study Site

A single-page, mobile-first case study for *Client List: The Hidden Treasure Within Kenyan Small & Midsize Companies* by Frank Owen — written in first person, as his own personal portfolio piece.

## Run it locally

No build step. Plain HTML/CSS/JS.

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Or just double-click `index.html` — it works directly from the filesystem too, though a local server is recommended so relative image paths always behave the same as in production.)

## Replacing the placeholder images

The site uses exactly 14 photos, one per slot below — no more. Every slot currently shows a labelled placeholder (stone-toned, with a diamond mark and a caption describing exactly what belongs there) so the page reads as intentional before real photography goes in. All of them live in `images/`.

Five of these are photos you've already shared in conversation — they're marked below. Save each one into `images/` under the exact filename shown, then update its one-line reference in `index.html` (search for the current filename and swap the extension/name — any format works: `.jpg`, `.png`, `.webp`).

| # | File | Where it appears | What it should show |
|---|---|---|---|
| 1 | `images/portrait.svg` | About Me | **You already sent this** — your portrait in the light blue shirt, by the window |
| 2 | `images/cover.svg` | The Book | Product photo of the finished hardback cover — deep black, diamond motif — 4:5 |
| 3 | `images/process-01-ideation.svg` | Process, Step I — The Idea | **You already sent this** — the black-and-white silhouette, writing by a window at night |
| 4 | `images/process-02-interviews.svg` | Process, Step II — The Interviews (also used in the Method section) | You sitting face to face with a business owner during an interview |
| 5 | `images/process-03-manuscript.svg` | Process, Step III — The Manuscript | Drafting / redrafting the 200-page text |
| 6 | `images/process-04-interior.svg` | Process, Step IV — Designing the Interior | **You already sent this** — a typeset interior page (e.g. the "Conclusion" page, p.148) |
| 7 | `images/process-05-cover-design.svg` | Process, Step V — The Cover | Cover design work in progress |
| 8 | `images/process-06-printed-stacks.svg` | Process, Step VI — The Finished Book | Stacks of the printed, hardbound copies |
| 9 | `images/process-07-copyright.svg` | Process, Step VII — Copyright & Registration | **You already sent this** — the Kenya Copyright Board certificate |
| 10 | `images/process-08-production.svg` | Process, Step VIII — Production | The print run on the factory floor in China |
| 11 | `images/process-09-loading.svg` | Process, Step IX — Loading the Shipment | Containers being loaded for the journey to Kenya |
| 12 | `images/process-10-bill-of-lading.svg` | Process, Step X — The Paperwork | **You already sent this** — the bill of lading (Shenzhen → Mombasa, vessel NYK Fuji) |
| 13 | `images/process-11-distribution.svg` | Process, Step XI — Selling It Myself | Selling copies in a mall or public space in Kenya |
| 14 | `images/process-12-detail.svg` | Process, Step XII — A Reader, At Last | Your choice of closing image — a reader holding the book, or any detail you'd like to end on |

## Structure

- `index.html` — markup and copy
- `styles.css` — full stylesheet (colors, type, layout, responsive breakpoints, motion)
- `script.js` — nav scroll state + mobile menu behavior
- `images/` — placeholder art (SVG) for each of the 14 photo slots
