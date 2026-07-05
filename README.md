# Client List — Case Study Site

A single-page, mobile-first case study for *Client List: The Hidden Treasure Within Kenyan Small & Midsize Companies* by Frank Owen — written in first person, as his own personal portfolio piece.

## Run it locally

No build step. Plain HTML/CSS/JS.

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Or just double-click `index.html` — it works directly from the filesystem too.)

## Images

All 14 photos plus the one video are live, hosted on your GoHighLevel media library (`assets.cdn.filesafe.space`) and referenced directly by URL in `index.html` — nothing local to manage. To swap any of them later, find the matching URL in `index.html` and replace it with a new one from your media library.

| Section | Asset |
|---|---|
| The Book (cover) | photo |
| Method — "How I Gathered The Evidence" | photo |
| Process I — The Idea | photo |
| Process II — The Interviews | photo |
| Process III — The Manuscript | photo |
| Process IV — Designing the Interior | photo |
| Process V — The Cover | photo |
| Process VI — The Finished Book | photo |
| Process VII — Copyright & Registration | photo |
| Process VIII — Production | photo |
| Process IX — Loading the Shipment | photo |
| Process X — The Paperwork | photo |
| Process XI — Selling It Myself | **video** (native player, no autoplay) |
| Process XII — A Reader, At Last | photo |
| About Me | photo |

**One judgment call worth double-checking:** two of the links you sent ("The Evidence" and "The Interviews") arrived as nested markdown — `[url-A](url-B)` — where the visible text was a URL that matched a different line elsewhere in your message, and the actual link target was a fresh, distinct URL. I used the link target (the part in parentheses) for both, on the assumption the bracketed text was a leftover paste artifact rather than an intentional duplicate. If either of those two sections is showing the wrong photo, that's the spot to check first.

## Structure

- `index.html` — markup and copy
- `styles.css` — full stylesheet (colors, type, layout, responsive breakpoints, motion)
- `script.js` — nav scroll state + mobile menu behavior
