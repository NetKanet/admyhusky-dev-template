/* global React, ReactDOM, window */
const { useEffect, useRef, useState } = React;

/* All content comes from window.RESUME (data.js).
   Components are renderers — edit data.js to change content. */

/* ---------- Deco: animated shapes for sections ---------- */
function Deco({ shapes }) {
  return shapes.map((s, i) => {
    const kind = s.kind || 'circle';
    const anim = s.anim || 'float';
    return (
      <span
        key={i}
        className={`deco deco-${kind} deco-${anim}`}
        style={{
          '--deco-rot': s.rotate || '0deg',
          width: s.size,
          height: s.size,
          background: s.bg,
          boxShadow: `${Math.round(s.size * 0.1)}px ${Math.round(s.size * 0.1)}px 0 var(--line)`,
          top: s.top, bottom: s.bottom,
          left: s.left, right: s.right,
          opacity: s.opacity || 0.35,
          animationDelay: s.delay || '0s',
          animationDuration: s.dur || undefined,
        }}
      />
    );
  });
}

/* ---------- Hero ---------- */
window.Hero = function Hero({ bubble, accent }) {
  const R = window.RESUME;
  const [techHover, setTechHover] = useState(null);
  const [learningHover, setLearningHover] = useState(false);
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-head">
            <h1>
              <span className="wave-em">👋</span>{' '}
              <span className="hi">Hi! I'm</span>{' '}
              <span className="name">{R.nickname}</span>
            </h1>
          </div>

          <window.Character
            expressionOverride={learningHover ? 'reading' : undefined}
            bubbleOverride={techHover || bubble}
            accent={accent}
          />

          <div className="hero-body">
            <p className="hero-sub">
              <b>{R.title}</b> from {R.location}. {R.tagline}
            </p>

            <div className="hero-tech">
              {R.skills.filter(g => !g.learning).flatMap(g => g.items).filter(s => s.icon).slice(0, 8).map(s => (
                <div className="hero-tech-icon bouncy" key={s.name} data-name={s.name}
                  onMouseEnter={() => { setTechHover(s.name); setLearningHover(false); }}
                  onMouseLeave={() => setTechHover(null)}>
                  <img src={s.icon} alt={s.name} />
                </div>
              ))}
              {R.skills.filter(g => g.learning).flatMap(g => g.items).filter(s => s.icon).map(s => (
                <div className="hero-tech-icon hero-tech-learning bouncy" key={s.name} data-name={s.name + ' (learning)'}
                  onMouseEnter={() => { setTechHover(s.name + ' 📖 learning'); setLearningHover(true); }}
                  onMouseLeave={() => { setTechHover(null); setLearningHover(false); }}>
                  <img src={s.icon} alt={s.name} />
                </div>
              ))}
            </div>

            <div className="hero-ctas">
              <a className="btn bouncy" href="#about">Read more <span aria-hidden="true">↓</span></a>
              <a className="btn ghost bouncy" href="#contact">Follow me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- About (resume-style) ---------- */
window.About = function About({ accent }) {
  const R = window.RESUME;
  const P = R.aboutPersonal || {};

  const cardContent = () => (
    <div className="about-personal-grid">
      <div className="about-personal-head">
        <span className="eyebrow yellow" style={{marginBottom: 12}}>👋 Hi there</span>
        <h3 className="about-personal-title">{P.heading}</h3>
      </div>
      <div className="about-personal-mascot">
        <window.AboutMascot accent={accent} />
      </div>
      <div className="about-personal-text">
        <p className="about-personal-body">{P.body}</p>
        {P.chips && (
          <div className="about-chips">
            {P.chips.map(c => <span key={c.label} className="about-chip">{c.label}</span>)}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="about">
      <div className="wrap">
        <div className="about-header">
          <span className="eyebrow coral">About me</span>
        </div>

        {P.heading && (
          <div className="card about-personal">
            {cardContent()}
          </div>
        )}

      </div>
    </section>
  );
};

/* ---------- About Mascot — bobbing rose character with sparkles ---------- */
window.AboutMascot = function AboutMascot({ accent }) {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e) {
      if (!stageRef.current) return;
      const r = stageRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setTilt({ x: dx * 10, y: dy * 6 });
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const sparkles = [
    { left: '8%',  top: '14%', size: 22, delay: '0s' },
    { left: '82%', top: '8%',  size: 30, delay: '.6s' },
    { left: '88%', top: '50%', size: 20, delay: '1.2s' },
    { left: '6%',  top: '60%', size: 26, delay: '1.8s' },
    { left: '74%', top: '78%', size: 18, delay: '2.4s' },
  ];

  return (
    <div className="about-mascot" ref={stageRef}>
      <div className="about-disc" style={{ background: accent || 'var(--coral)' }}></div>
      {sparkles.map((s,i) => (
        <span key={i} className="sparkle"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="var(--yellow)" stroke="var(--line)" strokeWidth="1.5"/>
          </svg>
        </span>
      ))}
      <div className="character-bob about-bob">
        <div style={{
          width: '100%', height: '100%',
          transform: `translate(${tilt.x}px, ${tilt.y}px)`,
          transition: 'transform .18s ease-out',
        }}>
          <img src="images/net-roses.png" alt="Net with roses, winking" className="about-mascot-img" draggable="false"/>
        </div>
      </div>
      <div className="about-bubble">Nice to meet you! 🌹</div>
    </div>
  );
};

/* ---------- Experience ---------- */
window.Experience = function Experience() {
  const R = window.RESUME;
  return (
    <section id="experience" style={{background:'var(--bg-2)', borderTop:'3px solid var(--line)', borderBottom:'3px solid var(--line)'}}>
      <div className="wrap">
        <div style={{marginBottom: 26, display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
          <span className="eyebrow lav">Experience</span>
          <h2 style={{margin:0}}>Where I've been</h2>
        </div>
        <div className="timeline">
          {R.experience.map((e,i) => (
            <div className="t-item" key={i}>
              <div className="t-card">
                <div className="t-head">
                  <div className="t-co">
                    {e.co}
                    {e.current && <span className="now-chip">Now</span>}
                  </div>
                  <div className="t-date">{e.date}</div>
                </div>
                <div className="t-role">{e.role}</div>
                <ul className="t-bullets">
                  {e.bullets.map((b,j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Education ---------- */
window.Education = function Education() {
  const R = window.RESUME;
  return (
    <section id="education" style={{paddingTop: 70, paddingBottom: 70}}>
      <Deco shapes={[
        { size: 80, bg: 'var(--mint)', kind: 'circle', anim: 'float', top: 20, left: 10, delay: '0s', opacity: 0.6 },
        { size: 55, bg: 'var(--coral)', kind: 'square', anim: 'bob', bottom: 20, right: 40, delay: '1.5s', opacity: 0.55 },
      ]} />
      <div className="wrap">
        <div style={{marginBottom: 22, display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
          <span className="eyebrow yellow">Education</span>
          <h2 style={{margin:0}}>School days</h2>
        </div>
        <div className="edu-grid">
          {R.education.map((ed,i) => (
            <div className="card edu-card" key={i}>
              <div className="edu-cap">🎓</div>
              <div>
                <div className="edu-school">{ed.school}</div>
                <div className="edu-degree">{ed.degree}</div>
                <div className="edu-date">{ed.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Loves ---------- */
window.Loves = function Loves() {
  const R = window.RESUME;
  return (
    <section id="loves" style={{background:'var(--bg-2)', borderTop:'3px solid var(--line)', borderBottom:'3px solid var(--line)'}}>
      <div className="wrap">
        <div style={{marginBottom: 26, display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
          <span className="eyebrow yellow">Hobbies</span>
          <h2 style={{margin:0}}>Things I love</h2>
        </div>
        <div className="loves-grid">
          {R.loves.map(l => {
            const isAnchor = l.href && l.href.startsWith('#');
            return (
              <a className="love bouncy" key={l.title} href={l.href}
                 {...(isAnchor ? {} : { target: '_blank', rel: 'noopener' })}>
                <div className="emoji" style={{background: l.bg, color: l.fg || 'var(--ink)'}}>{l.emoji}</div>
                <h4>{l.title}</h4>
                <p>{l.sub}</p>
                <div className="arrow">{isAnchor ? '↓' : '↗'}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- Running Records ---------- */
window.Running = function Running() {
  const R = window.RESUME;
  if (!R.runs || R.runs.length === 0) return null;
  return (
    <section id="running" style={{paddingTop: 70, paddingBottom: 70}}>
      <Deco shapes={[
        { size: 90, bg: 'var(--coral)', kind: 'circle', anim: 'float', top: 30, right: 20, delay: '0.8s', opacity: 0.6 },
        { size: 55, bg: 'var(--yellow)', kind: 'square', anim: 'bob', bottom: 20, left: 30, delay: '2s', opacity: 0.55 },
        { size: 40, bg: 'var(--mint)', kind: 'diamond', anim: 'float', top: '45%', left: 15, delay: '1.2s', rotate: '45deg', opacity: 0.6 },
      ]} />
      <div className="wrap">
        <div style={{marginBottom: 26, display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
          <span className="eyebrow mint">Running</span>
          <h2 style={{margin:0}}>Race records</h2>
        </div>
        <div className="runs-grid">
          {R.runs.map((run, i) => {
            if (run.soon) {
              return (
                <div className="card run-card run-soon" key={i}>
                  <div className="run-emoji">{run.emoji || '🏅'}</div>
                  <div className="run-info">
                    <div className="run-event">{run.event}</div>
                    <div className="run-meta">
                      <span className="run-distance">{run.distance}</span>
                      {run.date && <span className="run-date">{run.date}</span>}
                    </div>
                  </div>
                  <div className="run-badge">Coming soon</div>
                </div>
              );
            }
            return (
              <a className="card run-card run-card-link bouncy" key={i}
                 href={run.eslip || '#'} target="_blank" rel="noopener">
                <div className="run-emoji">{run.emoji || '🏅'}</div>
                <div className="run-info">
                  <div className="run-event">{run.event}</div>
                  <div className="run-meta">
                    <span className="run-distance">{run.distance}</span>
                    {run.date && <span className="run-date">{run.date}</span>}
                  </div>
                </div>
                {run.eslip && <span className="btn ghost run-slip">e-slip ↗</span>}
              </a>
            );
          })}
        </div>
      </div>
      <div className="section-mascot-divider">
        <img src="images/net-running.png" alt="Net running" className="divider-mascot" />
        <div className="divider-label">Coming soon...</div>
      </div>
    </section>
  );
};

/* ---------- YouTube Category ---------- */
function YTCategory({ cat, limit }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cat.videos : cat.videos.slice(0, limit);
  const hasMore = cat.videos.length > limit;

  return (
    <div className="yt-category">
      <h3 className="yt-cat-name">{cat.name}</h3>
      <div className="yt-grid">
        {visible.map((v, i) => (
          <a className="card yt-card bouncy" key={i}
             href={`https://www.youtube.com/watch?v=${v.videoId}`}
             target="_blank" rel="noopener">
            <div className="yt-thumb">
              <img src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                   alt={v.title} loading="lazy" />
              <div className="yt-play">▶</div>
            </div>
            <div className="yt-info">
              <div className="yt-title">{v.title}</div>
              {v.date && <div className="yt-date">{v.date}</div>}
            </div>
          </a>
        ))}
      </div>
      {hasMore && !expanded && (
        <button className="btn ghost bouncy yt-more" onClick={() => setExpanded(true)}>
          ดูเพิ่มเติม ({cat.videos.length - limit} วิดีโอ) ↓
        </button>
      )}
    </div>
  );
}

/* ---------- YouTube ---------- */
window.YouTube = function YouTube() {
  const R = window.RESUME;
  const yt = R.youtube;
  if (!yt) return null;
  const cats = yt.categories || [];
  const hasVideos = cats.some(c => c.videos && c.videos.length > 0);
  const limit = yt.previewLimit || 2;

  return (
    <section id="youtube" style={{background:'var(--bg-2)', borderTop:'3px solid var(--line)', borderBottom:'3px solid var(--line)'}}>
      <div className="wrap">
        <div className="yt-header">
          <div style={{display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
            <span className="eyebrow coral">YouTube</span>
            <h2 style={{margin:0}}>On camera</h2>
          </div>
          <a className="btn coral bouncy" href={yt.channel} target="_blank" rel="noopener">
            ▶ Subscribe
          </a>
        </div>
        {hasVideos ? (
          <div className="yt-categories">
            {cats.map((cat, i) => (
              <YTCategory key={i} cat={cat} limit={limit} />
            ))}
          </div>
        ) : (
          <div className="card yt-empty">
            <p>No videos yet — but hit subscribe and stay tuned!</p>
            <a className="btn coral bouncy" href={yt.channel} target="_blank" rel="noopener">
              ▶ Subscribe @admyhusky
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- Bookshelf ---------- */
const BOOK_COLORS = ['var(--coral)', 'var(--mint)', 'var(--yellow)', 'var(--lav)', 'var(--leaf)', 'var(--sky)'];

function BookCategory({ cat, limit }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cat.books : cat.books.slice(0, limit);
  const hasMore = cat.books.length > limit;
  return (
    <div className="book-category">
      <h3 className="book-cat-name">{cat.name} <span className="book-count">({cat.books.length} books)</span></h3>
      <div className="book-grid">
        {visible.map((b, i) => (
          <div className="card book-card bouncy" key={i}>
            <div className="book-cover" style={{background: b.cover ? 'none' : BOOK_COLORS[i % BOOK_COLORS.length]}}>
              {b.cover
                ? <img src={b.cover} alt={b.title} className="book-cover-img" loading="lazy" />
                : <span className="book-cover-text">{b.title}</span>
              }
            </div>
            <div className="book-info">
              <div className="book-title">{b.title}</div>
              {b.author && <div className="book-author">{b.author}</div>}
            </div>
          </div>
        ))}
      </div>
      {hasMore && !expanded && (
        <button className="btn ghost bouncy book-more" onClick={() => setExpanded(true)}>
          Show more ({cat.books.length - limit} books) ↓
        </button>
      )}
    </div>
  );
}

window.Bookshelf = function Bookshelf() {
  const R = window.RESUME;
  const bk = R.books;
  if (!bk) return null;
  const cats = bk.categories || [];
  const hasBooks = cats.some(c => c.books && c.books.length > 0);
  const limit = bk.previewLimit || 3;
  const total = cats.reduce((sum, c) => sum + c.books.length, 0);

  return (
    <section id="bookshelf" style={{paddingTop: 70, paddingBottom: 70}}>
      <Deco shapes={[
        { size: 100, bg: 'var(--lav)', kind: 'circle', anim: 'float', top: 30, right: 30, delay: '0.5s', opacity: 0.6 },
        { size: 60, bg: 'var(--yellow)', kind: 'square', anim: 'bob', bottom: 40, left: 20, delay: '1.8s', opacity: 0.55 },
        { size: 45, bg: 'var(--leaf)', kind: 'diamond', anim: 'float', top: '50%', right: 15, delay: '2.5s', rotate: '45deg', opacity: 0.6 },
      ]} />
      <div className="wrap">
        <div style={{marginBottom: 26, display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
          <span className="eyebrow yellow">Bookshelf</span>
          <h2 style={{margin:0}}>{total} books finished</h2>
        </div>
        {hasBooks ? (
          <div className="book-categories">
            {cats.map((cat, i) => (
              <BookCategory key={i} cat={cat} limit={limit} />
            ))}
          </div>
        ) : (
          <div className="card book-empty">
            <p>No books yet — but currently reading!</p>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- TCG Collection ---------- */
window.TCG = function TCG() {
  const R = window.RESUME;
  if (!R.tcg || R.tcg.length === 0) return null;
  return (
    <section id="tcg" style={{paddingTop: 70, paddingBottom: 70}}>
      <Deco shapes={[
        { size: 70, bg: 'var(--mint)', kind: 'circle', anim: 'bob', bottom: 20, left: 25, delay: '0.3s', opacity: 0.6 },
        { size: 50, bg: 'var(--coral)', kind: 'square', anim: 'float', top: 25, right: 20, delay: '1s', opacity: 0.55 },
        { size: 35, bg: 'var(--yellow)', kind: 'diamond', anim: 'float', top: '50%', left: 15, delay: '2s', rotate: '45deg', opacity: 0.6 },
      ]} />
      <div className="wrap">
        <div style={{marginBottom: 26, display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
          <span className="eyebrow lav">Cards</span>
          <h2 style={{margin:0}}>Cards</h2>
        </div>
        <div className="tcg-grid">
          {R.tcg.map((card, i) => {
            if (card.soon) {
              return (
                <div className="card tcg-card tcg-soon" key={i}>
                  <div className="tcg-emoji">{card.icon ? <img src={card.icon} alt={card.name} className="tcg-icon-img" /> : (card.emoji || '🃏')}</div>
                  <div className="tcg-info">
                    <div className="tcg-name">{card.name}</div>
                    <div className="tcg-sub">Coming soon</div>
                  </div>
                  <div className="tcg-badge">Soon</div>
                </div>
              );
            }
            return (
              <a className="card tcg-card bouncy" key={i}
                 href={card.href} target="_blank" rel="noopener">
                <div className="tcg-emoji">{card.icon ? <img src={card.icon} alt={card.name} className="tcg-icon-img" /> : (card.emoji || '🃏')}</div>
                <div className="tcg-info">
                  <div className="tcg-name">{card.name}</div>
                  {card.sub && <div className="tcg-sub">{card.sub}</div>}
                </div>
                <div className="arrow">↗</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- Contact ---------- */
window.Contact = function Contact() {
  const R = window.RESUME;
  return (
    <section id="contact" style={{padding:'80px 0 100px'}}>
      <div className="wrap">
        <div className="contact-wrap">
          <div className="contact-card">
            <span className="blob" style={{width:120,height:120,background:'var(--coral)',top:-40,left:-40}}></span>
            <span className="blob" style={{width:90,height:90,background:'var(--mint)',bottom:-30,right:60}}></span>
            <span className="blob" style={{width:60,height:60,background:'var(--yellow)',top:30,right:-20}}></span>

            <div className="contact-layout">
              <div className="contact-eyebrow-row">
                <span className="eyebrow mint">Follow me on social media</span>
              </div>

              <div className="contact-main">
                <h2 style={{marginTop:0, color:'var(--bg)'}}>People say nothing is impossible, but I do nothing every day.</h2>

                <div className="contact-socials contact-socials-icons">
                  <a className="contact-icon bouncy" href={R.contact.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" style={{background:'#0A66C2'}}>
                    <img src="images/linkedin.svg" alt="LinkedIn" />
                  </a>
                  <a className="contact-icon bouncy" href={R.contact.github} target="_blank" rel="noopener" aria-label="GitHub" style={{background:'#333'}}>
                    <img src="images/github.svg" alt="GitHub" />
                  </a>
                  <a className="contact-icon bouncy" href={R.contact.facebook} target="_blank" rel="noopener" aria-label="Facebook" style={{background:'#1877F2'}}>
                    <img src="images/facebook.svg" alt="Facebook" />
                  </a>
                  <a className="contact-icon bouncy" href={R.contact.instagram} target="_blank" rel="noopener" aria-label="Instagram" style={{background:'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'}}>
                    <img src="images/instagram.svg" alt="Instagram" />
                  </a>
                  <a className="contact-icon bouncy" href={R.contact.youtube} target="_blank" rel="noopener" aria-label="YouTube" style={{background:'#FF0000'}}>
                    <img src="images/youtube.svg" alt="YouTube" />
                  </a>
                  <a className="contact-icon bouncy" href={R.contact.spotify} target="_blank" rel="noopener" aria-label="Spotify" style={{background:'#1DB954'}}>
                    <img src="images/spotify.svg" alt="Spotify" />
                  </a>
                </div>
              </div>

              <div className="contact-side">
                <div className="donate-box">
                  <img src="images/promptpay-qr.png" alt="PromptPay QR" className="donate-qr" />
                  <p className="donate-label">☕ Support via PromptPay</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
