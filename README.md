# admyhusky-dev-template

## v3 — Net's Orbit

An editorial, space-inspired personal universe in charcoal and lime. Built with
plain HTML/CSS/JavaScript and self-hosted Three.js 0.170.0. No package install,
React runtime, Babel compilation, or build command is needed for v3.

### Preview locally

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`. Serve over HTTP; ES modules cannot be previewed by
double-clicking `index.html`.

### Cloudflare Pages

Keep the existing static Pages project and root output directory (`.`). No build
command is required. Preview this branch before merging into the production
branch. Existing resume, images, data and public bookshelf integration are kept.

### Editing v3

- `index.html`: semantic page content, navigation, SEO and section layout.
- `v3.css`: responsive visual design and CSS 3D hobby illustrations.
- `v3.js`: data rendering, bookshelf filters, menu and motion controls.
- `universe.js`: procedural 3D planet, server city, orbital paths and moons.
- `data.js`: existing biography, skills, work history, books, races and socials.
- `vendor/`: pinned Three.js ES module and its MIT license.

Drag the planet horizontally to rotate it. Pause motion freezes the scene;
reduced-motion preferences are honored. Rendering pauses when offscreen or when
the browser tab is hidden. A CSS planet remains available without WebGL. All
navigation and personal content work independently of the 3D renderer. Book
covers have text fallbacks, and the existing static book list remains available
if the live bookshelf request fails. Historical v2 files remain in the repository
but are not loaded by v3.

### Verification

Checked in a browser at desktop and 390px mobile widths: WebGL rendering,
pause/resume, section anchors, mobile menu, year filters and book pagination.
The 2024 filter shows 5/11 then all 11 books. No console errors or mobile
horizontal overflow were observed. JavaScript syntax and `git diff --check` pass.

A playful, character-driven personal portfolio site for **Kanet "Net" Kampiranon** — Backend Engineer from Bangkok, Thailand.

## v2.0.0 — What's new

Complete rewrite from a static link-in-bio page to a full portfolio site:

- **React-powered** (via CDN — no build step required)
- **Animated mascot character** with expression swaps, eye-tracking, click confetti
- **Data-driven content** — edit `data.js` to update everything (resume, skills, experience, contact)
- **Multi-section layout** — Hero, About, Experience, Education, Loves, Contact
- **Tweaks panel** — customize disc color, bob speed, background pattern, floating shapes
- **Responsive design** — optimized for mobile, tablet, and desktop

### Project structure

```
index.html          Entry point
data.js             Resume data, contact info, skills, experience
app.jsx             Main App component, routing, nav, tweaks
character.jsx       Mascot character with animations
sections.jsx        Hero, About, Experience, Education, Loves, Contact
tweaks-panel.jsx    Floating customization panel
styles.css          All styles and responsive breakpoints
images/             Character expression PNGs
```

### Getting started (v2)

1. Clone this repository
2. Edit `data.js` with your own info
3. Replace images in `images/` with your own character art
4. Open `index.html` in a browser (or deploy as-is)

---

## v1.0.0 — Original link-in-bio template

The original version is a minimal, hand-drawn (doodle style) personal portfolio template built with **pure HTML and CSS** — no frameworks, no build tools.

To use v1, checkout the tag:

```bash
git checkout v1.0.0
```

### Features (v1)

- Doodle-style aesthetic
- Simple link-in-bio layout
- Pure HTML + CSS, no dependencies
- Includes `index.html`, `running.html`, `tcg.html`

### Getting started (v1)

1. `git checkout v1.0.0`
2. Edit `index.html` and `running.html` with your links
3. Deploy to Cloudflare Pages or GitHub Pages

---

## Deployment

No build step needed for either version — deploy the root directory directly to **Cloudflare Pages** or **GitHub Pages**.

## License

MIT License — Feel free to use and remix!
