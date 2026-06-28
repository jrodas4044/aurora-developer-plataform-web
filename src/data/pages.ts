// AUTO-GENERADO desde el workflow de contenido (aurora-engine-pages). Fuente de verdad editable a mano si se desea.

export const make = {
  "name": "Aurora Make",
  "route": "/aurora-make",
  "navLabel": "Aurora Make",
  "metaTitle": "Aurora Make — La fábrica de módulos por manifiesto | Aurora Platform",
  "metaDescription": "Aurora Make genera módulos empresariales a partir de un manifiesto declarativo. Un module.yaml describe modelos tipados, permisos, posteo al GL y siembra por empresa; aurora:make-module emite un paquete Aurora ya cableado, con frontera limpia y determinismo verificado.",
  "heroEyebrow": "AURORA MAKE",
  "heroH1": "Un manifiesto describe el módulo. La fábrica lo construye.",
  "heroLede": "Aurora Make convierte un archivo declarativo en un módulo empresarial completo y cableado. Se describe qué es el módulo —modelos, dinero, permisos, cómo postea al libro mayor, qué siembra por empresa— y aurora:make-module emite el paquete listo para recibir lógica de dominio. El esqueleto deja de ser trabajo.",
  "intro": "La mayor parte del costo de un módulo nuevo no está en su lógica de negocio, sino en el cableado que la rodea: registrar el proveedor, crear las migraciones con los tipos correctos, declarar permisos por rol, conectar las costuras de posteo al kernel contable, sembrar filas por defecto cuando se crea una empresa. Ese trabajo es repetitivo, fácil de equivocar y rara vez interesante. Aurora Make lo extrae a un manifiesto declarativo, module.yaml, y deja que un generador determinístico lo materialice.\n\nEl manifiesto no es plantilla descartable: es scaffold inicial más contrato. Una vez generado el módulo, la lógica de dominio se escribe a mano sobre un esqueleto verde, ya conforme a las invariantes de la plataforma. El propio manifiesto sigue siendo la fuente de verdad del wiring, y las fitness functions verifican en cada build que el código y lo declarado no han divergido.",
  "features": [
    {
      "title": "Modelos tipados con dinero correcto por construcción",
      "body": "El manifiesto declara campos con tipos del dominio. money se materializa como numeric(15,2) con cast de string, de modo que el módulo nace alineado con la invariante de dinero en BCMath, nunca float. Se declaran enums, índices únicos compuestos y checks de tabla en el mismo lugar.",
      "mono": "money → numeric(15,2)"
    },
    {
      "title": "Permisos por rol y superficie Filament",
      "body": "El manifiesto cruza permisos contra roles y describe la superficie de panel del módulo. El generador emite los permisos cableados al seeder de roles y el plugin Filament registrado, sin pasos manuales que olvidar entre el modelo y la pantalla.",
      "mono": "permisos × roles"
    },
    {
      "title": "Posteo al GL por las costuras del SDK",
      "body": "Si el módulo postea, el manifiesto declara source y determinations. El generador conecta las costuras CreatesJournalEntries y PostsJournalEntries del Aurora Platform SDK: el kernel ejecuta el asiento, el módulo nunca importa el módulo contable ni toca journal_lines.",
      "mono": "posting.source"
    },
    {
      "title": "Siembra por empresa al provisionar",
      "body": "provisions declara filas por defecto por empresa. El módulo se suscribe al evento CompanyCreated del SDK y siembra esas filas de forma idempotente cuando se crea una empresa, respetando el aislamiento schema-per-tenant.",
      "mono": "CompanyCreated"
    }
  ],
  "showcase": {
    "kind": "code",
    "heading": "Un module.yaml real",
    "lede": "Identidad, target, modelos tipados, permisos, posteo y siembra por empresa en un solo archivo. aurora:make-module lo convierte en un paquete bajo packages/aurora/, ya cableado.",
    "code": {
      "label": "module.yaml",
      "lang": "yaml",
      "content": "module:\n  name: Sales\n  target: package          # emite packages/aurora/sales (namespace Aurora\\Sales)\n  navigation_group: Ventas\n\nmodels:\n  Invoice:\n    fields:\n      number:       { type: string, unique_per_company: true }\n      issued_at:    { type: date }\n      customer_id:  { type: party_reference }\n      subtotal:     { type: money }    # numeric(15,2), cast string, BCMath\n      tax_total:    { type: money }\n      total:        { type: money }\n    indexes:\n      - { columns: [company_id, number], unique: true }\n    checks:\n      - \"total >= 0\"\n\npermissions:\n  ventas.ver:     [Admin Despacho, Autorizador, Capturador, Revisor]\n  ventas.crear:   [Admin Despacho, Capturador]\n  ventas.postear: [Admin Despacho, Autorizador]\n\nposting:\n  source: auto_sales_invoice          # case de JournalEntrySource\n  determinations:                     # cuentas resueltas por nombre canónico\n    - sales.income_account\n    - sales.receivable_account\n\nprovisions:                           # se siembran al crear cada empresa\n  NumberingSeries:\n    - { document: invoice, prefix: F, next: 1 }"
    }
  },
  "crossLinks": [
    {
      "label": "Cómo funciona",
      "href": "/como-funciona",
      "blurb": "El loop completo de extremo a extremo: del manifiesto al módulo que postea al libro mayor."
    },
    {
      "label": "Aurora Platform SDK",
      "href": "/aurora-platform-sdk",
      "blurb": "Los contratos runtime estables que el módulo generado consume para postear, sin tocar el kernel."
    },
    {
      "label": "Aurora Runtime",
      "href": "/aurora-runtime",
      "blurb": "El registro de módulos, la multiempresa y la siembra por empresa donde corre lo que Make genera."
    },
    {
      "label": "Aurora Architecture",
      "href": "/aurora-architecture",
      "blurb": "Las invariantes y fitness functions que verifican el determinismo y la frontera limpia en cada build."
    },
    {
      "label": "Casos de uso",
      "href": "/casos-de-uso",
      "blurb": "Qué se construye sobre Aurora: ERP y contabilidad, CRM, nómina, inventario y analítica."
    }
  ],
  "cta": {
    "heading": "Mira el loop completo",
    "body": "Aurora Make es el primer paso de un ciclo: del manifiesto a un módulo que orbita el libro mayor. La página Cómo funciona recorre el camino de extremo a extremo con un módulo real.",
    "primary": {
      "label": "Ver cómo funciona",
      "href": "/como-funciona"
    },
    "secondary": {
      "label": "Hablar con el equipo",
      "href": "/contacto"
    }
  }
} as const;

