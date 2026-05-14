/* ------------------------------------------------------------------
   data.js — single source of truth for Net's bio site.
   Edit this file to update content (resume, contact, links, loves).
   The rest of the app reads window.RESUME and re-renders.
------------------------------------------------------------------- */

window.RESUME = {
  name: 'Kanet Kampiranon',
  nickname: 'Net',
  title: 'Backend Engineer with 5+ years of experience',
  location: 'Bangkok, Thailand',
  currentCompany: '',
  statusLabel: 'Open to new opportunities',
  pronouns: 'he/him',

  tagline: 'Loves clean code, long runs, and good books.',

  summary:
    "Backend Engineer specializing in Spring Boot microservices (Java/Kotlin), implementing " +
    "automated tests from QA test cases using Robot Framework, and mocking external services with " +
    "Mountebank and Karate. Experienced with AWS (S3/RDS) and proficient in system monitoring and log " +
    "analysis with OpenSearch & Grafana.",

  // Personal intro shown at the top of the About section (casual tone)
  aboutPersonal: {
    heading: "A little about me",
    body:
      "Hey! I'm Net 👋 — a backend engineer based in Bangkok with 5+ years building microservices in Java and Kotlin. " +
      "I spend most of my days with Spring Boot, writing unit tests, and making sure things don't break at 3 AM — fueled by way too much coffee. " +
      "Off the clock, I'm usually out on a long slow run, reading novels, sorting through TCG cards getting ready for the next tournament, " +
      "or tending my digital garden where I jot down thoughts and things I've learned.",
    chips: [
      { label: '📍 Bangkok, TH' },
      { label: '🏃 Running' },
      { label: '📚 Reading' },
      { label: '🃏 TCG collector' },
      { label: '🌱 Digital gardener' },
      { label: '☕ Coffee + code' },
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
    { title: 'Digital Garden', sub: 'thoughts & notes',    emoji: '🌱', bg: 'var(--coral)',  href: 'https://garden.admyhusky.dev' },
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
          { title: 'Ghost Me Free WiFi หลอกได้แต่จ่ายด้วย', author: 'สีพรำ', dateEnd: '2026-03-31', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202509/686064/1000285791_front_XXL.jpg' },
          { title: 'เฮาส์เมด : The Housemaid', author: 'Freida McFadden (ฟรีดา แมกแฟดเดน)', dateEnd: '2026-03-17', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202408/619675/1000274529_front_XXL.jpg' },
        ],
      },
      {
        name: '2025',
        books: [
          { title: 'กาสักอังก์ฆาต', author: 'กิตติศักดิ์ คงคา', dateEnd: '2025-10-30', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202403/607508/1000270896_front_XXL.jpg' },
          { title: 'นักตั้งเวลาตาย : The Night Stalker', author: 'Chris Carter', dateEnd: '2025-04-18', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202410/626267/1000276402_front_XXL.jpg' },
          { title: 'เลขเพชฌฆาต : The Executioner', author: 'Chris Carter', dateEnd: '2025-04-04', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202410/626265/1000276400_front_XXL.jpg' },
          { title: 'ฆาตกรกางเขนคู่ : The Crucifix Killer', author: 'Chris Carter', dateEnd: '2025-03-21', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8QWSCcrCiGQgIvaIIVdHIcShI94OQIl33g&s' },
          { title: 'ปริศนาเรือโนอาห์ปิดตาย', author: 'Haruo Yuuki (ฮารุโอะ ยูกิ)', dateEnd: '2025-03-06', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202501/637080/1000279611_front_XXL.jpg?v=1738548364' },
          { title: 'ใช้คลื่นพลังบวกดึงดูดพลังสุข Good Vibes, Good Life', author: 'เว็กซ์ คิงส์', dateEnd: '2025-02-05', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202109/533411/1000243428_front_XXL.jpg' },
          { title: 'Untitled Case: Human Horror ชมรมคนหัวลุก', author: 'ยชญ์ บรรพพงศ์, ธัญวัฒน์ อิพภูดม', dateEnd: '2025-01-01', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202009/512229/1000235799_back_XXL.jpg' },
        ],
      },
      {
        name: '2024',
        books: [
          { title: 'ทำไมคนที่ทำงานเก่งที่สุดถึงใช้สมุดกราฟ', author: 'ทะคะฮะชิ มะซะฟุมิ', dateEnd: '2024-12-30', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/201804/233846/1000207000_front_XXL.jpg?v=1725829911' },
          { title: 'ฆาตกรมนุษย์กบกับศพปริศนา 連续殺人鬼 カエル男', author: 'ชิจิริ นากายามะ', dateEnd: '2024-11-21', cover: 'https://bci.kinokuniya.com/jsp/images/book-img/97861/97861618/9786161855574.JPG' },
          { title: 'บ้านวิกลคนประหลาด เล่ม 2', author: 'อุเก็ตสึ', dateEnd: '2024-10-24', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202406/614895/1000272786_front_XXL.jpg?v=1725910233' },
          { title: 'LE HORLA', author: '', dateEnd: '2024-10-22', cover: 'https://dopffer.fr/wp-content/uploads/2019/09/le_horla.jpg' },
          { title: 'เพราะชีวิตดีได้กว่าที่เป็น Atomic Habits', author: 'เจมส์ เคลียร์', dateEnd: '2024-10-14', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202209/559466/1000253818_front_XXL.jpg' },
          { title: 'สัมผัสที่โหด Untitled Case : Sick Sense', author: 'ยชญ์ บรรพพงศ์ / ธัญวัฒน์ อิพภูดม', dateEnd: '2024-09-24', cover: 'https://thailand.kinokuniya.com/products/9786162986192/image_isbn' },
          { title: 'You ghost me every sadturday night', author: 'ธนชาติ ศิริภัทราชัย', dateEnd: '2024-09-24', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202403/607148/1000270577_front_XXL.jpg' },
          { title: 'เพราะแมวแฟรงกี้ ผมจึงอยากมีชีวิตต่อไปอีกหน่อย Frankie', author: 'ย็อคเคิน กูทช์ / มักซิม เลโอ', dateEnd: '2024-04-16', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202403/605519/1000269925_front_XXL.jpg' },
          { title: 'มหัศจรรย์ห้องสมุดเที่ยงคืน The Midnight Library', author: 'แมตต์ เฮก (Matt Haig)', dateEnd: '2024-04-14', cover: 'https://bci.kinokuniya.com/th/jsp/images/book-img/97861/97861682/9786168293157.JPG' },
          { title: 'เธอคู่ควรกับความรักที่ดีเสมอ', author: 'วินนี่', dateEnd: '2024-03-12', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202402/604000/1000269386_front_XXL.jpg' },
          { title: 'ร้านชําสําหรับคนอยากตาย', author: 'ฌอง เติลเล่', dateEnd: '2024-02-10', cover: 'https://image.makewebcdn.com/makeweb/m_1200x600/7GFEYsdVK/DefaultData/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%8A%E0%B8%B3%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%A2.jpg' },
        ],
      },
      {
        name: '2023',
        books: [
          { title: 'แมวตื่นสายมักจะโดนแมวตื่นเช้าคิดถึงก่อนเสมอ', author: 'ใบพัด นบน้อม', dateEnd: '2023-12-29', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202304/576454/1000260158_front_XXL.jpg' },
          { title: 'ภาพวาดปริศนากับการตามหาฆาตกร', author: 'อุเก็ตสึ', dateEnd: '2023-12-24', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202307/585876/1000263340_front_XXL.jpg' },
          { title: 'บ้านวิกลคนประหลาด', author: 'อุเก็ตสึ', dateEnd: '2023-12-08', cover: 'https://storage.naiin.com/system/application/bookstore/resource/product/202209/561084/1000254317_front_XXL.jpg' },
          { title: 'ทุกอย่างในชีวิต เริ่มจากความคิดที่เป็นระเบียบ', author: 'Bok Joo Hwan (พกจูฮวัน)', dateEnd: '2023-12-06', cover: 'https://bci.kinokuniya.com/jsp/images/book-img/97861/97861618/9786161828837.JPG' },
        ],
      },
    ],
  },

  // TCG Collection — add entries when you get new decks/achievements
  tcg: [
    {
      name: 'Battle of Talingchan',
      icon: 'images/bot-logo.webp',
      href: 'https://bangbon.app/profile/wcz9JZ2YfKDsN8iV6LhOWoigT1WT8flm',
    },
    {
      name: 'One Piece Card Game',
      icon: 'images/onepiece-logo.webp',
      soon: true,
    },
    {
      name: 'Pokémon TCG',
      icon: 'images/pokemon-logo.jpg',
      soon: true,
    },
  ],
};
