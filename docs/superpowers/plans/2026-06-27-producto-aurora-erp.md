# Sección Producto / Aurora ERP — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Agregar a `aurora-labs` una sección "Producto" (4 páginas + dropdown en el nav) que posiciona Aurora como sistema operativo financiero AI-native, paralela a la sección "Plataforma" existente.

**Architecture:** Tres páginas template reusan el componente `CapabilityPage` con objetos de datos en un `src/data/product.ts` nuevo; una página overview (`/aurora-erp`) es bespoke long-form que lee un objeto estructurado del mismo archivo. Un segundo dropdown en `Nav.astro` agrupa las cuatro. Cero dependencias nuevas, cero client JS más allá del nav.

**Tech Stack:** Astro 6.4, Tailwind CSS v4 (`@tailwindcss/vite`), `.astro` components, pnpm. Fuentes self-hosted. Sin framework UI, sin test runner (la verificación es `pnpm build` + aserción sobre el HTML emitido en `dist/`).

## Global Constraints

- **No agregar dependencias ni tocar `package.json` / `pnpm-lock.yaml`** (DESIGN.md).
- **Solo tokens de diseño, nunca hex crudo.** Tokens en `src/styles/global.css`: `bg-ink/ink-2/panel/panel-2`, `border-line/line-2`, `text-fg/fg-2/fg-3`, `brand/brand-bright`, `accent/accent-bright`, `font-sans/mono`. Utilidades: `text-gradient`, `glass`, `shadow-glow`, `ring-line`.
- **Secciones** `py-20 sm:py-28`. Patrón: eyebrow mono (`text-[13px] uppercase tracking-widest text-fg-3`) → heading (`text-3xl sm:text-4xl font-semibold tracking-tight`) → lede (`text-fg-2 max-w-xl`) → contenido.
- **Cards** `rounded-xl border border-line bg-panel p-6`, hover `border-line-2`. Bordes 1px hairline. Radii: `rounded-lg` botones, `rounded-xl` cards.
- **Máximo uno o dos `Glow` por página.** Gradiente solo en CTA o una palabra de un heading.
- **Voz:** comprador/operador. Sin signos de exclamación. Sin "supercharge/unleash/blazingly". Números concretos sobre adjetivos.
- **Idioma:** solo `es` (root). Nada de `/en/` en v1.
- **No tocar las páginas ni los enlaces de Plataforma.** Solo se agrega el dropdown Producto al nav.
- **Componentes existentes (formas):** `PageHeader {eyebrow,title,lede?}` · `FeatureGrid {items:[{title,body,mono?}]}` · `CapabilityPage {data}` (espera `{heroEyebrow,heroH1,heroLede,intro,features,showcase,crossLinks,cta}`) · `CrossLinks {links:[{label,href,blurb}],heading?}` · `CtaBand {heading,body,primary{label,href},secondary?{label,href}}` · `Container`, `Button {variant,size}`, `Glow {class}`, `WindowDots`.
- **`showcase.kind`** ∈ `'code' {label,lang,content}` | `'list' {rows:[{left,right}]}` | `'pills' {pills:[{label,meta}]}`.
- Páginas template siguen el patrón de `src/pages/aurora-runtime.astro`: wrapper de ~6 líneas (`BaseLayout` + `CapabilityPage data={obj}`).
- Astro emite `src/pages/foo.astro` → `dist/foo/index.html`.

---

### Task 1: Página Aura · IA + scaffold de `product.ts`

**Files:**
- Create: `src/data/product.ts`
- Create: `src/pages/aurora-ia.astro`

**Interfaces:**
- Produces: `export const aura` (objeto CapabilityPage) en `src/data/product.ts`. Tareas 2–4 agregan más exports al mismo archivo.

- [ ] **Step 1: Crear `src/data/product.ts` con el objeto `aura`**