export const platformSdk = {
  "name": "Aurora Platform SDK",
  "route": "/aurora-platform-sdk",
  "navLabel": "Platform SDK",
  "metaTitle": "Aurora Platform SDK — Contratos estables para módulos sobre el GL",
  "metaDescription": "El Aurora Platform SDK expone contratos runtime estables. Los módulos dependen de interfaces (CreatesJournalEntries, ResolvesTaxEffects, ChecksStockAvailability, ProvidesOnboarding), nunca de implementaciones del kernel. PlatformContractsFreezeTest congela la superficie en cada build.",
  "heroEyebrow": "Aurora Platform SDK",
  "heroH1": "Los módulos dependen de contratos, no de implementaciones",
  "heroLede": "El Aurora Platform SDK es el conjunto de contratos runtime estables sobre los que se construye cada módulo. Un satélite habla con el kernel a través de interfaces congeladas —postear al libro mayor, resolver impuestos, consultar inventario, aportar onboarding— y nunca importa el módulo contable. La implementación del kernel evoluciona por debajo sin romper a nadie.",
  "intro": "En Aurora el kernel es el GL: el libro mayor donde toda operación se asienta. La regla de gravedad establece que todo módulo orbita ese kernel y ninguno escribe en journal_lines de forma directa. El problema clásico de esa arquitectura es el acoplamiento: si cada módulo dependiera de las clases concretas del módulo contable, cambiar una firma del kernel rompería N módulos en silencio y la plataforma dejaría de poder evolucionar.\n\nEl Aurora Platform SDK resuelve eso con una frontera explícita. Vive en los paquetes packages/aurora/platform-contracts y platform-support, y publica un puñado de interfaces y eventos que describen lo que un módulo puede pedirle a la plataforma, no cómo la plataforma lo cumple. Un módulo de Ventas no sabe que existe un módulo llamado Quorum; sabe que existe un contrato CreatesJournalEntries y lo usa. Esa indirección es lo que permite que Ventas, Inventario, CRM, Diferidos y el resto convivan, posteen al mismo libro mayor y sigan compilando cuando el kernel cambia por dentro.",
  "features": [
    {
      "title": "Postear sin tocar el kernel",
      "body": "Un módulo asienta al libro mayor por las costuras del SDK: arma los datos del asiento contra una interfaz y el adaptador del host ejecuta el posteo canónico. El satélite nunca importa el módulo contable ni escribe journal_lines.",
      "mono": "CreatesJournalEntries"
    },
    {
      "title": "Efectos fiscales como contrato",
      "body": "Impuestos y retenciones se resuelven a través de una interfaz, no de reglas quemadas en cada módulo. El módulo declara el contexto fiscal y recibe los efectos calculados, lo que mantiene la lógica tributaria del país en un solo lugar.",
      "mono": "ResolvesTaxEffects"
    },
    {
      "title": "Inventario por interfaz",
      "body": "Un módulo de front-office consulta disponibilidad de stock y resuelve la bodega por defecto vía contratos, sin acoplarse a la implementación de valuación perpetua. El consumo de stock viaja como evento del SDK.",
      "mono": "ChecksStockAvailability"
    },
    {
      "title": "Onboarding aportado por el módulo",
      "body": "Cada módulo contribuye sus checks de readiness por empresa implementando un contrato y registrándose en el OnboardingRegistry. El kernel no conoce a los satélites; ellos aportan qué falta configurar.",
      "mono": "ProvidesOnboarding"
    }
  ],
  "showcase": {
    "kind": "code",
    "heading": "Un contrato, no una implementación",
    "lede": "El módulo arma el asiento contra esta interfaz del SDK. El host la implementa y ejecuta el posteo canónico al GL; el satélite jamás importa el módulo contable.",
    "code": {
      "label": "packages/aurora/platform-contracts/src/Posting/CreatesJournalEntries.php",
      "lang": "php",
      "content": "<?php\n\ndeclare(strict_types=1);\n\nnamespace Aurora\\Platform\\Contracts\\Posting;\n\n/**\n * Costura de posteo del SDK. Un módulo satélite arma los datos\n * del asiento y los entrega aquí; el adaptador del host hace el\n * forceFill canónico (source, source_module, source_id) y postea\n * al GL. El satélite nunca importa el módulo contable ni escribe\n * en journal_lines de forma directa.\n */\ninterface CreatesJournalEntries\n{\n    public function create(JournalEntryData $data): JournalEntryResult;\n}\n\ninterface PostsJournalEntries\n{\n    public function post(JournalEntryResult $entry): void;\n}\n\n// PlatformContractsFreezeTest congela esta superficie: un cambio\n// de firma falla ruidoso en CI, en vez de romper N módulos en silencio."
    }
  },
  "crossLinks": [
    {
      "label": "Aurora Make",
      "href": "/aurora-make",
      "blurb": "El generador que emite cada módulo ya cableado a estos contratos desde un manifiesto module.yaml."
    },
    {
      "label": "Aurora Runtime",
      "href": "/aurora-runtime",
      "blurb": "La infraestructura compartida —ModuleRegistry, OnboardingRegistry, multiempresa— que cumple lo que el SDK promete."
    },
    {
      "label": "Aurora Architecture",
      "href": "/aurora-architecture",
      "blurb": "Los ADRs y fitness functions que congelan la superficie del SDK y vigilan la frontera en cada build."
    },
    {
      "label": "Cómo funciona",
      "href": "/como-funciona",
      "blurb": "El loop completo: del manifiesto al módulo que postea al GL por las costuras del SDK."
    },
    {
      "label": "Casos de uso",
      "href": "/casos-de-uso",
      "blurb": "Qué se construye sobre Aurora: ERP y contabilidad, CRM, nómina, inventario y analítica."
    }
  ],
  "cta": {
    "heading": "Mira el loop de extremo a extremo",
    "body": "Los contratos cobran sentido cuando se ve cómo un manifiesto se convierte en un módulo cableado que postea al libro mayor sin tocar el kernel. Recorre el ciclo completo o escríbenos para discutir tu caso.",
    "primary": {
      "label": "Ver cómo funciona",
      "href": "/como-funciona"
    },
    "secondary": {
      "label": "Hablar con el equipo",
      "href": "/contacto"
    }
  }
} as const;

