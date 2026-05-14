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
    facebook: 'https://www.facebook.com/net.kanet.2024',
    instagram: 'https://www.instagram.com/netbearrrr/',
    youtube: 'https://www.youtube.com/@admyhusky8063',
    spotify: 'https://open.spotify.com/user/31zp5qtkmnnho44uzcfk6o2gpagi?si=9583f0e032134e3f',
  },

  // Skills grouped by category — icon = devicon URL, tag = text fallback
  // Browse icons at https://devicon.dev
  skills: [
    {
      group: 'Languages',
      color: 'var(--coral)',
      items: [
        { name: 'Java',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'SQL',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
      ],
    },
    {
      group: 'Frameworks',
      color: 'var(--leaf)',
      items: [
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'JUnit',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg' },
        { name: 'Mockito',     tag: 'Mk' },
      ],
    },
    {
      group: 'Automation & Testing',
      color: 'var(--mint)',
      items: [
        { name: 'Robot Framework', tag: 'RF' },
        { name: 'Mountebank',      tag: 'MB' },
        { name: 'Karate',          tag: 'KA' },
      ],
    },
    {
      group: 'Currently Learning',
      color: 'var(--sky)',
      learning: true,
      items: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
        { name: 'Dart',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
      ],
    },
    {
      group: 'Cloud & Infrastructure',
      color: 'var(--lav)',
      items: [
        { name: 'AWS',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Redis',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
        { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'OpenSearch', tag: 'OS' },
        { name: 'Grafana',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg' },
        { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
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
    { title: 'Bookshelf',      sub: 'currently reading',   emoji: '📚', bg: 'var(--yellow)', href: '#bookshelf' },
    { title: 'Running',        sub: 'long & slow',         emoji: '🏃', bg: 'var(--mint)',   href: '#running' },
    { title: 'TCG Collection', sub: 'cards & corners',     emoji: '🃏', bg: 'var(--lav)',    href: '#tcg' },
    { title: 'Digital Garden', sub: 'thoughts & notes',    emoji: '🌱', bg: 'var(--leaf)',   href: 'https://garden.admyhusky.dev' },
  ],

  // Running records — add new entries at the top when you finish a race
  runs: [
    {
      event: 'TCP — SPONSOR RUN: RUN TO REFRESH',
      distance: '10K',
      date: '2 Nov 2025',
      emoji: '🏆',
      eslip: 'https://eslip.primeworks.asia/?r=b424x2v224039494',
    },
  ],

  // YouTube — grouped by category, max 3 shown per category (rest behind "ดูเพิ่มเติม")
  // videoId = the part after youtube.com/watch?v=
  youtube: {
    channel: 'https://www.youtube.com/@admyhusky8063',
    previewLimit: 2,
    categories: [
      {
        name: 'Dead by Daylight',
        videos: [
          { title: 'ขอเป็นพระเอกในหัวใจเธอ', videoId: 'REPLACE_ME_1', date: '6 ปีที่แล้ว' },
          { title: 'ผู้ชมทางบ้าน #1', videoId: 'REPLACE_ME_2', date: '5 ปีที่แล้ว' },
        ],
      },
      {
        name: 'Talesrunner',
        videos: [
          { title: 'ครูพี่ Netto', videoId: 'REPLACE_ME_3', date: '6 ปีที่แล้ว' },
          { title: 'นิทานก่อนนอน', videoId: 'REPLACE_ME_4', date: '5 ปีที่แล้ว' },
        ],
      },
      {
        name: 'Valorant',
        videos: [
          { title: 'If you have communicate...', videoId: 'REPLACE_ME_5', date: '4 ปีที่แล้ว' },
        ],
      },
    ],
  },

  // Bookshelf — grouped by year finished (newest first)
  books: {
    previewLimit: 3,
    categories: [
      {
        name: '2026',
        books: [
          { title: 'Ghost Me Free WiFi หลอกได้แต่จ่ายด้วย', author: 'สีพรำ', dateEnd: '2026-03-31' },
          { title: 'เฮาส์เมด : The Housemaid', author: 'Freida McFadden (ฟรีดา แมกแฟดเดน)', dateEnd: '2026-03-17' },
        ],
      },
      {
        name: '2025',
        books: [
          { title: 'กาสักอังก์ฆาต', author: 'กิตติศักดิ์ คงคา', dateEnd: '2025-10-30' },
          { title: 'นักตั้งเวลาตาย : The Night Stalker', author: 'Chris Carter', dateEnd: '2025-04-18' },
          { title: 'เลขเพชฌฆาต : The Executioner', author: 'Chris Carter', dateEnd: '2025-04-04' },
          { title: 'ฆาตกรกางเขนคู่ : The Crucifix Killer', author: 'Chris Carter', dateEnd: '2025-03-21' },
          { title: 'ปริศนาเรือโนอาห์ปิดตาย', author: 'Haruo Yuuki (ฮารุโอะ ยูกิ)', dateEnd: '2025-03-06' },
          { title: 'ใช้คลื่นพลังบวกดึงดูดพลังสุข Good Vibes, Good Life', author: 'เว็กซ์ คิงส์', dateEnd: '2025-02-05' },
          { title: 'Untitled Case: Human Horror ชมรมคนหัวลุก', author: 'ยชญ์ บรรพพงศ์, ธัญวัฒน์ อิพภูดม', dateEnd: '2025-01-01' },
        ],
      },
      {
        name: '2024',
        books: [
          { title: 'ทำไมคนที่ทำงานเก่งที่สุดถึงใช้สมุดกราฟ', author: 'ทะคะฮะชิ มะซะฟุมิ', dateEnd: '2024-12-30' },
          { title: 'ฆาตกรมนุษย์กบกับศพปริศนา 連续殺人鬼 カエル男', author: 'ชิจิริ นากายามะ', dateEnd: '2024-11-21' },
          { title: 'บ้านวิกลคนประหลาด เล่ม 2', author: 'อุเก็ตสึ', dateEnd: '2024-10-24' },
          { title: 'LE HORLA', author: '', dateEnd: '2024-10-22' },
          { title: 'เพราะชีวิตดีได้กว่าที่เป็น Atomic Habits', author: 'เจมส์ เคลียร์', dateEnd: '2024-10-14' },
          { title: 'สัมผัสที่โหด Untitled Case : Sick Sense', author: 'ยชญ์ บรรพพงศ์ / ธัญวัฒน์ อิพภูดม', dateEnd: '2024-09-24' },
          { title: 'You ghost me every sadturday night', author: 'ธนชาติ ศิริภัทราชัย', dateEnd: '2024-09-24' },
          { title: 'เพราะแมวแฟรงกี้ ผมจึงอยากมีชีวิตต่อไปอีกหน่อย Frankie', author: 'ย็อคเคิน กูทช์ / มักซิม เลโอ', dateEnd: '2024-04-16' },
          { title: 'มหัศจรรย์ห้องสมุดเที่ยงคืน The Midnight Library', author: 'แมตต์ เฮก (Matt Haig)', dateEnd: '2024-04-14' },
          { title: 'เธอคู่ควรกับความรักที่ดีเสมอ', author: 'วินนี่', dateEnd: '2024-03-12' },
          { title: 'ร้านชําสําหรับคนอยากตาย', author: 'ฌอง เติลเล่', dateEnd: '2024-02-10' },
        ],
      },
      {
        name: '2023',
        books: [
          { title: 'แมวตื่นสายมักจะโดนแมวตื่นเช้าคิดถึงก่อนเสมอ', author: 'ใบพัด นบน้อม', dateEnd: '2023-12-29' },
          { title: 'ภาพวาดปริศนากับการตามหาฆาตกร', author: 'อุเก็ตสึ', dateEnd: '2023-12-24' },
          { title: 'บ้านวิกลคนประหลาด', author: 'อุเก็ตสึ', dateEnd: '2023-12-08' },
          { title: 'ทุกอย่างในชีวิต เริ่มจากความคิดที่เป็นระเบียบ', author: 'Bok Joo Hwan (พกจูฮวัน)', dateEnd: '2023-12-06' },
        ],
      },
    ],
  },

  // TCG Collection — add entries when you get new decks/achievements
  tcg: [
    {
      name: 'Battle of Talingchan',
      emoji: '✨',
      href: 'https://bangbon.app/profile/wcz9JZ2YfKDsN8iV6LhOWoigT1WT8flm',
    },
    {
      name: 'One Piece Card Game',
      emoji: '🏴‍☠️',
      soon: true,
    },
    {
      name: 'Pokémon TCG',
      emoji: '⚡',
      soon: true,
    },
  ],
};
