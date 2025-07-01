# Desarrollo

Sección dedicada a desarrolladores que quieren contribuir o extender este proyecto de documentación.

## Contenido técnico

Esta sección incluye información avanzada para desarrolladores:

- **[Arquitectura](architecture.md)**: Estructura técnica del proyecto
- **[API Reference](api-reference.md)**: Documentación de APIs y funciones
- **[Contribuir](contributing.md)**: Como contribuir al proyecto

## Herramientas de desarrollo

### Entorno de desarrollo recomendado

- **Python 3.8+** con entorno virtual
- **Visual Studio Code** con extensiones de Markdown
- **Git** para control de versiones
- **GitHub CLI** para automatización

### Scripts útiles

Algunos comandos comunes para desarrollo:

```bash
# Desarrollo local
python -m mkdocs serve --dev-addr=127.0.0.1:8000

# Build con verbose
python -m mkdocs build --verbose

# Verificar enlaces
python -m mkdocs build --strict
```

## Estructura del código

```
proyecto/
├── docs/                 # Documentación fuente
├── mkdocs.yml           # Configuración principal
├── overrides/           # Plantillas personalizadas
├── stylesheets/         # Estilos CSS
├── javascripts/         # Scripts JavaScript
└── site/               # Sitio generado (git ignore)
```

## Flujo de trabajo

1. **Fork** del repositorio
2. **Clone** tu fork localmente
3. **Crear** branch para tu feature
4. **Desarrollar** y probar localmente
5. **Commit** con mensajes descriptivos
6. **Push** a tu fork
7. **Pull Request** al repositorio principal

!!! info "Nota para desarrolladores"
Esta sección se expande según las necesidades específicas de tu proyecto.
