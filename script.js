/* =============================================================================
   Mohamed Tamim Revo — portfolio script (vanilla JS, no dependencies)

   Sections you will most likely edit:
     1. CONTACT SETTINGS  — WhatsApp number, email, social links
     2. PROJECTS          — your portfolio items
     3. TRANSLATIONS      — all English / Arabic interface text
   ============================================================================= */

/* -----------------------------------------------------------------------------
   1. CONTACT SETTINGS — CUSTOMIZE before publishing
   ----------------------------------------------------------------------------- */

// WhatsApp short link (wa.me/message/...). When set, every WhatsApp button opens it.
const WHATSAPP_LINK = "https://wa.me/message/FRMNTVRXH24WD1";

// Alternative: number in international format, digits only, no "+", spaces or leading zeros.
// Used only when WHATSAPP_LINK is "". Example format: "213550123456".
const WHATSAPP_NUMBER = "";

// Pre-filled message the visitor sees in WhatsApp (per language).
const WHATSAPP_MESSAGE = {
  en: "Hi! I saw your portfolio and I'd like to talk about a video project.",
  ar: "مرحبًا! شاهدت أعمالك وأودّ التحدث معك عن مشروع فيديو."
};

// Your public email address (placeholder).
const CONTACT_EMAIL = "mohamed.tamim.revo@gmail.com";

// Social profiles. Set url to "" to hide one (Instagram / LinkedIn: add your links).
const SOCIAL_LINKS = [
  { label: "Instagram", url: "" },
  { label: "YouTube",   url: "https://www.youtube.com/@mohamed_revo" },
  { label: "Behance",   url: "https://www.behance.net/gallery/217395127/Thumbnails" },
  { label: "LinkedIn",  url: "" }
];

// Behance gallery with designs & thumbnails (button in the Work section).
const BEHANCE_URL = "https://www.behance.net/gallery/217395127/Thumbnails";

/* -----------------------------------------------------------------------------
   2. PROJECTS — CUSTOMIZE
   -----------------------------------------------------------------------------
   ORDER: list projects from OLDEST (first) to NEWEST (last).
   Add featured: true to highlight a project (green frame, "Featured" badge,
   wider card on large screens).
   They are numbered automatically (01 = oldest) and the site shows the
   NEWEST first. To add a new project, append it at the END of the array.

   Each project:
     title:       { en: "...", ar: "..." }
     categories:  one or more of "motion", "ads", "youtube", "films", "ai", "chroma"
     thumbnail:   "images/your-image.jpg" (in the /images folder) or "" to use the
                  first video's YouTube thumbnail automatically.
     description: { en: "...", ar: "..." }
     videos:      [{ url: "YouTube link", title: { en, ar } }, ...]
                  Watch, youtu.be, Shorts and embed links all work. Shorts open
                  in a vertical player.
                  A video file in the /videos folder also works:
                  { file: "videos/my-video.mp4", poster: "images/frame.jpg", vertical: true, title: { en, ar } }
     images:      [{ src: "images/...", title: { en, ar } }, ...]
                  A gallery of designs. A project can have videos AND images:
                  the videos come first, then the images.
   ----------------------------------------------------------------------------- */
