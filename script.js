(function () {
  // ─── Nav background on scroll ──────────────────────────
  var nav = document.getElementById('siteNav');
  function onScroll() {
    if (!nav) return;
    nav.style.background = window.scrollY > 50
      ? 'rgba(251,250,246,0.96)'
      : 'rgba(251,250,246,0.88)';
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ─── Mobile menu toggle ────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  var menu   = document.getElementById('mobileMenu');
  var body   = document.body;

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    body.classList.remove('menu-open');
  }

  function openMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    body.classList.add('menu-open');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    // Close when a menu link is tapped
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Close if resized back to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  // ─── Image lightbox (click-to-expand process photos) ───
  var lightbox = document.getElementById('imageLightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  function openLightbox(url) {
    if (!lightbox || !lightboxImg || !url) return;
    lightboxImg.src = url;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    body.classList.add('menu-open');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    body.classList.remove('menu-open');
    lightboxImg.src = '';
  }

  function extractUrl(el) {
    var bg = getComputedStyle(el).backgroundImage;
    var match = bg.match(/url\(["']?(.*?)["']?\)/);
    return match ? match[1] : '';
  }

  document.querySelectorAll('.process-media-expandable').forEach(function (el) {
    el.addEventListener('click', function () { openLightbox(extractUrl(el)); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(extractUrl(el));
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
