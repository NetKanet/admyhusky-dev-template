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

const NAV_SECTIONS = [
  { id: 'about',     label: 'About' },
  { id: 'loves',     label: 'Hobbies' },
  { id: 'running',   label: 'Running' },
  { id: 'bookshelf', label: 'Bookshelf' },
  { id: 'tcg',       label: 'Cards' },
  { id: 'contact',   label: 'Follow' },
];

function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > 80 && y > lastY.current);
      lastY.current = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return hidden;
}

function Nav({ activeId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navHidden = useHideOnScroll();

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [menuOpen]);

  return (
    <nav className={`nav${navHidden && !menuOpen ? ' nav-hidden' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top">Net</a>
        <button className="nav-burger" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>
          <span className={menuOpen ? 'burger-line open' : 'burger-line'} />
        </button>
        <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          {NAV_SECTIONS.map(s => (
            <a key={s.id} href={`#${s.id}`}
               className={activeId === s.id ? 'is-current' : ''}
               onClick={() => setMenuOpen(false)}>{s.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return activeId;
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

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [bubble, setBubble] = useState("Hi! I'm Net 👋");
  const activeId = useScrollSpy(['top', ...NAV_SECTIONS.map(s => s.id)]);

  useEffect(() => {
    document.documentElement.style.setProperty('--bob-speed', tweaks.bobSpeed + 's');
  }, [tweaks.bobSpeed]);

  useEffect(() => {
    const pool = window.BUBBLES.intro;
    const id = setInterval(() => {
      setBubble(pool[Math.floor(Math.random()*pool.length)]);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const accent = DISC_COLORS[tweaks.accentDisc]?.val || 'var(--mint)';

  return (
    <>
      <div className="backdrop" data-pattern={tweaks.pattern}></div>

      <Nav activeId={activeId} />

      <main className="page">
        {tweaks.showShapes && <FloatingShapes />}
        <window.Hero bubble={bubble} accent={accent} />
        <window.About accent={accent} />
        <window.Loves />
        <window.Running />
        <window.Bookshelf />
        <window.TCG />
        <window.Contact />

        <footer className="foot wrap">
          Made with too much caffeine · © {new Date().getFullYear()} {window.RESUME.name}
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
