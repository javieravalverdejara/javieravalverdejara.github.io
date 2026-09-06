/* ============================================
   JAVIERA VALVERDE — Portfolio JS
   Menú hamburguesa accesible para móvil
   ============================================ */

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-links');
  if (!toggle || !nav) return;

  /* Abre o cierra el menú */
  function setExpanded(val) {
    toggle.setAttribute('aria-expanded', String(val));
    if (val) {
      nav.classList.add('is-open');
    } else {
      nav.classList.remove('is-open');
    }
  }

  /* Clic en el botón hamburguesa */
  toggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  /* Cierra el menú al hacer clic en un enlace */
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setExpanded(false);
  });

  /* Cierra el menú con la tecla Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setExpanded(false);
  });
})();
