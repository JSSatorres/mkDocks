// Configuración específica para MathJax
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {
      "[+]": ["ams", "color", "cancel", "mathtools"],
    },
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
  svg: {
    fontCache: "global",
  },
  startup: {
    ready: () => {
      MathJax.startup.defaultReady()
      console.log("MathJax is loaded and ready!")
    },
  },
}

// Re-renderizar matemáticas cuando cambie el contenido (para navegación SPA)
document$.subscribe(() => {
  if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
    MathJax.typesetPromise([document.body]).then(() => {
      console.log("MathJax re-rendered")
    })
  }
})
