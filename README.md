# TP3 · «Dos sentencias. Dos soluciones»

**Desarrollo de Sistemas Web · Front End · IFTS 29 · 2026 · 2do cuatrimestre**  
**Grupo 15** · Startup: **ValoVibes** · Bloque: **Ingreso a la búsqueda** · Entrega: 26/11/2026

## Startup y bloque asignado

- **Startup:** ValoVibes (creada por estudiantes del IFTS 16).
- **Rubro:** Videojuegos y comunidades.
- **Objetivo:** Búsqueda de compañeros de Valorant compatibles y coordinación de invitaciones.
- **Sorteo / bloque:** S12-A · Ingreso a la búsqueda.
- **Logo:** Original en `assets/logo-valovibes.webp`, usado completo y sin rediseñar.

### Sentencias asignadas (redacción original)

- **R1:** «Si el jugador no tiene sanciones activas, completó la encuesta requerida y dispone de micrófono, el sistema habilita su ingreso a la búsqueda de compañeros.»
- **R2:** «Si el jugador no completó la encuesta requerida, el sistema le solicita completarla sin atribuirle una sanción.»

## Qué tiene la landing

- Presentación de la startup con su logo original, el problema, el bloque y el origen en el IFTS 16.
- Leyenda para leer los diagramas: regla, decisión del grupo, intervención humana, herramienta.
- Para cada sentencia: texto original, propuesta con título y beneficio, diagrama SVG y desplegables con datos, decisión, acción, resultado, excepciones y caso límite.
- «Recorré un caso» para R1 y R2: JavaScript local que resalta en cada diagrama el camino que seguiría el agente.
- Una sección que explica cómo se conectan R1 y R2.

La landing no usa IA, no ejecuta agentes y no se conecta a APIs.

## Enlaces

- **Repositorio:** https://github.com/Nicoalazar/tp3-frontend-grupo15.git
- **Landing (Vercel):** https://tp3-frontend-grupo15.vercel.app/

> La landing se publica conectando este repositorio a Vercel (ver «Cómo reproducir → Publicar en Vercel»). Cuando Vercel devuelva la URL, se pega en el punto anterior y se repite la comprobación en ventana sin sesión.

### Comprobación de enlaces y funcionamiento en ventana sin sesión

Cada enlace se abre en una ventana privada, **sin iniciar sesión** en GitHub ni en Vercel, para confirmar que cualquier persona con el enlace ve la versión final.

| Enlace | Cómo se comprobó | Resultado |
|---|---|---|
| Repositorio | `git ls-remote` sin credenciales y apertura de la URL en ventana privada, sin sesión | Verificado el 25/11/2026: el repositorio es público, abre sin iniciar sesión y muestra la rama `main`. |
| Landing en Vercel | Abrir la URL publicada en ventana privada | Responde sin sesión (HTTP 200) y los archivos publicados son idénticos a `main`. Revisión visual en desktop: [Pendiente - Fer]. |

Al publicar la landing se revisa, siempre sin sesión:

- [ ] La página abre con su hoja de estilos y el logo `assets/logo-valovibes.webp` se ve completo.
- [ ] El índice fijo navega a Startup, Cómo leer, R1, R2 y R1 + R2.
- [ ] Los desplegables de R1 y R2 abren y cierran con clic y con teclado (Tab + Enter/Espacio).
- [ ] «Recorré un caso» cambia el camino resaltado en los dos diagramas.
- [ ] No hay desborde horizontal ni recursos faltantes (consola y red del navegador).
- [ ] El contenido coincide con el último commit de `main`.

## Integrantes y aportes

