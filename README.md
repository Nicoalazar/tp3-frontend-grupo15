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
- «Recorré un caso» para R1: JavaScript local que resalta en el diagrama el camino que seguiría el agente.
- Una sección que explica cómo se conectan R1 y R2.

La landing no usa IA, no ejecuta agentes y no se conecta a APIs.

## Enlaces

- **Repositorio:** https://github.com/Nicoalazar/tp3-frontend-grupo15
- **Landing (Vercel):** [Pendiente - Etapa 5]

Comprobación de enlaces: [Pendiente - Chris/Fer, verificar en ventana sin sesión].

## Integrantes y aportes

| Integrante | Rol principal | Aporte concreto |
|---|---|---|
| **Nico** | Coordinación del agente | [Pendiente] Dirigir cambios con el agente y mantener el registro de iteraciones y herramientas. |
| **lauB** | Responsable de R1 | [Pendiente] Validar la ficha de R1, revisar diagrama y desplegables, y definir el caso límite de R1. Revisión cruzada de R2. |
| **lauO** | Responsable de R2 | Validó la ficha de R2 (dato, condición, consecuencia). Completó la sección R2: propuesta, explicación textual, diagrama SVG con ramas Sí/No y desplegables `<details>`. Controló que el flujo muestre explícitamente «sin atribuir sanción» y el vínculo con R1. Definió el caso límite con intervención humana. |
| **Fer** | Pruebas (QA) | [Pendiente] Recorrer la checklist en desktop: teclado, desbordes y casos Sí/No. |
| **Chris** | Material y publicación | [Pendiente] Verificar logo y material, publicar en Vercel y comprobar los enlaces sin sesión. |

> Cada integrante debe completar o ampliar su propio aporte antes de la entrega.

### Revisión entre integrantes

- **lauB revisa R2:** [Pendiente] Detectar una mejora concreta y documentar el cambio.
- **lauO revisa R1:** [Pendiente] Detectar una mejora concreta y documentar el cambio.

## Herramientas de IA

| Aplicación | Modelo | Quién la usó | Para qué |
|---|---|---|---|
| Claude Code | Claude Opus 5.5 y Claude Haiku 5.5 (cambiado con `/model` durante la sesión; asesor: Opus 5.5). Nico debe confirmar el modelo tal como aparece. | Nico | Plan de trabajo, descarga del logo, estructura de la landing (etapas 0 y 1) y commits. |
| OpenCode | big-pickle (`opencode/big-pickle`) | lauO | Apoyo para completar la sección R2 en la etapa 2. |
| Claude (claude.ai) | Claude Opus 5.5 | Laura Belén Blanco | Contenido de las propuestas, diagramas SVG, desplegables, tablas de verdad, «Recorré un caso» y borrador del README (etapas 2 y 3, PR #2). |

Nadie editó el código a mano: todos los cambios se le pidieron a los agentes.

> Si el modelo no figura en la interfaz de una herramienta, escribir «modelo no informado».

## Registro de iteraciones

| # | Instrucción | Problema detectado | Pedido de mejora | Qué cambió y por qué |
|---|---|---|---|---|
| 1 | Armar la estructura de la landing (etapa 1) | [Pendiente] | [Pendiente] | [Pendiente] |
| 2 | Completar R2: propuesta, explicación, diagrama SVG y desplegables (lauO, etapa 2) | R2 podía perder la obligación explícita de «sin atribuir sanción» o mezclar decisiones del grupo con lo que define la regla. | Mantener la redacción original, mostrar «sin atribuir sanción» como consecuencia obligatoria, rotular Sí/No, incluir el vínculo con R1 y un caso límite con intervención humana. | Se reemplazó el placeholder de R2 por propuesta, explicación, diagrama y desplegables. Se marcó «pasa a evaluar R1» y el caso límite como decisiones del grupo. |
| 3 | Agregar propuestas, diagramas y desplegables de R1 y R2 (etapas 2 y 3, PR #2) | En el diagrama de R2 el rótulo «No, ya la completó» quedaba encima del recuadro. | Acortar el rótulo. | El rótulo quedó en «No» y el texto «Ya la completó» pasó adentro del recuadro, para que se lea bien. |
| 4 | Resolver el conflicto del PR #2 con la R2 ya mergeada | Dos versiones de R2 (la de lauO en `main` y la del PR #2) chocaban en `index.html`, y el README tenía dos estructuras distintas. | Elegir una versión de R2 (se mantuvo la de `main`) y unificar el README. | Se conservó la R2 de `main` y se sumó la R1 y las secciones del PR #2. El simulador «Recorré un caso» de R2 del PR #2 quedó fuera, porque su diagrama no tiene los identificadores que necesita. |

> Nico: agregar aquí las iteraciones del resto de las etapas.

## Cómo reproducir

Es HTML, CSS y JavaScript sin dependencias ni compilación.

```bash
git clone https://github.com/Nicoalazar/tp3-frontend-grupo15
cd tp3-frontend-grupo15
python3 -m http.server 8000   # o abrir index.html directo en el navegador
```

Después abrir http://localhost:8000. También se puede usar una extensión como **Live Server** en VS Code.

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
| El repo abre en ventana sin sesión | [Pendiente] |
| La landing abre en ventana sin sesión y muestra la versión final | [Pendiente] |

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
├── index.html
├── script.js
├── styles.css
└── README.md
```
