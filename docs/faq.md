# Preguntas Frecuentes (FAQ)

Respuestas a las preguntas más comunes sobre el uso de MkDocs y este proyecto de documentación.

## Instalación y Configuración

### ¿Qué versión de Python necesito?

**Python 3.8 o superior** es requerido. Se recomienda usar la versión más reciente estable.

```bash
python --version
# Debe mostrar Python 3.8+
```

### ¿Puedo usar MkDocs sin conocimientos técnicos?

¡Absolutamente! MkDocs está diseñado para ser simple:

- Escribe en **Markdown** (similar a WhatsApp o Discord)
- Configuración mínima requerida
- Vista previa instantánea
- No necesitas HTML, CSS o JavaScript

### ¿Cómo instalo plugins adicionales?

```bash
# Instalar un plugin específico
pip install mkdocs-plugin-name

# Agregarlo a mkdocs.yml
plugins:
  - plugin-name
```

## Uso y Escritura

### ¿Cómo agrego imágenes?

1. **Coloca la imagen** en la carpeta `docs/` (ej: `docs/images/`)
2. **Referénciate** con ruta relativa:

```markdown
![Descripción](images/mi-imagen.png)
```

### ¿Puedo usar HTML en Markdown?

Sí, pero con limitaciones. MkDocs permite HTML básico:

```html
<div class="custom-class">
  <p>HTML personalizado</p>
</div>
```

Para HTML avanzado, habilita la extensión:

```yaml
markdown_extensions:
  - md_in_html
```

### ¿Cómo creo enlaces entre páginas?

```markdown
# Enlace relativo (recomendado)

[Texto del enlace](../otra-seccion/pagina.md)

# Enlace absoluto

[Texto del enlace](/user-guide/installation/)
```

## Temas y Personalización

### ¿Puedo cambiar el tema?

Sí, MkDocs soporta múltiples temas:

```yaml
# Tema Material (recomendado)
theme:
  name: material

# Tema ReadTheDocs
theme:
  name: readthedocs

# Tema personalizado
theme:
  name: null
  custom_dir: mi-tema/
```

### ¿Cómo personalizo colores?

```yaml
theme:
  name: material
  palette:
    primary: blue # Color principal
    accent: light-blue # Color de acento
```

Colores disponibles: `red`, `pink`, `purple`, `deep-purple`, `indigo`, `blue`, `light-blue`, `cyan`, `teal`, `green`, `light-green`, `lime`, `yellow`, `amber`, `orange`, `deep-orange`, `brown`, `grey`, `blue-grey`

### ¿Puedo agregar CSS personalizado?

```yaml
extra_css:
  - stylesheets/extra.css
```

```css title="stylesheets/extra.css"
/* Tu CSS personalizado */
.mi-clase {
  color: #ff6b6b;
  font-weight: bold;
}
```

## Despliegue

### ¿Dónde puedo hospedar mi documentación gratis?

1. **GitHub Pages** (recomendado)

   ```bash
   mkdocs gh-deploy
   ```

2. **Netlify**

   - Conecta tu repositorio
   - Build command: `mkdocs build`
   - Publish directory: `site`

3. **Vercel**
   - Similar a Netlify
   - Soporte automático para MkDocs

### ¿Cómo configuro un dominio personalizado?

Para GitHub Pages:

1. Agrega archivo `CNAME` en `docs/`:

   ```
   mi-dominio.com
   ```

2. Configura DNS en tu proveedor:
   ```
   CNAME www 185.199.108.153
   ```

## Problemas Comunes

### "Module not found" al usar plugins

**Problema**: Plugin instalado pero no funciona.

**Solución**:

```bash
# Verificar instalación
pip list | grep mkdocs

# Reinstalar si es necesario
pip uninstall mkdocs-plugin-name
pip install mkdocs-plugin-name
```

### Sitio no se actualiza en GitHub Pages

**Problema**: Cambios no aparecen en el sitio publicado.

**Solución**:

```bash
# Forzar actualización
mkdocs gh-deploy --force

# Verificar branch gh-pages
git checkout gh-pages
git log --oneline
```

### Errores de encoding en Windows

**Problema**: Caracteres especiales no se muestran correctamente.

**Solución**:

```yaml
# En mkdocs.yml
site_description: "Descripción con acentos"
# Guardar archivos en UTF-8
```

### Servidor local no inicia

**Problema**: `mkdocs serve` falla.

**Soluciones**:

```bash
# Verificar puerto
mkdocs serve --dev-addr=127.0.0.1:8001

# Modo verbose para diagnosticar
mkdocs serve --verbose

# Verificar configuración
mkdocs config
```

## Rendimiento y Optimización

### ¿Cómo acelero la construcción del sitio?

```yaml
# Usar plugin de minificación
plugins:
  - minify:
      minify_html: true
# Optimizar imágenes externamente
# Usar menos plugins innecesarios
```

### ¿Cuántas páginas puedo tener?

MkDocs maneja **miles de páginas** sin problemas. Para sitios muy grandes (>1000 páginas):

- Usa navegación manual en lugar de automática
- Considera dividir en múltiples sitios
- Optimiza imágenes y recursos

### ¿Puedo usar MkDocs para documentación multiidioma?

Sí, pero requiere configuración manual:

```bash
# Estructura recomendada
docs/
├── en/
│   └── index.md
├── es/
│   └── index.md
└── fr/
    └── index.md
```

## Soporte y Comunidad

### ¿Dónde obtengo ayuda adicional?

- **Documentación oficial**: [mkdocs.org](https://www.mkdocs.org/)
- **GitHub Issues**: Para reportar bugs
- **Stack Overflow**: Tag `mkdocs`
- **Reddit**: r/Python comunidad

### ¿Cómo contribuyo al proyecto?

1. **Fork** el repositorio
2. **Crea** una rama para tu mejora
3. **Escribe** documentación clara
4. **Envía** un Pull Request

¿No encontraste tu pregunta? [Abre un issue](https://github.com/tu-usuario/tu-repo/issues) para que podamos ayudarte.
