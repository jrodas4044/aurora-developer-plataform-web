# Aurora ERP — Sección Producto de aurora-labs

**Fecha:** 2026-06-27
**Estado:** Diseño aprobado, pendiente de plan de implementación
**Repositorio:** `aurora-labs` (sitio de marketing, Astro 6 + Tailwind v4)

## Contexto

`aurora-labs` hoy presenta un solo eje: **Aurora Engine**, la plataforma de
desarrollo, con cuatro páginas de capacidad (Aurora Make, Platform SDK, Runtime,
Architecture) agrupadas bajo el dropdown "Plataforma" del nav. La voz es
developer-to-developer.

Falta el eje de **producto**: Aurora como el ERP / sistema operativo financiero
que compra y opera una PyME o un despacho. Este documento define una sección
"Producto" paralela a "Plataforma", con cuatro páginas nuevas y su propia voz
(comprador / operador / inversionista), construida con los mismos tokens y
componentes para que un solo diseñador parezca haber hecho todo el sitio.

## La tesis (la espina dorsal de toda la sección)

El posicionamiento NO es "fiscal LATAM + IA" — eso encajona a Aurora como
software tributario inteligente. El posicionamiento es **Financial Operating
System**. Lo fiscal es el punto de entrada, el foso de datos y la punta de lanza
de adopción; no es la identidad.

> **Aurora es el sistema operativo financiero AI-native para PyMEs y despachos de
> Latinoamérica. Comenzamos con la contabilidad y la fiscalidad porque ahí nacen
> los datos; terminamos automatizando toda la operación financiera de la empresa.**

La escalera que ordena la narrativa y la sección:

```
FEL + Fiscal          → punto de entrada / foso de datos
Contabilidad          → sistema de registro
Tesorería · CxC/CxP   → operación financiera
Cash Management       → liquidez
Planeación financiera → decisión
Agentes financieros   → automatización
──────────────────────────────────────
Financial Operating System → la visión
```

El patrón es el de Rippling (nómina → sistema operativo empresarial), Rillet
(cierre → procesos financieros) y Brex (tarjetas → plataforma financiera): un
punto de entrada angosto que se convierte en sistema operativo. El foso inicial
es fiscal; la visión es mucho más grande que los impuestos.

## Arquitectura del sitio

- **Nuevo dropdown "Producto"** en `src/components/Nav.astro`, espejo exacto del
  patrón "Plataforma" existente (botón con `aria-expanded`, panel desktop, y
  bloque equivalente en el menú móvil). El nav queda con dos grupos: **Producto**
  (comprador) y **Plataforma** (developer), más los enlaces sueltos actuales
  (Cómo funciona, Casos de uso, Blog) y el CTA de Contacto.
- **Cuatro páginas nuevas**, todas con los componentes y tokens existentes
  (`Container`, `Button`, `Glow`, `PageHeader`, `FeatureGrid`, `CrossLinks`,
  `CtaBand`, `WindowDots`). Cero dependencias nuevas; cero client-side JS más
  allá del que ya trae el nav.
- **Contenido en `src/data/product.ts`** (archivo nuevo, escrito a mano), para
  separar el contenido de producto del `src/data/pages.ts` auto-generado de la
  plataforma. Cada página template importa su objeto desde aquí.
- **i18n:** solo `es` (root) en v1, consistente con el resto del sitio actual.
  Las versiones `/en/` quedan como follow-up explícito, fuera de alcance.
- **Restricción de diseño (DESIGN.md):** usar solo tokens (nunca hex crudo);
  secciones `py-20 sm:py-28`; patrón eyebrow mono → heading → lede; cards
  `rounded-xl border border-line bg-panel`; a lo sumo uno o dos `Glow` por
  página; gradiente solo en CTA o una palabra de un heading. Voz sin signos de
  exclamación, sin "supercharge/unleash"; números concretos sobre adjetivos.

