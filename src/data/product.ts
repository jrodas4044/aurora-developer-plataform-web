// Contenido de la sección Producto de Aurora, escrito a mano.
// (Separado de pages.ts, que es auto-generado para la sección Plataforma.)

export const aura = {
  name: 'Aura · IA',
  route: '/aurora-ia',
  navLabel: 'Aura · IA',
  metaTitle: 'Aura · IA — Agentes que proponen, tú apruebas | Aurora',
  metaDescription:
    'Aura es la capa de IA de Aurora: agentes que proponen asientos, detectan anomalías y responden en lenguaje natural sobre el libro mayor vivo. Cada acción pasa por borrador y aprobación humana, con trazabilidad completa.',
  heroEyebrow: 'AURORA · IA',
  heroH1: 'Agentes que proponen. Tú apruebas.',
  heroLede:
    'Aura es la capa de IA que opera sobre el libro mayor vivo. No es un chatbot pegado al ERP: cada acción pasa por borrador y aprobación humana, con la misma trazabilidad que un asiento hecho a mano.',
  intro:
    'En finanzas, la IA no puede tener la última palabra. El libro mayor de Aurora es un registro inmutable de hechos, y toda mutación ocurre a través de acciones auditables. Los agentes nunca escriben directo en la base: proponen un asiento, lo explican y dejan un borrador. El humano aprueba. Cada decisión —de la máquina o de la persona— conserva su rastro completo.\n\nAura no es una capa nueva sobre datos crudos. Se monta sobre una arquitectura que ya existe: borradores antes de postear, trazabilidad de origen por módulo, determinación de cuentas y verificación de readiness por empresa. El foso no es la IA en sí; es la IA operando sobre ese sustrato financiero, donde cada propuesta cae en un flujo que ya sabe validar, aprobar y revertir.',
  features: [
    {
      title: 'Sugeridor de cuenta',
      body: 'Para cada línea de una factura o un documento, Aura propone la cuenta de mayor aprendiendo del histórico de la propia empresa: qué cuenta usó antes para ese proveedor, ese concepto, ese patrón. Propone; no impone.',
      mono: 'propone',
    },
    {
      title: 'Anomalías antes del cierre',
      body: 'El mismo modelo del histórico, leído al revés: marca el asiento improbable —monto fuera de patrón, cuenta inusual, posible duplicado— mientras ocurre, no en la semana de cierre.',
      mono: 'vigila',
    },
    {
      title: 'Preguntas en lenguaje natural',
      body: 'Preguntas "¿cuánto gasté en marketing este trimestre?" y Aura responde desde los libros reales de la empresa, con la cifra trazable a su origen. Consulta de solo lectura, acotada a la empresa activa.',
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
    body: 'Aura propone, explica y deja borradores; tú apruebas. Pide una demo y vemos el flujo de propose-and-approve sobre libros reales.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver los módulos', href: '/modulos' },
  },
};