```ts
// Contenido de la sección Producto de Aurora, escrito a mano.
// (Separado de pages.ts, que es auto-generado para la sección Plataforma.)

export const aura = {
  name: 'Aura · IA',
  route: '/aurora-ia',
  navLabel: 'Aura · IA',
  metaTitle: 'Aura · IA — Agentes que proponen, vos aprobás | Aurora',
  metaDescription:
    'Aura es la capa de IA de Aurora: agentes que proponen contabilizaciones, detectan anomalías y responden en lenguaje natural sobre el libro mayor vivo. Cada acción pasa por borrador y aprobación humana, con trazabilidad completa.',
  heroEyebrow: 'AURORA · IA',
  heroH1: 'Agentes que proponen. Vos aprobás.',
  heroLede:
    'Aura es la capa de IA que opera sobre el libro mayor vivo. No es un chatbot pegado al ERP: cada acción pasa por borrador y aprobación humana, con la misma trazabilidad que un asiento hecho a mano.',
  intro:
    'En finanzas, la IA no puede tener la última palabra. El libro mayor de Aurora es un registro inmutable de hechos, y toda mutación ocurre a través de acciones auditables. Los agentes nunca escriben directo en la base: proponen una contabilización, la explican y dejan un borrador. El humano aprueba. Cada decisión —de la máquina o de la persona— conserva su rastro completo.\n\nAura no es una capa nueva sobre datos crudos. Se monta sobre una arquitectura que ya existe: borradores antes de postear, trazabilidad de origen por módulo, determinación de cuentas y verificación de readiness por empresa. El foso no es la IA en sí; es la IA operando sobre ese sustrato contable, donde cada propuesta cae en un flujo que ya sabe validar, aprobar y revertir.',
  features: [
    {
      title: 'Sugeridor de cuenta',
      body: 'Para cada línea de una factura o un documento, Aura propone la cuenta contable aprendiendo del histórico de la propia empresa: qué cuenta usó antes para ese proveedor, ese concepto, ese patrón. Propone; no impone.',
      mono: 'propone',
    },
    {
      title: 'Anomalías antes del cierre',
      body: 'El mismo modelo del histórico, leído al revés: marca el asiento improbable —monto fuera de patrón, cuenta inusual, posible duplicado— mientras ocurre, no en la semana de cierre.',
      mono: 'vigila',
    },
    {
      title: 'Preguntas en lenguaje natural',
      body: 'Preguntás "¿cuánto gasté en marketing este trimestre?" y Aura responde desde los libros reales de la empresa, con la cifra trazable a su origen. Consulta de solo lectura, acotada a la empresa activa.',
      mono: 'responde',
    },
    {
      title: 'Devengos y narrativa de variación',
      body: 'Aura redacta el primer borrador del análisis de variación y sugiere los devengos a partir del histórico de gastos y períodos de servicio. El controller pule; no empieza de cero.',
      mono: 'redacta',
    },
  ],
  showcase: {
    kind: 'list',
    heading: 'El roadmap de Aura, en orden',
    lede: 'Construimos la capa de agentes por fases. Hoy la arquitectura de propose-and-approve es real; los agentes se encienden uno a uno sobre ella. Lo decimos con honestidad: esto es dirección, no humo.',
    rows: [
      { left: 'F1 · Sugeridor de cuenta', right: 'Propone la cuenta de cada línea aprendiendo del histórico de la empresa.' },
      { left: 'F2 · Confianza + feedback', right: 'Cada sugerencia lleva un nivel de confianza; aceptar o corregir reentrena el modelo.' },
      { left: 'F3 · Detección de anomalías', right: 'El mismo modelo, leído al revés: marca el asiento improbable antes del cierre.' },
      { left: 'F4 · Aprendizaje cross-empresa', right: 'Para despachos: patrones que se generalizan entre empresas, con aislamiento estricto.' },
      { left: 'F5 · Asesor de cierre continuo', right: 'Orquesta los proposers y el checklist de readiness hacia un cierre sin sorpresas.' },
    ],
  },
  crossLinks: [
    { label: 'Aurora ERP', href: '/aurora-erp', blurb: 'El sistema operativo financiero donde estos agentes operan, de la factura a la decisión.' },
    { label: 'Módulos', href: '/modulos', blurb: 'Las capacidades de negocio sobre las que los agentes proponen: registro, operación, decisión.' },
    { label: 'Aurora Architecture', href: '/aurora-architecture', blurb: 'Cómo el libro mayor como event log inmutable está verificado por fitness functions.' },
  ],
  cta: {
    heading: 'Agentes que se ganan tu confianza',
    body: 'Aura propone, explica y deja borradores; vos aprobás. Pedí una demo y vemos el flujo de propose-and-approve sobre libros reales.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver los módulos', href: '/modulos' },
  },
};
```

- [ ] **Step 2: Crear `src/pages/aurora-ia.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import CapabilityPage from '../components/CapabilityPage.astro';
import { aura } from '../data/product';
---

<BaseLayout title={aura.metaTitle} description={aura.metaDescription}>
  <CapabilityPage data={aura} />
</BaseLayout>
```

- [ ] **Step 3: Build y verificar la ruta**

Run: `pnpm build && test -f dist/aurora-ia/index.html && grep -q "Agentes que proponen" dist/aurora-ia/index.html && echo VERIFY_OK`
Expected: el build termina sin warnings de archivos nuevos e imprime `VERIFY_OK`.

- [ ] **Step 4: Commit**

```bash
git add src/data/product.ts src/pages/aurora-ia.astro
git commit -m "feat(producto): página Aura · IA + scaffold de product.ts"
```

---

### Task 2: Página Módulos

**Files:**
- Modify: `src/data/product.ts` (agregar `export const modulos`)
- Create: `src/pages/modulos.astro`

**Interfaces:**
- Consumes: nada de tareas previas (solo agrega un export hermano de `aura`).
- Produces: `export const modulos` en `src/data/product.ts`.

- [ ] **Step 1: Agregar el objeto `modulos` al final de `src/data/product.ts`**

