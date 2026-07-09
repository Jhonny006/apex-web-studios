# Apex Web Studios

Landing page bilingüe (EN/ES) para una agencia de diseño y desarrollo web, con estética **dark brutalist-editorial**: fondo casi negro, acento lima eléctrico, tipografía display técnica y cero border-radius.

> **We build websites that convert.** — Est. Brooklyn, NY

---

## Stack

| Tecnología | Uso |
|---|---|
| [Astro 7](https://astro.build) | Framework — sitio 100% estático, JS mínimo |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos — tokens de diseño vía `@theme` en CSS |
| TypeScript | Contenido tipado con contrato `Dictionary` |
| Google Fonts | Chakra Petch (titulares) · DM Sans (cuerpo) · JetBrains Mono (etiquetas) |

Sin frameworks de UI ni librerías de animación: todas las interacciones son CSS + JavaScript vanilla (3 scripts en total).

## Características

- **Bilingüe con i18n nativo de Astro** — inglés en `/`, español en `/es/`, selector EN/ES en el navbar, `hreflang` y meta tags por idioma.
- **Navbar de dos estados** — transparente en el tope, oscuro con blur al hacer scroll, con destello único en la línea inferior.
- **Menú móvil** — overlay a pantalla completa con animación de deslizamiento y bloqueo de scroll.
- **Animaciones** — coreografía de entrada del hero, marquee infinito sin costuras, reveals al scroll con IntersectionObserver, indicador de scroll animado.
- **Imágenes optimizadas** — `astro:assets` genera variantes WebP responsive (53 KB → 1-14 KB).
- **Accesibilidad** — `prefers-reduced-motion` respetado, formulario con labels asociados y `autocomplete`, ARIA en menú y selector de idioma, focus visible.
- **Responsive real** — diseñado para el idioma más largo (ES); breakpoints verificados en 375 / 768 / 1024 / 1280 px.

## Estructura

```text
/
├── astro.config.mjs        # Config: i18n (en/es) + Tailwind vía Vite
├── public/
│   └── favicon.svg         # Marca "A" (ápex) en lima
└── src/
    ├── assets/             # Imágenes optimizadas por astro:assets
    ├── components/
    │   ├── Header.astro    # Navbar 2 estados + menú móvil
    │   ├── Hero.astro      # Titular + coreografía de entrada
    │   ├── Marquee.astro   # Cinta infinita de servicios
    │   ├── Stats.astro     # Métricas (hairline grid)
    │   ├── Portfolio.astro # Proyectos seleccionados
    │   ├── Services.astro  # Rejilla 2×2 de servicios
    │   ├── Process.astro   # Proceso en 5 pasos
    │   ├── Studio.astro    # Equipo + foto del estudio
    │   ├── CtaBanner.astro # Banda lima de conversión
    │   ├── Contact.astro   # Datos + formulario
    │   ├── Footer.astro
    │   └── ui/             # Piezas reutilizables (SectionHeading, LangSwitch)
    ├── i18n/
    │   ├── index.ts        # Contrato Dictionary + helpers de idioma
    │   ├── en.ts           # Contenido en inglés
    │   └── es.ts           # Contenido en español
    ├── layouts/
    │   └── Layout.astro    # Head, fuentes, hreflang, script de reveals
    ├── pages/
    │   ├── index.astro     # Ruta / (EN)
    │   └── es/index.astro  # Ruta /es/ (ES)
    └── styles/
        └── global.css      # Tokens @theme + estilos base
```

## Sistema de diseño

Los tokens viven en [`src/styles/global.css`](src/styles/global.css) y generan las utilidades de Tailwind:

| Token | Valor | Clases |
|---|---|---|
| `night` | `#0a0a0a` | `bg-night`, `text-night` |
| `surface` | `#141414` | `bg-surface` |
| `line` | `#262626` | `border-line`, `divide-line` |
| `ink` / `ink-muted` | `#f5f5f5` / `#8f8f8f` | `text-ink`, `text-ink-muted` |
| `accent` | `#aaff00` | `bg-accent`, `text-accent` |

## Contenido e idiomas

Todo el texto del sitio vive en `src/i18n/` — los componentes no contienen copy. Para editar contenido o añadir un proyecto/servicio, edita `en.ts` **y** `es.ts`; TypeScript marca error si un idioma queda incompleto.

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Dev server en `localhost:4321` |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Sirve el build localmente |

## Roadmap

- [ ] Backend del formulario de contacto (Formspree / Resend / Astro Action)
- [ ] Foto real del estudio (reemplazar `src/assets/studio.jpg`)
- [ ] URLs reales de proyectos del portfolio y redes sociales
- [ ] Despliegue + auditoría Lighthouse
