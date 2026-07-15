# Antarctic Leadership Index — starter site

A simple, static, four-page site (Overview + Structural + Brokering +
Intellectual), styled after the "Profiles in Leadership" report layout.
No build tools — just open `index.html` in a browser, or host the folder
anywhere that serves static files.

## How to add your own data

1. **Chart images** — for each metric, drop an image into
   `assets/images/` using the exact filename referenced in `data.js`
   (e.g. `infrastructure-investment.png`). Until a file exists, a
   placeholder chart is shown automatically.

2. **Top-10 tables** — open `data.js`. Each metric has a `topTen` array.
   Replace the placeholder rows with your real data, e.g.:

   ```js
   topTen: [
     { rank: 1, party: "United Kingdom", score: 92 },
     { rank: 2, party: "United States", score: 68 },
     // ...
   ]
   ```

3. **Metric text** — also in `data.js`, edit each metric's `title` and
   `blurb` if you want to change the wording.

4. **Overall ranking table** (homepage) — currently filled from
   `PLACEHOLDER_PARTIES` in `data.js` with blank scores. Easiest fix for
   now: edit the inline script at the bottom of `index.html`, or replace
   the whole `<tbody id="ranking-body">` block with your own static rows.

5. **Ternary chart** (homepage) — currently a hand-placed placeholder
   SVG. Once you have real per-country scores for all three leadership
   styles, this is the piece most worth upgrading to a script-generated
   chart — happy to help with that next.

## Structure

```
index.html         Overview: category cards, ternary chart, ranking table
structural.html     4 metrics
brokering.html      2 metrics
intellectual.html   6 metrics
data.js             All metric metadata + placeholder rankings — edit this
styles.css          Shared styling (colors, type, layout)
script.js           Nav highlighting + crossfade behaviour on category pages
assets/images/      Chart images (+ a generic placeholder.svg fallback)
```

## Notes on the interaction

Clicking a metric in the left-hand list crossfades the panel on the
right (title, description, chart, table) rather than reloading the
page. No other animation/motion is used, and the site respects
`prefers-reduced-motion`.