```ts
export const modulos = {
  name: 'Módulos',
  route: '/modulos',
  navLabel: 'Módulos',
  metaTitle: 'Módulos — Del registro a la decisión financiera | Aurora',
  metaDescription:
    'Los módulos de Aurora cubren el ciclo financiero completo: contabilidad, ventas, inventario, cuentas por cobrar y pagar, tesorería y fiscal. Cada módulo postea al mismo libro mayor, sin silos ni reconciliación entre sistemas.',
  heroEyebrow: 'AURORA · MÓDULOS',
  heroH1: 'Desde el registro hasta la decisión financiera.',
  heroLede:
    'De la factura al cierre y de la cobranza a la decisión: cada módulo postea al mismo libro mayor, así la empresa siempre sabe dónde está.',
  intro:
    'Todo módulo de Aurora orbita el mismo libro mayor y postea por las mismas costuras. No hay silos, ni exportaciones, ni reconciliación entre sistemas: la venta que se factura, el inventario que se mueve y el pago que entra caen en el mismo registro contable, en el momento en que ocurren.\n\nLa cobertura sigue una escalera de capacidades: el registro (Contabilidad), la operación (Ventas, Inventario, Cuentas por cobrar y pagar, Tesorería), lo fiscal (FEL/SAT, ISR/IVA, Libros) y, encima, la decisión (reportes hoy; agentes financieros en camino). Cada escalón se enciende sobre el anterior.',
  features: [
    {
      title: 'Contabilidad',
      body: 'El núcleo: libro mayor de partida doble, plantillas de cuentas por giro, reportes (Diario, Mayor, Balance, Estado de Resultados), cierres de período y de año. La fuente de verdad sobre la que postea todo lo demás.',
      mono: 'Quorum',
    },
    {
      title: 'Ventas e Inventario',
      body: 'Front office que postea solo: comprobantes fiscales que generan el asiento, CxC y Libro de Ventas que se encienden con la venta, e inventario con valuación perpetua y costo promedio que lleva el COGS al GL.',
      mono: 'front office',
    },
    {
      title: 'CxC · CxP · Tesorería',
      body: 'La operación financiera: cuentas por cobrar y pagar con antigüedad de saldos, bancos y conciliación de extractos con auto-match. El dinero que entra y sale, partida abierta por partida abierta.',
      mono: 'financiero',
    },
    {
      title: 'Fiscal',
      body: 'Importación FEL/SAT, ISR en sus tres frecuencias, IVA y Libros fiscales. La capa que convierte la obligación tributaria en datos estructurados que alimentan al resto del sistema.',
      mono: 'fiscal',
    },
  ],
  showcase: {
    kind: 'pills',
    heading: 'La escalera, hoy y en camino',
    lede: 'Lo que ya está en producción y lo que viene, sin maquillaje.',
    pills: [
      { label: 'Contabilidad', meta: 'en producción' },
      { label: 'Ventas', meta: 'en producción' },
      { label: 'Inventario', meta: 'en producción' },
      { label: 'CxC / CxP', meta: 'en producción' },
      { label: 'Tesorería / Bancos', meta: 'en producción' },
      { label: 'Fiscal FEL/SAT', meta: 'en producción' },
      { label: 'Cash Management', meta: 'en camino' },
      { label: 'Planeación financiera', meta: 'en camino' },
      { label: 'Agentes financieros', meta: 'en camino' },
    ],
  },
  crossLinks: [
    { label: 'Aurora ERP', href: '/aurora-erp', blurb: 'La tesis completa: por qué estos módulos son un sistema operativo financiero, no un ERP más.' },
    { label: 'Aura · IA', href: '/aurora-ia', blurb: 'Los agentes que proponen contabilizaciones y detectan anomalías sobre estos módulos.' },
    { label: 'Datos Financieros', href: '/fiscal-latam', blurb: 'La ingesta: cómo la factura electrónica alimenta de datos a cada módulo.' },
  ],
  cta: {
    heading: 'Un solo sistema, todo el ciclo',
    body: 'Del registro a la decisión, sin silos ni reconciliación entre herramientas. Pedí una demo y recorremos los módulos sobre una empresa real.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver la tesis completa', href: '/aurora-erp' },
  },
};
```

- [ ] **Step 2: Crear `src/pages/modulos.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import CapabilityPage from '../components/CapabilityPage.astro';
import { modulos } from '../data/product';
---

<BaseLayout title={modulos.metaTitle} description={modulos.metaDescription}>
  <CapabilityPage data={modulos} />
</BaseLayout>
```

- [ ] **Step 3: Build y verificar la ruta**

Run: `pnpm build && test -f dist/modulos/index.html && grep -q "Desde el registro hasta la decisión" dist/modulos/index.html && echo VERIFY_OK`
Expected: build limpio + `VERIFY_OK`.

- [ ] **Step 4: Commit**