## Forma de los datos (componentes ya existentes)

- `PageHeader` → `{ eyebrow, title, lede? }`
- `FeatureGrid` → `{ items: [{ title, body, mono? }] }` (4 items = 2 columnas)
- `CapabilityPage` (template de página) consume un objeto con:
  `{ heroEyebrow, heroH1, heroLede, intro (string con \n\n), features[],
  showcase{ kind: 'code'|'list'|'pills', heading, lede?, code?{lang,label,content},
  rows?[{left,right}], pills?[{label,meta}] }, crossLinks[], cta }`
- `CrossLinks` → `{ links: [{ label, href, blurb }], heading? }`
- `CtaBand` → `{ heading, body, primary{label,href}, secondary?{label,href} }`

## Las cuatro páginas

### 1. Aurora ERP — overview (`/aurora-erp`) — BESPOKE, long-form

La única página bespoke. La narrativa de ocho movimientos es demasiado rica para
el template de capacidad. Reusa `Container`, `Button`, `Glow` y los tokens, pero
maquetada a mano sección por sección. Voz: la del pitch aprobado, con el lead
reformulado a Financial Operating System.

Secuencia de secciones (cada una `py-20 sm:py-28`, patrón eyebrow → heading →
lede → contenido):

1. **Hero.** Eyebrow `AURORA · SISTEMA OPERATIVO FINANCIERO`. H1: "El sistema
   operativo financiero AI-native para Latinoamérica." Lede con el one-liner
   ampliado (empezamos en contabilidad y fiscalidad; terminamos administrando la
   operación financiera completa). Un `Glow`. Botones: primario "Solicitar una
   demo" → `/contacto`; secundario "Ver los módulos" → `/modulos`.
2. **La tesis.** "La factura electrónica convirtió la contabilidad de
   Latinoamérica en un problema de datos. La IA convirtió esos datos en acciones.
   Aurora une ambas cosas." Encuadre: lo fiscal es el dato que hace posible
   automatizar toda la operación financiera, no el techo del producto.
3. **El problema.** Las PyMEs viven entre Excel/procesos manuales y ERPs
   tradicionales (meses de implementación, consultores, parametrización). El
   cierre llega tarde; las decisiones se toman con información vieja; la
   contabilidad es reconstrucción del pasado. Reencuadre operativo: el dueño /
   gerente / CFO no se pregunta "¿ya importé mis FEL?", se pregunta cuánto dinero
   tiene, si cumple el flujo de caja, quién le debe, por qué cayó el margen, qué
   empresa del grupo destruye valor, cuánto puede invertir, qué impuestos pagará.
   Eso ya es Financial Operations.
4. **¿Por qué ahora?** Durante años faltó lo fundamental: datos estructurados.
   La factura electrónica, los libros fiscales digitales y la bancarización
   generan hoy información financiera estructurada a una escala inédita. Por
   primera vez un sistema puede entender automáticamente los hechos económicos de
   una empresa. La materia prima de una contabilidad autónoma ya existe.
5. **La escalera** (sección visual). Render del diagrama FEL+Fiscal → Contabilidad
   → Tesorería/CxC/CxP → Cash Management → Planeación → Agentes → Financial
   Operating System. Lista vertical estilizada con hairlines (reusar el patrón
   `showcase.kind === 'list'`, o maquetar a mano con `divide-y divide-line`).
   Mensaje: punto de entrada angosto → sistema operativo.
6. **La solución.** Cada factura, cada venta, cada movimiento bancario, cada
   documento fiscal: Aurora propone la contabilización automáticamente. El usuario
   ya no construye la contabilidad; la supervisa. "Tus libros se llevan solos; vos
   solo aprobás."
7. **¿Qué hace diferente a Aurora?** No es un chatbot conectado a un ERP. El
   General Ledger es un event log inmutable. Toda acción financiera se ejecuta
   mediante acciones auditables. Los agentes de IA nunca escriben directo en la
   base: proponen, explican, generan borradores; el humano aprueba; cada decisión
   conserva trazabilidad completa. (Esto es real hoy en la arquitectura, no
   marketing.)
