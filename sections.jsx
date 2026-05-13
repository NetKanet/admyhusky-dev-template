/* global React, window */
const { useEffect, useRef, useState } = React;

/* All content comes from window.RESUME (data.js).
   Components are renderers — edit data.js to change content. */

/* ---------- Hero ---------- */
window.Hero = function Hero({ bubble, accent }) {
  const R = window.RESUME;
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot-pulse"></span>
              {R.currentCompany
                ? `Currently @ ${R.currentCompany}`
                : R.statusLabel || 'Available'}
            </span>
            <h1 style={{marginTop:18}}>
              <span className="wave-em">👋</span>{' '}
              <span className="hi">Hi! I'm</span>{' '}
              <span className="name">{R.nickname}</span>
            </h1>
            <p className="hero-sub">
              <b>{R.title}</b> from {R.location}. {R.tagline}
            </p>

            <div className="hero-ctas">
              <a className="btn bouncy" href="#about">Read more <span aria-hidden="true">↓</span></a>
              <a className="btn ghost bouncy" href={R.contact.github} target="_blank" rel="noopener">GitHub</a>
              <a className="btn mint bouncy" href={R.contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a className="btn coral bouncy" href={`mailto:${R.contact.email}`}>Email me</a>
            </div>

            <div className="hero-marquee">
              <span>Spring Boot</span>
              <span>Kotlin</span>
              <span>Microservices</span>
              <span>Robot Framework</span>
              <span>AWS</span>
              <span>Caffeine + Redis</span>
              <span>OpenSearch</span>
              <span>Grafana</span>
            </div>
          </div>

          <window.Character bubbleOverride={bubble} accent={accent} />
        </div>
      </div>
    </section>
  );
};

/* ---------- About (resume-style) ---------- */
window.About = function About({ accent }) {
  const R = window.RESUME;
  const P = R.aboutPersonal || {};
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-header">
          <span className="eyebrow coral">About me</span>
          <h2>The short version of my résumé.</h2>
          <p className="lede">Everything below is pulled from <code>data.js</code> — easy to keep up to date.</p>
        </div>

        {/* Personal intro card — sits above the resume content */}
        {P.heading && (
          <div className="card about-personal">
            <div className="about-personal-grid">
              <div>
                <span className="eyebrow yellow" style={{marginBottom: 12}}>👋 Hi there</span>
                <h3 className="about-personal-title">{P.heading}</h3>
                <p className="about-personal-body">{P.body}</p>
                {P.chips && (
                  <div className="about-chips">
                    {P.chips.map(c => <span key={c.label} className="about-chip">{c.label}</span>)}
                  </div>
                )}
              </div>
              <div className="about-personal-mascot">
                <window.AboutMascot accent={accent} />
              </div>
            </div>
          </div>
        )}

        <div className="about-top">
          {/* LEFT: profile + contact */}
          <div className="about-left">
            <div className="card about-summary">
              <span className="eyebrow mint" style={{marginBottom: 12}}>Profile</span>
              <h3>The work side of me</h3>
              <p>{R.summary}</p>
            </div>

            <div className="card about-contact">
              <h3>Contact</h3>
              <ul className="contact-list">
                <li>
                  <span className="ci ci-phone">☎</span>
                  <a href={`tel:${R.contact.phoneTel}`}>{R.contact.phone}</a>
                </li>
                <li>
                  <span className="ci ci-mail">@</span>
                  <a href={`mailto:${R.contact.email}`}>{R.contact.email}</a>
                </li>
                <li>
                  <span className="ci ci-in">in</span>
                  <a href={R.contact.linkedin} target="_blank" rel="noopener">linkedin.com/in/kanet-kampiranon</a>
                </li>
                <li>
                  <span className="ci ci-gh">◉</span>
                  <a href={R.contact.github} target="_blank" rel="noopener">github.com/NetKanet</a>
                </li>
                <li>
                  <span className="ci ci-site">⌂</span>
                  <a href={R.contact.site} target="_blank" rel="noopener">admyhusky.dev</a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: highlights stack */}
          <div className="about-right about-highlights">
            <div className="highlight-card hl-coral">
              <div className="hl-num">5+</div>
              <div className="hl-lbl">Years backend</div>
            </div>
            <div className="highlight-card hl-yellow">
              <div className="hl-num">3</div>
              <div className="hl-lbl">Companies · True · Ascend · SCB</div>
            </div>
            <div className="highlight-card hl-mint">
              <div className="hl-num">80%+</div>
              <div className="hl-lbl">Test coverage</div>
            </div>
            <div className="highlight-card hl-lav">
              <div className="hl-num">µSvc</div>
              <div className="hl-lbl">Spring Boot · Kotlin · AWS</div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="skills-block">
          <div className="skills-header">
            <span className="eyebrow mint">Technical skills</span>
            <h3 className="skills-title">Tools of the trade</h3>
          </div>
          <div className="skills-grid">
            {R.skills.map((grp, i) => (
              <div className="card skill-group" key={grp.group}>
                <div className="skill-head">
                  <div className="skill-ico" style={{ background: grp.color }}>{grp.ico}</div>
                  <div className="skill-name">{grp.group}</div>
                </div>
                <div className="skill-chips">
                  {grp.items.map(it => (
                    <span className="skill-chip" key={it.name}>
                      <span className="skill-tag" style={{ background: grp.color }}>{it.tag}</span>
                      {it.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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

  // sparkles around the character
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
          <span className="eyebrow yellow">Off the clock</span>
          <h2 style={{margin:0}}>Things I love</h2>
        </div>
        <p style={{maxWidth: 540, color:'var(--ink-soft)', marginBottom: 28}}>
          A handful of corners on the internet where you'll find more of me.
        </p>
        <div className="loves-grid">
          {R.loves.map(l => (
            <a className="love bouncy" key={l.title} href={l.href} target="_blank" rel="noopener">
              <div className="emoji" style={{background: l.bg, color: l.fg || 'var(--ink)'}}>{l.emoji}</div>
              <h4>{l.title}</h4>
              <p>{l.sub}</p>
              <div className="arrow">↗</div>
            </a>
          ))}
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
            <div style={{position:'relative', zIndex:1, maxWidth: 620, textAlign:'left'}}>
              <span className="eyebrow mint" style={{marginBottom:16}}>Get in touch</span>
              <h2 style={{marginTop:14}}>Let's build something good.</h2>
              <p>Free for a chat about backend systems, testing strategy, or a long run. Pick whichever channel works for you.</p>
              <div className="contact-row contact-row-left">
                <a className="btn bouncy" href={`mailto:${R.contact.email}`}>📩 {R.contact.email}</a>
                <a className="btn coral bouncy" href={R.contact.linkedin} target="_blank" rel="noopener">in / LinkedIn</a>
                <a className="btn ghost bouncy" href={R.contact.github} target="_blank" rel="noopener">◉ GitHub</a>
                <a className="btn mint bouncy" href={`tel:${R.contact.phoneTel}`}>☎ {R.contact.phone}</a>
              </div>
            </div>
          </div>

          {/* Thumbs-up mascot peeks out of the card */}
          <div className="contact-mascot">
            <span className="contact-bubble">Thanks for scrolling! 👍</span>
            <img src="images/net-thumbs.png" alt="Net giving a thumbs up" draggable="false"/>
          </div>
        </div>
      </div>
    </section>
  );
};