```bash
git add src/data/product.ts src/pages/modulos.astro
git commit -m "feat(producto): página Módulos"
```

---

### Task 3: Página Datos Financieros (`/fiscal-latam`)

**Files:**
- Modify: `src/data/product.ts` (agregar `export const datos`)
- Create: `src/pages/fiscal-latam.astro`

**Interfaces:**
- Produces: `export const datos` en `src/data/product.ts`.

- [ ] **Step 1: Agregar el objeto `datos` al final de `src/data/product.ts`**

```ts
export const datos = {
  name: 'Datos Financieros',
  route: '/fiscal-latam',
  navLabel: 'Datos Financieros',
  metaTitle: 'Datos Financieros — La factura electrónica es la materia prima | Aurora',
  metaDescription:
    'La infraestructura fiscal digital de Latinoamérica —factura electrónica obligatoria, libros digitales— es el dato estructurado que vuelve posible automatizar la contabilidad. Aurora lo cosecha: FEL/SAT, ISR/IVA, multi-país, conciliación de extractos.',
  heroEyebrow: 'AURORA · DATOS FINANCIEROS',
  heroH1: 'La factura electrónica es la materia prima.',
  heroLede:
    'La infraestructura fiscal digital de la región —factura electrónica obligatoria, libros digitales— es el dato estructurado que vuelve posible automatizar la contabilidad. Aurora la cosecha.',
  intro:
    'El gobierno ya hizo el trabajo más difícil: digitalizar la evidencia financiera. En Estados Unidos, ese dato estructurado no existe a esta escala —la contabilidad arranca de PDFs sucios y extractos dispares—. En Latinoamérica, cada DTE es un hecho económico ya estructurado, listo para convertirse en asiento.\n\nAurora convierte esa infraestructura pública en automatización privada. Y lo hace extensible por país: las reglas fiscales de un solo país nunca se queman en el código, sino que viven en estrategias por país, así la misma máquina sirve a Guatemala, a Centroamérica y a quien siga.',
  features: [
    {
      title: 'FEL / SAT',
      body: 'Importación de documentos tributarios electrónicos: del DTE al asiento propuesto, con el tercero, la fecha y la referencia ya resueltos. La ingesta estructurada que el resto del sistema consume.',
      mono: 'ingesta',
    },
    {
      title: 'ISR / IVA',
      body: 'Cálculo de ISR en sus tres frecuencias (mensual, trimestral, anual) e IVA con sus Libros. La obligación tributaria, derivada de los mismos libros que ya llevás.',
      mono: 'tributos',
    },
    {
      title: 'Multi-país',
      body: 'Estrategia por país para validación de identificadores, formatos y reglas. Sin reglas quemadas: el país es un parámetro, no una reescritura.',
      mono: 'LATAM',
    },
    {
      title: 'Conciliación de extractos',
      body: 'Importación de extractos bancarios con auto-match contra los libros. El otro canal de ingesta estructurada: el banco, conciliado de forma continua, no en la semana de cierre.',
      mono: 'auto-match',
    },
  ],
  showcase: {
    kind: 'list',
    heading: 'De la factura al libro mayor',
    lede: 'El camino que recorre un dato fiscal hasta convertirse en contabilidad, sin captura manual.',
    rows: [
      { left: 'Factura electrónica', right: 'El DTE llega ya estructurado desde la autoridad fiscal.' },
      { left: 'Dato estructurado', right: 'Aurora normaliza tercero, fecha, montos e impuestos.' },
      { left: 'Asiento propuesto', right: 'Se genera un borrador con la cuenta sugerida por el histórico.' },
      { left: 'Aprobación', right: 'El humano revisa y aprueba; nada se postea solo.' },
      { left: 'Libro mayor', right: 'El asiento entra al registro inmutable, con trazabilidad a su origen.' },
    ],
  },
  crossLinks: [
    { label: 'Aurora ERP', href: '/aurora-erp', blurb: 'Por qué esta ingesta fiscal es el punto de entrada de un sistema operativo financiero.' },
    { label: 'Módulos', href: '/modulos', blurb: 'Los módulos que consumen estos datos: contabilidad, ventas, fiscal y más.' },
    { label: 'Aura · IA', href: '/aurora-ia', blurb: 'Los agentes que proponen la contabilización a partir de cada documento.' },
  ],
  cta: {
    heading: 'El dato ya existe. Aurora lo pone a trabajar.',
    body: 'La factura electrónica obligatoria es tu ventaja. Pedí una demo y vemos cómo un DTE se vuelve contabilidad sin captura manual.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver los módulos', href: '/modulos' },
  },
};
```

- [ ] **Step 2: Crear `src/pages/fiscal-latam.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import CapabilityPage from '../components/CapabilityPage.astro';
import { datos } from '../data/product';
---

<BaseLayout title={datos.metaTitle} description={datos.metaDescription}>
  <CapabilityPage data={datos} />
</BaseLayout>
```

- [ ] **Step 3: Build y verificar la ruta**