export const modulos = {
  name: 'Módulos',
  route: '/modulos',
  navLabel: 'Módulos',
  metaTitle: 'Módulos de gestión financiera y ERP | Aurora Labs',
  metaDescription:
    'Los módulos de Aurora cubren el ciclo financiero completo: control de finanzas, ventas, inventario, cuentas por cobrar y pagar, tesorería y fiscal. Cada módulo postea al mismo libro mayor, sin silos ni reconciliación entre sistemas.',
  heroEyebrow: 'AURORA · MÓDULOS',
  heroH1: 'Desde el registro hasta la decisión financiera.',
  heroLede:
    'De la factura al cierre y de la cobranza a la decisión: cada módulo postea al mismo libro mayor, así la empresa siempre sabe dónde está.',
  intro:
    'Todo módulo de Aurora orbita el mismo libro mayor y postea por las mismas costuras. No hay silos, ni exportaciones, ni reconciliación entre sistemas: la venta que se factura, el inventario que se mueve y el pago que entra caen en el mismo registro financiero, en el momento en que ocurren.\n\nLa cobertura sigue una escalera de capacidades: el registro (Control de finanzas), la operación (Ventas, Inventario, Cuentas por cobrar y pagar, Tesorería), lo fiscal (FEL/SAT, ISR/IVA, Libros) y, encima, la decisión (reportes hoy; agentes financieros en camino). Cada escalón se enciende sobre el anterior.',
  features: [
    {
      title: 'Control de finanzas',
      body: 'El núcleo de gestión financiera: libro mayor de partida doble validado en BCMath, plantillas de cuentas por giro, reportes (Diario, Mayor, Balance de Comprobación, Balance General, Estado de Resultados), cierres de período y de año, y multimoneda. Las cuentas se resuelven por nombre canónico, así el mismo concepto sirve a empresas con planes de cuentas distintos. Es la fuente de verdad sobre la que postea todo lo demás: ninguna venta, pago o ajuste vive fuera de este registro.',
      mono: 'Quorum',
    },
    {
      title: 'Ventas e Inventario',
      body: 'Front office que postea solo: facturación electrónica y comprobantes fiscales que generan el asiento al emitirse, cuentas por cobrar y Libro de Ventas que se encienden con cada venta, e inventario con valuación perpetua y costo promedio ponderado que lleva el COGS al libro mayor. El operador de la empresa trabaja en su flujo —facturar, despachar, cobrar— y las consecuencias financieras ocurren solas, sin captura doble ni reconciliación entre sistemas.',
      mono: 'front office',
    },
    {
      title: 'CxC · CxP · Tesorería',
      body: 'La operación financiera del día a día: cuentas por cobrar y por pagar con antigüedad de saldos (aging) y manejo de partidas abiertas, bancos y tesorería con conciliación de extractos y auto-match contra los libros. El dinero que entra y sale se controla partida abierta por partida abierta, con la posición de caja siempre visible y conciliada de forma continua, no en la semana de cierre.',
      mono: 'financiero',
    },
    {
      title: 'Fiscal',
      body: 'Importación FEL/SAT de Guatemala, ISR en sus tres frecuencias (mensual, trimestral, anual), IVA y Libros fiscales. La capa que convierte la obligación tributaria en datos estructurados que alimentan al resto del sistema: del documento tributario electrónico al asiento propuesto, sin captura manual. La arquitectura por país extiende el mismo motor al resto de Centroamérica y LATAM.',
      mono: 'fiscal',
    },
  ],
  showcase: {
    kind: 'pills',
    heading: 'La escalera, hoy y en camino',
    lede: 'Lo que ya está en producción y lo que viene, sin maquillaje.',
    pills: [
      { label: 'Control de finanzas', meta: 'en producción' },
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
    { label: 'Aura · IA', href: '/aurora-ia', blurb: 'Los agentes que proponen asientos y detectan anomalías sobre estos módulos.' },
    { label: 'Datos Financieros', href: '/fiscal-latam', blurb: 'La ingesta: cómo la factura electrónica alimenta de datos a cada módulo.' },
  ],
  cta: {
    heading: 'Un solo sistema, todo el ciclo',
    body: 'Del registro a la decisión, sin silos ni reconciliación entre herramientas. Pide una demo y recorremos los módulos sobre una empresa real.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver la tesis completa', href: '/aurora-erp' },
  },
};

export const datos = {
  name: 'Datos Financieros',
  route: '/fiscal-latam',
  navLabel: 'Datos Financieros',
  metaTitle: 'Factura electrónica y datos fiscales para LATAM | Aurora Labs',
  metaDescription:
    'La factura electrónica obligatoria de Latinoamérica —FEL/SAT en Guatemala, libros digitales— es el dato que automatiza el control de finanzas. Aurora lo cosecha: ISR/IVA, conciliación, arquitectura multi-país.',
  heroEyebrow: 'AURORA · DATOS FINANCIEROS',
  heroH1: 'La factura electrónica es la materia prima.',
  heroLede:
    'La infraestructura fiscal digital de la región —factura electrónica obligatoria, libros digitales— es el dato estructurado que vuelve posible automatizar el control de finanzas. Aurora la cosecha.',
  intro:
    'El gobierno ya hizo el trabajo más difícil: digitalizar la evidencia financiera. En Estados Unidos, ese dato estructurado no existe a esta escala —el control de finanzas arranca de PDFs sucios y extractos dispares—. En Latinoamérica, cada DTE es un hecho económico ya estructurado, listo para convertirse en asiento.\n\nAurora convierte esa infraestructura pública en automatización privada. Y lo hace extensible por país: las reglas fiscales de un solo país nunca se queman en el código, sino que viven en estrategias por país, así la misma máquina sirve a Guatemala, a Centroamérica y a quien siga.',
  features: [
    {
      title: 'FEL / SAT',
      body: 'Importación de documentos tributarios electrónicos: del DTE al asiento propuesto, con el tercero, la fecha y la referencia ya resueltos. La ingesta estructurada que el resto del sistema consume.',
      mono: 'ingesta',
    },
    {
      title: 'ISR / IVA',
      body: 'Cálculo de ISR en sus tres frecuencias (mensual, trimestral, anual) e IVA con sus Libros. La obligación tributaria, derivada de los mismos libros que ya llevas.',
      mono: 'tributos',
    },
    {
      title: 'Multi-país por arquitectura',
      body: 'Hoy en producción: Guatemala con FEL/SAT. Las reglas fiscales viven en estrategias por país —validación de identificadores, formatos y cálculos—, nunca quemadas en el código. El país es un parámetro, no una reescritura: la misma máquina se extiende al resto de Centroamérica y LATAM conforme se incorpora cada régimen.',
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
    lede: 'El camino que recorre un dato fiscal hasta convertirse en control de finanzas, sin captura manual.',
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
    { label: 'Módulos', href: '/modulos', blurb: 'Los módulos que consumen estos datos: control de finanzas, ventas, fiscal y más.' },
    { label: 'Aura · IA', href: '/aurora-ia', blurb: 'Los agentes que proponen el asiento a partir de cada documento.' },
  ],
  cta: {
    heading: 'El dato ya existe. Aurora lo pone a trabajar.',
    body: 'La factura electrónica obligatoria es tu ventaja. Pide una demo y vemos cómo un DTE se vuelve control de finanzas sin captura manual.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver los módulos', href: '/modulos' },
  },
};

