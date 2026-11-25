// ValoVibes · TP3 Grupo 15 · Etapa 1
// Marca en el índice la sección que se está leyendo. Si el navegador no
// soporta IntersectionObserver, el índice funciona igual como enlaces normales.
(function () {
  "use strict";

  var enlaces = document.querySelectorAll(".indice a[href^='#']");
  if (!enlaces.length || !("IntersectionObserver" in window)) {
    return;
  }

  var porId = {};
  enlaces.forEach(function (a) {
    porId[a.getAttribute("href").slice(1)] = a;
  });

  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        var enlace = porId[entrada.target.id];
        if (!enlace) {
          return;
        }
        if (entrada.isIntersecting) {
          enlaces.forEach(function (a) {
            a.removeAttribute("aria-current");
          });
          enlace.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  Object.keys(porId).forEach(function (id) {
    var seccion = document.getElementById(id);
    if (seccion) {
      observador.observe(seccion);
    }
  });
})();