const PROJECTS = [
  /* 01 */ {
    title: { en: "Kuwaitna — Media Agency", ar: "كويتنا — وكالة إعلامية" },
    categories: ["motion", "ads"],
    thumbnail: "images/00-media-agency.jpg",
    description: {
      en: "Logo animation and branded shorts for Kuwaitna, a media agency.",
      ar: "تحريك الشعار ومقاطع قصيرة بهوية بصرية لوكالة كويتنا الإعلامية."
    },
    videos: [
      { file: "videos/00-media-agency.mp4", poster: "images/00-media-agency-poster.jpg", vertical: true, title: { en: "Kuwaitna — logo animation", ar: "كويتنا — تحريك الشعار" } },
      { url: "https://youtube.com/shorts/8QXdREOCe3Q", title: { en: "Kuwaitna — video 4", ar: "كويتنا 4" } },
      { url: "https://youtube.com/shorts/cQ5jB1akMO0", title: { en: "Kuwaitna — video 3", ar: "كويتنا 3" } }
    ]
  },
  /* 02 */ {
    title: { en: "Med Tech — AI in Healthcare", ar: "ميد تك — الذكاء الاصطناعي في الطب" },
    categories: ["motion"],
    thumbnail: "images/01-med-tech.jpg",
    description: {
      en: "A motion graphic about how technology and artificial intelligence are reshaping healthcare.",
      ar: "موشن غرافيك عن دور التقنية والذكاء الاصطناعي في تطوير المجال الطبي."
    },
    videos: [
      { url: "https://youtube.com/shorts/bo8o5rnRheg", title: { en: "AI in healthcare — motion graphic", ar: "الذكاء الاصطناعي في الطب — موشن غرافيك" } }
    ]
  },
  /* 03 */ {
    title: { en: "Travel Agency — Shawwal Umrah 2025", ar: "وكالة سياحية — عروض عمرة شوال 2025" },
    categories: ["motion", "ads"],
    thumbnail: "images/02-umrah-3.png",
    description: {
      en: "Promotional visuals for a travel agency's Umrah packages: an offers poster, hotel price cards and a campaign cover.",
      ar: "تصاميم ترويجية لعروض العمرة لوكالة سياحية: ملصق العروض وبطاقات أسعار الفنادق وغلاف الحملة."
    },
    videos: [
      { url: "https://www.youtube.com/shorts/-p3ghVbgUJY", title: { en: "Promo video — design & motion graphics", ar: "فيديو ترويجي — تصميم وموشن غرافيك" } }
    ],
    images: [
      { src: "images/02-umrah-3.png", title: { en: "Campaign cover — Shawwal Umrah 2025", ar: "غلاف الحملة — عمرة شوال 2025" } },
      { src: "images/02-umrah-1.webp", title: { en: "Full offers poster — vertical", ar: "ملصق العروض الكامل — عمودي" } },
      { src: "images/02-umrah-2.png", title: { en: "Hotel price card — square post", ar: "بطاقة أسعار الفندق — منشور مربع" } }
    ]
  },
  /* 04 */ {
    title: { en: "1954 — Archive Motion Edit", ar: "1954 — مونتاج أرشيفي" },
    categories: ["motion", "films"],
    thumbnail: "",
    description: {
      en: "A motion edit built around black-and-white archive photography.",
      ar: "مونتاج موشن مبني على صور أرشيفية بالأبيض والأسود."
    },
    videos: [
      { url: "https://youtu.be/L94CSkI8CVA", title: { en: "1954 — archive edit", ar: "1954 — مونتاج أرشيفي" } }
    ]
  },
  /* 05 */ {
    title: { en: "3D Camera Moves in After Effects", ar: "تحريك الكاميرا ثلاثي الأبعاد في أفتر إفكتس" },
    categories: ["motion"],
    thumbnail: "images/04-camera-layers.webp",
    description: {
      en: "Motion graphics driven by After Effects' 3D camera: flat layers turned into depth, parallax and cinematic movement.",
      ar: "موشن غرافيك يعتمد على تحريك كاميرا أفتر إفكتس ثلاثية الأبعاد، لتحويل الطبقات المسطحة إلى عمق وحركة سينمائية."
    },
    videos: [
      { url: "https://youtube.com/shorts/7d0mMGKbwKk", title: { en: "3D camera move — story scene", ar: "حركة كاميرا ثلاثية الأبعاد — مشهد قصصي" } },
      { url: "https://youtube.com/shorts/YYwFYOt8M_U", title: { en: "3D camera move — night sea scene", ar: "حركة كاميرا ثلاثية الأبعاد — مشهد بحري ليلي" } },
      { url: "https://youtube.com/shorts/F6zJipCYQYo", title: { en: "Neon figure animation", ar: "تحريك شخصية نيون" } },
      { url: "https://www.youtube.com/shorts/tFhd1NxRzqk", title: { en: "IShowSpeed — 3D camera edit", ar: "IShowSpeed — مونتاج بكاميرا ثلاثية الأبعاد" } },
      { url: "https://www.youtube.com/shorts/sULz0R994J8", title: { en: "Meme coins — 3D camera edit", ar: "العملات الميمية — مونتاج بكاميرا ثلاثية الأبعاد" } }
    ]
  },
  /* 06 */ {
    title: { en: "Motion Graphics & Documentary Shorts", ar: "موشن غرافيك ومقاطع وثائقية" },
    categories: ["motion", "films"],
    thumbnail: "images/05-documentary-shorts.svg",
    description: {
      en: "Short documentary-style explainers mixing motion graphics, footage and narration — Bitcoin, crypto and more.",
      ar: "مقاطع وثائقية قصيرة تمزج الموشن غرافيك باللقطات والتعليق الصوتي، عن البيتكوين والعملات الرقمية وغيرها."
    },
    videos: [
      { url: "https://youtube.com/shorts/pCmQJc4JzPI", title: { en: "Documentary short — DOC25", ar: "مقطع وثائقي — DOC25" } },
      { url: "https://youtube.com/shorts/v_atNaIbszc", title: { en: "Bitcoin explained — part 1", ar: "شرح البيتكوين — الجزء 1" } },
      { url: "https://youtube.com/shorts/07k-OcMIAK0", title: { en: "Bitcoin explained — part 2", ar: "شرح البيتكوين — الجزء 2" } },
      { url: "https://youtube.com/shorts/GppFSUPQBUI", title: { en: "Documentary short — DOC23", ar: "مقطع وثائقي — DOC23" } },
      { url: "https://youtube.com/shorts/F6zJipCYQYo", title: { en: "Neon figure animation", ar: "تحريك شخصية نيون" } },
      { url: "https://youtube.com/shorts/sN9LG_8_lk8", title: { en: "Arab Anecdotes — intro", ar: "طرائف العرب — المقدمة" } },
      { url: "https://youtube.com/shorts/Y0eVIdKOnTM", title: { en: "Suyuf Battara — channel intro", ar: "إنترو سيوف بتارة" } },
      { url: "https://youtube.com/shorts/yH7TJuL_8nw", title: { en: "Do you know what's beautiful about hardship?", ar: "هل تعلم ما الجميل في العسر" } },
      { url: "https://youtube.com/shorts/-p3ghVbgUJY", title: { en: "Umrah promo — design & motion graphics", ar: "إعلان العمرة — تصميم وموشن غرافيك" } },
      { url: "https://youtube.com/shorts/E7kPW5lbmXQ", title: { en: "Character motion graphic", ar: "موشن غرافيك شخصية" } },
      { url: "https://youtube.com/shorts/YTUpOlP_I20", title: { en: "Character motion graphic — 1609", ar: "موشن غرافيك شخصية — 1609" } }
    ]
  },
  /* 07 */ {
    title: { en: "Suyuf Battara — History Channel", ar: "قناة سيوف بتارة" },
    categories: ["youtube", "films", "ai"],
    thumbnail: "images/06-suyuf-battara.jpg",
    description: {
      en: "Editing, storytelling and AI-generated visuals for an Arabic history channel: episodes, episode intros, channel intros and a book ad.",
      ar: "مونتاج وسرد قصصي ومشاهد مولّدة بالذكاء الاصطناعي لقناة تاريخية عربية: حلقات ومقدمات حلقات وإنترو القناة وإعلان كتاب."
    },
    videos: [
      { url: "https://youtube.com/shorts/Hu5qBY6pbRo", title: { en: "The Assassins (Hashashin) episode", ar: "حلقة الحشاشون" } },
      { url: "https://www.youtube.com/watch?v=yIWldQWLPRI", title: { en: "Amr ibn Ma'di Yakrib — full episode", ar: "حلقة عمرو بن معد يكرب — الحلقة كاملة" } },
      { url: "https://youtube.com/shorts/n1c5Uoc7X6U", title: { en: "Battles episode — intro", ar: "حلقة الغزوات — المقدمة" } },
      { url: "https://youtube.com/shorts/sN9LG_8_lk8", title: { en: "Arab Anecdotes 1 — intro", ar: "طرائف العرب 1 — المقدمة" } },
      { url: "https://youtube.com/shorts/yg10D7xwJp0", title: { en: "Suyuf Battara — channel intro 1", ar: "إنترو سيوف بتارة 1" } },
      { url: "https://youtube.com/shorts/Y0eVIdKOnTM", title: { en: "Suyuf Battara — channel intro 2", ar: "إنترو سيوف بتارة 2" } },
      { url: "https://youtube.com/shorts/--lgkp4cDGA", title: { en: "Book ad — AI storytelling", ar: "إعلان كتاب — سرد قصصي بالذكاء الاصطناعي" } }
    ]
  },
  /* 08 */ {
    title: { en: "ECONO GRAFIX — Economy Infographic", ar: "ECONO GRAFIX — إنفوغرافيك اقتصادي" },
    categories: ["motion"],
    thumbnail: "",
    description: {
      en: "Motion graphics edit for ECONO GRAFIX, explaining an economic idea through animated infographics.",
      ar: "مونتاج موشن غرافيك لـ ECONO GRAFIX يشرح فكرة اقتصادية عبر إنفوغرافيك متحرك."
    },
    videos: [
      { url: "https://youtube.com/shorts/7frTd11zV7E", title: { en: "Animated economy infographic", ar: "إنفوغرافيك اقتصادي متحرك" } }
    ]
  },
  /* 09 */ {
    title: { en: "Chroma Key & Branded Reels", ar: "كروما وريلز بهوية بصرية" },
    categories: ["chroma", "ads"],
    thumbnail: "images/08-chroma-key.svg",
    description: {
      en: "Green-screen presenter videos keyed and composited into branded backgrounds, animated UI and graphics.",
      ar: "فيديوهات مقدّم على خلفية خضراء (كروما)، مدمجة مع خلفيات وواجهات متحركة وعناصر جرافيك بهوية العلامة."
    },
    videos: [
      { url: "https://youtube.com/shorts/Z0MSQ9gqM_M", title: { en: "Chroma 22 — presenter with animated UI", ar: "كروما 22 — مقدّم مع واجهة متحركة" } },
      { url: "https://youtube.com/shorts/0ovEZtaYYI4", title: { en: "Chroma 21 — branded presenter video", ar: "كروما 21 — فيديو مقدّم بهوية بصرية" } },
      { url: "https://youtube.com/shorts/kMDP_579MFI", title: { en: "Brand identity reel 07", ar: "ريلز هوية بصرية 07" } },
      { url: "https://youtube.com/shorts/u0_e7s45EYY", title: { en: "Brand identity reel 06", ar: "ريلز هوية بصرية 06" } }
    ]
  },
  /* 10 */ {
    title: { en: "AI Videos — Generated Storytelling", ar: "فيديوهات الذكاء الاصطناعي" },
    categories: ["ai"],
    thumbnail: "images/09-ai-videos.svg",
    description: {
      en: "Scenes and stories built with AI-generated visuals, then edited, timed and sound-designed into finished shorts.",
      ar: "مشاهد وقصص مبنية بمرئيات مولّدة بالذكاء الاصطناعي، ثم مُنتجة ومضبوطة الإيقاع والصوت لتصبح مقاطع قصيرة متكاملة."
    },
    videos: [
      { url: "https://youtube.com/shorts/BiqyAvi3WJM", title: { en: "Arab Anecdotes — AI clip", ar: "طرائف العرب — مقطع بالذكاء الاصطناعي" } },
      { url: "https://youtube.com/shorts/ZuR52vNczSE", title: { en: "Dajjal — AI scene 1", ar: "الدجال — مشهد بالذكاء الاصطناعي 1" } },
      { url: "https://youtube.com/shorts/0hS40nm5vY8", title: { en: "Dajjal — AI scene 2", ar: "الدجال — مشهد بالذكاء الاصطناعي 2" } },
      { url: "https://youtube.com/shorts/ibFIRpjqpG4", title: { en: "AI generated video 04", ar: "فيديو مولّد بالذكاء الاصطناعي 04" } },
      { url: "https://youtube.com/shorts/bglhiDKxk3E", title: { en: "Arab Anecdotes — AI clip 2", ar: "طرائف العرب — مقطع بالذكاء الاصطناعي 2" } },
      { url: "https://youtube.com/shorts/ozORBTKBePY", title: { en: "AI short", ar: "مقطع قصير بالذكاء الاصطناعي" } },
      { url: "https://youtube.com/shorts/cd-sONbMinI", title: { en: "Dajjal — AI intro", ar: "الدجال — مقدمة بالذكاء الاصطناعي" } }
    ]
  },
  /* 11 */ {
    title: { en: "Dr. James", ar: "د. جيمس" },
    categories: ["ads"],
    featured: true,
    thumbnail: "",
    description: {
      en: "A short promo edit for Dr. James — pacing, motion and sound built to hook viewers from the first second.",
      ar: "مقطع ترويجي قصير لـ د. جيمس، بإيقاع وحركة وصوت مصمَّمة لتشدّ المشاهد من أول ثانية."
    },
    videos: [
      { url: "https://youtube.com/shorts/Hb_526NxxX0", title: { en: "Dr. James — video 1", ar: "د. جيمس — الفيديو 1" } }
    ]
  }
];

