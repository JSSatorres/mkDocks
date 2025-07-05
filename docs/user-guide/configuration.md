# Configuración

Aprende a personalizar tu sitio MkDocs para adaptarlo a tus necesidades específicas.

## Archivo de configuración principal

El archivo `mkdocs.yml` es el corazón de tu proyecto. Aquí se define todo el comportamiento del sitio.

### Estructura básica

```yaml
# Información del sitio
site_name: Mi Documentación
site_description: Descripción del proyecto
site_author: Tu Nombre
site_url: https://mi-sitio.com

# Configuración del tema
theme:
  name: material
  language: es

# Navegación
nav:
  - Inicio: index.md
  - Guía: user-guide/index.md
```

## Configuración del tema Material

### Paleta de colores

=== "Modo único"

    ```yaml
    theme:
      name: material
      palette:
        scheme: default
        primary: indigo
        accent: blue
    ```

=== "Modo claro/oscuro"

    ```yaml
    theme:
      name: material
      palette:
        # Modo claro
        - scheme: default
          primary: indigo
          accent: indigo
          toggle:
            icon: material/brightness-7
            name: Cambiar a modo oscuro
        # Modo oscuro
        - scheme: slate
          primary: indigo
          accent: indigo
          toggle:
            icon: material/brightness-4
            name: Cambiar a modo claro
    ```

### Características avanzadas

```yaml
theme:
  name: material
  features:
    # Navegación
    - navigation.tabs # Pestañas principales
    - navigation.tabs.sticky # Pestañas fijas
    - navigation.sections # Secciones expandibles
    - navigation.expand # Expandir automáticamente
    - navigation.indexes # Páginas índice

    # Búsqueda
    - search.highlight # Resaltar resultados
    - search.suggest # Sugerencias
    - search.share # Compartir búsquedas

    # Contenido
    - content.code.copy # Copiar código
    - content.code.select # Seleccionar código
    - content.tooltips # Tooltips
    - toc.follow # Seguir scroll en TOC
```

## Configuración de plugins

### Plugin de búsqueda

```yaml
plugins:
  - search:
      lang: es
      separator: '[\s\-,:!=\[\]()"`/]+|\.(?!\d)|&[lg]t;|(?!\b)(?=[A-Z][a-z])'
```

### Plugin de fechas Git

```yaml
plugins:
  - git-revision-date-localized:
      enable_creation_date: true
      type: datetime
      locale: es
      fallback_to_build_date: true
```

### Plugin de minificación

```yaml
plugins:
  - minify:
      minify_html: true
      minify_js: true
      minify_css: true
      htmlmin_opts:
        remove_comments: true
      cache_safe: true
```

## Extensiones de Markdown

### Extensiones básicas

```yaml
markdown_extensions:
  - abbr # Abreviaciones
  - admonition # Cajas de información
  - attr_list # Atributos en elementos
  - def_list # Listas de definición
  - footnotes # Notas al pie
  - md_in_html # Markdown dentro de HTML
  - toc: # Tabla de contenidos
      permalink: true
      title: "En esta página"
```

### Extensiones PyMdown

```yaml
markdown_extensions:
  - pymdownx.highlight:
      anchor_linenums: true
      line_spans: __span
      pygments_lang_class: true
  - pymdownx.inlinehilite
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.tasklist:
      custom_checkbox: true
```

## Navegación personalizada

### Navegación manual

```yaml
nav:
  - Inicio: index.md
  - Guía de Usuario:
      - user-guide/index.md
      - Introducción: user-guide/introduction.md
      - Instalación: user-guide/installation.md
  - API:
      - api/index.md
      - Referencia: api/reference.md
  - FAQ: faq.md
```

### Navegación automática

Usando el plugin `awesome-pages`:

```yaml
plugins:
  - awesome-pages
```

Crear archivo `.pages` en cada carpeta:

```yaml title="docs/.pages"
nav:
  - Inicio: index.md
  - user-guide
  - development
  - examples
  - FAQ: faq.md
```

## Personalización visual

### CSS personalizado

```yaml
extra_css:
  - stylesheets/extra.css
```

```css title="stylesheets/extra.css"
/* Personalizar colores */
:root {
  --md-primary-fg-color: #1976d2;
  --md-primary-fg-color--light: #42a5f5;
  --md-primary-fg-color--dark: #1565c0;
}

/* Personalizar fuentes */
.md-typeset {
  font-size: 0.8rem;
  line-height: 1.6;
}

/* Personalizar código */
.md-typeset code {
  background-color: var(--md-code-bg-color);
  border-radius: 0.2rem;
  padding: 0.1rem 0.3rem;
}
```

### JavaScript personalizado

```yaml
extra_javascript:
  - javascripts/extra.js
  - https://unpkg.com/mermaid@10.0.0/dist/mermaid.min.js
```

## Variables de entorno

### Para desarrollo

```yaml
# mkdocs.yml
site_url: !ENV [SITE_URL, "http://localhost:8000"]
repo_url: !ENV [REPO_URL, "https://github.com/usuario/repo"]
```

### Para producción

```bash
# .env
SITE_URL=https://mi-sitio.com
REPO_URL=https://github.com/mi-usuario/mi-repo
```

## Configuración de despliegue

### GitHub Pages

```yaml
# En mkdocs.yml
site_url: https://usuario.github.io/repositorio/
repo_url: https://github.com/usuario/repositorio
edit_uri: edit/main/docs/
```

### Netlify

```yaml title="netlify.toml"
[build]
  command = "mkdocs build"
  publish = "site"

[build.environment]
  PYTHON_VERSION = "3.11"
```

## Mejores prácticas

!!! tip "Organización" - Usa una estructura de carpetas lógica - Agrupa contenido relacionado - Mantén nombres de archivo descriptivos

!!! warning "Rendimiento" - No abuses de los plugins - Optimiza imágenes antes de subirlas - Usa CDN para recursos externos

!!! info "SEO" - Define meta descripciones - Usa títulos descriptivos - Incluye sitemap automático

## Próximo paso

¡Excelente! Ya sabes cómo configurar tu sitio. Explora la sección de [desarrollo](../development/index.md) para funcionalidades avanzadas.
