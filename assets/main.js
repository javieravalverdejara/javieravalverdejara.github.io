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

  /* Clic en el botón hamburguesa */
  toggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  /* Cierra al hacer clic en un enlace (con ícono adentro incluido) */
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setExpanded(false);
  });

  /* Cierra con Escape y devuelve foco al botón */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setExpanded(false);
      toggle.focus();
    }
  });

  /* Cierra al hacer clic fuera del menú */
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('is-open') &&