/* -----------------------------------------------------------------------------
   3. TRANSLATIONS — CUSTOMIZE text in both languages
   ----------------------------------------------------------------------------- */
const I18N = {
  en: {
    "meta.title": "Mohamed Tamim Revo — Video Editor & Filmmaker",
    "a11y.skip": "Skip to content",
    "lang.group": "Language",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.role": "Video Editor & Filmmaker",
    "hero.title1": "Turning ideas into",
    "hero.title2": "visual stories",
    "hero.title3": "that stay with people.",
    "hero.intro": "I edit, animate and tell stories for brands, creators and channels — from motion graphics and ads to documentaries and AI-assisted storytelling, built to hold attention from the first frame to the last.",
    "hero.ctaWork": "View my work",
    "hero.ctaContact": "Message on WhatsApp",
    "hero.screenTag": "Replace with your still frame",
    "hero.toolsTitle": "Toolkit",
    "hero.toolsAll": "All tools",

    "work.eyebrow": "Selected work",
    "work.title": "Featured projects",
    "work.note": "Newest projects first. Open a project to watch every clip inside it.",
    "work.filterLabel": "Filter projects by category",
    "work.showing": "Showing {n} projects",
    "work.project": "Project {n}",
    "work.behance": "Designs & thumbnails on Behance",

    "cat.all": "All",
    "cat.motion": "Motion Graphics",
    "cat.ads": "Reels & Ads",
    "cat.youtube": "YouTube Videos",
    "cat.films": "Films & Documentaries",
    "cat.ai": "AI Content",
    "cat.chroma": "Chroma Key",

    "card.play": "Play video",
    "card.playAll": "Watch clips",
    "card.view": "View designs",
    "card.featured": "Featured",
    "card.videos1": "1 video",
    "card.videos2": "2 videos",
    "card.videos": "{n} videos",
    "card.images": "{n} designs",

    "modal.close": "Close",
    "modal.player": "Video player",
    "modal.noVideo": "No video has been added for this project yet.",
    "modal.clips": "Clips in this project",
    "modal.designs": "Designs in this project",
    "modal.media": "Designs & clips in this project",
    "modal.youtube": "Watch on YouTube",
    "modal.offline": "Videos play here once the site is online (GitHub Pages). Opened from a file on your computer, YouTube blocks the embedded player.",

    "about.eyebrow": "About",
    "about.title": "Story first. Every cut with a purpose.",
    "about.p1": "I'm a video editor and filmmaker focused on story, rhythm and detail. I work with brands, creators and channels to shape footage into videos that feel intentional — from quick social cuts and motion graphics to long-form history episodes.",
    "about.p2": "My process is simple: understand the goal, find the story in the footage, then refine every cut, sound and frame until it feels right.",
    "about.basedLabel": "From",
    "about.basedValue": "Algeria · 23 years old",
    "about.workLabel": "Works",
    "about.workValue": "[Remote / on-site]",
    "about.langsTitle": "Languages",
    "about.langsPrimary": "Primary",
    "about.langsMore": "Additional",

    "lang.english": "English",
    "lang.arabic": "Arabic",
    "lang.french": "French",
    "lang.turkish": "Turkish",
    "lang.italian": "Italian",

    "services.eyebrow": "Services",
    "services.title": "What I can make for you",
    "services.s1Title": "Motion graphics",
    "services.s1Text": "Animated titles, logo reveals, infographics, 3D camera moves and graphic elements that give your edits a polished, on-brand finish.",
    "services.s2Title": "Reels & advertisements",
    "services.s2Text": "Short, punchy vertical and horizontal edits for social feeds and campaigns — including chroma-key presenter videos.",
    "services.s3Title": "Long-form YouTube editing",
    "services.s3Text": "Pacing, storytelling, b-roll, captions and sound for episodes that keep viewers watching — with AI-generated visuals when the story needs them.",
    "services.s4Title": "Video editing & finishing",
    "services.s4Text": "From first assembly to final delivery: colour correction, audio clean-up, mixing and exports for every platform.",

    "skills.eyebrow": "Software & skills",
    "skills.title": "The toolkit behind the work",
    "skills.note": "Tools I use day to day, from first cut to final export.",
    "skills.uiux": "UI/UX design",
    "skills.code": "Basic programming",
    "skills.tagEdit": "Editing",
    "skills.tagMotion": "Motion & VFX",
    "skills.tagAudio": "Audio",
    "skills.tagColor": "Edit & colour",
    "skills.tagSocial": "Social edits",
    "skills.tagImage": "Thumbnails & stills",
    "skills.tagPlan": "Planning",
    "skills.tagWeb": "Web prototypes",
    "skills.tagDesign": "Design",
    "skills.tagCode": "Code",

    "exp.title": "Experience I've built",
    "exp.note": "Beyond the software: the work I've done hands-on.",
    "exp.content": "Arabic & English content creation",
    "exp.contentText": "Writing, producing and publishing content in both languages for social media platforms.",
    "exp.pages": "Social media page management",
    "exp.pagesText": "Running pages day to day: planning posts, publishing and keeping a consistent identity.",
    "exp.design": "Image & video design",
    "exp.designText": "Posters, thumbnails, social posts and videos designed to stop the scroll.",
    "exp.voice": "Voice-over tuning",
    "exp.voiceText": "Cleaning, levelling and syncing narration so every word lands clearly.",
    "exp.uiux": "UI/UX",
    "exp.uiuxText": "Interface layouts and user flows that are clear and easy to use.",
    "exp.code": "Programming",
    "exp.codeText": "Building and editing web pages like this portfolio.",

    "contact.eyebrow": "Contact",
    "contact.title": "Have a story to tell? Let's cut it together.",
    "contact.text": "Tell me about your project, timeline and where the video will live. The fastest way to reach me is WhatsApp.",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.socials": "Social profiles",

    "footer.name": "Mohamed Tamim Revo",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top"
  },

  ar: {
    "meta.title": "Mohamed Tamim Revo — مونتير وصانع أفلام",
    "a11y.skip": "تخطَّ إلى المحتوى",
    "lang.group": "اللغة",
    "menu.open": "فتح القائمة",
    "menu.close": "إغلاق القائمة",

    "nav.home": "الرئيسية",
    "nav.work": "الأعمال",
    "nav.about": "نبذة عني",
    "nav.services": "الخدمات",
    "nav.skills": "المهارات",
    "nav.contact": "تواصل",

    "hero.role": "مونتير وصانع أفلام",
    "hero.title1": "أحوّل الأفكار إلى",
    "hero.title2": "قصص بصرية",
    "hero.title3": "تبقى في الذاكرة.",
    "hero.intro": "أعمل على المونتاج والموشن غرافيك والسرد القصصي للعلامات التجارية وصنّاع المحتوى والقنوات، من الإعلانات والريلز إلى الوثائقيات والمحتوى المصنوع بالذكاء الاصطناعي، بأعمال تشدّ الانتباه من أول لقطة حتى آخرها.",
    "hero.ctaWork": "شاهد أعمالي",
    "hero.ctaContact": "راسلني على واتساب",
    "hero.screenTag": "ضع هنا لقطة من أعمالك",
    "hero.toolsTitle": "الأدوات",
    "hero.toolsAll": "كل الأدوات",

    "work.eyebrow": "أعمال مختارة",
    "work.title": "مشاريع مميزة",
    "work.note": "الأحدث أولًا. افتح أي مشروع لمشاهدة جميع مقاطعه.",
    "work.filterLabel": "تصفية المشاريع حسب الفئة",
    "work.showing": "عدد المشاريع المعروضة: {n}",
    "work.project": "المشروع {n}",
    "work.behance": "التصاميم والصور المصغّرة على Behance",

    "cat.all": "الكل",
    "cat.motion": "موشن غرافيك",
    "cat.ads": "ريلز وإعلانات",
    "cat.youtube": "فيديوهات يوتيوب",
    "cat.films": "أفلام ووثائقيات",
    "cat.ai": "محتوى بالذكاء الاصطناعي",
    "cat.chroma": "كروما",

    "card.play": "تشغيل الفيديو",
    "card.playAll": "شاهد المقاطع",
    "card.view": "عرض التصاميم",
    "card.featured": "مميّز",
    "card.videos1": "فيديو واحد",
    "card.videos2": "فيديوهان",
    "card.videos": "{n} فيديوهات",
    "card.images": "{n} تصاميم",

    "modal.close": "إغلاق",
    "modal.player": "مشغّل الفيديو",
    "modal.noVideo": "لم تتم إضافة فيديو لهذا المشروع بعد.",
    "modal.clips": "مقاطع هذا المشروع",
    "modal.designs": "تصاميم هذا المشروع",
    "modal.media": "تصاميم ومقاطع هذا المشروع",
    "modal.youtube": "شاهد على يوتيوب",
    "modal.offline": "تعمل الفيديوهات هنا بعد نشر الموقع على الإنترنت (GitHub Pages). عند فتح الملف مباشرة من جهازك يمنع يوتيوب المشغّل المضمّن.",

    "about.eyebrow": "نبذة عني",
    "about.title": "القصة أولًا، ولكل قطع هدف.",
    "about.p1": "أنا مونتير وصانع أفلام أهتم بالقصة والإيقاع والتفاصيل. أعمل مع العلامات التجارية وصنّاع المحتوى والقنوات لتحويل اللقطات إلى فيديوهات مدروسة، من المقاطع القصيرة والموشن غرافيك إلى الحلقات التاريخية الطويلة.",
    "about.p2": "طريقتي بسيطة: أفهم الهدف، وأجد القصة داخل اللقطات، ثم أصقل كل قطع وصوت وإطار حتى يصل العمل إلى صورته الصحيحة.",
    "about.basedLabel": "من",
    "about.basedValue": "الجزائر · 23 سنة",
    "about.workLabel": "طريقة العمل",
    "about.workValue": "[عن بُعد / حضوريًا]",
    "about.langsTitle": "اللغات",
    "about.langsPrimary": "اللغات الأساسية",
    "about.langsMore": "لغات إضافية",

    "lang.english": "الإنجليزية",
    "lang.arabic": "العربية",
    "lang.french": "الفرنسية",
    "lang.turkish": "التركية",
    "lang.italian": "الإيطالية",

    "services.eyebrow": "الخدمات",
    "services.title": "ما يمكنني صنعه لك",
    "services.s1Title": "موشن غرافيك",
    "services.s1Text": "عناوين متحركة وظهور للشعارات وإنفوغرافيك وحركات كاميرا ثلاثية الأبعاد وعناصر جرافيك تمنح أعمالك لمسة احترافية تعكس هويتك.",
    "services.s2Title": "ريلز وإعلانات",
    "services.s2Text": "مقاطع قصيرة وحيوية بالوضعين العمودي والأفقي لمنصات التواصل والحملات، بما فيها فيديوهات المقدّم بتقنية الكروما.",
    "services.s3Title": "مونتاج فيديوهات يوتيوب الطويلة",
    "services.s3Text": "إيقاع وسرد قصصي ولقطات داعمة وترجمة نصية وصوت لحلقات تُبقي المشاهد متابعًا، مع مشاهد مولّدة بالذكاء الاصطناعي عندما تحتاجها القصة.",
    "services.s4Title": "المونتاج والتشطيب النهائي",
    "services.s4Text": "من التجميع الأولي حتى التسليم النهائي: تصحيح الألوان وتنقية الصوت والمكساج والتصدير لكل منصة.",

    "skills.eyebrow": "البرامج والمهارات",
    "skills.title": "الأدوات وراء الأعمال",
    "skills.note": "أدوات أستخدمها يوميًا، من أول قطع حتى التصدير النهائي.",
    "skills.uiux": "تصميم واجهات وتجربة المستخدم",
    "skills.code": "أساسيات البرمجة",
    "skills.tagEdit": "مونتاج",
    "skills.tagMotion": "موشن ومؤثرات",
    "skills.tagAudio": "صوت",
    "skills.tagColor": "مونتاج وتلوين",
    "skills.tagSocial": "مقاطع التواصل",
    "skills.tagImage": "صور مصغّرة ولقطات",
    "skills.tagPlan": "تخطيط",
    "skills.tagWeb": "نماذج ويب",
    "skills.tagDesign": "تصميم",
    "skills.tagCode": "برمجة",

    "exp.title": "الخبرات التي مررت بها",
    "exp.note": "إلى جانب البرامج: أعمال مارستها بشكل عملي.",
    "exp.content": "صناعة المحتوى العربي والإنجليزي",
    "exp.contentText": "كتابة وإنتاج المحتوى باللغتين ونشره على مواقع التواصل الاجتماعي.",
    "exp.pages": "إدارة صفحات التواصل الاجتماعي",
    "exp.pagesText": "إدارة الصفحات يوميًا: تخطيط المنشورات ونشرها والحفاظ على هوية ثابتة.",
    "exp.design": "تصميم الصور والفيديوهات",
    "exp.designText": "ملصقات وصور مصغّرة ومنشورات وفيديوهات مصمَّمة لتلفت الانتباه.",
    "exp.voice": "ضبط التعليق الصوتي",
    "exp.voiceText": "تنقية التعليق الصوتي وموازنته ومزامنته لتصل كل كلمة بوضوح.",
    "exp.uiux": "UI/UX",
    "exp.uiuxText": "تصميم واجهات ومسارات استخدام واضحة وسهلة.",
    "exp.code": "البرمجة",
    "exp.codeText": "بناء صفحات الويب وتعديلها، مثل هذا الموقع.",

    "contact.eyebrow": "تواصل",
    "contact.title": "لديك قصة ترويها؟ لنصنعها معًا.",
    "contact.text": "أخبرني عن مشروعك وموعده والمكان الذي سيُنشر فيه الفيديو. أسرع طريقة للتواصل معي هي واتساب.",
    "contact.whatsapp": "تحدث عبر واتساب",
    "contact.socials": "حسابات التواصل الاجتماعي",

    "footer.name": "Mohamed Tamim Revo",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.top": "العودة للأعلى"
  }
};

