# Cómo Contribuir

¡Gracias por tu interés en contribuir a este proyecto de documentación! Esta guía te ayudará a empezar.

## 🚀 Comenzar a Contribuir

### 1. Preparar el Entorno

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# Crear entorno virtual
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # macOS/Linux

# Instalar dependencias
pip install -r requirements.txt
```

### 2. Ejecutar Localmente

```bash
# Iniciar servidor de desarrollo
python -m mkdocs serve

# Abrir en navegador
# http://127.0.0.1:8000
```

## 📝 Tipos de Contribuciones

### Documentación

- ✅ Corregir errores tipográficos
- ✅ Mejorar explicaciones existentes
- ✅ Agregar ejemplos prácticos
- ✅ Traducir contenido
- ✅ Actualizar enlaces rotos

### Código

- ✅ Corregir bugs en CSS/JavaScript
- ✅ Mejorar configuración de MkDocs
- ✅ Optimizar rendimiento
- ✅ Agregar nuevas funcionalidades

### Diseño

- ✅ Mejorar diseño visual
- ✅ Optimizar para móviles
- ✅ Mejorar accesibilidad
- ✅ Crear iconos o gráficos

## 🔧 Proceso de Contribución

### 1. Crear Issue

Antes de empezar, crea un issue para:

- Reportar bugs
- Proponer nuevas características
- Discutir cambios grandes

### 2. Fork y Branch

```bash
# Fork el repositorio en GitHub
# Clonar tu fork
git clone https://github.com/tu-usuario/tu-fork.git

# Crear rama para tu contribución
git checkout -b feature/mi-nueva-caracteristica
```

### 3. Hacer Cambios

- Sigue las convenciones del proyecto
- Agrega documentación si es necesario
- Prueba tus cambios localmente

### 4. Commit y Push

```bash
# Agregar archivos modificados
git add .

# Commit con mensaje descriptivo
git commit -m "feat: agregar nueva sección de ejemplos"

# Push a tu fork
git push origin feature/mi-nueva-caracteristica
```

### 5. Pull Request

1. Ve a GitHub y crea un Pull Request
2. Describe claramente los cambios
3. Vincula issues relacionados
4. Espera la revisión

## 📋 Convenciones

### Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva característica
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: agregar o modificar tests
chore: tareas de mantenimiento
```

### Código

- **Indentación**: 2 espacios para YAML, 4 para Python
- **Nombres**: Descriptivos y en español para contenido
- **Comentarios**: Explicar el "por qué", no el "qué"

### Documentación

- **Idioma**: Español para contenido, inglés para código
- **Formato**: Markdown estándar con extensiones
- **Estructura**: Seguir jerarquía existente

## 🧪 Testing

### Verificar Configuración

```bash
# Verificar sintaxis
python -m mkdocs config

# Build sin errores
python -m mkdocs build --strict
```

### Probar Localmente

```bash
# Servidor con recarga automática
python -m mkdocs serve

# Probar diferentes dispositivos
python -m mkdocs serve --dev-addr=0.0.0.0:8000
```

## 📚 Recursos

### Documentación

- [MkDocs](https://www.mkdocs.org/)
- [Material Theme](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)

### Herramientas

- [Visual Studio Code](https://code.visualstudio.com/)
- [Markdown Extension](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

## 🎯 Ideas para Contribuir

### Fácil (Principiantes)

- [ ] Corregir errores tipográficos
- [ ] Mejorar formato de código
- [ ] Agregar ejemplos simples
- [ ] Actualizar enlaces

### Intermedio

- [ ] Agregar nuevas secciones
- [ ] Crear tutoriales paso a paso
- [ ] Mejorar navegación
- [ ] Optimizar imágenes

### Avanzado

- [ ] Configurar CI/CD
- [ ] Agregar tests automáticos
- [ ] Implementar i18n
- [ ] Crear plugins personalizados

## ❓ Ayuda

### ¿Tienes preguntas?

- 💬 Abre un [issue](https://github.com/tu-usuario/tu-repo/issues)
- 📧 Envía un email a maintainer@ejemplo.com
- 💬 Únete a la discusión en [Discord/Slack]

### ¿Encontraste un bug?

1. Busca si ya existe un issue
2. Si no existe, crea uno nuevo
3. Incluye pasos para reproducir
4. Agrega capturas de pantalla si ayuda

## 🏆 Reconocimientos

Todos los colaboradores aparecerán en:

- Lista de contribuidores en GitHub
- Sección de agradecimientos en docs
- Release notes de nuevas versiones

¡Gracias por hacer este proyecto mejor para todos! 🚀
