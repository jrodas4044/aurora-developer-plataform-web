// Sección Partners de Aurora, escrita a mano.
// Dos audiencias: desarrollo (ISV que construyen sobre la plataforma) y
// soluciones (implementan, operan o revenden Aurora ERP). Ambas usan el
// template data-driven CapabilityPage.

export const partnersDesarrollo = {
  name: 'Partners de Desarrollo',
  route: '/partners-desarrollo',
  navLabel: 'Partners de Desarrollo',
  metaTitle: 'Partners de Desarrollo — Construye tu producto sobre Aurora | Aurora',
  metaDescription:
    'Para empresas de software de Latinoamérica que quieren construir su propio producto sobre la base financiera de Aurora. No reinventas el libro mayor, el SDK ni la multiempresa: construyes tu vertical encima, con tu código y go-to-market conjunto.',
  heroEyebrow: 'AURORA · PARTNERS DE DESARROLLO',
  heroH1: 'Construye tu producto sobre la base financiera de Aurora.',
  heroLede:
    'Para empresas de software que quieren llevar un sistema empresarial serio al mercado sin reinventar el libro mayor, la integridad financiera ni la arquitectura modular. Tú construyes tu vertical; la capa de abajo ya existe.',
  intro:
    'Construir software financiero que aguante es caro y lento. El libro mayor de partida doble, el dinero en BCMath, la multiempresa con aislamiento por esquema, la frontera entre módulos que no se rompe en silencio: es trabajo de años que rara vez es tu diferenciador. Tu diferenciador es la vertical que conoces —el giro, el flujo, el cliente—, no la plomería financiera que hay debajo.\n\nEl programa de Partners de Desarrollo abre Aurora Platform a empresas de software que quieren montar su producto sobre esa capa de abajo. Construyes con Aurora Make, dependes de los contratos congelados del Platform SDK y reusas el Runtime multiempresa: tu módulo nace cableado al kernel financiero y orbita el mismo libro mayor que el resto del ecosistema. Tu código es tuyo —paquetes Laravel propios, sin lock-in— y lo llevas a tu mercado con respaldo técnico y comercial de Aurora.',
  features: [
    {
      title: 'Construyes sobre Make, SDK y Runtime',
      body: 'Un manifiesto module.yaml genera tu módulo ya cableado; dependes de contratos estables del Platform SDK, no de las clases del kernel; y heredas la multiempresa del Runtime. Te concentras en tu lógica de dominio, no en la infraestructura.',
      mono: 'aurora:make-module',
    },
    {
      title: 'Tu código es tuyo',
      body: 'Lo que construyes son paquetes Laravel de tu propiedad, no extensiones atrapadas en un ERP cerrado. Sin lock-in de ecosistema: tu producto, tu repositorio, tu roadmap. Aurora es la capa de abajo, no el dueño de tu vertical.',
      mono: 'sin lock-in',
    },
    {
      title: 'Frontera verificada en CI',
      body: 'Tu módulo nunca importa el kernel ni rompe a los demás: la frontera de paquetes y la superficie del SDK están congeladas por fitness functions que corren en cada build. Construyes sobre contratos que no cambian bajo tus pies.',
      mono: 'PackageBoundaryTest',
    },
    {
      title: 'Go-to-market conjunto',
      body: 'No construyes en aislamiento. El programa abre referidos, co-venta y co-marketing: tu vertical entra al ecosistema Aurora y llega a las empresas y grupos de Latinoamérica que ya buscan software financiero AI-native.',
      mono: 'co-venta',
    },
  ],
  showcase: {
    kind: 'list',
    heading: 'El programa, en tres niveles',
    lede: 'El partner crece con su compromiso y su track récord. Cada nivel desbloquea más acceso técnico y comercial.',
    rows: [
      { left: 'Registrado', right: 'Acceso a Aurora Platform, documentación del SDK y la fábrica de módulos para empezar a construir.' },
      { left: 'Certificado', right: 'Soporte técnico directo, revisión de arquitectura de tu vertical y presencia en el directorio de partners.' },
      { left: 'Estratégico', right: 'Co-venta y co-marketing, roadmap compartido e influencia sobre la evolución de los contratos que consumes.' },
    ],
  },
  crossLinks: [
    { label: 'Aurora Platform', href: '/aurora-platform', blurb: 'La capa de abajo: el kernel financiero, la fábrica de módulos y la frontera verificada sobre la que construyes.' },
    { label: 'Aurora Make', href: '/aurora-make', blurb: 'La fábrica: un manifiesto module.yaml se vuelve tu módulo ya cableado al kernel.' },
    { label: 'Aurora Platform SDK', href: '/aurora-platform-sdk', blurb: 'Los contratos estables que tu módulo consume en vez de acoplarse al kernel.' },
    { label: 'Partners de Soluciones', href: '/partners-soluciones', blurb: 'El otro camino: vender e implementar Aurora ERP en lugar de construir sobre la plataforma.' },
  ],
  cta: {
    heading: 'Construye tu producto sobre la capa correcta.',
    body: 'Si eres una empresa de software con una vertical que conoces a fondo, hablemos de cómo se monta sobre Aurora —lo que ya corre hoy y lo que tu equipo construiría encima.',
    primary: { label: 'Aplica como partner de desarrollo', href: '/contacto' },
    secondary: { label: 'Ver Aurora Platform', href: '/aurora-platform' },
  },
};