/* =============================================================================
   Below this line: site behaviour. You normally don't need to edit it.
   ============================================================================= */

const DEFAULT_LANG = "en";
const STORAGE_KEY = "framecut-lang";
const CATEGORY_GLYPH = { motion: "MG", ads: "AD", youtube: "YT", films: "FILM", ai: "AI", chroma: "KEY" };

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentLang = DEFAULT_LANG;
let currentFilter = "all";
let openProject = null;
let activeIndex = 0;
let lastTrigger = null;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.en[key] ?? key;
const local = (obj) => (obj ? obj[currentLang] || obj.en || "" : "");
const pad2 = (n) => String(n).padStart(2, "0");

/* ---------- Storage (wrapped: may be blocked in private mode) ---------- */
function loadLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && I18N[saved] ? saved : DEFAULT_LANG;
  } catch (e) {
    return DEFAULT_LANG;
  }
}
function saveLang(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
}

/* ---------- YouTube helpers ---------- */
// Accepts youtube.com/watch?v=, youtu.be/, /shorts/, /embed/ and /live/ links.
function getYouTubeId(url) {
  if (!url) return null;
  try {
    const u = new URL(url.trim());
    const host = u.hostname.replace(/^www\.|^m\./, "");
    let id = null;
    if (host === "youtu.be") {
      id = u.pathname.slice(1).split("/")[0];
    } else if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      id = u.searchParams.get("v");
      if (!id) {
        const m = u.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?#]+)/);
        id = m ? m[1] : null;
      }
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch (e) {
    return null;
  }
}

const isShortsUrl = (url) => /\/shorts\//.test(url || "");

function getYouTubeEmbedUrl(id) {
  // Privacy-enhanced domain; no autoplay — the visitor presses play.
  // vq=hd1080 asks for 1080p. YouTube treats it as a hint: the final quality
  // also depends on the player size and the visitor's connection.
  const params = new URLSearchParams({ rel: "0", modestbranding: "1", playsinline: "1", vq: "hd1080", hl: currentLang });
  if (canEmbed) params.set("origin", location.origin);
  return `https://www.youtube-nocookie.com/embed/${id}?${params}`;
}

// YouTube refuses to play embeds (error 153) when the page is opened straight
// from disk (file://), because no site address is sent. Online — GitHub Pages
// or a local server — embeds work; from disk we show a "Watch on YouTube" card.
const canEmbed = /^https?:$/.test(location.protocol);

const ytThumb = (id, size = "hqdefault") => `https://i.ytimg.com/vi/${id}/${size}.jpg`;
const youtubeWatchUrl = (item) =>
  item.vertical ? `https://www.youtube.com/shorts/${item.id}` : `https://www.youtube.com/watch?v=${item.id}`;

// A project's items: its videos first, then its images (designs).
function projectItems(project) {
  const videos = (project.videos || [])
    .map((v) => v.file
      ? { type: "file", src: v.file, poster: v.poster || "", vertical: Boolean(v.vertical), title: v.title }
      : { type: "video", id: getYouTubeId(v.url), vertical: isShortsUrl(v.url), title: v.title })
    .filter((v) => v.type === "file" || v.id);
  const images = (project.images || []).map((img) => ({ type: "image", src: img.src, title: img.title }));
  return [...videos, ...images];
}

function projectThumbnail(project, items) {
  if (project.thumbnail) return project.thumbnail;
  const firstVideo = items.find((i) => i.type === "video");
  if (firstVideo) return ytThumb(firstVideo.id);
  const firstFile = items.find((i) => i.type === "file" && i.poster);
  if (firstFile) return firstFile.poster;
  const firstImage = items.find((i) => i.type === "image");
  return firstImage ? firstImage.src : "";
}

/* ---------- WhatsApp / contact ---------- */
function buildWhatsAppUrl() {
  if (WHATSAPP_LINK) return WHATSAPP_LINK;
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const text = encodeURIComponent(WHATSAPP_MESSAGE[currentLang] || WHATSAPP_MESSAGE.en);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

function applyContactLinks() {
  $$(".js-whatsapp").forEach((a) => { a.href = buildWhatsAppUrl(); });
  $$(".js-email").forEach((a) => { a.href = `mailto:${CONTACT_EMAIL}`; });
  $$(".js-email-text").forEach((el) => { el.textContent = CONTACT_EMAIL; });
  $$(".js-behance").forEach((a) => { a.href = BEHANCE_URL; a.hidden = !BEHANCE_URL; });

  const list = $("#socials");
  if (list) {
    list.innerHTML = "";
    SOCIAL_LINKS.filter((s) => s.url).forEach((s) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = s.label;
      li.appendChild(a);
      list.appendChild(li);
    });
  }
}

/* ---------- Language ---------- */
function applyLanguage(lang) {
  currentLang = I18N[lang] ? lang : DEFAULT_LANG;
  const root = document.documentElement;
  root.lang = currentLang;
  root.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.title = t("meta.title");

  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });

  // data-i18n-attr="aria-label:key;title:key"
  $$("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  $$(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });

  updateMenuLabel();
  applyContactLinks();
  renderProjects(false);
  if (openProject) renderModal(false);
}

