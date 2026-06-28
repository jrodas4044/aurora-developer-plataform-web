# Aurora — sitio web

Sitio de marketing de **Aurora**, el sistema operativo financiero AI-native para las empresas de Latinoamérica y los grupos que las controlan. Construido con **Astro 6** y **Tailwind CSS 4**: sin frameworks de UI, sin JavaScript de cliente más allá de un pequeño script de navegación y una visualización con three.js, salida 100% estática.

**Stack:** Astro 6 · Tailwind 4 · TypeScript · pnpm · despliegue en Vercel.

## Qué hay en el sitio

El sitio cuenta dos historias de producto sobre la misma base de diseño:

- **Aurora (producto financiero)** — el ERP AI-native: visión, módulos, la capa de IA (Aura) y la ingesta de datos fiscales.
  `/aurora-erp` · `/modulos` · `/aurora-ia` · `/fiscal-latam`
- **Aurora Platform (framework)** — la capa de abajo sobre Laravel: el kernel contable, la fábrica de módulos y los contratos verificados.
  `/aurora-platform` · `/aurora-make` · `/aurora-platform-sdk` · `/aurora-runtime` · `/aurora-architecture`
- **Partners** — dos audiencias: ISV que construyen sobre la plataforma, y quienes implementan o revenden el ERP.
  `/partners-desarrollo` · `/partners-soluciones`
- **Resto del sitio** — home, casos de uso, cómo funciona, fundador, contacto, blog y 404.
  `/` · `/casos-de-uso` · `/como-funciona` · `/fundador` · `/contacto` · `/blog`

Incluye además: navegación con dropdowns, OG image, sitemap, `robots.txt`, URLs canónicas, página 404 y soporte de blog vía content collection.

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # salida estática en dist/
pnpm preview    # previsualiza el build
```

Requiere **Node 22.12+**.

## Estructura

```
src/
  components/      Componentes .astro (Nav, Footer, CapabilityPage, Hero, etc.)
  data/            Contenido de las páginas, separado de la presentación
    product.ts     Sección Producto (Aurora ERP, Módulos, Aura·IA, Datos) — a mano
    pages.ts       Sección Plataforma (Make, SDK, Runtime, Architecture) — auto-generado
    partners.ts    Páginas de Partners — a mano
  layouts/
    BaseLayout.astro   Shell HTML: meta, OG, fuentes, canonical
  pages/           Una ruta por archivo .astro
  content/blog/    Posts en Markdown (content collection)
  styles/global.css  Design tokens (@theme) + estilos base
astro.config.mjs   Config de Astro: site URL, i18n, sitemap, tema de código
```

**Contenido separado de presentación.** Las páginas de capacidades (producto, plataforma, partners) son data-driven: el contenido vive en `src/data/*.ts` y se renderiza con el template `CapabilityPage.astro`. Para editar copy normalmente basta con tocar los archivos de `data/`, no los componentes.

> `src/data/pages.ts` está marcado como **auto-generado** por un workflow de contenido. Es editable a mano, pero ten en cuenta que una regeneración puede sobrescribirlo.

## Personalización

**Colores y tipografía** viven en el bloque `@theme` de [`src/styles/global.css`](src/styles/global.css): superficies, hairlines, tres niveles de texto y el par de acento violeta→cian. Los componentes solo usan tokens, así que cambiar el bloque reestiliza todo el sitio. [`DESIGN.md`](DESIGN.md) documenta el sistema completo.

**Datos del sitio** a revisar al desplegar a producción:

- `site` URL en [`astro.config.mjs`](astro.config.mjs) (hoy `https://aurora.example/`).
- Meta y descripción por defecto en [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro).
- Wordmark en [`src/components/Logo.astro`](src/components/Logo.astro) y la línea de empresa en [`src/components/Footer.astro`](src/components/Footer.astro).
- OG image en [`public/og.png`](public/og.png).

## Blog

Los posts son archivos Markdown en `src/content/blog/`. El esquema (ver [`src/content.config.ts`](src/content.config.ts)) acepta:

| Campo | Tipo | Requerido |
|---|---|---|
| `title` | string | sí |
| `description` | string | sí |
| `pubDate` | date | sí |
| `author` | string | no (default `Aurora`) |
| `authorRole` | string | no |
| `tags` | string[] | no |
| `draft` | boolean | no (default `false`) |

La ruta deriva del nombre del archivo.

## Despliegue

Salida estática en `dist/` (`pnpm build`). Configurado para **Vercel** con `trailingSlash: true` ([`vercel.json`](vercel.json)); funciona en cualquier host estático.

## Internacionalización

[`astro.config.mjs`](astro.config.mjs) define routing i18n (`es` por defecto en la raíz, `en` bajo `/en/`). El contenido enviado hoy es en español; la estructura para `/en/` está lista cuando se traduzca.

## Créditos

Partió del tema [Pulsar Lite](https://pulsar-lite.cometthemes.com) (MIT) y se reescribió como el sitio de Aurora. Ver [`LICENSE`](LICENSE).