export const partnersSoluciones = {
  name: 'Partners de Soluciones',
  route: '/partners-soluciones',
  navLabel: 'Partners de Soluciones',
  metaTitle: 'Partners de Soluciones — Lleva Aurora ERP al mercado | Aurora',
  metaDescription:
    'Para implementadores, despachos contables y resellers de Latinoamérica que quieren llevar Aurora ERP a sus clientes. Producto ya construido, fiscal local nativo y multiempresa: implementa, opera para tu cartera o refiere, sin meses de consultoría.',
  heroEyebrow: 'AURORA · PARTNERS DE SOLUCIONES',
  heroH1: 'Lleva Aurora ERP al mercado de Latinoamérica.',
  heroLede:
    'Para implementadores, despachos contables y resellers que quieren capturar la demanda de un ERP AI-native con fiscal local. El producto ya está construido; tú lo llevas a tus clientes.',
  intro:
    'Las empresas de Latinoamérica viven entre dos extremos: Excel y procesos manuales, o ERPs tradicionales que exigen meses de implementación, consultores y parametrización eterna. La demanda de algo distinto —un sistema operativo financiero AI-native, con fiscal local nativo y multiempresa— ya existe y no para de crecer. Lo que faltaba era un producto a la altura para capturarla.\n\nEl programa de Partners de Soluciones es para quien lleva ese producto al mercado. No construyes software: tomas Aurora ERP, ya construido y con la fiscalidad de la región resuelta, y lo pones a trabajar para tus clientes. Hay tres formas de hacerlo —implementar, operar para tu cartera o referir— y las tres se apoyan en el mismo hecho: Aurora arranca en días, no en meses, así tu margen no se evapora en parametrización interminable.',
  features: [
    {
      title: 'Implementador',
      body: 'Despliegas, parametrizas y capacitas. Llevas a cada cliente de cero a operando sobre Aurora ERP, con la multiempresa, el panel y la ingesta fiscal ya listos. Tu valor es el conocimiento del negocio, no el wiring del sistema.',
      mono: 'implementa',
    },
    {
      title: 'Despacho contable',
      body: 'Operas Aurora ERP para toda tu cartera de clientes. El modelo multiempresa nativo —cada empresa con sus libros aislados bajo un mismo techo, con vista por empresa y consolidación de grupo— está hecho para el despacho que administra varias empresas a la vez.',
      mono: 'opera',
    },
    {
      title: 'Reseller / referido',
      body: 'Refieres o revendes Aurora ERP a cambio de comisión, sin implementar. Si tu fortaleza es la relación comercial y la red de clientes, conectas la demanda con el producto y Aurora se encarga del resto.',
      mono: 'refiere',
    },
    {
      title: 'Sin meses de consultoría',
      body: 'Aurora arranca en días, no en trimestres. Frente a los ERPs tradicionales que viven de la parametrización eterna, aquí el tiempo a producción es corto: cierras más clientes y tu margen no se va en horas de consultor.',
      mono: 'días, no meses',
    },
  ],
  showcase: {
    kind: 'list',
    heading: 'Tres modelos de partner',
    lede: 'Eliges cómo participas según tu fortaleza. Los tres se apoyan en el mismo producto ya construido.',
    rows: [
      { left: 'Implementa', right: 'Despliegas y parametrizas Aurora ERP para clientes finales; ganas por proyecto de implementación y soporte continuo.' },
      { left: 'Opera', right: 'Despacho que lleva el control de finanzas de su cartera sobre la multiempresa nativa; ganas por cliente bajo administración.' },
      { left: 'Refiere', right: 'Conectas demanda con el producto sin implementar; ganas por comisión de referido o reventa.' },
    ],
  },
  crossLinks: [
    { label: 'Aurora ERP', href: '/aurora-erp', blurb: 'El producto que llevas al mercado: el sistema operativo financiero AI-native para empresas y grupos.' },
    { label: 'Módulos', href: '/modulos', blurb: 'El ciclo financiero completo que implementas, del registro a la decisión, en un solo sistema.' },
    { label: 'Datos Financieros', href: '/fiscal-latam', blurb: 'La fiscalidad local nativa —FEL/SAT, ISR/IVA— que vuelve a Aurora vendible en la región.' },
    { label: 'Partners de Desarrollo', href: '/partners-desarrollo', blurb: 'El otro camino: construir tu propio producto sobre Aurora Platform en lugar de vender el ERP.' },
  ],
  cta: {
    heading: 'Captura la demanda con un producto a la altura.',
    body: 'Si implementas, operas o vendes software para empresas de Latinoamérica, hablemos del modelo de partner que encaja con tu negocio.',
    primary: { label: 'Aplica como partner de soluciones', href: '/contacto' },
    secondary: { label: 'Ver Aurora ERP', href: '/aurora-erp' },
  },
};
