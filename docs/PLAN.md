# Plan de trabajo · TP3 «Dos sentencias. Dos soluciones»

Desarrollo de Sistemas Web · Front End · IFTS 29 · 2026 · 2do cuatrimestre
**Entrega:** 26/11/2026 · **Evaluación:** rúbrica No cumple / Cumple / **Propone** → apuntamos a *Propone* en los 5 criterios.
**Consigna:** https://ifts29-portada.vercel.app/trayecto/tp3/

---

## 1. Asignación (Grupo 15)

| Dato | Valor |
|---|---|
| Startup | **ValoVibes** (creada por estudiantes del IFTS 16) |
| Rubro | Videojuegos y comunidades |
| Objetivo | Búsqueda de compañeros de Valorant compatibles y coordinación de invitaciones. |
| Sorteo | S12-A |
| Bloque | Ingreso a la búsqueda |
| Logo | Original: `assets/logo-valovibes.webp` (640×640 WebP, 9.682 bytes), descargado de `https://ifts29-portada.vercel.app/trayecto/tp3/logos/S12.webp` (botón «Descargar logo» del grupo 15). SHA-256 `a47ac81b…632b44`. Copia byte a byte, sin recortes ni conversión. |

> **Observación sobre el logo:** la palabra «VALOVIBES» queda parcialmente tapada por las patas del oso. Es el logo original; la landing debe mostrarlo completo (sin recortar ni tapar) y sin rediseñarlo. Si la lectura del texto en miniatura no alcanza, usar tamaño mayor.
>
> **Ojo:** los grupos 14, 15 y 17 tienen la misma startup ValoVibes y el mismo logo (S12). Este TP usa solo las frases del grupo 15 (sorteo S12-A).

**Frase 1 · R1:** «Si el jugador no tiene sanciones activas, completó la encuesta requerida y dispone de micrófono, el sistema habilita su ingreso a la búsqueda de compañeros.»

**Frase 2 · R2:** «Si el jugador no completó la encuesta requerida, el sistema le solicita completarla sin atribuirle una sanción.»

> Las sentencias se usan siempre con su redacción original.

---

## 2. Fichas de las sentencias

### R1 — Habilitación del ingreso
- **Datos necesarios:** estado de sanciones del jugador (activas / no), estado de la encuesta requerida (completa / no), disponibilidad de micrófono (sí / no).
- **Condición:** `¬ sanción activa ∧ encuesta completa ∧ micrófono` — las tres a la vez; una está negada.
- **Consecuencia:** el sistema habilita el ingreso a la búsqueda de compañeros.
- **Lo que la regla NO define:** qué pasa si falla alguna condición. Todo lo que propongamos para ese caso es **decisión del grupo** y se marca así.

### R2 — Encuesta pendiente
- **Datos necesarios:** estado de la encuesta requerida.
- **Condición:** `¬ encuesta completa`.
- **Consecuencia:** solicitar completarla **y** no atribuir sanción (las dos partes son obligatorias).
- **Lo que la regla NO define:** qué pasa si la encuesta está completa (el flujo sigue; decisión del grupo) y no borra sanciones previas.
- **Vínculo con R1:** cuando R1 no se cumple por falta de encuesta, aplica R2.

### Casos para probar cada flujo
| Flujo | Caso que cumple | Caso que no cumple | Caso límite (Propone) |
|---|---|---|---|
| R1 | Sin sanción, encuesta completa, con micrófono → habilita | Con micrófono y encuesta, pero sanción activa → no habilita, se informa el motivo (decisión del grupo) | El servicio de sanciones no responde / la sanción vence hoy → no se habilita y se deriva a un moderador humano |
| R2 | Encuesta incompleta → solicitar encuesta, sin sanción | Encuesta completa → R2 no aplica, pasa a evaluar R1 (decisión del grupo) | Encuesta a medias o el jugador reporta un error en la encuesta → recordatorio sin sanción y revisión humana |

---

## 3. Etapas (en el orden que pide la consigna)

| # | Etapa | Qué se produce | Punto de control «Antes de seguir» |
|---|---|---|---|
| 0 | Material | Logo original, fichas R1/R2, casos de prueba | Tenemos una startup y exactamente dos sentencias del mismo bloque |
| 1 | Estructura | `index.html` + `styles.css` + `script.js` (HTML/CSS/JS sin build): hero con logo, índice fijo, una sección por sentencia | La estructura muestra todo lo obligatorio, aunque esté sin estilo |
| 2 | Contenido y diagramas | Título y beneficio de cada propuesta, dos diagramas SVG (inicio → datos → decisión → acciones → resultado, alternativas Sí/No rotuladas), explicación textual, desplegables `<details>` | Cada diagrama corresponde a su sentencia; lo agregado está marcado como decisión del grupo |
| 3 | Diseño y extras «Propone» | Leyenda (regla / decisión del grupo / intervención humana), tabla de verdad por regla, «Recorré un caso» (interruptores que resaltan el camino, JS local sin IA ni APIs), ajustes visuales | Se lee en desktop sin desbordes, foco visible, desplegables con clic y teclado |
| 4 | README | Integrantes y aportes, startup y bloque, enlaces, cómo reproducir, checklist de comprobación, herramientas de IA (app + modelo), registro de iteraciones, revisión entre integrantes | Cada criterio de la rúbrica tiene su evidencia en el README |
| 5 | Publicación | Repo público en GitHub + deploy en Vercel conectado al repo | Los dos enlaces abren en ventana sin sesión y muestran la versión final |