export const erp = {
  metaTitle: 'Aurora ERP — Software de gestión financiera AI-native para LATAM',
  metaDescription:
    'Software de gestión financiera y ERP AI-native para empresas y grupos de Latinoamérica: factura electrónica, libros al día y decisiones con datos reales. Multiempresa nativo.',
  hero: {
    eyebrow: 'AURORA · PARA EMPRESAS Y GRUPOS',
    h1: 'El sistema operativo financiero AI-native para las empresas de Latinoamérica.',
    sub: 'Tus libros se llevan solos. Tú solo apruebas.',
    lede: 'Aurora convierte facturas, movimientos bancarios y documentos financieros en acciones propuestas, libros siempre al día y decisiones tomadas con datos reales.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver los módulos', href: '/modulos' },
  },
  sections: [
    {
      eyebrow: 'LA TESIS',
      heading: 'La factura electrónica volvió el control de finanzas un problema de datos.',
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
      body: 'Las empresas viven entre dos extremos: Excel y procesos manuales, o ERPs tradicionales que exigen meses de implementación, consultores y parametrización. El cierre llega tarde, las decisiones se toman con información vieja y el control de finanzas se vuelve un ejercicio de reconstrucción del pasado. Eso ya es operación financiera, no solo fiscalidad.',
    },
    {
      kind: 'ladder',
      eyebrow: 'LA ESCALERA',
      heading: 'Un punto de entrada angosto que se vuelve sistema operativo.',
      rungs: [
        { capability: 'Datos financieros', detail: 'FEL · Bancos · Documentos' },
        { capability: 'Sistema de registro', detail: 'Control de finanzas' },
        { capability: 'Sistema de operación', detail: 'Tesorería · CxC · CxP' },
        { capability: 'Sistema de decisión', detail: 'Cash · Planeación' },
        { capability: 'Sistema de acción', detail: 'Agentes' },
        { capability: 'Financial Operating System', detail: 'La visión' },
      ],
    },
    {
      eyebrow: 'LA SOLUCIÓN',
      heading: 'Tú ya no construyes el control de finanzas. Lo supervisas.',
      body: 'Cada factura, cada venta, cada movimiento bancario, cada documento fiscal: Aurora propone el registro automáticamente. El usuario aprueba. Tus libros se llevan solos; tú solo apruebas.',
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
          cells: ['Meses, con consultores', 'Semanas, con partner', 'Meses, con consultor', 'Rápida, finanzas básicas'],
          aurora: 'Días, sin consultor',
        },
        {
          dim: 'IA',
          cells: ['Add-on sobre un core batch', 'Mínima', 'Add-on sobre un core batch', 'Asistentes básicos'],
          aurora: 'Nativa: propone, tú apruebas',
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
      heading: 'Donde el control de finanzas se hace solo.',
      body: 'Que el cierre mensual deje de ser un evento de pánico. Que los libros estén siempre al día. Que el contador deje de capturar datos y se convierta en un operador financiero asistido por IA. Aurora no está construyendo otro ERP para Latinoamérica: está construyendo la capa de automatización financiera que la infraestructura fiscal digital de la región hizo posible por primera vez.',
    },
  ],
  cta: {
    heading: 'De los datos financieros a la decisión.',
    body: 'Empezamos por el control de finanzas y lo fiscal porque ahí nacen los datos; terminamos automatizando toda la operación financiera. Pide una demo.',
    primary: { label: 'Solicitar una demo', href: '/contacto' },
    secondary: { label: 'Ver cómo funciona', href: '/como-funciona' },
  },
  crossLinks: [
    { label: 'Aura · IA', href: '/aurora-ia', blurb: 'Los agentes que proponen, explican y dejan borradores; tú apruebas.' },
    { label: 'Módulos', href: '/modulos', blurb: 'El ciclo financiero completo, del registro a la decisión, en un solo sistema.' },
    { label: 'Datos Financieros', href: '/fiscal-latam', blurb: 'La ingesta: la factura electrónica como materia prima de la automatización.' },
  ],
};

