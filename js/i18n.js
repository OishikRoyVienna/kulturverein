// ------------------------------------------------------------
// Sprachumschaltung DE / EN / বাংলা
//
// Der deutsche Text steht direkt in index.html. Hier stehen nur
// Englisch und Bengalisch. Jeder Schlüssel gehört zu einem
// Element mit data-i18n="schlüssel" (bzw. data-i18n-alt für
// Bild-Beschreibungen). Fehlt eine Übersetzung, bleibt Deutsch.
// ------------------------------------------------------------
const TRANSLATIONS = {
  en: {
    'page.title': 'BÖH – Bengali-Austrian Hindu Cultural Association',
    'brand.name': 'Bengali-Austrian Hindu Cultural Association',
    'nav.feste': 'Festivals',
    'nav.galerie': 'Gallery',
    'nav.tempel': 'Temple &amp; directions',
    'nav.kontakt': 'Contact',
    'nav.menu': 'Menu',

    'hero.title': 'Durga Puja 2026',
    'hero.dates': 'Maha Shashthi to Bijoya Dashami · 17 – 21 October 2026',
    'hero.lead': 'Five days of puja, anjali, bhog and cultural programmes at the temple. Families, friends and guests are warmly welcome, including those experiencing the festival for the first time.',
    'hero.btnProgramm': 'See the programme',
    'hero.btnAnfahrt': 'Directions',

    'about.title': 'About us',
    'about.p1': 'We are a community of Bengali families and friends who keep our festivals, language and traditions alive together. At the heart of it all is our temple: a place for puja, music, dance, children’s activities and many hours of sharing food.',
    'about.p2': 'The association is non-profit and open to everyone who would like to get to know Bengali culture.',

    'feste.title': 'Festivals through the year',
    'feste.intro': 'Dates follow the Bengali lunar calendar (Panjika). We publish the detailed programme a few weeks before each festival.',

    'date.durga': '17–21',
    'date.lakshmi': '25',
    'date.kali': '8',
    'date.feb': 'Feb',
    'date.apr': 'Apr',
    'date.okt2026': 'Oct 2026',
    'date.nov2026': 'Nov 2026',
    'date.2027': '2027',

    'ev.durga.h': 'Durga Puja',
    'ev.durga.p': 'One of the most important celebrations in Bengali culture. We celebrate the return of Mother Durga with lots of prayers, singing and plenty of food. Families, friends and guests are warmly welcome.',
    'sched.1': '<span>Sat 17 Oct</span> Maha Shashthi · Opening and first day',
    'sched.2': '<span>Sun 18 Oct</span> Maha Saptami ·',
    'sched.3': '<span>Mon 19 Oct</span> Maha Ashtami ·',
    'sched.4': '<span>Tue 20 Oct</span> Maha Navami ·',
    'sched.5': '<span>Wed 21 Oct</span> Bijoya Dashami ·',
    'ev.lakshmi.h': 'Lokhi/Lakshmi Puja',
    'ev.lakshmi.p': 'Here we honour Lakshmi, the goddess of prosperity.',
    'ev.kali.h': 'Kali Puja &amp; Diwali',
    'ev.kali.p': 'Puja for Mother Kali, together with the festival of lights with diyas and Bengali food.',
    'ev.saraswati.h': 'Saraswati Puja',
    'ev.saraswati.p': 'At Saraswati Puja, children, learners and students ask the goddess of knowledge for her blessing.',
    'ev.boishakh.h': 'Pohela Boishakh',
    'ev.boishakh.p': 'Bengali New Year with songs from Bengal, dance and a big festive meal.',

    'galerie.title': 'Gallery',
    'galerie.intro': 'Moments from recent years. Click a picture to enlarge it.',
    'cap.1': 'Durga Puja 2025 · Pandal/altar',
    'cap.2': 'Sindoor Khela on Bijoya Dashami',
    'cap.3': 'Kali Puja/Diwali · Diyas, prayers and food',
    'cap.4': 'Cultural evening · Children’s dance and singing',
    'cap.5': 'Kali Puja',
    'cap.6': 'Puja food',
    'img.1': 'Durga pratima in the decorated pandal',
    'img.2': 'Women playing Sindoor Khela',
    'img.3': 'Tea lights arranged in the shape of an Om on a brass plate for Diwali',
    'img.4': 'Children at the festival',
    'img.5': 'The priest performing puja before the Kali pratima',
    'img.6': 'Puja food',
    'img.about': 'Durga Puja at the temple: the community seated in front of the decorated altar with the Durga pratima',

    'tempel.title': 'Temple &amp; directions',
    'tempel.adresse': 'Address',
    'tempel.route': 'Get directions',
    'map.title': 'Show map',
    'map.text': 'Loading the map sends data to Google. See our <a href="datenschutz.html">privacy policy</a> for details.',
    'map.btn': 'Load Google Maps',

    'kontakt.title': 'Contact',
    'kontakt.text': 'Questions about festivals, partnerships, sponsorship or donations? Feel free to write to us.',
    'kontakt.email': 'Email',
    'kontakt.tech': 'For technical questions about the website and infrastructure, please contact:',

    'footer.impressum': 'Legal notice',
    'footer.datenschutz': 'Privacy',

    'countdown.today': '<strong>Today</strong>: {name}',
    'countdown.days': '<strong>{n} {unit}</strong> to go until {name}',
    'countdown.day': 'day',
    'countdown.dayPlural': 'days',
  },

  bn: {
    'page.title': 'BÖH – বাঙালি-অস্ট্রীয় হিন্দু সাংস্কৃতিক সমিতি',
    'brand.name': 'বাঙালি-অস্ট্রীয় হিন্দু সাংস্কৃতিক সমিতি',
    'nav.feste': 'উৎসব',
    'nav.galerie': 'গ্যালারি',
    'nav.tempel': 'মন্দির ও পথনির্দেশ',
    'nav.kontakt': 'যোগাযোগ',
    'nav.menu': 'মেনু',

    'hero.title': 'দুর্গা পূজা ২০২৬',
    'hero.dates': 'মহাষষ্ঠী থেকে বিজয়া দশমী · ১৭ – ২১ অক্টোবর ২০২৬',
    'hero.lead': 'মন্দিরে পাঁচ দিন ধরে পূজা, অঞ্জলি, ভোগ আর সাংস্কৃতিক অনুষ্ঠান। পরিবার, বন্ধুবান্ধব ও অতিথি সবাইকে সাদর আমন্ত্রণ, যাঁরা প্রথমবার এই উৎসব দেখছেন তাঁদেরও।',
    'hero.btnProgramm': 'অনুষ্ঠানসূচি দেখুন',
    'hero.btnAnfahrt': 'পথনির্দেশ',

    'about.title': 'আমাদের কথা',
    'about.p1': 'আমরা বাঙালি পরিবার ও বন্ধুদের একটি সংঘ। একসঙ্গে আমরা আমাদের উৎসব, ভাষা ও ঐতিহ্যকে বাঁচিয়ে রাখি। সবকিছুর কেন্দ্রে আমাদের মন্দির: পূজা, গান, নাচ, ছোটদের অনুষ্ঠান আর একসঙ্গে খাওয়াদাওয়ার জায়গা।',
    'about.p2': 'সমিতিটি অলাভজনক এবং বাঙালি সংস্কৃতিকে জানতে আগ্রহী সকলের জন্য উন্মুক্ত।',

    'feste.title': 'বছরের উৎসব',
    'feste.intro': 'তারিখগুলি বাংলা পঞ্জিকা অনুযায়ী। প্রতিটি উৎসবের বিস্তারিত অনুষ্ঠানসূচি আমরা কয়েক সপ্তাহ আগে জানিয়ে দিই।',

    'date.durga': '১৭–২১',
    'date.lakshmi': '২৫',
    'date.kali': '৮',
    'date.feb': 'ফেব্রু',
    'date.apr': 'এপ্রিল',
    'date.okt2026': 'অক্টো ২০২৬',
    'date.nov2026': 'নভে ২০২৬',
    'date.2027': '২০২৭',

    'ev.durga.h': 'দুর্গা পূজা',
    'ev.durga.p': 'বাঙালি সংস্কৃতির অন্যতম প্রধান উৎসব। অনেক প্রার্থনা, গান আর প্রচুর খাওয়াদাওয়ার মধ্য দিয়ে আমরা মা দুর্গার ঘরে ফেরা উদযাপন করি। পরিবার, বন্ধুবান্ধব ও অতিথি সবাইকে সাদর আমন্ত্রণ।',
    'sched.1': '<span>শনি ১৭/১০</span> মহাষষ্ঠী · উদ্বোধন ও প্রথম দিন',
    'sched.2': '<span>রবি ১৮/১০</span> মহাসপ্তমী ·',
    'sched.3': '<span>সোম ১৯/১০</span> মহাষ্টমী ·',
    'sched.4': '<span>মঙ্গল ২০/১০</span> মহানবমী ·',
    'sched.5': '<span>বুধ ২১/১০</span> বিজয়া দশমী ·',
    'ev.lakshmi.h': 'লক্ষ্মী পূজা',
    'ev.lakshmi.p': 'এই দিনে আমরা ধনসম্পদের দেবী লক্ষ্মীর আরাধনা করি।',
    'ev.kali.h': 'কালী পূজা ও দীপাবলি',
    'ev.kali.p': 'মা কালীর পূজা। সঙ্গে প্রদীপ আর বাঙালি খাবার নিয়ে আলোর উৎসব।',
    'ev.saraswati.h': 'সরস্বতী পূজা',
    'ev.saraswati.p': 'সরস্বতী পূজায় ছোটরা, শিক্ষার্থী ও ছাত্রছাত্রীরা বিদ্যার দেবীর কাছে আশীর্বাদ প্রার্থনা করে।',
    'ev.boishakh.h': 'পহেলা বৈশাখ',
    'ev.boishakh.p': 'বাংলার গান, নাচ আর জমজমাট ভোজে বাংলা নববর্ষ উদযাপন।',

    'galerie.title': 'গ্যালারি',
    'galerie.intro': 'গত কয়েক বছরের কিছু মুহূর্ত। বড় করে দেখতে ছবিতে ক্লিক করুন।',
    'cap.1': 'দুর্গা পূজা ২০২৫ · মণ্ডপ/বেদি',
    'cap.2': 'বিজয়া দশমীতে সিঁদুর খেলা',
    'cap.3': 'কালী পূজা/দীপাবলি · প্রদীপ, প্রার্থনা ও খাওয়াদাওয়া',
    'cap.4': 'সাংস্কৃতিক সন্ধ্যা · ছোটদের নাচ ও গান',
    'cap.5': 'কালী পূজা',
    'cap.6': 'পুজোর খাবার',
    'img.1': 'সাজানো মণ্ডপে দুর্গা প্রতিমা',
    'img.2': 'সিঁদুর খেলায় মহিলারা',
    'img.3': 'দীপাবলিতে পিতলের থালায় ওঁ-এর আকারে সাজানো প্রদীপ',
    'img.4': 'উৎসবে ছোটরা',
    'img.5': 'কালী প্রতিমার সামনে পুরোহিতের পূজা',
    'img.6': 'পুজোর খাবার',
    'img.about': 'মন্দিরে দুর্গা পূজা: সাজানো বেদিতে দুর্গা প্রতিমার সামনে বসে আছেন সবাই',

    'tempel.title': 'মন্দির ও পথনির্দেশ',
    'tempel.adresse': 'ঠিকানা',
    'tempel.route': 'রাস্তা দেখুন',
    'map.title': 'মানচিত্র দেখুন',
    'map.text': 'মানচিত্র লোড করলে তথ্য Google-এর কাছে যায়। বিস্তারিত আমাদের <a href="datenschutz.html">গোপনীয়তা নীতিতে</a>।',
    'map.btn': 'Google Maps লোড করুন',

    'kontakt.title': 'যোগাযোগ',
    'kontakt.text': 'উৎসব, সহযোগিতা, স্পনসরশিপ বা দান নিয়ে কোনো প্রশ্ন? নির্দ্বিধায় আমাদের লিখুন।',
    'kontakt.email': 'ই-মেল',
    'kontakt.tech': 'ওয়েবসাইট ও পরিকাঠামো সংক্রান্ত প্রযুক্তিগত প্রশ্নের জন্য এই ই-মেলে যোগাযোগ করুন:',

    'footer.impressum': 'আইনি তথ্য',
    'footer.datenschutz': 'গোপনীয়তা নীতি',

    'countdown.today': '<strong>আজ</strong>: {name}',
    'countdown.days': '{name} আর <strong>{n} {unit}</strong> বাকি',
    'countdown.day': 'দিন',
    'countdown.dayPlural': 'দিন',
  },
};

