// LifeSim – kleine Helfer für die Webseite (funktioniert auch ohne JavaScript)
(function () {
  // Mobiles Menü
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      toggle.textContent = open ? '✕' : '☰';
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Menü öffnen');
        toggle.textContent = '☰';
      }
    });
  }

  // Bilder groß anzeigen
  var dlg = document.getElementById('lightbox');
  if (dlg && typeof dlg.showModal === 'function') {
    var img = dlg.querySelector('img');
    var cap = dlg.querySelector('p');
    document.querySelectorAll('.shot button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var fig = btn.closest('figure');
        img.src = btn.getAttribute('data-full');
        img.alt = btn.querySelector('img').alt;
        cap.textContent = fig.querySelector('figcaption').textContent;
        dlg.showModal();
      });
    });
    dlg.querySelector('.close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }

  // Prüfsumme kopieren
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = document.getElementById(btn.getAttribute('data-copy')).textContent.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = 'Kopiert';
          setTimeout(function () { btn.textContent = 'Prüfsumme kopieren'; }, 2000);
        });
      }
    });
  });

  // Rechtliches direkt öffnen, wenn per Link (#impressum / #datenschutz) aufgerufen
  function openHash() {
    var el = document.getElementById(location.hash.slice(1));
    if (el && el.tagName === 'DETAILS') el.open = true;
  }
  window.addEventListener('hashchange', openHash);
  openHash();

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