export const runtime = {
  "name": "Aurora Runtime",
  "route": "/aurora-runtime",
  "navLabel": "Aurora Runtime",
  "metaTitle": "Aurora Runtime — Infraestructura compartida multiempresa | Aurora Platform",
  "metaDescription": "Aurora Runtime es la infraestructura compartida sobre la que corren los módulos: descubrimiento por registro (ModuleRegistry), readiness por empresa (OnboardingRegistry), aislamiento schema-per-tenant con CompanyContext, aprovisionamiento por empresa y componentes reutilizables.",
  "heroEyebrow": "AURORA RUNTIME",
  "heroH1": "La infraestructura que todos los módulos comparten",
  "heroLede": "Aurora Runtime es la capa donde los módulos se descubren entre sí, declaran su estado de configuración por empresa y operan dentro de un aislamiento multiempresa estricto. Un módulo nuevo hereda todo esto al integrarse, sin escribir infraestructura.",
  "intro": "Un módulo de Aurora no arranca solo ni se conecta a mano. Al integrarse al sistema queda dentro de una infraestructura compartida que resuelve los problemas transversales una sola vez: cómo se descubre el módulo, cómo declara su estado de configuración frente a cada empresa, cómo se aísla la información entre clientes y cómo se siembran sus datos por defecto. Esa capa es Aurora Runtime.\n\nEl objetivo es que el código de dominio de cada módulo no contenga plomería. El descubrimiento ocurre por auto-registro en el arranque del proveedor del paquete; la verificación de readiness se delega a un registro central; el contexto de empresa es una fuente de verdad única fuera del ciclo HTTP; y el aislamiento entre tenants vive en el esquema de base de datos, no en condicionales dispersos. Quien escribe un módulo se concentra en la lógica del negocio porque la infraestructura ya está ahí.",
  "features": [
    {
      "title": "Descubrimiento por registro",
      "body": "Cada paquete se auto-registra en el boot() de su proveedor mediante composer auto-discovery. El ModuleRegistry conoce los módulos integrados sin acoplamiento manual ni una lista central que mantener a mano.",
      "mono": "ModuleRegistry"
    },
    {
      "title": "Readiness por empresa",
      "body": "Cada módulo aporta sus checks de configuración al OnboardingRegistry. El sistema deriva, por empresa, qué falta antes de operar; el contrato ProvidesOnboarding es la superficie estable que el módulo implementa.",
      "mono": "OnboardingRegistry"
    },
    {
      "title": "Aislamiento multiempresa",
      "body": "Aislamiento schema-per-tenant sobre Postgres con stancl/tenancy: un esquema por tenant. CompanyContext es la fuente de verdad de la empresa activa fuera de HTTP, en jobs, listeners y comandos.",
      "mono": "CompanyContext"
    },
    {
      "title": "Aprovisionamiento por empresa",
      "body": "La sección provisions del manifiesto siembra filas por defecto para cada empresa al crearse, suscrita al evento SDK CompanyCreated. Series por empresa, entitlements por módulo y BelongsToCompany completan el aislamiento.",
      "mono": "CompanyCreated"
    }
  ],
  "showcase": {
    "kind": "code",
    "heading": "Un proveedor de paquete que se integra al Runtime",
    "lede": "Al arrancar, el proveedor del paquete se auto-registra en el ModuleRegistry y aporta sus checks de readiness al OnboardingRegistry. No hay configuración central que tocar: composer auto-discovery carga el proveedor y el resto es declarativo.",
    "code": {
      "lang": "php",
      "label": "InventoryServiceProvider.php",
      "content": "public function boot(): void\n{\n    // Descubrimiento: el paquete se registra a sí mismo en el Runtime.\n    $this->app->make(ModuleRegistry::class)->register(\n        new InventoryModuleManifest(),\n    );\n\n    // Readiness por empresa: aporta sus checks al registro central.\n    $this->app->make(OnboardingRegistry::class)->register(\n        new InventoryOnboarding(),\n    );\n\n    // Aprovisionamiento por empresa: siembra filas por defecto\n    // cuando se crea una empresa (evento SDK del Runtime).\n    Event::listen(\n        CompanyCreated::class,\n        ProvisionInventoryOnCompanyCreated::class,\n    );\n}"
    }
  },
  "crossLinks": [
    {
      "label": "Aurora Make",
      "href": "/aurora-make",
      "blurb": "El generador por manifiesto que emite un paquete ya cableado al Runtime."
    },
    {
      "label": "Aurora Platform SDK",
      "href": "/aurora-platform-sdk",
      "blurb": "Los contratos estables que los módulos implementan, entre ellos ProvidesOnboarding y el evento CompanyCreated."
    },
    {
      "label": "Aurora Architecture",
      "href": "/aurora-architecture",
      "blurb": "Las invariantes y fitness functions que protegen el aislamiento y la frontera de cada paquete."
    },
    {
      "label": "Cómo funciona",
      "href": "/como-funciona",
      "blurb": "El loop completo: del manifiesto al módulo corriendo dentro del Runtime."
    },
    {
      "label": "Casos de uso",
      "href": "/casos-de-uso",
      "blurb": "Qué se construye sobre Aurora: ERP y contabilidad, CRM, nómina, inventario y analítica."
    }
  ],
  "cta": {
    "heading": "Mira el módulo integrarse al Runtime",
    "body": "El descubrimiento, la readiness por empresa y el aprovisionamiento no se escriben: un módulo los hereda al integrarse. Recorre el loop que va del manifiesto al módulo operando dentro de la infraestructura compartida.",
    "primary": {
      "label": "Ver cómo funciona",
      "href": "/como-funciona"
    },
    "secondary": {
      "label": "Hablar con el equipo",
      "href": "/contacto"
    }
  }
} as const;