export const platform = {
  metaTitle: 'Aurora Platform — La capa de abajo del software financiero | Aurora',
  metaDescription:
    'Aurora es una plataforma de desarrollo vertical sobre Laravel, con el libro mayor como kernel. Frente a Filament, Nova, Backpack, raw Laravel, Odoo Studio y Django: no es un constructor de pantallas, es el kernel de integridad financiera, la fábrica de módulos y los contratos verificados sobre los que esas herramientas se montan.',
  hero: {
    eyebrow: 'AURORA · PLATAFORMA',
    h1: 'El framework financiero sobre Laravel.',
    sub: 'Si Laravel te da el framework web, Aurora te da el financiero.',
    lede:
      'Construye ERP y software empresarial sin reinventar el libro mayor, la integridad financiera ni la arquitectura modular. Filament, Nova o Backpack te dan pantallas sobre tus tablas; Aurora te da la capa de abajo: el kernel financiero sobre el que esas UIs se montan.',
    primary: { label: 'Ver cómo funciona', href: '/como-funciona' },
    secondary: { label: 'Hablar con el equipo', href: '/contacto' },
    // Stack visual del hero: la UI se monta sobre Aurora, y Aurora sobre el GL.
    stack: [
      { label: 'Tu UI', meta: 'Filament · Nova · Backpack', tone: 'muted' },
      { label: 'Aurora', meta: 'Make · Platform SDK · Runtime · Architecture', tone: 'brand' },
      { label: 'Kernel', meta: 'Libro mayor (GL) · partida doble · BCMath', tone: 'base' },
    ],
  },
  sections: [
    {
      eyebrow: 'EL PATRÓN',
      heading: 'Todo ERP interno empieza igual.',
      body: 'Unos modelos Eloquent, un panel en Filament y unas cuantas reglas de negocio. Funciona. Hasta que crece, y dos años después tienes:',
      bullets: [
        'Asientos que dejan de cuadrar y nadie sabe por qué.',
        'Módulos acoplados: tocar uno rompe otro.',
        'Cambios que rompen cosas en silencio, sin que CI avise.',
        '¿Dónde vive, exactamente, la verdad financiera?',
      ],
      close: 'Aurora existe para no llegar ahí.',
    },
    {
      eyebrow: 'LA ALTURA',
      heading: 'Operan en capas distintas.',
      body: 'Un admin builder —Filament, Nova, Backpack— genera pantallas CRUD sobre tus modelos de Eloquent: resuelve la interfaz, no la lógica de un sistema financiero. Django ofrece un framework web y un admin genérico. Y Odoo es un ERP extensible; Aurora es algo distinto: una plataforma para construir ERPs. Es la capa de abajo —un kernel financiero, una fábrica de módulos y una frontera verificada— sobre la que esas UIs, incluida Filament que Aurora consume, se montan.',
    },
    {
      eyebrow: 'EL COSTO DE EVOLUCIÓN',
      heading: 'El día 1 es barato; el año 2 es la factura.',
      body: 'Generar pantallas es rápido al principio. El costo aparece cuando el sistema crece: cada módulo nuevo se acopla a los anteriores, cambiar una firma rompe otros en silencio y la consistencia depende de que alguien recuerde la regla. Aurora cambia la pendiente. Un módulo nace de un manifiesto determinístico, depende de contratos congelados del Platform SDK —no de implementaciones— y un cambio que rompe la frontera falla ruidoso en CI antes del merge. La plataforma se diseñó para el año 2, no solo para la demo.',
    },
    {
      eyebrow: 'EL FOSO',
      heading: 'El foso no es la UI. Es el libro mayor.',
      body: 'Ningún constructor de paneles te da integridad financiera por construcción. En Aurora el kernel es el GL: un libro mayor que funciona como event log inmutable. El dinero se opera con BCMath sobre columnas numeric(15,2), nunca con float. Las cuentas se resuelven por determinación —nombre canónico, no por código que diverge entre plantillas—. Todo módulo orbita el GL y ninguno escribe en journal_lines directo. En la práctica, significa que inventario, ventas, tesorería o nómina hablan el mismo lenguaje financiero y producen estados consistentes por diseño, no por reconciliación nocturna. Y esas invariantes no son convenciones: son fitness functions que corren en cada build. Reconstruir ese sustrato sobre un admin builder es, precisamente, el trabajo que Aurora ya hizo.',
    },
    {
      kind: 'comparison',
      eyebrow: 'COMPARATIVA',
      heading: 'Por qué no es Filament con más pasos.',
      competitors: ['Admin builders¹', 'Raw Laravel', 'Odoo Studio', 'Django'],
      rows: [
        {
          dim: 'Tiempo al primer módulo',
          cells: ['Muy rápido', 'Lento', 'Rápido', 'Medio'],
          aurora: 'Rápido: nace de un manifiesto',
        },
        {
          dim: 'Tiempo al décimo módulo',
          cells: ['Doloroso', 'Muy doloroso', 'Limitado por el ERP', 'Doloroso'],
          aurora: 'Diseñado para escalar',
        },
        {
          dim: 'Qué te da',
          cells: ['CRUD y panel sobre tus modelos', 'Nada: lo construyes todo', 'Low-code sobre un ERP cerrado', 'Framework web + admin genérico'],
          aurora: 'Plataforma vertical con kernel financiero',
        },
        {
          dim: 'Integridad financiera',
          cells: ['No nativa', 'La construyes a mano', 'Del ERP, no es tuya', 'No nativa'],
          aurora: 'GL inmutable, BCMath, partida doble',
        },
        {
          dim: 'Generación de módulos',
          cells: ['Recursos CRUD a mano', 'Scaffolding manual', 'Studio visual, atado a Odoo', 'Apps a mano'],
          aurora: 'Manifiesto determinístico (aurora:make-module)',
        },
        {
          dim: 'Frontera / acoplamiento',
          cells: ['A disciplina del equipo', 'A disciplina del equipo', 'Monolito acoplado', 'A disciplina del equipo'],
          aurora: 'Verificada por fitness functions en CI',
        },
        {
          dim: 'Multiempresa',
          cells: ['A mano', 'A mano', 'Sí, del ERP', 'A mano'],
          aurora: 'Schema-per-tenant nativo',
        },
        {
          dim: 'Propiedad del código',
          cells: ['Tuyo', 'Tuyo', 'Lock-in del ecosistema Odoo', 'Tuyo'],
          aurora: 'Paquetes Laravel tuyos',
        },
        {
          dim: 'Capa de UI',
          cells: ['Es la UI', 'La eliges', 'La del ERP', 'Templates / admin'],
          aurora: 'Consume Filament; no la reemplaza',
        },
      ],
      note: 'Comparativa simplificada para situar a Aurora, no para descalificar. ¹ «Admin builders» agrupa Laravel Filament, Nova y Backpack: excelentes para paneles CRUD, operan en la capa de UI sobre tus modelos. Cada herramienta tiene matices por versión y caso de uso.',
    },
    {
      eyebrow: 'NO ES ACADÉMICO',
      heading: 'Las mismas invariantes ya corren en producción.',
      body: 'Las reglas que gobiernan Aurora —GL inmutable, dinero en BCMath, cuentas por determinación, frontera verificada en CI— ya operan procesos reales de control de finanzas, impuestos, tesorería y analítica. Está construido sobre más de una década desarrollando sistemas financieros y analítica empresarial para compañías de manufactura y retail en Latinoamérica, no sobre una pizarra.',
    },
  ],
  crossLinks: [
    { label: 'Aurora Make', href: '/aurora-make', blurb: 'La fábrica: un manifiesto module.yaml se vuelve un módulo cableado.' },
    { label: 'Aurora Platform SDK', href: '/aurora-platform-sdk', blurb: 'Los contratos estables que los módulos consumen en vez del kernel.' },
    { label: 'Aurora Runtime', href: '/aurora-runtime', blurb: 'Descubrimiento, multiempresa y aprovisionamiento por empresa.' },
    { label: 'Aurora Architecture', href: '/aurora-architecture', blurb: 'Las invariantes verificadas por fitness functions en cada build.' },
  ],
  cta: {
    heading: 'Construye sobre la capa correcta.',
    body: 'Si necesitas software financiero que evolucione sin acumular deuda, hablemos de cómo se modela sobre Aurora —lo que ya corre hoy y lo que es construible.',
    primary: { label: 'Ver cómo funciona', href: '/como-funciona' },
    secondary: { label: 'Hablar con el equipo', href: '/contacto' },
  },
};