8. **¿Por qué Latinoamérica?** La región tiene lo que otros mercados no: factura
   electrónica obligatoria. El gobierno ya hizo el trabajo difícil —digitalizar la
   evidencia financiera—. Aurora convierte esa infraestructura pública en
   automatización privada.
9. **El foso.** IA + Fiscal LATAM + multiempresa nativo. Los ERPs tradicionales no
   se vuelven AI-native sin reescribir su núcleo. Los productos de EE. UU. no
   entienden el ecosistema fiscal de la región. Los procesos manuales no escalan.
10. **La visión.** Que el cierre mensual deje de ser un evento de pánico; que los
    libros estén siempre al día; que el contador deje de capturar y se vuelva un
    operador financiero asistido por IA. "No es donde guardás la contabilidad. Es
    donde la contabilidad se hace sola." Cierre ambicioso: "Aurora no está
    construyendo otro ERP para Latinoamérica. Está construyendo la capa de
    automatización financiera que la infraestructura fiscal digital de la región
    hizo posible por primera vez."
11. **CTA** (`CtaBand`). "Del primer FEL a la decisión financiera." Primario →
    `/contacto`; secundario "Ver cómo funciona" → `/como-funciona`.
12. **CrossLinks** a Aura · IA, Módulos, Fiscal LATAM.

### 2. Aura · IA (`/aurora-ia`) — template `CapabilityPage`

La capa de agentes. Honestidad explícita: la arquitectura (propose-and-approve,
GL como event log, draft-antes-de-post, trazabilidad) es real hoy; los agentes
son la dirección, presentados como roadmap.

- **heroEyebrow:** `AURORA · IA`
- **heroH1:** "Agentes que proponen. Vos aprobás."
- **heroLede:** Aura es la capa de IA que opera sobre el libro mayor vivo. No es
  un chatbot pegado al ERP: cada acción pasa por borrador y aprobación humana,
  con la misma trazabilidad que un asiento hecho a mano.
- **intro (2 párrafos):** (a) Por qué propose-and-approve es el modelo correcto en
  finanzas: el GL es event log inmutable, los agentes nunca escriben directo,
  proponen contra acciones auditables. (b) La IA se monta sobre una arquitectura
  que ya existe (draft, lineage `source_module`/`source_id`, determinaciones,
  readiness); el foso no es la IA, es la IA sobre ese sustrato.
- **features (4):** Sugeridor de cuenta (aprende del histórico de la empresa) ·
  Detección de anomalías antes del cierre · Preguntas en lenguaje natural sobre
  el GL de la empresa · Narrativa de variación y devengos sugeridos. `mono`:
  nombres conceptuales cortos.
- **showcase (kind: list):** el roadmap F1→F5 como filas
  (`left` = fase, `right` = descripción): F1 Sugeridor de cuenta · F2 Confianza +
  feedback loop · F3 Detección de anomalías · F4 Aprendizaje cross-empresa
  (despachos) · F5 Asesor de cierre continuo. Nota honesta de que es dirección.
- **crossLinks:** Aurora ERP, Módulos, y un puente a Aurora Architecture
  (cómo el GL event log está verificado por fitness functions).
- **cta:** demo → `/contacto`.

### 3. Módulos (`/modulos`) — template `CapabilityPage`

Encuadrado como **la operación financiera completa** (la escalera), no como lista
de features. Marca lo construido vs. lo que viene con honestidad.

- **heroEyebrow:** `AURORA · MÓDULOS`
- **heroH1:** "La operación financiera completa, en un solo sistema."
- **heroLede:** De la factura al cierre y de la cobranza a la decisión: cada
  módulo postea al mismo libro mayor, así la empresa siempre sabe dónde está.