**Regla del TP:** nadie edita código a mano. Todos los cambios se le piden al agente (Claude Code) y quedan registrados.

---

## 4. Reparto de tareas

| Integrante | Rol principal | Tareas concretas | Entregable / evidencia |
|---|---|---|---|
| **Nico** | Coordinación del agente | Dirige a Claude Code en cada etapa; junta los pedidos de cambio del grupo y se los pasa al agente; mantiene el **registro de iteraciones** (instrucción → problema → pedido → qué cambió y por qué); anota app y modelo tal como aparecen en la aplicación. | Registro de iteraciones y sección de herramientas del README |
| **lauB** | Responsable de R1 | Valida la ficha de R1 (datos → condición → consecuencia); revisa que el diagrama y los desplegables de R1 respeten la conjunción de las tres condiciones y la negación; define el caso límite de R1. **Revisión cruzada:** revisa todo R2 y propone una mejora concreta. | Ficha R1 aprobada + mejora propuesta sobre R2 |
| **lauO** | Responsable de R2 | Valida la ficha de R2; controla que el diagrama muestre explícitamente «sin atribuir sanción» y el vínculo con R1; define el caso límite de R2. **Revisión cruzada:** revisa todo R1 y propone una mejora concreta. | Ficha R2 aprobada + mejora propuesta sobre R1 |
| **Fer** | Pruebas (QA) | Recorre la landing en desktop con la checklist (sección 5): logo completo, diagramas legibles, desplegables con clic **y** teclado (Tab + Enter/Espacio), sin desbordes, un caso Sí y uno No por flujo, «Recorré un caso». Describe cada falla como pedido para el agente. | Checklist de pruebas completada (va al README) |
| **Chris** | Material y publicación | Descarga el logo original y verifica nombre/descripción de la startup; conecta el repo a Vercel; comprueba los dos enlaces desde una ventana sin sesión; redacta en el README «cómo reproducir» y la comprobación de enlaces. | Landing publicada + sección de enlaces y reproducción del README |
| **Todos** | Comprensión | Cada uno debe poder explicar las dos propuestas en ~2 minutos (ensayo cruzado al final). Cada uno completa su aporte en el README. | Ensayo hecho, aportes cargados |

### Revisión entre integrantes (criterio 01 · Propone)
lauB revisa R2 y lauO revisa R1. Cada una deja **una mejora concreta** (por ejemplo, un rótulo confuso, un caso que falta o una flecha mal ubicada). Nico se la pide al agente y el README documenta: quién revisó, qué detectó, qué se cambió.

---

## 5. Checklist final (antes de entregar)

**Contenido y lógica**
- [ ] Startup (nombre, logo original, servicio, problema), equipo y bloque identificados; se reconoce el origen en el IFTS 16.
- [ ] Las dos sentencias con redacción original y una propuesta (título + beneficio en 2–3 frases) para cada una.
- [ ] Los dos flujos respetan las condiciones originales («y», negación, «sin atribuir sanción»).
- [ ] Se distingue qué viene de la regla y qué es decisión del grupo.
- [ ] Cada flujo tiene un caso límite con intervención humana.

**Diseño y funcionamiento**
- [ ] Logo y diagramas completos y legibles.
- [ ] Desplegables con clic y con teclado.
- [ ] Se lee y recorre en desktop sin desbordes.
- [ ] Otra persona puede explicar la propuesta después de recorrerla.

**README**
- [ ] Grupo, integrantes y aporte concreto de cada uno.
- [ ] Startup y bloque.
- [ ] Enlace al repositorio y a la landing (verificados sin sesión).
- [ ] Cómo reproducir el proyecto + comprobación de enlaces y funcionamiento.
- [ ] Aplicación y modelo de IA usados (nombre tal como aparece; si no figura: «modelo no informado»), para qué y qué cambios se pidieron.
- [ ] Evidencia de iteración: instrucción inicial → problema detectado → pedido de mejora → qué cambió y por qué.
- [ ] Revisión entre integrantes y la mejora surgida.

---

## 6. Rúbrica → dónde está la evidencia

| Criterio | Para «Propone» | Evidencia |
|---|---|---|
| 01 · Participación | Revisión entre integrantes + mejora concreta | README: aportes + sección de revisión cruzada (lauB ↔ lauO) |
| 02 · Repo y landing | README reproducible + comprobación de enlaces y funcionamiento | README: cómo reproducir + checklist de Fer y Chris |
| 03 · Landing | Organización clara + recursos de navegación/explicación | Índice fijo, leyenda, tabla de verdad, «Recorré un caso» |
| 04 · Dos flujos | Caso límite/excepción por flujo, con intervención humana | Diagramas + desplegables de excepciones |
| 05 · Herramientas IA | Evidencia de iteración | Registro de iteraciones de Nico |