Run: `pnpm build && test -f dist/fiscal-latam/index.html && grep -q "La factura electrónica es la materia prima" dist/fiscal-latam/index.html && echo VERIFY_OK`
Expected: build limpio + `VERIFY_OK`.

- [ ] **Step 4: Commit**

```bash
git add src/data/product.ts src/pages/fiscal-latam.astro
git commit -m "feat(producto): página Datos Financieros (/fiscal-latam)"
```

---

### Task 4: Página overview Aurora ERP (bespoke)

**Files:**
- Modify: `src/data/product.ts` (agregar `export const erp`)
- Create: `src/pages/aurora-erp.astro`

**Interfaces:**
- Consumes: `Container`, `Button`, `Glow`, `CrossLinks`, `CtaBand` (componentes existentes).
- Produces: `export const erp` (objeto con `meta`, `hero`, `ladder`, `sections`, `cta`, `crossLinks`) en `src/data/product.ts`; el archivo `src/pages/aurora-erp.astro` lo maqueta a mano.

- [ ] **Step 1: Agregar el objeto `erp` al final de `src/data/product.ts`**

```ts
export const erp = {
  metaTitle: 'Aurora — El sistema operativo financiero AI-native para Latinoamérica',
  metaDescription:
    'Aurora convierte facturas, movimientos bancarios y documentos financieros en acciones propuestas, libros siempre al día y decisiones con datos reales. El sistema operativo financiero AI-native para las empresas de Latinoamérica y los contadores que las operan.',
  hero: {
    eyebrow: 'AURORA · PARA EMPRESAS Y CONTADORES',
    h1: 'El sistema operativo financiero AI-native para las empresas de Latinoamérica.',
    sub: 'Tus libros se llevan solos. Vos solo aprobás.',
    lede: 'Aurora convierte facturas, movimientos bancarios y documentos financieros en acciones propuestas, libros siempre al día y decisiones tomadas con datos reales.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver los módulos', href: '/modulos' },
  },
  sections: [
    {
      eyebrow: 'LA TESIS',
      heading: 'La factura electrónica volvió la contabilidad un problema de datos.',
      body: 'La IA convirtió esos datos en acciones. Aurora une ambas cosas. Lo fiscal es el dato que hace posible automatizar toda la operación financiera —no el techo del producto, sino su punto de partida.',
    },
    {
      eyebrow: '¿POR QUÉ AHORA?',
      heading: 'Por primera vez, la materia prima existe.',
      body: 'Durante años faltó lo fundamental: datos estructurados. La factura electrónica, los libros fiscales digitales y la bancarización generan hoy información financiera estructurada a una escala inédita. Por primera vez, un sistema puede entender automáticamente los hechos económicos de una empresa. La infraestructura fiscal digital de Latinoamérica hizo posible un ERP AI-native.',
    },
    {
      eyebrow: 'EL PROBLEMA',
      heading: 'Nadie se despierta preguntando si importó sus facturas.',
      quote: ['¿Cuánto dinero tengo?', '¿Quién me debe?', '¿Voy a llegar a fin de mes?', '¿Por qué cayó mi margen?'],
      body: 'Las empresas viven entre dos extremos: Excel y procesos manuales, o ERPs tradicionales que exigen meses de implementación, consultores y parametrización. El cierre llega tarde, las decisiones se toman con información vieja y la contabilidad se vuelve un ejercicio de reconstrucción del pasado. Eso ya es operación financiera, no solo fiscalidad.',
    },
    {
      kind: 'ladder',
      eyebrow: 'LA ESCALERA',
      heading: 'Un punto de entrada angosto que se vuelve sistema operativo.',
      rungs: [
        { capability: 'Datos financieros', detail: 'FEL · Bancos · Documentos' },
        { capability: 'Sistema de registro', detail: 'Contabilidad' },
        { capability: 'Sistema de operación', detail: 'Tesorería · CxC · CxP' },
        { capability: 'Sistema de decisión', detail: 'Cash · Planeación' },
        { capability: 'Sistema de acción', detail: 'Agentes' },
        { capability: 'Financial Operating System', detail: 'La visión' },
      ],
    },
    {
      eyebrow: 'LA SOLUCIÓN',
      heading: 'Vos ya no construís la contabilidad. La supervisás.',
      body: 'Cada factura, cada venta, cada movimiento bancario, cada documento fiscal: Aurora propone la contabilización automáticamente. El usuario aprueba. Tus libros se llevan solos; vos solo aprobás.',
    },
    {
      eyebrow: 'QUÉ LO HACE DIFERENTE',
      heading: 'No es un chatbot conectado a un ERP.',
      body: 'El libro mayor es un event log inmutable. Toda acción financiera se ejecuta mediante acciones auditables. Los agentes de IA nunca escriben directo en la base de datos: proponen, explican, generan borradores. El humano aprueba. Cada decisión conserva trazabilidad completa. Es real hoy en la arquitectura, no una promesa.',
    },
    {
      eyebrow: '¿POR QUÉ LATINOAMÉRICA?',
      heading: 'El gobierno ya hizo el trabajo más difícil.',
      body: 'La región tiene algo que otros mercados no: factura electrónica obligatoria. La evidencia financiera ya está digitalizada. Aurora convierte esa infraestructura pública en automatización privada.',
    },
    {
      eyebrow: 'EL FOSO',
      heading: 'IA + Fiscal LATAM + multiempresa nativo.',
      body: 'Los ERPs tradicionales no se vuelven AI-native sin reescribir su núcleo. Los productos de Estados Unidos no entienden el ecosistema fiscal de la región. Los procesos manuales no escalan. Reconstruir ese contexto toma años.',
    },
    {
      eyebrow: 'LA VISIÓN',
      heading: 'Donde la contabilidad se hace sola.',
      body: 'Que el cierre mensual deje de ser un evento de pánico. Que los libros estén siempre al día. Que el contador deje de capturar datos y se convierta en un operador financiero asistido por IA. Aurora no está construyendo otro ERP para Latinoamérica: está construyendo la capa de automatización financiera que la infraestructura fiscal digital de la región hizo posible por primera vez.',
    },
  ],
  cta: {
    heading: 'De los datos financieros a la decisión.',
    body: 'Empezamos por la contabilidad y la fiscalidad porque ahí nacen los datos; terminamos automatizando toda la operación financiera. Pedí una demo.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver cómo funciona', href: '/como-funciona' },
  },
  crossLinks: [
    { label: 'Aura · IA', href: '/aurora-ia', blurb: 'Los agentes que proponen, explican y dejan borradores; vos aprobás.' },
    { label: 'Módulos', href: '/modulos', blurb: 'El ciclo financiero completo, del registro a la decisión, en un solo sistema.' },
    { label: 'Datos Financieros', href: '/fiscal-latam', blurb: 'La ingesta: la factura electrónica como materia prima de la automatización.' },
  ],
};
```

