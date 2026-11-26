# TP3 · «Dos sentencias. Dos soluciones»

**Desarrollo de Sistemas Web · Front End · IFTS 29 · 2026 · 2do cuatrimestre**  
**Grupo 15** · Startup: **ValoVibes** · Bloque: **Ingreso a la búsqueda**

## Integrantes y aportes

| Integrante | Rol principal | Aporte concreto |
|---|---|---|
| **Nico** | Coordinación del agente | [Pendiente] Dirigir cambios con el agente y mantener registro de iteraciones/herramientas. |
| **lauB** | Responsable de R1 | [Pendiente] Validar ficha R1, revisar diagrama/desplegables y definir caso límite de R1. Revisión cruzada de R2. |
| **lauO** | Responsable de R2 | Validó la ficha de R2 (dato, condición, consecuencia). Completó la sección R2 en la landing: propuesta, explicación textual, diagrama SVG con ramas Sí/No, y desplegables `<details>`. Controló que el flujo muestre explícitamente “sin atribuir sanción” y el vínculo con R1. Definió el caso límite con intervención humana (encuesta a medias/error reportado → recordatorio sin sanción + revisión humana). |
| **Fer** | Pruebas (QA) | [Pendiente] Recorrer checklist de desktop, teclado, desbordes y casos Sí/No. |
| **Chris** | Material y publicación | [Pendiente] Verificación de logo/material, publicación en Vercel y comprobación de enlaces sin sesión. |

> Cada integrante debe completar/ampliar su propio aporte antes de la entrega.

## Startup y bloque

- **Startup:** ValoVibes (creada por estudiantes del IFTS 16).
- **Rubro:** Videojuegos y comunidades.
- **Objetivo:** Búsqueda de compañeros de Valorant compatibles y coordinación de invitaciones.
- **Bloque asignado:** Ingreso a la búsqueda.
- **Logo:** Original en `assets/logo-valovibes.webp`, usado completo y sin rediseñar.

### Sentencias asignadas (redacción original)

- **R1:** «Si el jugador no tiene sanciones activas, completó la encuesta requerida y dispone de micrófono, el sistema habilita su ingreso a la búsqueda de compañeros.»
- **R2:** «Si el jugador no completó la encuesta requerida, el sistema le solicita completarla sin atribuirle una sanción.»

## Enlaces

- **Repositorio:** https://github.com/Nicoalazar/tp3-frontend-grupo15.git
- **Landing (Vercel):** [Pendiente - Etapa 5]

Comprobación de enlaces: [Pendiente - Chris/Fer, verificar en ventana sin sesión].

## Cómo reproducir

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Nicoalazar/tp3-frontend-grupo15.git
   cd tp3-frontend-grupo15
   ```
2. Abrir `index.html` en un navegador moderno, o usar una extensión como **Live Server** en VS Code.
3. No requiere instalación de dependencias ni build: el proyecto usa HTML, CSS y JS estáticos.

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

### README
- [ ] Grupo, integrantes y aporte concreto de cada uno.
- [ ] Startup y bloque.
- [ ] Enlace al repositorio y a la landing (verificados sin sesión).
- [ ] Cómo reproducir el proyecto + comprobación de enlaces y funcionamiento.
- [ ] Aplicación y modelo de IA usados (nombre tal como aparece; si no figura: «modelo no informado»), para qué y qué cambios se pidieron.
- [ ] Evidencia de iteración: instrucción inicial → problema detectado → pedido de mejora → qué cambió y por qué.
- [ ] Revisión entre integrantes y la mejora surgida.

## Herramientas de IA

| Aplicación | Modelo | Para qué se usó | Cambios pedidos / resultado |
|---|---|---|---|
| OpenCode | big-pickle (`opencode/big-pickle`) | Apoyo a lauO en la etapa 2 para completar la sección R2. | Se pidió armar propuesta, recorrido con diagrama SVG, desplegables y caso límite de R2 respetando la redacción original. Se generó contenido en `index.html` y estilos en `styles.css`; queda pendiente revisión cruzada por lauB y validación del grupo. |

> Completar con todas las herramientas/modelos usados por el equipo. Si el modelo no figura en la interfaz: «modelo no informado».

## Registro de iteraciones

### Iteración - R2 (lauO / etapa 2)
- **Instrucción inicial:** Completar la parte de la sentencia R2 en la landing, con propuesta, diagrama y detalles.
- **Problema detectado / riesgo:** R2 podía perder la obligación explícita de “sin atribuir sanción” o mezclar decisiones del grupo con lo que define la regla.
- **Pedido de mejora:** Mantener la redacción original, mostrar “sin atribuir sanción” como consecuencia obligatoria, rotular Sí/No, incluir vínculo con R1 y caso límite con intervención humana.
- **Qué cambió y por qué:** Se reemplazó el placeholder de R2 en `index.html` por propuesta, explicación, diagrama SVG y `<details>`. Se agregaron estilos en `styles.css` para el diagrama y desplegables. Se marcó “pasa a evaluar R1” y el caso límite como decisiones del grupo para no alterar la regla.

> Nico: agregar aquí las iteraciones del resto de las etapas/cambios.

## Revisión entre integrantes

- **lauB revisa R2:** [Pendiente] Detectar una mejora concreta y documentar el cambio.
- **lauO revisa R1:** [Pendiente] Detectar una mejora concreta y documentar el cambio.

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