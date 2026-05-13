/* ------------------------------------------------------------------
   data.js — single source of truth for Net's bio site.
   Edit this file to update content (resume, contact, links, loves).
   The rest of the app reads window.RESUME and re-renders.
------------------------------------------------------------------- */

window.RESUME = {
  name: 'Kanet Kampiranon',
  nickname: 'Net',
  title: 'Backend Engineer',
  location: 'Bangkok, Thailand',
  // currentCompany: leave empty when between jobs; statusLabel shows instead
  currentCompany: '',
  statusLabel: 'Open to new opportunities',
  pronouns: 'he/him',

  tagline: 'Just a guy who loves tech, good books, long runs, and building meaningful things.',

  summary:
    "Backend Engineer specializing in Spring Boot microservices (Java/Kotlin), implementing " +
    "automated tests from QA test cases using Robot Framework, and mocking external services with " +
    "Mountebank and Karate. Experienced with AWS (S3/RDS) and proficient in system monitoring and log " +
    "analysis with OpenSearch & Grafana.",

  // Personal intro shown at the top of the About section (casual tone)
  aboutPersonal: {
    heading: "A little about me",
    body:
      "Hey! I'm Net 👋 — a Bangkok-based backend engineer with a soft spot for well-tested code and quietly-resilient systems. " +
      "Off the clock you'll probably catch me out on a long slow run, deep into a book, sorting through TCG cards, " +
      "or tending to my little corner of the internet (admyhusky.dev + a digital garden of half-finished thoughts).",
    chips: [
      { label: '📍 Bangkok, TH' },
      { label: '☕ Coffee + code' },
      { label: '🏃 Long-distance runs' },
      { label: '📚 Always reading' },
      { label: '🃏 TCG collector' },
      { label: '🌱 Digital gardener' },
    ],
  },

  contact: {
    phone: '094-346-2591',
    phoneTel: '+66943462591',
    email: 'netto_kanet@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/kanet-kampiranon',
    github: 'https://github.com/NetKanet',
    site: 'https://admyhusky.dev',
  },

  // Skills grouped by category — order is preserved, easy to extend
  skills: [
    {
      group: 'Languages',
      ico: '⌘',
      color: 'var(--coral)',
      items: [
        { name: 'Java',   tag: 'JV' },
        { name: 'Kotlin', tag: 'KT' },
        { name: 'Python', tag: 'PY' },
        { name: 'SQL',    tag: 'SQL' },
      ],
    },
    {
      group: 'Frameworks',
      ico: '◭',
      color: 'var(--leaf)',
      items: [
        { name: 'Spring Boot',  tag: 'SB' },
        { name: 'Spring Batch', tag: 'SBa' },
        { name: 'JUnit',        tag: 'JU' },
        { name: 'Mockito',      tag: 'Mk' },
      ],
    },
    {
      group: 'Automation & Testing',
      ico: '✓',
      color: 'var(--mint)',
      items: [
        { name: 'Robot Framework', tag: 'RF' },
        { name: 'Mountebank',      tag: 'MB' },
        { name: 'Karate',          tag: 'KA' },
      ],
    },
    {
      group: 'Cloud & Infrastructure',
      ico: '☁',
      color: 'var(--lav)',
      items: [
        { name: 'AWS S3',     tag: 'S3' },
        { name: 'AWS RDS',    tag: 'RDS' },
        { name: 'OpenSearch', tag: 'OS' },
        { name: 'Grafana',    tag: 'Gf' },
      ],
    },
  ],

  experience: [
    {
      co: 'True Corporation',
      role: 'Backend Engineer',
      date: 'Nov 2025 — Apr 2026',
      bullets: [
        "Established and implemented the team's first unit testing standards, improving code quality and long-term maintainability.",
        "Architected a multi-level caching strategy using Caffeine (L1) and Redis (L2), significantly reducing API latency and database load.",
        "Contributed to the system development for the integration of True and dtac brands into a unified Single Loyalty platform, enabling a seamless and consistent customer experience across both ecosystems.",
      ],
    },
    {
      co: 'Ascend Group (Nano)',
      role: 'Software Engineer',
      date: 'Mar 2023 — Oct 2025',
      bullets: [
        "Developed and maintained backend microservices using Spring Boot and Kotlin.",
        "Applied RESTful API principles with versioned endpoints (v1/v2) and proper HTTP methods to ensure consistency, idempotency, and smooth client integration.",
        "Refactored legacy code to support new features while maintaining input/output consistency.",
        "Documented technical details including sequence diagrams and API contracts in Confluence.",
        "Designed and implemented Google notification integration to alert on batch job completion or errors, supporting faster incident response and issue resolution.",
        "Migrated multiple applications from Java 8 to Java 17 or 21 (LTS) and upgraded Spring Boot 2 to 3.",
        "Partnered with QA teams to design and implement comprehensive automation tests, ensuring robust and reliable application performance.",
        "Developed a unit testing framework with JUnit and Mockito, consistently maintaining coverage above 80%.",
      ],
    },
    {
      co: 'SCB',
      role: 'Junior Software Engineer',
      date: 'Oct 2020 — Feb 2023',
      bullets: [
        "Worked closely with the team across design, development, and testing phases.",
        "Refactored legacy monolithic services into microservices using Java Spring Boot.",
        "Coordinated with internal teams (e.g., ATM) and external parties (e.g., banks and ITMX) for data validation.",
      ],
    },
  ],

  education: [
    {
      school: "King Mongkut's Institute of Technology Ladkrabang",
      degree: 'Bachelor of Computer Science',
      date: '2016 — 2020',
    },
  ],

  loves: [
    { title: 'YouTube',        sub: '@admyhusky',          emoji: '▶', bg: 'var(--coral)',  fg: '#fff', href: 'https://www.youtube.com/@admyhusky8063' },
    { title: 'Bookshelf',      sub: 'currently reading',   emoji: '📚', bg: 'var(--yellow)', href: 'https://link.bookshelfapp.info/YerIdAswxv' },
    { title: 'Running',        sub: 'long & slow',         emoji: '🏃', bg: 'var(--mint)',   href: 'https://admyhusky.dev/running.html' },
    { title: 'TCG Collection', sub: 'cards & corners',     emoji: '🃏', bg: 'var(--lav)',    href: 'https://admyhusky.dev/tcg.html' },
    { title: 'Digital Garden', sub: 'thoughts & notes',    emoji: '🌱', bg: 'var(--leaf)',   href: 'https://garden.admyhusky.dev' },
    { title: 'GitHub',         sub: '@NetKanet',           emoji: '◉', bg: '#fff',          href: 'https://github.com/NetKanet' },
  ],
};