- [ ] **Step 2: Crear `src/pages/aurora-erp.astro` (bespoke long-form)**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Container from '../components/Container.astro';
import Button from '../components/Button.astro';
import Glow from '../components/Glow.astro';
import CrossLinks from '../components/CrossLinks.astro';
import CtaBand from '../components/CtaBand.astro';
import { erp } from '../data/product';

const { hero, sections, cta, crossLinks } = erp;
---

<BaseLayout title={erp.metaTitle} description={erp.metaDescription}>
  <!-- Hero -->
  <section class="relative overflow-hidden">
    <Glow class="left-1/2 top-[-6rem] h-[28rem] w-[44rem] -translate-x-1/2" />
    <Container class="relative py-24 sm:py-32">
      <p class="font-mono text-[13px] uppercase tracking-widest text-fg-3">{hero.eyebrow}</p>
      <h1 class="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        {hero.h1}
      </h1>
      <p class="mt-6 text-xl font-medium text-gradient sm:text-2xl">{hero.sub}</p>
      <p class="mt-4 max-w-xl text-pretty leading-relaxed text-fg-2">{hero.lede}</p>
      <div class="mt-9 flex flex-wrap gap-3">
        <Button href={hero.primary.href} variant="primary" size="lg">{hero.primary.label}</Button>
        <Button href={hero.secondary.href} variant="secondary" size="lg">{hero.secondary.label}</Button>
      </div>
    </Container>
  </section>

  <!-- Movimientos narrativos (la escalera vive en su posición dentro de sections) -->
  {
    sections.map((s) => (
      <section class="border-t border-line py-20 sm:py-28">
        <Container>
          <p class="font-mono text-[13px] uppercase tracking-widest text-fg-3">{s.eyebrow}</p>
          <h2 class="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{s.heading}</h2>
          {s.quote && (
            <ul class="mt-8 max-w-md space-y-2">
              {s.quote.map((q) => (
                <li class="rounded-lg border border-line bg-panel px-4 py-3 text-fg-2">{q}</li>
              ))}
            </ul>
          )}
          {s.kind === 'ladder' && s.rungs && (
            <div class="mt-8 max-w-2xl divide-y divide-line rounded-xl border border-line">
              {s.rungs.map((rung, i) => (
                <div class="flex items-baseline gap-4 px-5 py-4">
                  <span class="font-mono text-xs text-fg-3">{String(i + 1).padStart(2, '0')}</span>
                  <span class="font-medium text-fg">{rung.capability}</span>
                  <span class="ml-auto text-right font-mono text-[13px] text-fg-3">{rung.detail}</span>
                </div>
              ))}
            </div>
          )}
          {s.body && <p class="mt-6 max-w-2xl text-pretty leading-relaxed text-fg-2">{s.body}</p>}
        </Container>
      </section>
    ))
  }

  <CrossLinks links={crossLinks} />
  <CtaBand heading={cta.heading} body={cta.body} primary={cta.primary} secondary={cta.secondary} />
