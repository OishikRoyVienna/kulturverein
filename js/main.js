// ---------- Mobiles Menü ----------
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
function closeNav() {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
// Schließen beim Tippen außerhalb des Menüs oder mit Escape
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== navToggle) closeNav();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });

// ---------- Vergangene Feste ausgrauen + Countdown zum nächsten ----------
const today = new Date();
today.setHours(0, 0, 0, 0);

const events = [...document.querySelectorAll('.event[data-date]')];
let next = null;

// Mehrtägige Feste haben zusätzlich data-end und gelten erst danach als vorbei
events.forEach((event) => {
  const date = new Date(event.dataset.date + 'T00:00:00');
  const end = event.dataset.end ? new Date(event.dataset.end + 'T00:00:00') : date;
  if (end < today) {
    event.classList.add('past');
  } else if (!next || date < next.date) {
    next = { date, el: event };
  }
});

const countdown = document.getElementById('countdown');

function renderCountdown() {
  if (!next) return;
  const days = Math.round((next.date - today) / 86400000);
  const name = next.el.querySelector('h3').textContent;
  // Während des Fests: Name des heutigen Tages aus dem Programm, z. B. „Maha Ashtami“
  const tag = days <= 0 && next.el.querySelectorAll('.schedule li')[-days];
  if (tag) {
    const zeile = tag.cloneNode(true);
    zeile.querySelector('span')?.remove();
    countdown.innerHTML = I18N.t('countdown.festtag')
      .replace('{tag}', zeile.textContent.split('·')[0].trim());
    countdown.hidden = false;
    return;
  }
  countdown.innerHTML = days <= 0
    ? I18N.t('countdown.today').replace('{name}', name)
    : I18N.t('countdown.days')
        .replace('{n}', I18N.num(days))
        .replace('{unit}', I18N.t(days === 1 ? 'countdown.day' : 'countdown.dayPlural'))
        .replace('{name}', name);
  countdown.hidden = false;
}
document.addEventListener('sprachwechsel', renderCountdown);

// ---------- Google Maps erst nach Einwilligung laden ----------
const map = document.getElementById('map');
document.getElementById('map-load').addEventListener('click', () => {
  const address = encodeURIComponent(map.dataset.address);
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.google.com/maps?q=${address}&output=embed`;
  iframe.title = 'Karte: Standort des Tempels';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  map.replaceChildren(iframe);
});

// ---------- Galerie-Lightbox ----------
const figures = [...document.querySelectorAll('.gallery figure')];
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
let current = 0;

function show(index) {
  current = (index + figures.length) % figures.length;
  const img = figures[current].querySelector('img');
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCaption.textContent = figures[current].querySelector('figcaption')?.textContent ?? '';
}

function openLightbox(index) {
  show(index);
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('lb-close').focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  figures[current].querySelector('button').focus();
}

figures.forEach((figure, i) =>
  figure.querySelector('button').addEventListener('click', () => openLightbox(i))
);
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', () => show(current - 1));
document.getElementById('lb-next').addEventListener('click', () => show(current + 1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

// Wischen auf Handy/Tablet: links/rechts = blättern, nach unten = schließen
let touchX = null;
let touchY = null;
lightbox.addEventListener('touchstart', (e) => {
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
}, { passive: true });
lightbox.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  const dy = e.changedTouches[0].clientY - touchY;
  touchX = touchY = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
  else if (dy > 80 && Math.abs(dy) > Math.abs(dx)) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});

// ---------- Rewind-Karussell ----------
// Blättern per Wischen (Scroll-Snap), Pfeilen, Punkten oder Pfeiltasten.
const rwTrack = document.getElementById('rw-track');
if (rwTrack) {
  const slides = [...rwTrack.children];
  const rwPrev = document.getElementById('rw-prev');
  const rwNext = document.getElementById('rw-next');
  const rwCount = document.getElementById('rw-count');
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.addEventListener('click', () => goTo(i));
    return dot;
  });
  document.getElementById('rw-dots').append(...dots);
  let active = 0;

  function goTo(i) {
    i = Math.max(0, Math.min(i, slides.length - 1));
    rwTrack.scrollTo({ left: slides[i].offsetLeft - slides[0].offsetLeft });
  }

  function update() {
    // Aktiv ist das Bild, das am nächsten am linken Rand liegt; ganz rechts immer das letzte
    const x = rwTrack.scrollLeft;
    const atEnd = x >= rwTrack.scrollWidth - rwTrack.clientWidth - 2;
    active = atEnd ? slides.length - 1 : slides.reduce((best, s, i) =>
      Math.abs(s.offsetLeft - slides[0].offsetLeft - x) <
      Math.abs(slides[best].offsetLeft - slides[0].offsetLeft - x) ? i : best, 0);
    slides.forEach((s, i) => s.classList.toggle('aktiv', i === active));
    dots.forEach((d, i) => {
      d.setAttribute('aria-current', i === active);
      d.setAttribute('aria-label', I18N.t('rw.dot').replace('{n}', I18N.num(i + 1)));
    });
    rwCount.textContent = `${I18N.num(active + 1)} / ${I18N.num(slides.length)}`;
    rwPrev.disabled = active === 0;
    rwNext.disabled = active === slides.length - 1;
  }

  rwPrev.addEventListener('click', () => goTo(active - 1));
  rwNext.addEventListener('click', () => goTo(active + 1));
  rwTrack.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  rwTrack.closest('.rw').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(active - 1);
    if (e.key === 'ArrowRight') goTo(active + 1);
  });
  window.addEventListener('resize', update);
  document.addEventListener('sprachwechsel', update);
}

// ---------- Abschnitte sanft einblenden, sobald sie ins Bild scrollen ----------
// Ohne JavaScript oder bei „Bewegung reduzieren“ ist alles sofort sichtbar.
const revealEls = [...document.querySelectorAll([
  'main .section .section-title', 'main .section .section-intro',
  '.about-text p', '.about-photo',
  '.mond', '.event',
  '.gallery figure',
  '.address-card', '#route-link', '.map',
  '.contact > p',
].join(', '))];
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('sichtbar');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  // Innerhalb eines Abschnitts leicht versetzt nacheinander
  const perSection = new Map();
  revealEls.forEach((el) => {
    const section = el.closest('section');
    const i = perSection.get(section) ?? 0;
    perSection.set(section, i + 1);
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`;
    observer.observe(el);
  });
}

// ---------- Jahr im Footer ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Sprache setzen (DE / EN / বাংলা) ----------
I18N.init();