/* ---------- Projects ---------- */
function createThumb(category, index, src) {
  const wrap = document.createDocumentFragment();
  const thumb = document.createElement("div");
  thumb.className = `thumb thumb--${(index % 4) + 1}`;
  thumb.setAttribute("aria-hidden", "true");
  const glyph = document.createElement("span");
  glyph.className = "thumb-glyph";
  glyph.textContent = CATEGORY_GLYPH[category] || "▶";
  thumb.appendChild(glyph);
  wrap.appendChild(thumb);

  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = ""; // decorative: the card's button carries the accessible name
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 640;
    img.height = 360;
    img.addEventListener("error", () => img.remove()); // falls back to placeholder
    wrap.appendChild(img);
  }
  return wrap;
}

function itemCountLabel(items) {
  const images = items.filter((i) => i.type === "image").length;
  const videos = items.length - images;
  const parts = [];
  if (videos) parts.push(videos === 1 ? t("card.videos1") : videos === 2 ? t("card.videos2") : t("card.videos").replace("{n}", videos));
  if (images) parts.push(t("card.images").replace("{n}", images));
  return parts.join(" · ");
}

function renderProjects(animate = true) {
  const grid = $("#project-grid");
  if (!grid) return;
  grid.innerHTML = "";

  // Numbered oldest → newest, displayed newest first.
  const ordered = PROJECTS.map((project, i) => ({ project, num: i + 1 })).reverse();

  ordered.forEach(({ project, num }, index) => {
    const items = projectItems(project);
    const title = local(project.title);
    const cats = project.categories || [];
    const isGallery = items.length && items[0].type === "image";
    const actionText = isGallery ? t("card.view") : items.length > 1 ? t("card.playAll") : t("card.play");

    const li = document.createElement("li");
    li.className = project.featured ? "card card--featured" : "card";
    li.dataset.categories = cats.join(" ");
    li.hidden = currentFilter !== "all" && !cats.includes(currentFilter);

    const media = document.createElement("div");
    media.className = "card-media";
    media.appendChild(createThumb(cats[0], num, projectThumbnail(project, items)));

    const numEl = document.createElement("span");
    numEl.className = "card-num";
    numEl.textContent = pad2(num);
    media.appendChild(numEl);

    const count = itemCountLabel(items);
    if (count) {
      const countEl = document.createElement("span");
      countEl.className = "card-count";
      countEl.textContent = count;
      media.appendChild(countEl);
    }

    if (project.featured) {
      const badge = document.createElement("span");
      badge.className = "card-badge";
      badge.textContent = t("card.featured");
      media.appendChild(badge);
    }

    const play = document.createElement("span");
    play.className = `card-play${isGallery ? "" : " card-play--play"}`;
    play.setAttribute("aria-hidden", "true");
    play.innerHTML = isGallery
      ? '<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4zM7 15l3.5-4 2.5 3 2-2 3 3z"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg>';
    media.appendChild(play);

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `
      <span class="card-cat"></span>
      <h3 class="card-title"></h3>
      <p class="card-desc"></p>
      <button type="button" class="card-action">
        <span></span>
        <svg class="icon dir-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>`;
    $(".card-cat", body).textContent = cats.map((c) => t(`cat.${c}`)).join(" · ");
    $(".card-title", body).textContent = title;
    $(".card-desc", body).textContent = local(project.description);

    const action = $(".card-action", body);
    $("span", action).textContent = actionText;
    action.setAttribute("aria-label", `${actionText}: ${title}${count ? ` (${count})` : ""}`);
    action.setAttribute("aria-haspopup", "dialog");
    action.addEventListener("click", () => openModal(project, num, action));

    li.append(media, body);
    if (animate && !reducedMotion.matches && !li.hidden) {
      li.classList.add("is-entering");
      li.style.animationDelay = `${Math.min(index, 8) * 40}ms`;
    }
    grid.appendChild(li);
  });

  updateFilterStatus();
}

