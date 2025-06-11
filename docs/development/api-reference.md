# API Reference

Esta sección proporciona una referencia completa de la API y configuraciones disponibles en este proyecto de documentación.

## Configuración Principal

### Site Metadata

```yaml
# Información básica del sitio
site_name: string # Nombre del sitio
site_description: string # Descripción del sitio
site_author: string # Autor del sitio
site_url: string # URL base del sitio
```

### Repository Settings

```yaml
# Configuración del repositorio
repo_name: string # Nombre del repositorio
repo_url: string # URL del repositorio
edit_uri: string # URI para editar páginas
```

## Theme Configuration

### Material Theme Options

```yaml
theme:
  name: material
  custom_dir: string # Directorio de personalizaciones
  language: string # Código de idioma (es, en, etc.)
  features: [] # Lista de características
  palette: [] # Configuración de colores
  font: # Configuración de fuentes
    text: string
    code: string
  icon: # Configuración de iconos
    logo: string
    repo: string
```

### Features Disponibles

| Feature                  | Descripción                      |
| ------------------------ | -------------------------------- |
| `navigation.tabs`        | Pestañas de navegación principal |
| `navigation.tabs.sticky` | Pestañas fijas en scroll         |
| `navigation.sections`    | Secciones colapsables            |
| `navigation.expand`      | Expansión automática             |
| `navigation.indexes`     | Páginas índice de sección        |
| `navigation.instant`     | Navegación instantánea           |
| `search.highlight`       | Resaltado en búsqueda            |
| `search.suggest`         | Sugerencias de búsqueda          |
| `content.code.copy`      | Botón copiar código              |
| `content.code.select`    | Selección de código              |
| `content.tabs.link`      | Enlaces entre pestañas           |

## Plugins API

### Search Plugin

```yaml
plugins:
  - search:
      lang: string # Idioma de búsqueda
      separator: string # Separador de palabras
      prebuild_index: bool # Pre-construir índice
```

### Awesome Pages Plugin

```yaml
plugins:
  - awesome-pages:
      filename: string # Nombre del archivo de configuración
      collapse_single_pages: bool
      strict: bool
```

### Git Revision Date Plugin

```yaml
plugins:
  - git-revision-date-localized:
      enable_creation_date: bool
      type: string # date, datetime, iso_date, iso_datetime
      locale: string # Código de locale
      fallback_to_build_date: bool
```

### Minify Plugin

```yaml
plugins:
  - minify:
      minify_html: bool
      minify_js: bool
      minify_css: bool
      htmlmin_opts: {} # Opciones de htmlmin
      cache_safe: bool
```

## Markdown Extensions

### Core Extensions

```yaml
markdown_extensions:
  - abbr # Abreviaciones
  - admonition # Cajas de información
  - attr_list # Atributos en elementos
  - def_list # Listas de definición
  - footnotes # Notas al pie
  - md_in_html # Markdown en HTML
  - toc: # Tabla de contenidos
      permalink: bool
      title: string
```

### PyMdown Extensions

```yaml
markdown_extensions:
  - pymdownx.arithmatex: # Matemáticas
      generic: bool
  - pymdownx.betterem: # Énfasis mejorado
      smart_enable: string
  - pymdownx.caret # Texto sobrescrito
  - pymdownx.details # Detalles colapsables
  - pymdownx.emoji: # Emojis
      emoji_generator: function
      emoji_index: function
  - pymdownx.highlight: # Resaltado de código
      anchor_linenums: bool
      line_spans: string
      pygments_lang_class: bool
  - pymdownx.inlinehilite # Código inline
  - pymdownx.keys # Teclas del teclado
  - pymdownx.mark # Texto marcado
  - pymdownx.smartsymbols # Símbolos inteligentes
  - pymdownx.superfences: # Bloques de código avanzados
      custom_fences: []
  - pymdownx.tabbed: # Contenido en pestañas
      alternate_style: bool
  - pymdownx.tasklist: # Listas de tareas
      custom_checkbox: bool
  - pymdownx.tilde # Texto tachado
```

## Navigation Structure

### Basic Navigation

```yaml
nav:
  - Home: index.md
  - Section:
      - subsection/index.md
      - Page: subsection/page.md
```

### Advanced Navigation

```yaml
nav:
  - Section Name:
      - subsection/index.md # Página índice
      - Title: page.md # Página con título personalizado
      - Another: page2.md
```

## Extra Configuration

### Social Links

```yaml
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/username
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/username
```

### Version Provider

```yaml
extra:
  version:
    provider: mike # Versionado con mike
    default: stable
```

## Custom Files

### CSS Personalizado

```yaml
extra_css:
  - stylesheets/extra.css
  - path/to/custom.css
```

### JavaScript Personalizado

```yaml
extra_javascript:
  - javascripts/extra.js
  - https://example.com/script.js
```

## Comandos CLI

### Comandos Básicos

```bash
# Crear nuevo proyecto
mkdocs new project-name

# Servidor de desarrollo
mkdocs serve

# Construir sitio
mkdocs build

# Desplegar a GitHub Pages
mkdocs gh-deploy
```

### Opciones Avanzadas

```bash
# Servidor con configuración personalizada
mkdocs serve --config-file custom.yml

# Construcción con directorio personalizado
mkdocs build --site-dir custom-output

# Despliegue con mensaje personalizado
mkdocs gh-deploy --message "Deploy version 1.0"
```

## Variables de Entorno

```bash
# Configurar tema
MKDOCS_THEME=material

# Configurar idioma
MKDOCS_LANG=es

# Habilitar modo desarrollo
MKDOCS_DEV=true
```

## Códigos de Estado

| Código | Descripción            |
| ------ | ---------------------- |
| 0      | Éxito                  |
| 1      | Error general          |
| 2      | Error de configuración |
| 3      | Error de construcción  |

## Ejemplos de Uso

### Configuración Mínima

```yaml
site_name: Mi Documentación
theme:
  name: material
nav:
  - Inicio: index.md
```

### Configuración Avanzada

```yaml
site_name: Documentación Profesional
theme:
  name: material
  features:
    - navigation.tabs
    - search.highlight
plugins:
  - search
  - minify
markdown_extensions:
  - admonition
  - pymdownx.highlight
nav:
  - Inicio: index.md
  - Guía: guide/index.md
```

## Troubleshooting

### Errores Comunes

| Error                   | Causa                       | Solución                         |
| ----------------------- | --------------------------- | -------------------------------- |
| `Config file not found` | Archivo mkdocs.yml faltante | Crear archivo de configuración   |
| `Theme not found`       | Tema no instalado           | Instalar tema con pip            |
| `Plugin error`          | Plugin mal configurado      | Revisar configuración del plugin |

### Logs de Debug

```bash
# Habilitar logs verbosos
mkdocs serve --verbose

# Mostrar solo errores
mkdocs build --quiet
```