export const architecture = {
  "name": "Aurora Architecture",
  "route": "/aurora-architecture",
  "navLabel": "Architecture",
  "metaTitle": "Aurora Architecture — Reglas verificadas, no confiadas",
  "metaDescription": "La capa que gobierna la evolución de Aurora: ADRs, invariantes transversales (ADR 0017) y fitness functions que se ejecutan en cada build. Frontera de paquetes, superficie SDK congelada, dinero en BCMath y cuentas resueltas por determinación. La consistencia se comprueba, no se confía.",
  "heroEyebrow": "AURORA ARCHITECTURE",
  "heroH1": "La consistencia se comprueba, no se confía",
  "heroLede": "Aurora Architecture es el conjunto de reglas que gobiernan cómo evoluciona la plataforma: decisiones registradas como ADRs, invariantes transversales y fitness functions que se ejecutan en cada build. Cuando un módulo cruza una frontera prohibida, toca dinero con un float o se desvía de su manifiesto, la suite falla de forma ruidosa antes del merge.",
  "intro": "Una plataforma que dura no se sostiene con disciplina individual ni con revisiones manuales. Se sostiene con reglas ejecutables. En Aurora, las decisiones arquitectónicas se registran como ADRs con un ciclo de vida explícito —Propuesta, Aceptada, Implementada, Obsoleta o Reemplazada— y las invariantes transversales que de ahí derivan se centralizan en el ADR 0017, el checklist obligatorio para todo módulo o decisión nueva.\n\nLa diferencia está en que esas invariantes no son recordatorios en un documento: las que pueden expresarse como una propiedad verificable se codifican como fitness functions, tests de arquitectura que corren en cada build. Un paquete que importa el kernel, un módulo cuyo cableado se desvió de su manifiesto, una firma del SDK que cambió en silencio o un cálculo de dinero con punto flotante: cada uno tiene un test que lo detiene. La integridad financiera y la frontera entre módulos dejan de depender de que alguien recuerde la regla en el momento correcto.",
  "features": [
    {
      "title": "Decisiones como ADRs con ciclo de vida",
      "body": "Cada cambio estructural se registra como un Architecture Decision Record con estado explícito: Propuesta, Aceptada, Implementada, Obsoleta o Reemplazada. Las invariantes transversales se consolidan en un solo lugar, el checklist obligatorio para todo módulo nuevo.",
      "mono": "ADR 0017"
    },
    {
      "title": "Frontera de paquetes verificada",
      "body": "Un paquete Aurora nunca importa el código de la aplicación host. La regla se aplica como un test de arquitectura dinámico que recorre cada paquete del repositorio: si su código fuente referencia App\\Modules, el build falla.",
      "mono": "PackageBoundaryTest"
    },
    {
      "title": "Superficie del SDK congelada",
      "body": "Los contratos runtime del Aurora Platform SDK están protegidos por un test que congela su superficie. Un cambio de firma falla ruidoso en CI en vez de romper N módulos en silencio: los satélites dependen de contratos estables, no de implementaciones.",
      "mono": "PlatformContractsFreezeTest"
    },
    {
      "title": "Dinero en BCMath, cuentas por determinación",
      "body": "El dinero se opera con BCMath sobre columnas numeric(15,2), nunca con float. Las cuentas contables se resuelven por su nombre canónico mediante determinación, nunca por código, porque los códigos divergen entre plantillas de cuentas.",
      "mono": "numeric(15,2)"
    }
  ],
  "showcase": {
    "kind": "list",
    "heading": "Fitness functions en cada build",
    "lede": "Tests de arquitectura (Pest Arch) que se ejecutan en cada build. Cada uno traduce una invariante a una propiedad verificable: si el código se desvía, el build se detiene.",
    "rows": [
      {
        "left": "PackageBoundaryTest",
        "right": "Ningún paquete Aurora importa App\\Modules — la frontera entre paquete y host se mantiene limpia."
      },
      {
        "left": "ModuleManifestComplianceTest",
        "right": "El cableado real de cada módulo coincide con lo declarado en su module.yaml — provider, migraciones, permisos y costuras de posteo."
      },
      {
        "left": "PlatformContractsFreezeTest",
        "right": "La superficie del Aurora Platform SDK está congelada — un cambio de firma falla en CI antes de romper los módulos que dependen de ella."
      },
      {
        "left": "Accounting depends on no module",
        "right": "El kernel contable no depende de ningún otro módulo — la regla de gravedad se sostiene desde el centro hacia afuera."
      },
      {
        "left": "Dinero en BCMath, nunca float",
        "right": "Los montos se operan con BCMath sobre numeric(15,2) — sin errores de redondeo de punto flotante en los libros."
      },
      {
        "left": "Cuentas por determinación, no por código",
        "right": "Las cuentas se resuelven por nombre canónico — estable entre plantillas, donde el código no lo es."
      }
    ]
  },
  "crossLinks": [
    {
      "label": "Aurora Make",
      "href": "/aurora-make",
      "blurb": "El generador determinístico que emite paquetes Aurora ya cableados desde un manifiesto module.yaml."
    },
    {
      "label": "Aurora Platform SDK",
      "href": "/aurora-platform-sdk",
      "blurb": "Los contratos runtime estables de los que dependen los módulos, en lugar de las implementaciones del kernel."
    },
    {
      "label": "Aurora Runtime",
      "href": "/aurora-runtime",
      "blurb": "La infraestructura compartida: ModuleRegistry, OnboardingRegistry, multiempresa y CompanyContext."
    },
    {
      "label": "Cómo funciona",
      "href": "/como-funciona",
      "blurb": "El loop completo de manifiesto a módulo, de principio a fin."
    },
    {
      "label": "Casos de uso",
      "href": "/casos-de-uso",
      "blurb": "Qué se construye sobre Aurora: ERP y contabilidad, CRM, nómina, inventario y analítica."
    }
  ],
  "cta": {
    "heading": "Reglas que se ejecutan, no que se recuerdan",
    "body": "Aurora Architecture convierte las decisiones de diseño en tests que corren en cada build. Conoce cómo el manifiesto, los contratos y las invariantes se encadenan en un solo flujo de trabajo.",
    "primary": {
      "label": "Ver cómo funciona",
      "href": "/como-funciona"
    },
    "secondary": {
      "label": "Hablar con el equipo",
      "href": "/contacto"
    }
  }
} as const;

