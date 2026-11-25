# TP3 · Dos sentencias. Dos soluciones · Grupo 15

Desarrollo de Sistemas Web · Front End · IFTS 29 · 2026 · 2do cuatrimestre
Entrega: 26/11/2026

- **Landing publicada:** COMPLETAR (link de Vercel)
- **Repositorio:** https://github.com/Nicoalazar/tp3-frontend-grupo15

## Startup y bloque asignado

| Dato | Valor |
|---|---|
| Startup | ValoVibes (creada por estudiantes del IFTS 16) |
| Servicio | Videojuegos y comunidades |
| Objetivo | Búsqueda de compañeros de Valorant compatibles y coordinación de invitaciones |
| Sorteo / bloque | S12-A · Ingreso a la búsqueda |
| Logo | Original, en `assets/logo-valovibes.webp`, sin modificar |

**R1:** Si el jugador no tiene sanciones activas, completó la encuesta requerida y dispone de micrófono, el sistema habilita su ingreso a la búsqueda de compañeros.

**R2:** Si el jugador no completó la encuesta requerida, el sistema le solicita completarla sin atribuirle una sanción.

## Qué tiene la landing

- Presentación de la startup con su logo original, el problema, el bloque y el origen en el IFTS 16
- Leyenda para leer los diagramas: regla, decisión del grupo, intervención humana, herramienta
- Para cada sentencia: texto original, propuesta con título y beneficio, diagrama SVG, «Recorré un caso» y desplegables (datos, decisión, acción y resultado, excepciones, qué es regla y qué es decisión del grupo, tabla de verdad, casos de prueba)
- Una sección que explica cómo se conectan R1 y R2

La landing no usa IA, no ejecuta agentes ni se conecta a APIs. «Recorré un caso» es JavaScript local que solo resalta el camino en el diagrama.

## Integrantes y aportes

| Integrante | Rol | Aporte concreto |
|---|---|---|
| Nico Zalazar | Coordinación del agente | COMPLETAR |
| Laura Belén Blanco (lauB) | Responsable de R1 | COMPLETAR (ver abajo) |
| lauO — COMPLETAR nombre | Responsable de R2 | COMPLETAR |
| Fer — COMPLETAR nombre | Pruebas (QA) | COMPLETAR |
| Chris — COMPLETAR nombre | Material y publicación | COMPLETAR |

### Revisión entre integrantes

| Quién revisó | Qué revisó | Qué detectó | Qué se cambió |
|---|---|---|---|
| lauB | Flujo R2 | COMPLETAR | COMPLETAR |
| lauO | Flujo R1 | COMPLETAR | COMPLETAR |

## Herramientas de IA

| Aplicación | Modelo (tal como aparece) | Quién la usó | Para qué |
|---|---|---|---|
| Claude Code | COMPLETAR (o «modelo no informado») | Nico | Plan de trabajo, descarga del logo, estructura de la landing (etapas 0 y 1) |
| Claude (claude.ai) | Claude Opus 5.5 | Laura Belén Blanco | Contenido de las propuestas, los dos diagramas SVG, desplegables, tablas de verdad, «Recorré un caso» y borrador de este README (etapas 2 y 3) |

Nadie editó el código a mano: todos los cambios se le pidieron a los agentes.

## Registro de iteraciones

| # | Instrucción | Problema detectado | Pedido de mejora | Qué cambió y por qué |
|---|---|---|---|---|
| 1 | Armar la estructura de la landing (etapa 1) | COMPLETAR | COMPLETAR | COMPLETAR |
| 2 | Agregar propuestas, diagramas y desplegables de R1 y R2 (etapas 2 y 3) | En el diagrama de R2 el rótulo «No, ya la completó» quedaba encima del recuadro | Acortar el rótulo | El rótulo quedó en «No» y el texto «Ya la completó» pasó adentro del recuadro, para que se lea bien |
| 3 | COMPLETAR | | | |

## Cómo reproducir

Es HTML, CSS y JavaScript sin dependencias ni compilación.

```bash
git clone https://github.com/Nicoalazar/tp3-frontend-grupo15
cd tp3-frontend-grupo15
python3 -m http.server 8000   # o abrir index.html directo en el navegador
```

Después abrir http://localhost:8000

## Comprobación

| Prueba (desktop) | Resultado |
|---|---|
| El logo se ve completo y legible | COMPLETAR |
| Los dos diagramas se leen sin zoom | COMPLETAR |
| Desplegables se abren y cierran con clic | COMPLETAR |
| Desplegables se abren y cierran con teclado (Tab + Enter o Espacio) | COMPLETAR |
| Sin desborde horizontal | COMPLETAR |
| R1 caso que cumple: sin sanción, con encuesta y micrófono → habilita | COMPLETAR |
| R1 caso que no cumple: sanción activa → no habilita e informa | COMPLETAR |
| R1 caso límite: no se obtienen los datos → moderador humano | COMPLETAR |
| R2 caso que cumple: sin encuesta → se pide completarla, sin sanción | COMPLETAR |
| R2 caso que no cumple: encuesta completa → sigue R1 | COMPLETAR |
| R2 caso límite: reporta problema → soporte humano | COMPLETAR |
| Link del repo abre en ventana sin sesión | COMPLETAR |
| Link de la landing abre en ventana sin sesión y muestra la versión final | COMPLETAR |
