/* global React */
const { useState, useEffect, useRef, useCallback } = React;

/* Net's mascot — bobbing, eyes-follow-cursor (via head tilt),
   expression swap on scroll/hover, speech bubble, click confetti. */
const EXPRESSIONS = {
  calm:    'images/net-calm.png',     // gentle smile, eyes open
  content: 'images/net-content.png',  // closed-eye smile
  wink:    'images/net-wink.png',     // wink + music bubble
  laugh:   'images/net-laugh.png',    // big laugh, eyes closed
  proud:   'images/net-roses.png',    // arms-crossed wink with roses (about)
  reading: 'images/net-reading.png',  // reading pose (learning)
};

const BUBBLES = {
  intro:  ["Sawasdee! 👋", "Hi! I'm Net", "Welcome in!", "Glad you stopped by"],
  about:  ["I write Spring Boot stuff", "Backend, mostly Kotlin", "Microservices, anyone?"],
  stack:  ["Tools of the trade!", "These are my faves", "Pick your fighter"],
  exp:    ["Here's where I've been", "Five years and counting"],
  loves:  ["Outside work I…", "Life > code, sometimes 🏃", "Books, runs, cards"],
  contact:["Let's talk!", "Say hi anywhere", "Hire me? maybe ;)"],
  click:  ["yay!", "+1 happiness", "ouch (kidding)", "tickles!", "hee 😆"],
};

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

window.Character = function Character({ expressionOverride, bubbleOverride, accent }) {
  const [expr, setExpr] = useState('laugh');
  const [bubble, setBubble] = useState('Hi! I\'m Net');
  const [bubbleKey, setBubbleKey] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [confetti, setConfetti] = useState([]);
  const stageRef = useRef(null);

  // intro bubble on first paint
  useEffect(() => {
    const t = setTimeout(() => setExpr('calm'), 2400);
    return () => clearTimeout(t);
  }, []);

  // honor explicit override from scroll observer
  useEffect(() => {
    if (expressionOverride) {
      setExpr(expressionOverride);
    } else {
      setExpr('calm');
    }
  }, [expressionOverride]);

  useEffect(() => {
    if (bubbleOverride) {
      setBubble(bubbleOverride);
      setBubbleKey(k => k + 1);
    }
  }, [bubbleOverride]);

  // head-tilt-toward-cursor (tiny — keeps it subtle)
  useEffect(() => {
    function onMove(e) {
      if (!stageRef.current) return;
      const r = stageRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setTilt({ x: dx * 14, y: dy * 8 });
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // idle expression flicker: occasionally blink to "content" then back
  useEffect(() => {
    if (expressionOverride) return;
    const id = setInterval(() => {
      setExpr(prev => {
        if (prev === 'calm') return 'content';
        if (prev === 'content') return 'calm';
        return prev;
      });
    }, 3800);
    return () => clearInterval(id);
  }, [expressionOverride]);

  const handleClick = useCallback(() => {
    // expression burst
    setExpr('laugh');
    setBubble(pick(BUBBLES.click));
    setBubbleKey(k => k + 1);
    setTimeout(() => setExpr(expressionOverride || 'calm'), 700);

    // confetti
    const bits = Array.from({length: 14}).map((_,i) => ({
      id: Date.now() + i,
      left: 30 + Math.random()*40 + '%',
      top: 30 + Math.random()*30 + '%',
      dx: (Math.random()-.5)*260 + 'px',
      dy: (-Math.random()*240 - 50) + 'px',
      rot: (Math.random()*720 - 360) + 'deg',
      color: ['#FFD93D','#4ECDC4','#FF6B6B','#B19CD9','#7BC950'][i%5],
    }));
    setConfetti(bits);
    setTimeout(() => setConfetti([]), 1100);
  }, [expressionOverride]);

  // hover state — wink
  const [hovering, setHovering] = useState(false);
  const liveExpr = hovering ? 'wink' : expr;

  return (
    <div
      className="character-stage"
      ref={stageRef}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* orbiting decorations */}
      <Orbit cx="-4%" cy="14%" size={42} bg="var(--coral)" />
      <Orbit cx="92%" cy="8%"  size={28} bg="var(--mint)" delay="1.5s" />
      <Orbit cx="96%" cy="68%" size={36} bg="var(--yellow)" delay=".8s" />
      <Orbit cx="-6%" cy="74%" size={24} bg="var(--lav)" delay="2.2s" />

      {/* disc background */}
      <div className="character-disc" style={{ background: accent || 'var(--mint)' }}></div>

      {/* speech bubble */}
      <div className="character-bubble" key={bubbleKey}>{bubble}</div>

      {/* the character — bob wrapper, tilt inner */}
      <div
        className="character-bob"
        style={{ position: 'absolute', inset: '4% 4% 0 4%' }}
      >
        <div style={{
          width: '100%', height: '100%',
          transform: `translate(${tilt.x}px, ${tilt.y}px)`,
          transition: 'transform .15s ease-out',
          position: 'relative',
        }}>
          {Object.entries(EXPRESSIONS).map(([k, src]) => (
            <img
              key={k}
              src={src}
              alt={k}
              className={`character-img${k === 'reading' ? ' character-img-reading' : ''}`}
              style={{ opacity: liveExpr === k ? 1 : 0 }}
              draggable="false"
            />
          ))}
        </div>
      </div>

      {/* confetti */}
      <div className="character-confetti">
        {confetti.map(b => (
          <span
            key={b.id}
            className="confetti-bit"
            style={{
              left: b.left, top: b.top,
              background: b.color,
              '--dx': b.dx, '--dy': b.dy, '--rot': b.rot,
            }}
          />
        ))}
      </div>
    </div>
  );
};

function Orbit({ cx, cy, size, bg, delay='0s' }) {
  return (
    <div
      className="orbit"
      style={{
        left: cx, top: cy,
        width: size, height: size,
        background: bg,
        animation: `float 6s ease-in-out infinite`,
        animationDelay: delay,
      }}
    />
  );
}

window.MiniCharacter = function MiniCharacter({ expression = 'calm', accent }) {
  const src = EXPRESSIONS[expression] || EXPRESSIONS.calm;
  return (
    <div className="mini-character">
      <div className="mini-disc" style={{ background: accent || 'var(--mint)' }}></div>
      <div className="character-bob mini-bob">
        <img src={src} alt={expression} className="mini-img" draggable="false" />
      </div>
    </div>
  );
};

window.BUBBLES = BUBBLES;