export const loop = {
  "metaTitle": "El loop de Aurora: manifiesto a módulo verificado en CI",
  "metaDescription": "El ciclo completo de Aurora en código real: un manifiesto module.yaml genera un módulo cableado, depende de contratos SDK estables, se registra en runtime por auto-discovery y queda verificado por fitness functions en cada build.",
  "heroEyebrow": "COMO FUNCIONA",
  "heroH1": "El loop de Aurora",
  "heroLede": "Un módulo nace de un manifiesto, depende de contratos —no de implementaciones—, se registra solo en runtime y queda verificado en cada build. El mismo ciclo para el módulo contable, Ventas, Inventario o cualquier software empresarial que se construya sobre la plataforma. Aquí está en código real, sin diagramas de relleno.",
  "intro": "Aurora es una plataforma de desarrollo vertical cuyo kernel es el libro mayor (GL). Cada módulo orbita el GL y nunca escribe en journal_lines de forma directa: esa es la regla de gravedad. Lo que sigue es el recorrido de un módulo desde su declaración hasta su ejecución verificada, en cuatro tramos. El manifiesto declara qué es el módulo. Aurora Make emite el esqueleto ya cableado como paquete Aurora. El módulo depende de contratos del Platform SDK, no de las clases del kernel. El Runtime lo descubre y lo registra sin que nadie lo conecte a mano. Y en cada build, un conjunto de fitness functions verifica que el resultado respeta las invariantes de la arquitectura. El bucle no es una metáfora: es el proceso que sigue cada módulo que hoy corre en producción.",
  "steps": [
    {
      "n": "01",
      "title": "El manifiesto declara el módulo",
      "body": "Un módulo no se escribe a mano: se declara. El module.yaml fija la identidad y el target, los modelos con campos tipados (money se vuelve numeric(15,2) con cast a string, nunca float), enums, permisos por rol, el posting con su source y sus determinaciones, índices y checks, las filas que se siembran por empresa y la superficie Filament. Es scaffold y contrato a la vez: write-once. El generador determinístico aurora:make-module lo procesa y emite un paquete Aurora en packages/aurora/<kebab> con namespace Aurora\\<Module>, ya cableado —provider, migraciones, permisos, costuras de posteo—. La lógica de dominio se escribe a mano sobre el esqueleto verde.",
      "code": {
        "lang": "yaml",
        "label": "packages/aurora/inventory/module.yaml",
        "content": "module:\n  name: Inventory\n  namespace: Aurora\\Inventory\n  target: package          # emite paquete Aurora; in-app si va pegado al kernel\n  navigation_group: Inventario\n\nmodels:\n  StockMovement:\n    fields:\n      quantity: { type: decimal }\n      unit_cost: { type: money }   # -> numeric(15,2), cast 'string', BCMath\n      total_cost: { type: money }\n    indexes:\n      - { columns: [company_id, product_id, occurred_at] }\n\nposting:\n  sources:                  # varios cases de JournalEntrySource, UNA migración del CHECK\n    auto_inventory_receipt: \"Recepción de inventario\"\n    auto_inventory_issue: \"Salida de inventario\"\n    auto_inventory_adjustment: \"Ajuste de inventario\"\n  determinations:\n    - inventory.asset\n    - inventory.cogs\n\nprovisions:                 # se siembran por empresa al crearla (evento SDK CompanyCreated)\n  Warehouse:\n    - { name: \"Bodega central\", is_default: true }"
      }
    },
    {
      "n": "02",
      "title": "El módulo depende de un contrato, no del kernel",
      "body": "El paquete generado nunca importa App\\Modules: su frontera es limpia. Para postear al GL no conoce al módulo contable; depende de un contrato runtime estable del Aurora Platform SDK. Hay dos formas válidas: el módulo emite \\Events y un módulo-kernel postea (como Academia), o postea por las costuras del SDK CreatesJournalEntries / PostsJournalEntries (como Diferidos). En ambas el kernel ejecuta el asiento y el satélite jamás importa la contabilidad. Los contratos viven en packages/aurora/platform-contracts y son la única superficie que el módulo ve del kernel. El módulo evoluciona contra firmas estables, no contra clases que pueden cambiar.",
      "code": {
        "lang": "php",
        "label": "packages/aurora/platform-contracts/src/Posting/PostsJournalEntries.php",
        "content": "<?php\n\ndeclare(strict_types=1);\n\nnamespace Aurora\\Platform\\Contracts\\Posting;\n\n/**\n * El kernel implementa este contrato; el satélite depende SOLO de la interface.\n * El módulo nunca importa App\\Modules\\Accounting: postea por esta costura\n * y el adaptador del host hace el forceFill canónico + post.\n */\ninterface PostsJournalEntries\n{\n    /**\n     * Crea y postea un asiento canónico a partir de los datos del satélite.\n     * Las cuentas se resuelven por determinación (nombre canónico), nunca por código.\n     */\n    public function post(JournalEntryData $entry): JournalEntryResult;\n}"
      }
    },
    {
      "n": "03",
      "title": "El runtime lo descubre y lo registra solo",
      "body": "Nadie conecta el módulo a mano. Cada paquete trae su ServiceProvider, y composer lo descubre por auto-discovery. En el boot() del provider, el módulo se auto-registra en el ModuleRegistry y aporta sus checks de readiness al OnboardingRegistry. Esa es la infraestructura compartida del Aurora Runtime: descubrimiento y registro, multiempresa con aislamiento schema-per-tenant (stancl/tenancy), CompanyContext como fuente de verdad fuera de HTTP, y las filas declaradas en provisions sembradas por empresa cuando se crea —vía el evento SDK CompanyCreated—. El módulo entra al sistema sin tocar el kernel ni los demás módulos.",
      "code": {
        "lang": "php",
        "label": "packages/aurora/inventory/src/InventoryServiceProvider.php",
        "content": "<?php\n\ndeclare(strict_types=1);\n\nnamespace Aurora\\Inventory;\n\nuse Aurora\\Platform\\Support\\ModuleRegistry;\nuse Aurora\\Platform\\Support\\Onboarding\\OnboardingRegistry;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass InventoryServiceProvider extends ServiceProvider\n{\n    public function boot(): void\n    {\n        // Auto-discovery de composer carga este provider; el módulo se registra solo.\n        $this->app->make(ModuleRegistry::class)\n            ->register(new InventoryModuleManifest());\n\n        // Aporta sus checks de readiness por empresa; Core no conoce al satélite.\n        $this->app->make(OnboardingRegistry::class)\n            ->register(new InventoryOnboardingProvider());\n\n        // Migraciones tenant del paquete (schema-per-tenant).\n        $this->loadMigrationsFrom(__DIR__.'/../database/migrations/tenant');\n    }\n}"
      }
    },
    {
      "n": "04",
      "title": "CI verifica que respeta la arquitectura",
      "body": "El loop se cierra en cada build. La evolución se gobierna con ADRs e invariantes transversales (ADR 0017), y las invariantes que se pueden verificar son fitness functions de Pest Arch que corren en cada build. PackageBoundaryTest comprueba que ningún paquete importe App\\Modules. ModuleManifestComplianceTest verifica que el wiring real coincida con lo declarado en el manifiesto. PlatformContractsFreezeTest congela la superficie del SDK: un cambio de firma falla ruidoso en CI en vez de romper N módulos en silencio. Y una regla durable mantiene a la contabilidad sin depender de ningún módulo. Lo que el manifiesto declaró queda demostrado, no asumido.",
      "code": {
        "lang": "php",
        "label": "tests/Arch/PackageBoundaryTest.php",
        "content": "<?php\n\n// Un paquete Aurora NUNCA importa App\\Modules: la frontera se verifica, no se confía.\narch('los paquetes aurora no importan el host')\n    ->expect('Aurora')\n    ->not->toUse('App\\\\Modules');\n\n// El kernel contable no depende de ningún otro módulo (regla de gravedad).\narch('la contabilidad no depende de ningún módulo')\n    ->expect('App\\\\Modules\\\\Accounting')\n    ->not->toUse([\n        'App\\\\Modules\\\\Receivables',\n        'App\\\\Modules\\\\Payables',\n        'Aurora\\\\Inventory',\n        'Aurora\\\\Sales',\n    ]);"
      }
    }
  ],
  "verification": {
    "heading": "Lo que CI verifica en cada build",
    "lede": "Las invariantes de la arquitectura no son convenciones que se recuerdan: son pruebas que corren. Si un módulo rompe una, el build falla antes del merge.",
    "checks": [
      {
        "label": "PackageBoundaryTest",
        "detail": "Ningún paquete en packages/aurora/* importa App\\Modules. La frontera limpia entre satélite y host se verifica de forma dinámica sobre cada paquete del repo."
      },
      {
        "label": "ModuleManifestComplianceTest",
        "detail": "Por cada module.yaml, el wiring real (provider, migraciones, permisos, costuras de posteo) coincide con lo declarado. Lo generado y lo declarado no pueden divergir en silencio."
      },
      {
        "label": "PlatformContractsFreezeTest",
        "detail": "Congela la superficie del Aurora Platform SDK. Un cambio de firma de un contrato falla ruidoso en CI en vez de romper N módulos dependientes sin aviso."
      },
      {
        "label": "Accounting depends on no module",
        "detail": "La regla de gravedad como prueba: el kernel contable no importa ningún otro módulo. Todo orbita el GL; el GL no orbita a nadie."
      },
      {
        "label": "Invariantes de dinero",
        "detail": "El dinero es BCMath, nunca float: columnas numeric(15,2) con cast a string. Las cuentas se resuelven por determinación (nombre canónico), nunca por código que diverge entre plantillas."
      },
      {
        "label": "Núcleos puros endurecidos",
        "detail": "Calculadores y resolutores puros se prueban con property-based testing (eris) y mutation testing, para que las leyes que cumplen (conservación BCMath, idempotencia, round-trip void∘post) se sostengan ante cualquier entrada."
      }
    ]
  },
  "cta": {
    "heading": "Mira el loop sobre módulos reales",
    "body": "El módulo contable Quorum, Ventas, Inventario, CRM, Academia y Diferidos corren hoy sobre Aurora con este mismo ciclo. Revisa los casos de uso o habla con el equipo sobre el software empresarial que necesitas construir.",
    "primary": {
      "label": "Ver casos de uso",
      "href": "/casos-de-uso"
    },
    "secondary": {
      "label": "Hablar con el equipo",
      "href": "/contacto"
    }
  }
} as const;

