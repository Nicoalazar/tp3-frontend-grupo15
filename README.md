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
- **Landing (Vercel):** `[Pegar acá la URL de producción que devuelve Vercel al publicar]`

> La landing se publica conectando este repositorio a Vercel (ver «Cómo reproducir → Publicar en Vercel»). Cuando Vercel devuelva la URL, se pega en el punto anterior y se repite la comprobación en ventana sin sesión.

### Comprobación de enlaces y funcionamiento en ventana sin sesión

Cada enlace se abre en una ventana privada, **sin iniciar sesión** en GitHub ni en Vercel, para confirmar que cualquier persona con el enlace ve la versión final.

| Enlace | Cómo se comprobó | Resultado |
|---|---|---|
| Repositorio | `git ls-remote` sin credenciales y apertura de la URL en ventana privada, sin sesión | Verificado el 25/11/2026: el repositorio es público, abre sin iniciar sesión y muestra la rama `main`. |
| Landing en Vercel | Abrir la URL publicada en ventana privada | Pendiente: se completa al publicar (etapa 5). |

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
| **Nico** | Coordinación del agente | Coordinó al agente en todas las etapas: escribió el plan con roles y responsables por etapa (`docs/PLAN.md`), descargó y verificó el logo original (etapa 0), armó la estructura de la landing (etapa 1), resolvió el conflicto del PR #2 unificando R2 y el README, y portó el simulador «Recorré un caso» de R2. Mantiene el registro de iteraciones y de herramientas. |
| **lauB** (Laura Belén Blanco) | Responsable de R1 | Completó su sección R1 en el commit `6460368`: propuesta con título y beneficio, diagrama SVG con ramas Sí/No, desplegables (datos, decisión, acción, excepciones y caso límite con moderador humano), tabla de verdad y «Recorré un caso» de R1. Revisión cruzada de R2: [Pendiente] mejora concreta. |
| **lauO** | Responsable de R2 | Validó la ficha de R2 (dato, condición, consecuencia). Completó la sección R2: propuesta, explicación textual, diagrama SVG con ramas Sí/No y desplegables `<details>`. Controló que el flujo muestre explícitamente «sin atribuir sanción» y el vínculo con R1. Definió el caso límite con intervención humana. |
| **Fer** | Pruebas (QA) | [Pendiente] Recorrer la checklist en desktop: teclado, desbordes y casos Sí/No. |
| **Chris** | Material y publicación | Verifiqué el logo original (`assets/logo-valovibes.webp`: 640×640, 9.682 bytes, SHA-256 `a47ac81b…632b44`, idéntico al publicado por la cátedra) y que la landing lo muestre completo, sin recortes. Revisé las rutas relativas y la publicación como sitio estático sin build, dejé listos los pasos para conectar el repo con Vercel y la comprobación de los dos enlaces en ventana sin sesión. Redacté «Cómo reproducir» y la sección de enlaces/comprobación. En la revisión previa al deploy detecté que los textos del diagrama R1 heredaban el borde de los nodos y quedaban ilegibles; pedí la corrección y la verifiqué en modo claro y oscuro. |

> Cada integrante debe completar o ampliar su propio aporte antes de la entrega.

### Revisión entre integrantes

- **lauB revisa R2:** [Pendiente] Detectar una mejora concreta y documentar el cambio.
- **lauO revisa R1:** [Pendiente] Detectar una mejora concreta y documentar el cambio.

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
| El logo se ve completo y legible | [Pendiente] |
| Los dos diagramas se leen sin zoom | [Pendiente] |
| Desplegables se abren y cierran con clic | [Pendiente] |
| Desplegables se abren y cierran con teclado (Tab + Enter o Espacio) | [Pendiente] |
| Sin desborde horizontal | [Pendiente] |
| R1 caso que cumple: sin sanción, con encuesta y micrófono → habilita | [Pendiente] |
| R1 caso que no cumple: sanción activa → no habilita e informa | [Pendiente] |
| R1 caso límite: no se obtienen los datos → moderador humano | [Pendiente] |
| R2 caso que cumple: sin encuesta → se pide completarla, sin sanción | [Pendiente] |
| R2 caso que no cumple: encuesta completa → sigue R1 | [Pendiente] |
| R2 caso límite: reporta problema → soporte humano | [Pendiente] |
| El repo abre en ventana sin sesión | Sí — verificado por Chris el 25/11/2026 (público, sin iniciar sesión) |
| La landing abre en ventana sin sesión y muestra la versión final | Pendiente: se completa al publicar en Vercel |

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
