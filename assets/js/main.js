(function () {
  var c = window.SITE_CONFIG || {};
  document.querySelectorAll('[data-config]').forEach(function (e) {
    var k = e.dataset.config, v = c[k];
    if (!v) { (e.closest('li') || e).hidden = true; return; }
    e.href = k === 'email' ? 'mailto:' + v : v;
    if (e.dataset.text !== undefined) e.textContent = v;
  });
  var b = document.getElementById('menu'), l = document.getElementById('nav-list');
  if (b && l) b.addEventListener('click', function () {
    b.setAttribute('aria-expanded', l.classList.toggle('open'));
  });

  // Language toggle: remember the visitor's choice (FR / EN)
  document.querySelectorAll('[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('lang', a.dataset.lang); } catch (e) {}
    });
  });
  // On the French home page only: a visitor who previously chose English lands on /en/.
  // Skipped when arriving from another page of this site (e.g. the "Valentin Pataud" logo).
  try {
    if (document.body.dataset.home === 'fr' && localStorage.getItem('lang') === 'en') {
      var internal = document.referrer && document.referrer.indexOf(location.origin) === 0;
      if (!internal) location.replace('en/');
    }
  } catch (e) {}
})();
