<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instrucciones para GitHub Copilot - Proyecto MkDocs

## Contexto del Proyecto

Este es un proyecto de documentación profesional construido con **MkDocs** y **Material Theme**. El objetivo es proporcionar una base sólida y bien estructurada para crear documentación técnica de alta calidad.

## Tecnologías Utilizadas

- **MkDocs**: Generador de sitios estáticos para documentación
- **Material Theme**: Tema moderno y responsive
- **Python**: Lenguaje base para MkDocs
- **Markdown**: Formato de escritura principal
- **YAML**: Configuración del proyecto
- **CSS/JavaScript**: Personalizaciones del tema

## Estructura del Proyecto

```
mkDocs/
├── docs/                     # Contenido de documentación
│   ├── index.md             # Página principal
│   ├── user-guide/          # Guía de usuario
│   ├── development/         # Documentación técnica
│   ├── examples/            # Ejemplos prácticos
│   ├── faq.md              # Preguntas frecuentes
│   └── changelog.md        # Registro de cambios
├── overrides/              # Personalizaciones del tema
├── stylesheets/            # CSS personalizado
├── javascripts/            # JavaScript personalizado
├── mkdocs.yml             # Configuración principal
└── requirements.txt       # Dependencias Python
```

## Patrones y Convenciones

### Escritura en Markdown

1. **Títulos**: Usar jerarquía H1 → H6 apropiada
2. **Enlaces**: Preferir enlaces relativos entre páginas
3. **Imágenes**: Colocar en carpeta `docs/images/` con nombres descriptivos
4. **Código**: Usar bloques con especificación de lenguaje

### Configuración MkDocs

1. **Plugins**: Solo incluir plugins necesarios y bien configurados
2. **Navegación**: Mantener estructura lógica y no muy profunda
3. **Tema**: Aprovechar características de Material Theme
4. **SEO**: Incluir meta descriptions y títulos descriptivos

### Estilo de Código

1. **YAML**: Indentación de 2 espacios, comentarios descriptivos
2. **CSS**: Usar variables CSS para consistencia
3. **JavaScript**: ES6+, funciones modulares, comentarios JSDoc
4. **Python**: Seguir PEP 8, docstrings para funciones

## Características Específicas

### Admonitions Disponibles

```markdown
!!! note "Título"
Contenido de la nota

!!! tip "Consejo"
Información útil

!!! warning "Advertencia"
Información importante

!!! danger "Peligro"
Información crítica

!!! example "Ejemplo"
Código o ejemplo práctico

!!! info "Información"
Datos adicionales
```

### Extensiones de Markdown Habilitadas

- **Tablas**: Soporte completo para tablas
- **Listas de tareas**: `- [x] Tarea completada`
- **Matemáticas**: Soporte MathJax para fórmulas
- **Diagramas**: Mermaid para diagramas de flujo
- **Pestañas**: Contenido organizado en pestañas
- **Resaltado de código**: Con números de línea y copiado

### Plugins Configurados

1. **search**: Búsqueda avanzada en español
2. **awesome-pages**: Navegación automática mejorada
3. **git-revision-date-localized**: Fechas de modificación
4. **minify**: Optimización automática de archivos

## Mejores Prácticas para Copilot

### Al Generar Contenido

1. **Idioma**: Priorizar español para contenido, inglés para código
2. **Estructura**: Seguir la jerarquía de carpetas establecida
3. **Formato**: Usar Markdown semántico y bien estructurado
4. **Enlaces**: Crear referencias cruzadas entre secciones

### Al Modificar Configuración

1. **mkdocs.yml**: Validar sintaxis YAML antes de sugerir cambios
2. **Plugins**: Verificar compatibilidad entre plugins
3. **Tema**: Respetar configuración de Material Theme
4. **Performance**: Considerar impacto en tiempo de construcción

### Al Escribir Código

1. **CSS**: Usar variables CSS existentes, seguir convenciones BEM
2. **JavaScript**: Funciones puras cuando sea posible, manejo de errores
3. **Python**: Scripts de utilidad bien documentados
4. **Markdown**: Aprovechar extensiones habilitadas

## Comandos Útiles

```bash
# Desarrollo local
python -m mkdocs serve

# Construcción
python -m mkdocs build

# Despliegue GitHub Pages
python -m mkdocs gh-deploy

# Verificar configuración
python -m mkdocs config
```

## Recursos de Referencia

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material Theme](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)
- [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/)

## Notas Importantes

- **Compatibilidad**: Mantener compatibilidad con Python 3.8+
- **Performance**: Optimizar para tiempos de construcción rápidos
- **Accesibilidad**: Seguir estándares WCAG cuando sea aplicable
- **SEO**: Incluir metadatos apropiados para motores de búsqueda

Cuando generes contenido o código para este proyecto, ten en cuenta estas convenciones y el contexto específico de documentación técnica profesional.