/* ---------- Filters ---------- */
function setFilter(filter) {
  currentFilter = filter;
  $$(".filter-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.filter === filter));
  });
  $$("#project-grid .card").forEach((card, i) => {
    const show = filter === "all" || card.dataset.categories.split(" ").includes(filter);
    card.hidden = !show;
    card.classList.remove("is-entering");
    if (show && !reducedMotion.matches) {
      void card.offsetWidth; // restart animation
      card.style.animationDelay = `${Math.min(i, 8) * 30}ms`;
      card.classList.add("is-entering");
    }
  });
  updateFilterStatus();
}

function updateFilterStatus() {
  const count = $$("#project-grid .card:not([hidden])").length;
  const status = $("#filter-status");
  if (status) status.textContent = t("work.showing").replace("{n}", count);
}

/* ---------- Modal (player + playlist / image gallery) ---------- */
const modal = $("#project-modal");
let openNum = 0;

function loadMedia(item) {
  const media = $("#modal-media");
  media.innerHTML = "";

  if (!item) {
    media.appendChild(createThumb((openProject.categories || [])[0], openNum, openProject.thumbnail));
    const note = document.createElement("p");
    note.className = "no-video";
    note.textContent = t("modal.noVideo");
    media.appendChild(note);
    return;
  }

  if (item.type === "video" && !canEmbed) {
    const img = document.createElement("img");
    img.src = ytThumb(item.id);
    img.alt = "";
    img.addEventListener("error", () => img.remove());
    const card = document.createElement("div");
    card.className = "offline-video";
    const link = document.createElement("a");
    link.className = "btn btn-primary";
    link.href = youtubeWatchUrl(item);
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = t("modal.youtube");
    const note = document.createElement("p");
    note.textContent = t("modal.offline");
    card.append(link, note);
    media.append(img, card);
    return;
  }

  if (item.type === "video") {
    // The embed is created only now, when the visitor asked for it.
    const iframe = document.createElement("iframe");
    iframe.src = getYouTubeEmbedUrl(item.id);
    iframe.title = `${t("modal.player")}: ${local(item.title)}`;
    iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    media.appendChild(iframe);
  } else if (item.type === "file") {
    const video = document.createElement("video");
    video.src = item.src;
    if (item.poster) video.poster = item.poster;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", `${t("modal.player")}: ${local(item.title)}`);
    media.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = local(item.title);
    img.decoding = "async";
    media.appendChild(img);
  }
}