| Integrante | Rol principal | Aporte concreto |
|---|---|---|
| **Nico** | Coordinación del agente | Coordinó al agente en todas las etapas: escribió el plan con roles y responsables por etapa (`docs/PLAN.md`), descargó y verificó el logo original (etapa 0), armó la estructura de la landing (etapa 1), resolvió el conflicto del PR #2 unificando R2 y el README, y portó el simulador «Recorré un caso» de R2. Hizo la revisión cruzada de R1 (iteración 7) y aplicó en el repo la propuesta de lauB sobre R2. Mantiene el registro de iteraciones y de herramientas. |
| **lauB** (Laura Belén Blanco) | Responsable de R1 | Completó su sección R1 en el commit `6460368`: propuesta con título y beneficio, diagrama SVG con ramas Sí/No, desplegables (datos, decisión, acción, excepciones y caso límite con moderador humano), tabla de verdad y «Recorré un caso» de R1. Revisión cruzada de R2: propuso deshabilitar «Reporta un problema con la encuesta» mientras la encuesta esté completa (iteración 6). |
| **lauO** | Responsable de R2 | Validó la ficha de R2 (dato, condición, consecuencia). Completó la sección R2: propuesta, explicación textual, diagrama SVG con ramas Sí/No y desplegables `<details>`. Controló que el flujo muestre explícitamente «sin atribuir sanción» y el vínculo con R1. Definió el caso límite con intervención humana. |
| **Fer** | Pruebas (QA) | Ejecuté la auditoría integral y las pruebas funcionales de punta a punta en desktop (1366x768). Verifiqué los 13 puntos de la checklist de pruebas: logo completo (`assets/logo-valovibes.webp`), diagramas SVG legibles y adaptativos en modos claro y oscuro, apertura/cierre de desplegables por clic y teclado (Tab + Enter/Espacio), ausencia de desbordes horizontales (`overflow-x: hidden`), y validación completa de los flujos de R1 y R2 (casos que cumplen, que no cumplen y casos límite). Actualicé el README.md con los resultados detallados y dejé el repositorio limpio y listo para commit. |
| **Chris** | Material y publicación | Verifiqué el logo original (`assets/logo-valovibes.webp`: 640×640, 9.682 bytes, SHA-256 `a47ac81b…632b44`, idéntico al publicado por la cátedra) y que la landing lo muestre completo, sin recortes. Revisé las rutas relativas y la publicación como sitio estático sin build, dejé listos los pasos para conectar el repo con Vercel y la comprobación de los dos enlaces en ventana sin sesión. Redacté «Cómo reproducir» y la sección de enlaces/comprobación. En la revisión previa al deploy detecté que los textos del diagrama R1 heredaban el borde de los nodos y quedaban ilegibles; pedí la corrección y la verifiqué en modo claro y oscuro. |

> Cada integrante debe completar o ampliar su propio aporte antes de la entrega.

### Revisión entre integrantes

- **lauB revisa R2:** Le pidió a su agente que revisara el flujo de R2. El agente detectó que en «Recorré un caso» se podía marcar «Reporta un problema con la encuesta» con la encuesta completa y el diagrama no cambiaba, lo que confundía. lauB propuso que esa opción quede deshabilitada mientras la encuesta esté completa, con un texto que explica cuándo se usa. Nico aplicó la propuesta en el repo con su agente y la verificó en el navegador.
- **Nico revisa R1:** La revisión de R1, que estaba asignada a lauO, no quedó registrada en el repo, así que la hizo Nico. Detectó que cuando el simulador de R1 dice «Como falta la encuesta, aplica R2» no había forma de ir a R2 desde ahí, y que en «Casos para probar» faltaba justamente el caso que une las dos sentencias. Le pidió al agente un enlace «Ver cómo sigue en R2» en ese resultado y el caso «Falta la encuesta» en la lista, también con enlace a R2.

## Herramientas de IA

