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
})();
