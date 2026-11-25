// ValoVibes · TP3 Grupo 15
// 1) Marca en el índice la sección que se está leyendo.
// 2) «Recorré un caso»: resalta en cada diagrama el camino que seguiría el agente.
//    Es JavaScript local: no usa IA, no llama a APIs ni ejecuta ningún agente.
(function () {
  "use strict";

  // ---------- 1. Índice ----------
  var enlaces = document.querySelectorAll(".indice a[href^='#']");
  if (enlaces.length && "IntersectionObserver" in window) {
    var porId = {};
    enlaces.forEach(function (a) {
      porId[a.getAttribute("href").slice(1)] = a;
    });

    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          var enlace = porId[entrada.target.id];
          if (enlace && entrada.isIntersecting) {
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
  }

  // ---------- 2. Recorré un caso ----------
  // Cada función recibe la situación marcada y devuelve los pasos (nodos y
  // flechas del SVG, por su data-id) y el texto que explica el resultado.
  var flujos = {
    r1: function (v) {
      var pasos = ["A", "A-B", "B", "B-C", "C"];
      if (!v.datos) {
        return {
          pasos: pasos.concat(["C-H", "H", "H-Hf", "Hf"]),
          texto: "El agente no pudo obtener los tres datos: deriva el caso a un moderador humano (decisión del grupo)."
        };
      }
      pasos = pasos.concat(["C-D", "D"]);
      if (!v.sancion && v.encuesta && v.mic) {
        return {
          pasos: pasos.concat(["D-E", "E", "E-F", "F"]),
          texto: "Se cumplen las tres condiciones: se habilita el ingreso a la búsqueda de compañeros (regla R1)."
        };
      }
      var faltan = [];
      if (v.sancion) { faltan.push("tiene una sanción activa"); }
      if (!v.encuesta) { faltan.push("no completó la encuesta"); }
      if (!v.mic) { faltan.push("no dispone de micrófono"); }
      var texto = "No se habilita el ingreso porque " + unir(faltan) +
        ". El agente le informa el motivo (decisión del grupo).";
      if (!v.encuesta) {
        texto += " Como falta la encuesta, aplica R2.";
      }
      return { pasos: pasos.concat(["D-G", "G", "G-Gf", "Gf"]), texto: texto };
    },

    r2: function (v) {
      var pasos = ["A", "A-B", "B", "B-C", "C"];
      if (v.encuesta) {
        return {
          pasos: pasos.concat(["C-G", "G", "G-Gf", "Gf"]),
          texto: "La encuesta ya está completa: R2 no aplica y se sigue con la evaluación de R1 (decisión del grupo)."
        };
      }
      pasos = pasos.concat(["C-D", "D", "D-E", "E", "E-F", "F"]);
      if (v.problema) {
        return {
          pasos: pasos.concat(["F-H", "H", "H-Hf", "Hf"]),
          texto: "Se le pide completar la encuesta sin atribuirle sanción (regla R2). Como reporta un problema, lo revisa una persona de soporte (decisión del grupo)."
        };
      }
      return {
        pasos: pasos.concat(["F-I", "I"]),
        texto: "Se le pide completar la encuesta sin atribuirle sanción (regla R2). Cuando la complete, se vuelve a evaluar R1."
      };
    }
  };

  function unir(lista) {
    if (lista.length <= 1) { return lista.join(""); }
    return lista.slice(0, -1).join(", ") + " y " + lista[lista.length - 1];
  }

  document.querySelectorAll(".simulador[data-flujo]").forEach(function (sim) {
    var nombre = sim.getAttribute("data-flujo");
    var seccion = document.getElementById(nombre);
    var svg = seccion && seccion.querySelector("svg.diagrama");
    var salida = sim.querySelector(".resultado");
    var calcular = flujos[nombre];
    if (!svg || !salida || !calcular) { return; }

    function actualizar() {
      var valores = {};
      sim.querySelectorAll("input[type='checkbox']").forEach(function (input) {
        valores[input.name] = input.checked;
      });
      var r = calcular(valores);
      svg.classList.add("con-camino");
      svg.querySelectorAll("[data-id]").forEach(function (el) {
        el.classList.toggle("activo", r.pasos.indexOf(el.getAttribute("data-id")) !== -1);
      });
      salida.textContent = r.texto;
    }

    sim.addEventListener("change", actualizar);
    actualizar();
  });
})();