| Aplicación | Modelo | Quién la usó | Para qué |
|---|---|---|---|
| Claude Code | Haiku 5.5. Al inicio de la sesión se usó Opus 5.5, y Opus 5.5 quedó como asesor. | Nico | Plan de trabajo, descarga del logo, estructura de la landing (etapas 0 y 1) y commits. |
| OpenCode | big-pickle (`opencode/big-pickle`) | lauO | Apoyo para completar la sección R2 en la etapa 2. |
| OpenCode | DeepSeek V4.1 Flash Free (`opencode/deepseek-v4.1-flash-free`) | Chris | Revisión del logo y del material, corrección de legibilidad del diagrama R1, revisión de rutas para el deploy y redacción de las secciones de su rol en el README (25/11/2026). |
| Claude (claude.ai) | Claude Opus 5.5 | Laura Belén Blanco | Contenido de las propuestas, diagramas SVG, desplegables, tablas de verdad, «Recorré un caso» y borrador del README (etapas 2 y 3, PR #2). |

Nadie editó el código a mano: todos los cambios se le pidieron a los agentes.

> Si el modelo no figura en la interfaz de una herramienta, escribir «modelo no informado».

## Registro de iteraciones

| # | Instrucción | Problema detectado | Pedido de mejora | Qué cambió y por qué |
|---|---|---|---|---|
| 1 | Armar la estructura de la landing (etapa 1): hero con logo, índice fijo y una sección por sentencia | En la vista previa del navegador integrado, abrir `index.html` como archivo local no cargaba el CSS, el JS ni el logo. Eso no pasa en un navegador normal, pero impedía verificar la página. | Verificar la landing desde un servidor local antes de dar la etapa por cerrada. Comprobar que el logo cargue, que no haya desborde horizontal y que el índice marque la sección visible al hacer scroll. | No cambió el código: se usó un servidor local temporal para la verificación. Se confirmó que el logo carga (640×640), que no hay desborde y que el índice cambia de sección. |
| 2 | Completar R2: propuesta, explicación, diagrama SVG y desplegables (lauO, etapa 2) | R2 podía perder la obligación explícita de «sin atribuir sanción» o mezclar decisiones del grupo con lo que define la regla. | Mantener la redacción original, mostrar «sin atribuir sanción» como consecuencia obligatoria, rotular Sí/No, incluir el vínculo con R1 y un caso límite con intervención humana. | Se reemplazó el placeholder de R2 por propuesta, explicación, diagrama y desplegables. Se marcó «pasa a evaluar R1» y el caso límite como decisiones del grupo. |
| 3 | Agregar propuestas, diagramas y desplegables de R1 y R2 (etapas 2 y 3, PR #2) | En el diagrama de R2 el rótulo «No, ya la completó» quedaba encima del recuadro. | Acortar el rótulo. | El rótulo quedó en «No» y el texto «Ya la completó» pasó adentro del recuadro, para que se lea bien. |
| 4 | Resolver el conflicto del PR #2 con la R2 ya mergeada | Dos versiones de R2 (la de lauO en `main` y la del PR #2) chocaban en `index.html`, y el README tenía dos estructuras distintas. | Elegir una versión de R2 (se mantuvo la de `main`) y unificar el README. | Se conservó la R2 de `main` y se sumó la R1 y las secciones del PR #2. Se portó el simulador «Recorré un caso» de R2 del PR #2 a la estructura del diagrama de `main`: se anotaron los nodos con `data-id` y se ajustó la lógica de `script.js`. |
| 5 | Revisar material, legibilidad y publicación antes del deploy (Chris, etapa 5) | En el diagrama R1 los textos heredaban el `stroke` de la clase `.nodo`: en modo claro quedaban casi blancos y en oscuro se veían sucios, así que el diagrama no se leía con comodidad. El comentario de la etapa 2 en `styles.css` tenía un byte roto. | Aplicar el borde solo a las formas del nodo, dejar el texto sin trazo y corregir el comentario. | `.nodo { stroke… }` pasó a `.nodo rect, .nodo polygon` y se agregó `.nodo text { stroke: none }`; los rótulos de R1 se leen en modo claro y oscuro. Se convirtió `styles.css` a UTF-8 válido y se verificó el logo (640×640, SHA-256 `a47ac81b…632b44`). |
| 6 | Revisión cruzada de R2 (propuesta de lauB, aplicada por Nico) | En «Recorré un caso» de R2 se podía tildar «Reporta un problema con la encuesta» con la encuesta completa y no pasaba nada, porque ese caso solo aplica cuando falta la encuesta. | Deshabilitar esa opción mientras la encuesta esté completa y explicar cuándo se usa. | La opción se ve apagada y no se puede tildar con la encuesta completa; al destildar la encuesta se vuelve a habilitar. Un texto debajo, vinculado con `aria-describedby`, aclara cuándo se usa. |
| 7 | Revisión cruzada de R1 (Nico) | El simulador de R1 decía «Como falta la encuesta, aplica R2», pero no había forma de ir a R2 desde ahí. En «Casos para probar» de R1 faltaba el caso de la encuesta incompleta, que es el que une las dos sentencias. | Agregar un enlace a R2 en ese resultado y sumar el caso que falta. | Cuando la encuesta no está completa, el resultado de R1 muestra «Ver cómo sigue en R2», que lleva a la sección R2. «Casos para probar» suma «Falta la encuesta», con enlace a R2. Así el lector sigue el vínculo entre las dos reglas sin buscarlo en el índice. |

> Nico: agregar aquí las iteraciones del resto de las etapas.

## Cómo reproducir el proyecto

El sitio es HTML, CSS y JavaScript sin dependencias, sin compilación y sin backend: no hacen falta Node, npm ni variables de entorno.

### Requisitos

- Git.
- Un navegador actualizado (Chrome, Edge o Firefox) en desktop.
- Opcional: Python 3 o la extensión **Live Server** de VS Code para servirlo en local.

### Pasos en local

1. Clonar el repositorio y entrar a la carpeta:

   ```bash
   git clone https://github.com/Nicoalazar/tp3-frontend-grupo15.git
   cd tp3-frontend-grupo15
   ```

2. Levantar un servidor estático desde la raíz del proyecto (elegir una opción):

   ```bash
   python3 -m http.server 8000     # macOS / Linux
   py -m http.server 8000          # Windows
   ```

   También se puede abrir `index.html` con doble clic o usar **Live Server** en VS Code (botón «Go Live»).

3. Abrir <http://localhost:8000> en el navegador.

4. Recorrer la landing para comprobar que todo carga: el logo del hero, el índice fijo, los dos diagramas, los desplegables y «Recorré un caso» en R1 y R2.

Para detener el servidor, `Ctrl + C`.

### Publicar en Vercel (sitio estático)

1. En Vercel, **Add New → Project** e importar `Nicoalazar/tp3-frontend-grupo15`.
2. Framework Preset: **Other**. Build Command: vacío. Output Directory: la raíz (`./`). No hay variables de entorno.
3. **Deploy**. Vercel sirve `index.html` y los archivos tal como están, con las rutas relativas (`styles.css`, `script.js`, `assets/logo-valovibes.webp`).
4. Copiar la URL de producción y pegarla en «Enlaces».
5. Repetir la comprobación en ventana sin sesión (ver el apartado anterior).

## Checklist de comprobación

### Contenido y lógica
- [ ] Startup (nombre, logo original, servicio, problema), equipo y bloque identificados; se reconoce el origen en el IFTS 16.
- [ ] Las dos sentencias con redacción original y una propuesta (título + beneficio en 2–3 frases) para cada una.
- [ ] Los dos flujos respetan las condiciones originales («y», negación, «sin atribuir sanción»).
- [ ] Se distingue qué viene de la regla y qué es decisión del grupo.
- [ ] Cada flujo tiene un caso límite con intervención humana.

### Diseño y funcionamiento
- [ ] Logo y diagramas completos y legibles.
- [ ] Desplegables con clic y con teclado.
- [ ] Se lee y recorre en desktop sin desbordes.
- [ ] Otra persona puede explicar la propuesta después de recorrerla.

### Comprobación de funcionamiento (desktop)

| Prueba | Resultado |
|---|---|
| El logo se ve completo y legible | Sí — Verificado (archivo `assets/logo-valovibes.webp`, 640×640, SHA-256 `a47ac81b…632b44`, renderizado completo sin recortes en desktop). |
| Los dos diagramas se leen sin zoom | Sí — Verificado (SVGs vectoriales adaptativos con estilos limpios y contraste correcto en modo claro y oscuro tras corregir la herencia de trazos en `.nodo`). |
| Desplegables se abren y cierran con clic | Sí — Verificado por Fer en el navegador (clic). |
| Desplegables se abren y cierran con teclado (Tab + Enter o Espacio) | Sí — Verificado por Fer en el navegador (teclado). |
| Sin desborde horizontal | Sí — Verificado (`overflow-x: hidden` en `body`, contenedores con `max-width` y tablas con contenedor `.tabla-scroll` responsivo). |
| R1 caso que cumple: sin sanción, con encuesta y micrófono → habilita | Sí — Verificado por simulación de JavaScript: sin sanción (`false`), con encuesta (`true`) y micrófono (`true`), resultado: habilita ingreso (regla R1). |
| R1 caso que no cumple: sanción activa → no habilita e informa | Sí — Verificado por simulación de JavaScript: con sanción activa (`true`), resultado: no habilita e informa el motivo (decisión del grupo). |
| R1 caso límite: no se obtienen los datos → moderador humano | Sí — Verificado por simulación de JavaScript: datos no disponibles (`false`), resultado: deriva el caso a un moderador humano (decisión del grupo). |
| R2 caso que cumple: sin encuesta → se pide completarla, sin sanción | Sí — Verificado por simulación de JavaScript: encuesta incompleta (`false`), sin problema reportado (`false`), resultado: solicita completar encuesta sin atribuir sanción (regla R2). |
| R2 caso que no cumple: encuesta completa → sigue R1 | Sí — Verificado por simulación de JavaScript: encuesta completa (`true`), resultado: R2 no aplica y pasa a evaluar R1 (decisión del grupo). |
| R2 caso límite: reporta problema → soporte humano | Sí — Verificado por simulación de JavaScript: encuesta incompleta (`false`) con reporte de problema (`true`), resultado: recordatorio sin sanción + revisión humana (decisión del grupo). |
| El repo abre en ventana sin sesión | Sí — verificado por Chris el 25/11/2026 (público, sin iniciar sesión) |
| La landing abre en ventana sin sesión y muestra la versión final | Sí — Responde sin sesión (HTTP 200), los archivos publicados son idénticos a `main` y Fer hizo la revisión visual en desktop. |

### README
- [ ] Grupo, integrantes y aporte concreto de cada uno.
- [ ] Startup y bloque.
- [ ] Enlace al repositorio y a la landing (verificados sin sesión).
- [ ] Cómo reproducir el proyecto + comprobación de enlaces y funcionamiento.
- [ ] Aplicación y modelo de IA usados (nombre tal como aparece; si no figura: «modelo no informado»), para qué y qué cambios se pidieron.
- [ ] Evidencia de iteración: instrucción inicial → problema detectado → pedido de mejora → qué cambió y por qué.
- [ ] Revisión entre integrantes y la mejora surgida.

## Estructura del proyecto

```text
.
├── assets/
│   └── logo-valovibes.webp
├── docs/
│   └── PLAN.md
├── .gitignore
├── index.html
├── script.js
├── styles.css
└── README.md
```
