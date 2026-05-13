/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentDisc": "mint",
  "pattern": "dots",
  "showShapes": true,
  "bobSpeed": 3.4
}/*EDITMODE-END*/;

const DISC_COLORS = {
  mint:   { val: 'var(--mint)',   label: 'Mint' },
  yellow: { val: 'var(--yellow)', label: 'Sunny' },
  coral:  { val: 'var(--coral)',  label: 'Coral' },
  lav:    { val: 'var(--lav)',    label: 'Lavender' },
  sky:    { val: 'var(--sky)',    label: 'Sky' },
};

// Page registry — single source of truth for routes and nav order.
const PAGES = [
  { id: 'home',    label: 'Home',    href: 'index.html'    },
  { id: 'about',   label: 'About',   href: 'about.html'    },
  { id: 'work',    label: 'Work',    href: 'work.html'     },
  { id: 'edu',     label: 'Edu',     href: 'edu.html'      },
  { id: 'contact', label: 'Contact', href: 'contact.html'  },
];

function Nav({ current }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="index.html">Net 🐺</a>
        {PAGES.filter(p => p.id !== 'home').map(p => (
          <a key={p.id} href={p.href} className={current === p.id ? 'is-current' : ''}>{p.label}</a>
        ))}
      </div>
    </nav>
  );
}

function FloatingShapes() {
  const shapes = [
    { x: '6%',  y: '22vh',  size: 56, bg: 'var(--coral)',  delay: '0s',   kind: 'sq' },
    { x: '88%', y: '70vh',  size: 70, bg: 'var(--yellow)', delay: '1.2s', kind: '' },
    { x: '4%',  y: '170vh', size: 44, bg: 'var(--mint)',   delay: '.6s',  kind: 'di' },
    { x: '92%', y: '220vh', size: 60, bg: 'var(--lav)',    delay: '2.1s', kind: '' },
    { x: '8%',  y: '320vh', size: 50, bg: 'var(--leaf)',   delay: '1.8s', kind: 'sq' },
    { x: '90%', y: '380vh', size: 38, bg: 'var(--sky)',    delay: '.3s',  kind: '' },
  ];
  return (
    <div style={{position:'absolute', inset:0, pointerEvents:'none', zIndex:0}}>
      {shapes.map((s,i) => (
        <span key={i} className={'shape ' + s.kind}
          style={{ left: s.x, top: s.y, width: s.size, height: s.size, background: s.bg, animationDelay: s.delay }} />
      ))}
    </div>
  );
}

// Page-header: title + breadcrumb + small character mascot for non-home pages.
function PageHeader({ title, subtitle, eyebrow, eyebrowColor='coral', mascot='calm', accent }) {
  return (
    <section className="page-header">
      <div className="wrap">
        <div className="page-header-grid">
          <div>
            <a className="back-home" href="index.html">← back to home</a>
            <span className={`eyebrow ${eyebrowColor}`} style={{marginTop:14, marginBottom:14}}>{eyebrow || title}</span>
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
          </div>
          <div className="page-mascot">
            <window.MiniCharacter expression={mascot} accent={accent} />
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [bubble, setBubble] = useState("Hi! I'm Net 👋");
  const page = window.PAGE_ID || 'home';

  // bob speed
  useEffect(() => {
    document.documentElement.style.setProperty('--bob-speed', tweaks.bobSpeed + 's');
  }, [tweaks.bobSpeed]);

  // Rotate the speech bubble every few seconds on home
  useEffect(() => {
    if (page !== 'home') return;
    const pool = window.BUBBLES.intro;
    const id = setInterval(() => {
      setBubble(pool[Math.floor(Math.random()*pool.length)]);
    }, 4500);
    return () => clearInterval(id);
  }, [page]);

  const accent = DISC_COLORS[tweaks.accentDisc]?.val || 'var(--mint)';

  return (
    <>
      <div className="backdrop" data-pattern={tweaks.pattern}></div>
      {tweaks.showShapes && <FloatingShapes />}

      <Nav current={page} />

      <main className={`page page-${page}`}>
        {page === 'home' && (
          <>
            <window.Hero bubble={bubble} accent={accent} />
            <window.Loves />
          </>
        )}

        {page === 'about' && (
          <>
            <PageHeader
              eyebrow="About me"
              title="A little more about me."
              subtitle="The short version of my résumé — pulled from data.js so it's easy to keep up to date."
              mascot="proud"
              accent="var(--coral)"
              eyebrowColor="coral"
            />
            <window.About accent="var(--coral)" hideHeader={true} />
          </>
        )}

        {page === 'work' && (
          <>
            <PageHeader
              eyebrow="Work history"
              title="Where I've been."
              subtitle="A few teams across banking, fintech, and telecom — all backend, mostly JVM."
              mascot="calm"
              accent="var(--lav)"
              eyebrowColor="lav"
            />
            <window.Experience hideHeader={true} />
          </>
        )}

        {page === 'edu' && (
          <>
            <PageHeader
              eyebrow="Education"
              title="School days."
              subtitle="Where it all started — and where I got hooked on distributed systems."
              mascot="content"
              accent="var(--yellow)"
              eyebrowColor="yellow"
            />
            <window.Education hideHeader={true} />
          </>
        )}

        {page === 'contact' && (
          <>
            <PageHeader
              eyebrow="Get in touch"
              title="Let's chat."
              subtitle="Always up for a conversation about backend systems, testing strategy, or a long run."
              mascot="thumbs"
              accent="var(--mint)"
              eyebrowColor="mint"
            />
            <window.Contact hideHeader={true} />
          </>
        )}

        <footer className="foot wrap">
          Made with too much caffeine · © {new Date().getFullYear()} {window.RESUME.name} · admyhusky.dev
        </footer>
      </main>

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Character">
          <window.TweakSelect
            label="Disc color"
            value={tweaks.accentDisc}
            options={Object.entries(DISC_COLORS).map(([v,o]) => ({ value:v, label:o.label }))}
            onChange={v => setTweak('accentDisc', v)}
          />
          <window.TweakSlider
            label="Bob speed"
            value={tweaks.bobSpeed}
            min={1.5} max={6} step={.1}
            unit="s"
            onChange={v => setTweak('bobSpeed', v)}
          />
        </window.TweakSection>

        <window.TweakSection label="Background">
          <window.TweakSelect
            label="Pattern"
            value={tweaks.pattern}
            options={[
              {value:'dots',  label:'Dots'},
              {value:'stars', label:'Stars'},
              {value:'grid',  label:'Grid'},
              {value:'plain', label:'Plain'},
            ]}
            onChange={v => setTweak('pattern', v)}
          />
          <window.TweakToggle
            label="Floating shapes"
            value={tweaks.showShapes}
            onChange={v => setTweak('showShapes', v)}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
