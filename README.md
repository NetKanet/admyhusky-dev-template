# admyhusky-dev-template

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