- **intro (2 párrafos):** (a) Todo módulo orbita el GL y postea por las mismas
  costuras; no hay silos ni reconciliación entre sistemas. (b) La cobertura sigue
  la escalera: registro (Contabilidad) → operación (Ventas, Inventario, CxC/CxP,
  Tesorería) → fiscal (FEL/SAT, ISR/IVA) → decisión (reportes, y agentes en
  camino).
- **features (4 cards, agrupando lo construido):** Contabilidad (Quorum) — núcleo
  GL, reportes, cierres · Ventas e Inventario — front office que postea solo ·
  CxC / CxP / Tesorería — financiero y bancos con conciliación · Fiscal — FEL/SAT,
  ISR/IVA, Libros. `mono`: nombres de módulo.
- **showcase (kind: pills):** módulos como pills con meta de estado
  (`label` = módulo, `meta` = "en producción" / "en camino"), honesto sobre el
  roadmap (p. ej. Cash Management / Planeación = en camino).
- **crossLinks:** Aurora ERP, Aura · IA, Fiscal LATAM.
- **cta:** demo → `/contacto`.

### 4. Fiscal LATAM (`/fiscal-latam`) — template `CapabilityPage`

Encuadrado como **ingesta + foso**, NO como identidad. Es la pata que alimenta de
datos al sistema operativo.

- **heroEyebrow:** `AURORA · FISCAL LATAM`
- **heroH1:** "La factura electrónica es la materia prima."
- **heroLede:** La infraestructura fiscal digital de la región —factura
  electrónica obligatoria, libros digitales— es el dato estructurado que vuelve
  posible automatizar la contabilidad. Aurora la cosecha.
- **intro (2 párrafos):** (a) El gobierno ya hizo el trabajo difícil: digitalizar
  la evidencia financiera; en EE. UU. ese dato estructurado no existe a esta
  escala. (b) Aurora convierte esa infraestructura pública en automatización
  privada, y lo hace extensible por país (nunca se queman las reglas de un solo
  país en el código).
- **features (4):** FEL / SAT — del DTE al asiento propuesto · ISR / IVA — cálculo
  y Libros fiscales · Multi-país — estrategia por país, sin reglas quemadas ·
  Conciliación de extractos — auto-match banco↔libros. `mono`: conceptos.
- **showcase (kind: code o list):** el flujo factura electrónica →
  dato estructurado → asiento propuesto → aprobación → libro mayor. Preferible
  `kind: list` con las etapas; sin inventar nombres de API.
- **crossLinks:** Aurora ERP, Módulos, Aura · IA.
- **cta:** demo → `/contacto`.

## Cross-links: la regla

Cada página de Producto enlaza a sus hermanas de Producto y tiende **al menos un
puente a Plataforma** (Aurora Engine) para credibilidad técnica: "así está
construido". El overview enlaza a las tres páginas template; las template enlazan
entre sí y al overview, más un puente a Plataforma cuando aplica (Aura → Aurora
Architecture).

## Verificación

- `pnpm build` pasa sin warnings de los archivos nuevos.
- Las cuatro rutas resuelven y aparecen en el dropdown "Producto" (desktop y
  móvil), con `aria-current` correcto en la página activa.
- Sin scroll horizontal a 360 / 768 / 1280 px.
- Contraste de texto ≥ 4.5:1; `fg-3` solo en meta no esencial.
- Estados de foco reales en los nuevos enlaces del nav.
- Revisión visual del overview bespoke contra la barra de calidad de DESIGN.md
  (Tailwind Plus "Protocol").

## Fuera de alcance (v1)

- Versiones `/en/` de las cuatro páginas.
- Página de pricing, changelog o demo interactiva.
- Cambios a las páginas de Plataforma existentes (solo se agrega el dropdown
  Producto al nav; los enlaces de Plataforma no se tocan).
- Contenido de blog sobre el lanzamiento.
```