export const casos = {
  "metaTitle": "Casos de uso — Aurora Platform",
  "metaDescription": "Qué se construye sobre Aurora: ERP y contabilidad, ventas, inventario, CRM, nómina, analítica. Cada sistema orbita el GL, postea por las costuras del SDK y evoluciona sin romper dependencias. Distingue lo que ya corre hoy de lo construible.",
  "heroEyebrow": "CASOS DE USO",
  "heroH1": "Software empresarial sobre una base contable",
  "heroLede": "Aurora no es un ERP. Es la plataforma sobre la que se construyen ERPs, CRM, nómina, inventario, ventas y analítica. Todo módulo orbita el libro mayor, postea por las costuras del SDK y evoluciona sin romper dependencias. Aquí se distingue lo que ya corre hoy de lo que es construible.",
  "intro": "El kernel de Aurora es el GL (libro mayor). Esa decisión —la regla de gravedad: todo módulo orbita el GL y ninguno escribe en journal_lines directo— define qué clase de software se construye bien sobre la plataforma. No es un app-builder horizontal para cualquier formulario; es una plataforma vertical para sistemas empresariales donde la consistencia operacional y la integridad financiera no son opcionales. Un módulo nace de un manifiesto declarativo procesado por Aurora Make, depende de los contratos del Platform SDK en lugar de las implementaciones del kernel, y reusa la infraestructura compartida de Aurora Runtime: multiempresa con aislamiento por esquema, panel, scope por empresa, numeración y entitlements. Los tipos de sistema descritos a continuación comparten esa cimentación; algunos ya corren ya construido sobre Aurora, otros son construibles con las mismas piezas.",
  "cases": [
    {
      "title": "ERP y contabilidad",
      "body": "El núcleo: gestión contable completa sobre el GL kernel. Plan de cuentas, pólizas con doble partida validada en BCMath, periodos contables con cierre y reapertura, cierre anual, libros (Diario, Mayor, Balance de Comprobación), estados financieros (Balance General, Estado de Resultados) y multimoneda. Las cuentas se resuelven por determinación —nombre canónico, nunca por código— de modo que el mismo concepto funciona en plantillas de cuentas distintas. Sobre esa base se encienden las áreas financieras: CxC y CxP con manejo de partidas abiertas y aging, bancos con conciliación de extractos, e import fiscal FEL/SAT.",
      "status": "ya construido sobre Aurora (módulo Quorum + financiero)",
      "mono": "Quorum"
    },
    {
      "title": "Ventas y facturación",
      "body": "Motor de comprobantes dirigido por tipo: maestros de producto y servicio, listas de precios y comprobantes fiscales que postean al GL por las costuras del SDK. Al postear se encienden solas las consecuencias contables —CxC, aging y Libro de Ventas— sin que el módulo conozca al módulo contable. Es el primer módulo front-office cuyo usuario es el operador de la PyME, no el contador. El endurecimiento cambiario, de crédito y de retenciones se resuelve por contratos del SDK, no por reglas quemadas.",
      "status": "ya construido sobre Aurora",
      "mono": "Ventas"
    },
    {
      "title": "Inventario y costeo",
      "body": "Valuación perpetua con costeo promedio ponderado: stock y kardex valuado que postea al GL por las costuras del SDK. El COGS al vender se dispara por evento del SDK entre Ventas e Inventario —Ventas solicita consumo de stock, Inventario responde— a través de contratos como ChecksStockAvailability y ResolvesDefaultWarehouse, sin que ninguno de los dos importe al otro ni al kernel contable. La consistencia entre lo físico y lo contable es un invariante, no una rutina de conciliación nocturna.",
      "status": "ya construido sobre Aurora",
      "mono": "Inventario"
    },
    {
      "title": "CRM y front-office",
      "body": "Gestión de relaciones y pipeline comercial: prospectos, oportunidades, etapas y conversión a cliente. Fue el primer módulo nacido del generador aurora:make-module y vive como paquete Aurora con frontera limpia. Cuando una operación comercial debe tener efecto financiero, lo hace por las mismas costuras de posteo del SDK. El módulo company-scoped reusa multiempresa, numeración y entitlements del Runtime sin reimplementarlos.",
      "status": "ya construido sobre Aurora",
      "mono": "CRM"
    },
    {
      "title": "Periodificación, nómina y módulos de cálculo",
      "body": "Diferidos es el motor de periodificación —diferidos y provisiones auto-reversibles— y fue el primer paquete que postea al GL directamente por los contratos CreatesJournalEntries / PostsJournalEntries: el satélite arma el asiento y el kernel lo ejecuta. Ese mismo patrón es la plantilla para cualquier módulo de cálculo recurrente con efecto contable, como nómina: devengos, retenciones y provisiones que se vuelven asientos por las costuras del SDK, con las reglas del país inyectadas por strategy en lugar de quemadas en el código.",
      "status": "Diferidos ya construido sobre Aurora · nómina construible con el mismo patrón",
      "mono": "Deferrals"
    },
    {
      "title": "Capacitación y analítica",
      "body": "Academia ya corre como paquete Aurora; ilustra la segunda forma válida de integrarse: emite eventos de dominio y un módulo-kernel postea, sin posteo propio. Toda actividad de los módulos termina en el GL como hechos contables sobre un esquema único por tenant, lo que vuelve a la analítica un consumidor natural: reportes y tableros que leen un libro mayor consistente en vez de reconciliar fuentes dispersas. Reportería sobre saldos materializados y exportadores son construibles con los mismos cimientos.",
      "status": "Academia ya construido sobre Aurora · analítica construible sobre el GL",
      "mono": "Academy"
    }
  ],
  "why": {
    "heading": "Por qué Aurora es la base adecuada",
    "points": [
      "Integridad financiera por construcción: todo módulo orbita el GL y ninguno escribe en journal_lines directo. El dinero es BCMath sobre columnas numeric(15,2), nunca float, y las cuentas se resuelven por determinación canónica, no por código. El asiento siempre lo ejecuta el kernel.",
      "Consistencia operacional: los módulos no se acoplan entre sí. Ventas solicita consumo de stock por evento y Inventario responde; ninguno importa al otro ni al módulo contable. Las consecuencias —CxC, COGS, Libro de Ventas— se encienden solas por las costuras del SDK.",
      "Evolución sostenible: los módulos dependen de contratos estables del Platform SDK, no de implementaciones del kernel. PlatformContractsFreezeTest congela la superficie del SDK; un cambio de firma falla ruidoso en CI en vez de romper N módulos en silencio.",
      "Gobernanza verificada: la arquitectura se gobierna con ADRs e invariantes transversales validados en cada build por fitness functions —un paquete nunca importa App\\Modules, el wiring real coincide con el manifiesto, el módulo contable no depende de ningún otro.",
      "Infraestructura compartida que no se reescribe: multiempresa con aislamiento por esquema por tenant, CompanyContext como fuente de verdad fuera de HTTP, panel, scope por empresa, numeración y entitlements vienen del Runtime. Un módulo nuevo nace cableado.",
      "Costo marginal interno bajo: un módulo nace de un manifiesto module.yaml procesado por un generador determinístico que emite un paquete Aurora ya cableado. El manifiesto es scaffold y contrato; la lógica de dominio se escribe a mano sobre el esqueleto verde."
    ]
  },
  "cta": {
    "heading": "Evalúa qué sistema construir sobre Aurora",
    "body": "Si necesitas un sistema empresarial con consistencia operacional, integridad financiera y capacidad de evolucionar sin acumular deuda, conversemos sobre cómo se modela sobre Aurora —lo que ya corre hoy y lo que es construible.",
    "primary": {
      "label": "Contacto",
      "href": "/contacto"
    },
    "secondary": {
      "label": "Ver cómo funciona el loop",
      "href": "/como-funciona"
    }
  }
} as const;

export const capabilities = [make, platformSdk, runtime, architecture];
