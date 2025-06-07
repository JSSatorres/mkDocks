// ===== CONFIGURACIÓN DE MATHJAX =====

// Configuración para renderizado de matemáticas
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {
      "[+]": ["ams", "color", "cancel"],
    },
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
  svg: {
    fontCache: "global",
  },
}

// Configurar MathJax después de que se cargue
document$.subscribe(() => {
  if (typeof MathJax !== "undefined") {
    MathJax.typesetPromise?.([document.body])
  }
})

// ===== MEJORAS DE INTERFAZ =====

document.addEventListener("DOMContentLoaded", function () {
  // ===== COPIAR CÓDIGO =====

  // Mejorar la funcionalidad de copiar código
  const codeBlocks = document.querySelectorAll("pre code")

  codeBlocks.forEach(function (codeBlock) {
    const pre = codeBlock.parentNode

    // Crear botón de copiar personalizado
    const copyButton = document.createElement("button")
    copyButton.className = "md-clipboard md-icon"
    copyButton.innerHTML = "📋"
    copyButton.title = "Copiar código"

    // Agregar funcionalidad de copiar
    copyButton.addEventListener("click", function () {
      const text = codeBlock.textContent

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showCopyFeedback(copyButton)
        })
      } else {
        // Fallback para navegadores antiguos
        const textArea = document.createElement("textarea")
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        showCopyFeedback(copyButton)
      }
    })

    pre.appendChild(copyButton)
  })

  // Feedback visual al copiar
  function showCopyFeedback(button) {
    const originalText = button.innerHTML
    button.innerHTML = "✅"
    button.style.color = "#4caf50"

    setTimeout(() => {
      button.innerHTML = originalText
      button.style.color = ""
    }, 2000)
  }

  // ===== MEJORAS DE NAVEGACIÓN =====

  // Smooth scroll para enlaces internos
  const internalLinks = document.querySelectorAll('a[href^="#"]')

  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Actualizar URL sin recargar
        history.pushState(null, null, this.getAttribute("href"))
      }
    })
  })

  // ===== TABLA DE CONTENIDOS MEJORADA =====

  // Resaltar sección actual en TOC
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id")
        const tocLink = document.querySelector(`.md-nav a[href="#${id}"]`)

        if (tocLink) {
          if (entry.isIntersecting) {
            tocLink.classList.add("md-nav__link--active")
          } else {
            tocLink.classList.remove("md-nav__link--active")
          }
        }
      })
    },
    {
      rootMargin: "-20% 0px -80% 0px",
    }
  )

  // Observar todos los encabezados
  document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
    if (heading.id) {
      observer.observe(heading)
    }
  })

  // ===== MEJORAS DE BÚSQUEDA =====

  // Resaltar términos de búsqueda en la página
  function highlightSearchTerms() {
    const urlParams = new URLSearchParams(window.location.search)
    const searchTerm = urlParams.get("q") || urlParams.get("search")

    if (searchTerm) {
      const content = document.querySelector(".md-content")
      if (content) {
        highlightText(content, searchTerm)
      }
    }
  }

  function highlightText(element, term) {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    )

    const textNodes = []
    let node

    while ((node = walker.nextNode())) {
      textNodes.push(node)
    }

    textNodes.forEach((textNode) => {
      const parent = textNode.parentNode
      if (parent.tagName !== "SCRIPT" && parent.tagName !== "STYLE") {
        const regex = new RegExp(`(${term})`, "gi")
        const text = textNode.textContent

        if (regex.test(text)) {
          const highlightedText = text.replace(regex, "<mark>$1</mark>")
          const wrapper = document.createElement("span")
          wrapper.innerHTML = highlightedText
          parent.replaceChild(wrapper, textNode)
        }
      }
    })
  }

  // Ejecutar resaltado de búsqueda
  highlightSearchTerms()

  // ===== LAZY LOADING PARA IMÁGENES =====

  // Implementar lazy loading para imágenes
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  }

  // ===== MEJORAS DE ACCESIBILIDAD =====

  // Añadir skip links
  const skipLink = document.createElement("a")
  skipLink.href = "#main"
  skipLink.textContent = "Saltar al contenido principal"
  skipLink.className = "skip-link"
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
  `

  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "6px"
  })

  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px"
  })

  document.body.insertBefore(skipLink, document.body.firstChild)

  // ===== ANALYTICS Y TRACKING =====

  // Tracking de eventos personalizados
  function trackEvent(category, action, label) {
    if (typeof gtag !== "undefined") {
      gtag("event", action, {
        event_category: category,
        event_label: label,
      })
    }
  }

  // Track clicks en enlaces externos
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    if (!link.href.includes(window.location.hostname)) {
      link.addEventListener("click", () => {
        trackEvent("External Links", "click", link.href)
      })
    }
  })

  // Track descargas
  document
    .querySelectorAll(
      'a[href$=".pdf"], a[href$=".zip"], a[href$=".doc"], a[href$=".docx"]'
    )
    .forEach((link) => {
      link.addEventListener("click", () => {
        trackEvent("Downloads", "click", link.href)
      })
    })

  // ===== NOTIFICACIONES =====

  // Sistema de notificaciones toast
  function showToast(message, type = "info", duration = 3000) {
    const toast = document.createElement("div")
    toast.className = `toast toast-${type}`
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 24px;
      background: ${
        type === "success"
          ? "#4caf50"
          : type === "error"
          ? "#f44336"
          : "#2196f3"
      };
      color: white;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `
    toast.textContent = message

    document.body.appendChild(toast)

    // Animar entrada
    setTimeout(() => {
      toast.style.transform = "translateX(0)"
    }, 10)

    // Remover después del tiempo especificado
    setTimeout(() => {
      toast.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(toast)
      }, 300)
    }, duration)
  }

  // ===== TEMA DINÁMICO =====

  // Detectar preferencia de tema del sistema
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-md-color-scheme", "slate")
  }

  // Escuchar cambios en la preferencia del sistema
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        document.documentElement.setAttribute("data-md-color-scheme", "slate")
      } else {
        document.documentElement.setAttribute("data-md-color-scheme", "default")
      }
    })

  // ===== PERFORMANCE =====

  // Cargar contenido diferido
  function loadDeferredContent() {
    const deferredElements = document.querySelectorAll("[data-defer]")

    deferredElements.forEach((element) => {
      const src = element.dataset.defer

      if (src) {
        if (element.tagName === "IMG") {
          element.src = src
        } else if (element.tagName === "IFRAME") {
          element.src = src
        }

        element.removeAttribute("data-defer")
      }
    })
  }

  // Cargar contenido diferido después de que la página esté lista
  if (document.readyState === "complete") {
    loadDeferredContent()
  } else {
    window.addEventListener("load", loadDeferredContent)
  }
})

// ===== UTILS GLOBALES =====

// Función global para mostrar notificaciones
window.showNotification = function (message, type = "info") {
  showToast(message, type)
}

// Función para debugging (solo en desarrollo)
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  window.debugMode = true
  console.log("🚀 MkDocs Debug Mode enabled")
}

// ===== SERVICE WORKER (PWA) =====

// Registrar service worker si está disponible
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
