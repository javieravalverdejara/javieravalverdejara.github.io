/* ============================================
   JAVIERA VALVERDE — Portfolio JS
   Menú hamburguesa accesible para móvil
   ============================================ */

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.getElementById('nav-links');
  if (!toggle || !nav) return;

  /* Abre o cierra el menú */
  function setExpanded(val) {
    toggle.setAttribute('aria-expanded', String(val));
    nav.classList.toggle('is-open', val);
  }

  /* Indica si el menú está abierto */
  function isOpen() {
    return nav.classList.contains('is-open');
  }

  /* Clic en el botón hamburguesa */
  toggle.addEventListener('click', function () {
    setExpanded(!isOpen());
  });

  /* Cierra al hacer clic en un enlace (con ícono adentro incluido) */
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setExpanded(false);
  });

  /* Cierra con Escape y devuelve el foco al botón (solo si el menú está abierto) */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      setExpanded(false);
      toggle.focus();
    }
  });

  /* Cierra al hacer clic fuera del menú */
  document.addEventListener('click', function (e) {
    if (
      isOpen() &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      setExpanded(false);
    }
  });

  /* Cierra el menú si la pantalla pasa a tamaño escritorio */
  window.matchMedia('(min-width: 701px)').addEventListener('change', function (e) {
    if (e.matches) setExpanded(false);
  });
})();
