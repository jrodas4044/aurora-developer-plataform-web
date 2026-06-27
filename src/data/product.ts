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
      { left: 'F4 · Aprendizaje entre empresas del grupo', right: 'Para holdings: patrones que se generalizan entre las empresas del grupo, con aislamiento estricto.' },
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

export const erp = {
  metaTitle: 'Aurora — El sistema operativo financiero AI-native para Latinoamérica',
  metaDescription:
    'Aurora convierte facturas, movimientos bancarios y documentos financieros en acciones propuestas, libros siempre al día y decisiones con datos reales. El sistema operativo financiero AI-native para las empresas de Latinoamérica y los grupos que las controlan: multiempresa nativo, con consolidación y vista por empresa.',
  hero: {
    eyebrow: 'AURORA · PARA EMPRESAS Y GRUPOS',
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
      heading: 'IA + Fiscal LATAM + grupo multiempresa nativo.',
      body: 'Los ERPs tradicionales no se vuelven AI-native sin reescribir su núcleo. Los productos de Estados Unidos no entienden el ecosistema fiscal de la región, ni la realidad de un grupo con varias empresas. Aurora es multiempresa nativo: cada empresa con sus libros aislados bajo un mismo techo, con vista por empresa, y la consolidación de grupo como capacidad de primera clase —el mismo modelo sirve al despacho que administra varias empresas. Reconstruir ese contexto toma años.',
    },
    {
      kind: 'comparison',
      eyebrow: 'COMPARATIVA',
      heading: 'Por qué no es otro ERP de la lista.',
      competitors: ['NetSuite', 'Odoo', 'SAP Business One', 'QuickBooks'],
      rows: [
        {
          dim: 'Implementación',
          cells: ['Meses, con consultores', 'Semanas, con partner', 'Meses, con consultor', 'Rápida, contabilidad básica'],
          aurora: 'Días, sin consultor',
        },
        {
          dim: 'IA',
          cells: ['Add-on sobre un core batch', 'Mínima', 'Add-on sobre un core batch', 'Asistentes básicos'],
          aurora: 'Nativa: propone, vos aprobás',
        },
        {
          dim: 'Fiscal LATAM (FEL/SAT)',
          cells: ['Vía partner, costoso', 'Localización de comunidad, variable', 'Vía partner', 'No nativo'],
          aurora: 'Nativo: del DTE al asiento',
        },
        {
          dim: 'Grupo / multiempresa',
          cells: ['Potente, pero caro', 'Sí, consolidación básica', 'Limitado', 'No'],
          aurora: 'Multiempresa nativo y accesible',
        },
        {
          dim: 'Costo para la PyME',
          cells: ['Alto', 'Medio', 'Alto', 'Bajo'],
          aurora: 'Accesible',
        },
      ],
      note: 'Comparativa simplificada para orientar. Cada producto tiene matices por versión, país y partner; la usamos para situar a Aurora, no para descalificar.',
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