</BaseLayout>
```

- [ ] **Step 3: Build y verificar la ruta**

Run: `pnpm build && test -f dist/aurora-erp/index.html && grep -q "El sistema operativo financiero AI-native" dist/aurora-erp/index.html && grep -q "Financial Operating System" dist/aurora-erp/index.html && echo VERIFY_OK`
Expected: build limpio + `VERIFY_OK`.

- [ ] **Step 4: Commit**

```bash
git add src/data/product.ts src/pages/aurora-erp.astro
git commit -m "feat(producto): página overview Aurora ERP (bespoke)"
```

---

### Task 5: Dropdown "Producto" en el nav

**Files:**
- Modify: `src/components/Nav.astro`

**Interfaces:**
- Consumes: las 4 rutas creadas en las tareas 1–4 (`/aurora-erp`, `/aurora-ia`, `/modulos`, `/fiscal-latam`).

**Nota crítica:** el `<script>` actual cablea el dropdown con `nav.querySelector('[data-dropdown]')` (un solo elemento). Con dos dropdowns, el segundo no abriría. Este task cambia esa parte a un loop sobre `querySelectorAll`.

- [ ] **Step 1: Agregar `productLinks` y `onProduct` al frontmatter de `Nav.astro`**

En el bloque `---` de `src/components/Nav.astro`, justo ANTES de `const platformLinks = [`, insertar:

```ts
const productLinks = [
  { label: 'Aurora ERP', href: '/aurora-erp', desc: 'El sistema operativo financiero' },
  { label: 'Aura · IA', href: '/aurora-ia', desc: 'Agentes que proponen, vos aprobás' },
  { label: 'Módulos', href: '/modulos', desc: 'Del registro a la decisión' },
  { label: 'Datos Financieros', href: '/fiscal-latam', desc: 'La factura electrónica como ingesta' },
];
```

Y justo DESPUÉS de la línea `const onPlatform = platformLinks.some(({ href }) => current.startsWith(href));`, insertar:

```ts
const onProduct = productLinks.some(({ href }) => current.startsWith(href));
```

- [ ] **Step 2: Agregar el `<li>` dropdown de Producto en el nav desktop**

En la `<ul class="hidden items-center gap-7 md:flex">`, ANTES del `<!-- Plataforma dropdown -->` (Producto va primero — es la audiencia comprador), insertar este bloque. Es el mismo markup del dropdown de Plataforma, con `productLinks` y `onProduct`:

```astro
          <!-- Producto dropdown -->
          <li class="relative" data-dropdown>
            <button
              type="button"
              data-dropdown-button
              aria-expanded="false"
              aria-haspopup="true"
              class:list={[
                'flex items-center gap-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
                onProduct ? 'text-fg' : 'text-fg-2 hover:text-fg',
              ]}
            >
              Producto
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="mt-px transition-transform group-aria-expanded:rotate-180 data-[open]:rotate-180">
                <path d="m3.5 5.25 3.5 3.5 3.5-3.5"></path>
              </svg>
            </button>
            <div
              data-dropdown-panel
              class="invisible absolute left-0 top-full z-50 mt-3 w-72 -translate-y-1 rounded-xl border border-line bg-ink/95 p-2 opacity-0 shadow-2xl shadow-black/50 backdrop-blur-xl transition-[opacity,transform,visibility] duration-150 ease-out data-open:visible data-open:translate-y-0 data-open:opacity-100 motion-reduce:transition-none"
            >
              <ul>
                {
                  productLinks.map(({ label, href, desc }) => (
                    <li>
                      <a
                        href={href}
                        aria-current={isActive(href) ? 'page' : undefined}
                        class="block rounded-lg px-3 py-2.5 transition-colors hover:bg-panel focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                      >
                        <span class="block text-sm font-medium text-fg">{label}</span>
                        <span class="mt-0.5 block text-[13px] leading-snug text-fg-3">{desc}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>

```

- [ ] **Step 3: Agregar la sección Producto al menú móvil**

En el `<div id="mobile-menu" ...>`, dentro del `<Container class="py-3">`, ANTES del `<p ...>Plataforma</p>` existente, insertar:

```astro
      <p class="px-2 pb-1 pt-2 font-mono text-[11px] uppercase tracking-widest text-fg-3">Producto</p>
      <ul>
        {
          productLinks.map(({ label, href }) => (
            <li>
              <a
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                class:list={[
                  'flex min-h-11 items-center rounded-lg px-2 text-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand',
                  isActive(href) ? 'text-fg' : 'text-fg-2 hover:text-fg',
                ]}
              >
                {label}
              </a>
            </li>
          ))
        }
      </ul>
```

- [ ] **Step 4: Arreglar el `<script>` para soportar múltiples dropdowns**

En el `<script>` al final de `Nav.astro`, localizar el bloque que empieza con el comentario `// Platform dropdown (desktop)` y termina antes del cierre del `for (const nav ...)`. Reemplazar TODO ese bloque (desde `// Platform dropdown (desktop)` hasta el `}` que cierra el `if (dd && ddButton && ddPanel)`) por este, que itera sobre todos los `[data-dropdown]`:

```ts
    // Dropdowns (desktop) — soporta múltiples (Producto + Plataforma)
    for (const dd of nav.querySelectorAll<HTMLElement>('[data-dropdown]')) {
      const ddButton = dd.querySelector<HTMLButtonElement>('[data-dropdown-button]');
      const ddPanel = dd.querySelector<HTMLElement>('[data-dropdown-panel]');
      if (!ddButton || !ddPanel) continue;
      const isOpen = () => ddButton.getAttribute('aria-expanded') === 'true';
      const setOpen = (open: boolean) => {
        ddButton.setAttribute('aria-expanded', String(open));
        ddPanel.toggleAttribute('data-open', open);
      };
      ddButton.addEventListener('click', (event) => {
        event.stopPropagation();
        setOpen(!isOpen());
      });
      document.addEventListener('click', (event) => {
        if (!isOpen()) return;
        if (event.target instanceof Node && !dd.contains(event.target)) setOpen(false);
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isOpen()) {
          setOpen(false);
          ddButton.focus();
        }
      });
      ddPanel.addEventListener('click', (event) => {
        if (event.target instanceof Element && event.target.closest('a')) setOpen(false);
      });
    }
```

- [ ] **Step 5: Build y verificar que ambos dropdowns y los enlaces están presentes**

Run: `pnpm build && grep -q ">Producto<" dist/index.html && grep -q "/aurora-erp" dist/index.html && grep -q "Datos Financieros" dist/index.html && grep -q "querySelectorAll" dist/_astro/*.js 2>/dev/null; echo "build done"`
Expected: build limpio; `>Producto<`, `/aurora-erp` y `Datos Financieros` presentes en el HTML. (El `grep` de `querySelectorAll` es informativo — Astro puede inline-ar o hashear el script; lo importante es la verificación manual del Step 6.)

- [ ] **Step 6: Verificación manual del nav (dev server)**

Run: `pnpm dev` y abrir `http://localhost:4321/`.
Verificar a mano:
- El nav muestra "Producto" y "Plataforma" como dos dropdowns.
- Click en "Producto" abre el panel con los 4 enlaces; click en "Plataforma" abre el suyo. **Ambos abren** (esta es la regresión que arregla el Step 4).
- En cada página nueva, su enlace queda con `aria-current="page"` y el botón "Producto" en color `text-fg`.
- En móvil (≤768px, p. ej. 360px): el menú hamburguesa muestra la sección "Producto" con sus 4 enlaces, sin scroll horizontal.

- [ ] **Step 7: Commit**

```bash
git add src/components/Nav.astro
git commit -m "feat(producto): dropdown Producto en el nav (desktop + móvil) + fix multi-dropdown"
```

---

### Task 6: Verificación final de la sección

**Files:** (ninguno nuevo — verificación + checklist)

- [ ] **Step 1: Build limpio completo**

Run: `pnpm build`
Expected: termina sin warnings atribuibles a los archivos nuevos. Las 4 rutas existen:
`test -f dist/aurora-erp/index.html && test -f dist/aurora-ia/index.html && test -f dist/modulos/index.html && test -f dist/fiscal-latam/index.html && echo ALL_ROUTES_OK`

- [ ] **Step 2: Checklist visual manual (dev server, `pnpm dev`)**

Recorrer las 4 páginas a 360 / 768 / 1280 px y confirmar:
- Sin scroll horizontal en ningún ancho.
- Patrón eyebrow → heading → lede consistente; cards con hairline 1px; a lo sumo 1–2 `Glow` por página.
- Contraste de texto legible (`text-fg-3` solo en meta: eyebrows, detalles de la escalera, `meta` de pills).
- El overview lee como una sola pieza de diseño, a la altura del resto del sitio (barra DESIGN.md "Protocol").
- Los cross-links navegan correctamente entre páginas de Producto y al puente de Plataforma (`/aurora-architecture` desde Aura).

- [ ] **Step 3: Commit de cierre (si hubo ajustes visuales)**

```bash
git add -A
git commit -m "chore(producto): ajustes de la verificación visual final"
```

(Si el Step 2 no requirió cambios, omitir este commit.)

---

## Notas de ejecución

- **Repo:** `aurora-labs`. Branch de trabajo: `feat/producto-aurora-erp` (ya creado; el spec está commiteado ahí).
- **Comando de build:** `pnpm build` (no hay test runner; la verificación es build + aserción sobre `dist/`).
- **No tocar** `package.json`, `pnpm-lock.yaml`, ni las páginas/enlaces de Plataforma.
- Cada task termina con build verde + commit. El único task con verificación inevitablemente manual es el del nav (interacción de dropdown) y el checklist visual final.