// Deutsch (Standard) für den Countdown; der Rest kommt aus dem HTML
const GERMAN_EXTRA = {
  'countdown.today': '<strong>Heute</strong>: {name}',
  'countdown.days': 'Noch <strong>{n} {unit}</strong> bis {name}',
  'countdown.day': 'Tag',
  'countdown.dayPlural': 'Tage',
};

const I18N = (() => {
  const STORAGE_KEY = 'sprache';
  const german = { ...GERMAN_EXTRA, 'page.title': document.title };
  const textEls = [...document.querySelectorAll('[data-i18n]')];
  const altEls = [...document.querySelectorAll('[data-i18n-alt]')];
  const buttons = [...document.querySelectorAll('.lang [data-lang]')];
  let current = 'de';

  // Deutschen Originaltext merken, damit man zurückschalten kann
  textEls.forEach((el) => { el.dataset.de = el.innerHTML; });
  altEls.forEach((el) => { el.dataset.deAlt = el.alt; });

  function t(key) {
    return (current !== 'de' && TRANSLATIONS[current][key]) || german[key] || key;
  }

  // Zahlen in bengalischen Ziffern (০–৯) schreiben
  function num(n) {
    return current === 'bn' ? String(n).replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[d]) : String(n);
  }

  function setLang(lang) {
    if (!['de', 'en', 'bn'].includes(lang)) lang = 'de';
    current = lang;
    const dict = TRANSLATIONS[lang] || {};

    textEls.forEach((el) => {
      el.innerHTML = (lang !== 'de' && dict[el.dataset.i18n]) || el.dataset.de;
    });
    altEls.forEach((el) => {
      el.alt = (lang !== 'de' && dict[el.dataset.i18nAlt]) || el.dataset.deAlt;
    });

    document.documentElement.lang = lang;
    document.title = t('page.title');
    buttons.forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === lang));

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* z. B. privater Modus */ }
    document.dispatchEvent(new CustomEvent('sprachwechsel', { detail: lang }));
  }

  function init() {
    buttons.forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignorieren */ }
    // Erstbesuch: bengalischer Browser → Bengalisch, sonst Deutsch
    const browserBn = (navigator.language || '').toLowerCase().startsWith('bn');
    setLang(saved || (browserBn ? 'bn' : 'de'));
  }

  return { init, setLang, t, num, get current() { return current; } };
})();