function renderModal(reloadMedia = true) {
  const project = openProject;
  const items = projectItems(project);
  const item = items[activeIndex];
  const stage = $("#modal-stage");

  stage.classList.toggle("is-vertical", Boolean(item && (item.vertical || item.type === "image")));
  stage.classList.toggle("is-gallery", Boolean(item && item.type === "image"));

  $("#modal-num").textContent = t("work.project").replace("{n}", pad2(openNum));
  $("#modal-cat").textContent = (project.categories || []).map((c) => t(`cat.${c}`)).join(" · ");
  $("#modal-title").textContent = local(project.title);
  $("#modal-desc").textContent = local(project.description);
  $(".modal-close", modal).setAttribute("aria-label", t("modal.close"));

  if (reloadMedia) {
    loadMedia(item);
  } else {
    // Language changed while open: update labels only, keep the video playing.
    const iframe = $("#modal-media iframe");
    if (iframe && item) iframe.title = `${t("modal.player")}: ${local(item.title)}`;
    const video = $("#modal-media video");
    if (video && item) video.setAttribute("aria-label", `${t("modal.player")}: ${local(item.title)}`);
    const img = $("#modal-media img");
    if (img && item && item.type === "image") img.alt = local(item.title);
    const note = $("#modal-media .no-video");
    if (note) note.textContent = t("modal.noVideo");
  }

  // "Watch on YouTube" lets visitors pick 1080p in YouTube's own player.
  const yt = $("#modal-yt");
  if (item && item.type === "video") {
    yt.hidden = false;
    yt.href = youtubeWatchUrl(item);
    $("span", yt).textContent = t("modal.youtube");
  } else {
    yt.hidden = true;
  }

  // Playlist
  const side = $("#modal-list-wrap");
  const list = $("#modal-playlist");
  list.innerHTML = "";
  side.hidden = items.length < 2;
  const hasImages = items.some((i) => i.type === "image");
  const hasVideos = items.some((i) => i.type !== "image");
  $("#playlist-title").textContent = hasImages && hasVideos ? t("modal.media") : hasImages ? t("modal.designs") : t("modal.clips");

  items.forEach((it, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "playlist-item";
    if (i === activeIndex) btn.setAttribute("aria-current", "true");

    const n = document.createElement("span");
    n.className = "playlist-num";
    n.textContent = pad2(i + 1);

    const thumb = document.createElement("span");
    thumb.className = "playlist-thumb";
    const timg = document.createElement("img");
    timg.src = it.type === "video" ? ytThumb(it.id, "mqdefault") : it.type === "file" ? it.poster : it.src;
    timg.alt = "";
    timg.loading = "lazy";
    timg.addEventListener("error", () => timg.remove());
    thumb.appendChild(timg);

    const label = document.createElement("span");
    label.className = "playlist-label";
    label.textContent = local(it.title);

    btn.append(n, thumb, label);
    btn.addEventListener("click", () => {
      if (i === activeIndex) return;
      activeIndex = i;
      renderModal(true);
      const again = $$(".playlist-item", list)[i];
      if (again) again.focus();
      $("#modal-media").scrollIntoView({ block: "nearest" });
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function openModal(project, num, trigger) {
  if (!modal) return;
  openProject = project;
  openNum = num;
  activeIndex = 0;
  lastTrigger = trigger;
  renderModal(true);
  if (typeof modal.showModal === "function") {
    modal.showModal(); // native focus trap + Escape support
  } else {
    modal.setAttribute("open", "");
  }
  modal.scrollTop = 0;
  $(".modal-close", modal).focus();
}

function closeModal() {
  if (!modal) return;
  if (modal.open) {
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }
}

if (modal) {
  $(".modal-close", modal).addEventListener("click", closeModal);
  // Click on the backdrop (outside the content) closes the modal
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  // Fires for Escape, the close button and backdrop clicks
  modal.addEventListener("close", () => {
    $("#modal-media").innerHTML = ""; // stops the video
    openProject = null;
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  });
  // Fallback for browsers without <dialog>
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.hasAttribute("open") && typeof modal.showModal !== "function") closeModal();
  });
}

/* ---------- Mobile menu ---------- */
const menuBtn = $(".menu-toggle");
const nav = $("#site-nav");
const header = $("#site-header");

function isMenuOpen() { return menuBtn && menuBtn.getAttribute("aria-expanded") === "true"; }

function updateMenuLabel() {
  if (menuBtn) menuBtn.setAttribute("aria-label", isMenuOpen() ? t("menu.close") : t("menu.open"));
}

function setMenu(open, { returnFocus = false } = {}) {
  if (!menuBtn || !nav) return;
  menuBtn.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
  updateMenuLabel();
  if (open) {
    const first = $("a", nav);
    if (first) first.focus();
  } else if (returnFocus) {
    menuBtn.focus();
  }
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => setMenu(!isMenuOpen()));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen()) setMenu(false, { returnFocus: true });
  });
  document.addEventListener("click", (e) => {
    if (isMenuOpen() && !nav.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
  });
  // Close the mobile menu if the window grows to desktop width
  window.matchMedia("(min-width: 921px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });
}

/* ---------- Header state & active nav link ---------- */
function onScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if ("IntersectionObserver" in window) {
  const links = $$(".nav-list a");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => {
        if (a.getAttribute("href") === `#${entry.target.id}`) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));

  // Scroll reveal
  const revealer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => revealer.observe(el));
} else {
  $$(".reveal").forEach((el) => el.classList.add("is-visible"));
}

/* ---------- Hero timecode (decorative, 24 fps) ---------- */
(function startTimecode() {
  const el = $("#timecode");
  if (!el) return;
  const render = (frames) => {
    const f = frames % 24, s = Math.floor(frames / 24) % 60, m = Math.floor(frames / 1440) % 60, h = Math.floor(frames / 86400);
    el.textContent = `${pad2(h)}:${pad2(m)}:${pad2(s)}:${pad2(f)}`;
  };
  if (reducedMotion.matches) { render(24 * 12 + 8); return; }
  const start = performance.now();
  setInterval(() => {
    if (!document.hidden) render(Math.floor(((performance.now() - start) / 1000) * 24));
  }, 1000 / 12);
})();

/* ---------- Generic image fallback (e.g. hero still with data-fallback) ---------- */
$$("img[data-fallback]").forEach((img) => {
  const drop = () => img.remove();
  if (img.complete && img.naturalWidth === 0) drop();
  else img.addEventListener("error", drop);
});

/* ---------- Init ---------- */
$$(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.lang === currentLang) return;
    saveLang(btn.dataset.lang);
    applyLanguage(btn.dataset.lang);
  });
});

$$(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => setFilter(btn.dataset.filter));
});

const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

applyLanguage(loadLang());
