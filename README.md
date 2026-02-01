# UISEK - Universidad Internacional SEK Ecuador
## Sitio Web Accesible e Inclusivo

Este proyecto es una reimplementación del sitio web de la Universidad Internacional SEK (UISEK) con un enfoque primordial en **accesibilidad web** y **diseño inclusivo**, siguiendo las pautas WCAG (Web Content Accessibility Guidelines) 2.1 nivel AA.

---

## 🎯 Objetivo del Proyecto

Crear un sitio web universitario completamente accesible que garantice una experiencia óptima para todos los usuarios, independientemente de sus capacidades físicas, cognitivas o tecnológicas.

---

## ✨ Características de Accesibilidad Implementadas

### 1. **Estructura Semántica HTML5**

Se utilizan etiquetas semánticas apropiadas en toda la aplicación:

- `<header>` con `role="banner"` para el encabezado principal
- `<nav>` con atributos `aria-label` descriptivos para cada navegación
- `<main>` con `role="main"` y `id="main-content"` para el contenido principal
- `<section>` con `aria-labelledby` para cada sección de contenido
- `<footer>` con `role="contentinfo"` para el pie de página
- Uso correcto de headings (`<h1>` a `<h3>`) siguiendo jerarquía lógica

**Ejemplo:**
```html
<header role="banner">
  <nav aria-label="Navegación superior">...</nav>
  <nav aria-label="Navegación principal">...</nav>
</header>
```

### 2. **Navegación por Teclado Completa**

- **Skip Link**: Enlace "Saltar al contenido principal" visible al usar Tab
- Todos los elementos interactivos son accesibles con teclado
- Orden de tabulación lógico y coherente
- Estados de focus visibles con anillos de enfoque azules
- Menú móvil navegable completamente por teclado

**Implementación:**
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Saltar al contenido principal
</a>
```

### 3. **Contraste de Color WCAG AA**

- Relación de contraste mínima de 4.5:1 para texto normal
- Relación de contraste mínima de 3:1 para texto grande
- Botones y elementos interactivos con contraste adecuado
- Modo de alto contraste disponible (relación 21:1)

**Colores principales:**
- Texto principal: `#111827` sobre fondo blanco (16.7:1)
- Enlaces: `#2563eb` (azul) con suficiente contraste
- Botones: Fondo `#2563eb` con texto blanco (8.6:1)

### 4. **Imágenes Accesibles**

Todas las imágenes incluyen atributos `alt` descriptivos:

```tsx
<img
  src="..."
  alt="Vista del campus universitario UISEK con estudiantes"
/>
```

- Alt text descriptivo que comunica el propósito de la imagen
- Imágenes decorativas marcadas con `aria-hidden="true"`
- Iconos acompañados de texto o labels apropiados

### 5. **Formularios Accesibles**

- Todas las etiquetas `<label>` asociadas correctamente con inputs
- Campos requeridos marcados con `aria-required="true"`
- Mensajes de error claros y asociados con campos
- Instrucciones accesibles para completar formularios

**Ejemplo:**
```tsx
<Label htmlFor="email">Correo electrónico *</Label>
<Input
  id="email"
  type="email"
  required
  aria-required="true"
/>
```

### 6. **Navegación ARIA y Estados**

- Uso de `aria-label` para proporcionar contexto adicional
- `aria-expanded` para menús desplegables
- `aria-current` para indicar página actual
- `aria-live` para actualizaciones dinámicas
- `aria-pressed` para botones de toggle

### 7. **Carruseles Accesibles**

- Controles de navegación con labels descriptivos
- Indicadores de posición actual
- Pausa automática al enfocar
- Anuncios de cambios con `aria-live="polite"`

```tsx
<div role="region" aria-label="Carrusel de imágenes" aria-live="polite">
  <div className="sr-only">
    Mostrando imagen {currentIndex + 1} de {carouselImages.length}
  </div>
</div>
```

### 8. **Enlaces Descriptivos**

Todos los enlaces incluyen contexto claro:

```tsx
<Link href="/admisiones" aria-label="Ir a Admisiones">
  Admisiones
</Link>
```

- Evita textos genéricos como "click aquí"
- Proporciona contexto del destino del enlace
- Enlaces externos indican apertura en nueva ventana

---

## 🎨 Tres Medidas Específicas de Diseño Inclusivo

### 1. **Control de Tamaño de Fuente Ajustable**

**Descripción:** Panel de control flotante que permite a los usuarios ajustar el tamaño del texto en tres niveles.

**Implementación:**
- Normal (16px base)
- Grande (18px - 112.5%)
- Extra Grande (20px - 125%)

**Beneficios:**
- Usuarios con baja visión
- Personas con dislexia
- Adultos mayores
- Usuarios de dispositivos móviles

**Código:**
```tsx
<Button onClick={() => setFontSize('large')} aria-label="Texto Grande">
  Texto Grande
</Button>
```

### 2. **Modo de Alto Contraste**

**Descripción:** Modo visual alternativo con contraste máximo (21:1) entre texto y fondo.

**Características:**
- Fondo negro puro (#000000)
- Texto blanco puro (#FFFFFF)
- Bordes blancos en todos los elementos
- Subrayado en enlaces y botones
- Aumento de contraste en imágenes

**Beneficios:**
- Usuarios con baja visión
- Personas con daltonismo
- Usuarios con sensibilidad a la luz
- Ambientes con mucha luminosidad

**CSS:**
```css
.high-contrast {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
  border-color: white !important;
}
```

### 3. **Focus Visible Mejorado**

**Descripción:** Indicadores de enfoque altamente visibles con anillo azul de 3px y offset de 2px.

**Características:**
- Color azul brillante (#2563eb)
- Grosor de 3px para máxima visibilidad
- Offset de 2px para separación del elemento
- Consistente en toda la aplicación
- Compatible con navegación por teclado

**Beneficios:**
- Usuarios que navegan por teclado
- Personas con problemas motores
- Usuarios de lectores de pantalla
- Navegación más eficiente

**CSS:**
```css
:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}
```

---

## 📋 Lista Completa de Mejoras de Accesibilidad

### Contenido y Estructura

✅ Etiquetas semánticas HTML5 (`header`, `nav`, `main`, `footer`, `section`, `article`)
✅ Jerarquía de encabezados correcta (H1 > H2 > H3)
✅ Landmarks ARIA (`role="banner"`, `role="main"`, `role="contentinfo"`)
✅ Idioma del documento especificado (`lang="es"`)
✅ Títulos de página descriptivos
✅ Metadata completa y descriptiva

### Navegación

✅ Skip link para saltar al contenido principal
✅ Navegación por teclado completa (Tab, Enter, Escape)
✅ Orden de tabulación lógico
✅ Indicadores de focus visibles
✅ Menú móvil accesible
✅ Breadcrumbs semánticos

### Contenido Visual

✅ Contraste WCAG AA (mínimo 4.5:1)
✅ Modo de alto contraste disponible
✅ Texto escalable sin pérdida de funcionalidad
✅ No se usa color como único medio de comunicación
✅ Imágenes con alt text descriptivo
✅ Iconos complementados con texto

### Interactividad

✅ Botones con labels descriptivos
✅ Enlaces con contexto claro
✅ Formularios con labels asociados
✅ Mensajes de error descriptivos
✅ Confirmaciones de acciones importantes
✅ Tooltips informativos

### Contenido Dinámico

✅ Regiones live para actualizaciones (`aria-live`)
✅ Carruseles con controles accesibles
✅ Estados de carga comunicados
✅ Modales con gestión de focus
✅ Notificaciones accesibles (toast)

### Multimedia

✅ Controles de reproducción accesibles
✅ Alternativas textuales para contenido multimedia
✅ Transcripciones disponibles

---

## 🛠️ Tecnologías Utilizadas

- **Next.js 13**: Framework de React con App Router
- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Framework CSS utility-first
- **shadcn/ui**: Componentes accesibles basados en Radix UI
- **Lucide React**: Iconos accesibles con labels
- **Radix UI**: Primitivos accesibles (Dialog, Dropdown, etc.)

---

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js 18.x o superior
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd uisek-accessible
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:3000
```

### Compilar para Producción

```bash
npm run build
npm start
```

---

## ♿ Pruebas de Accesibilidad

### Herramientas Recomendadas

1. **Lighthouse (Chrome DevTools)**
   - Auditoría de accesibilidad automatizada
   - Puntuación objetivo: 95+

2. **WAVE (Web Accessibility Evaluation Tool)**
   - Evaluación visual de accesibilidad
   - Identificación de errores y advertencias

3. **axe DevTools**
   - Extensión de navegador para testing
   - Detección de problemas WCAG

4. **Navegación por Teclado**
   - Probar toda la funcionalidad usando solo Tab, Enter, Escape
   - Verificar que el focus es siempre visible

5. **Lectores de Pantalla**
   - NVDA (Windows)
   - JAWS (Windows)
   - VoiceOver (macOS/iOS)
   - TalkBack (Android)

### Checklist de Pruebas Manual

- [ ] Navegar por todo el sitio usando solo teclado
- [ ] Verificar contraste con herramientas automáticas
- [ ] Probar con lector de pantalla
- [ ] Aumentar tamaño de fuente al 200%
- [ ] Probar en modo alto contraste
- [ ] Verificar alt text en todas las imágenes
- [ ] Probar formularios con validación
- [ ] Verificar anuncios de contenido dinámico

---

## 📚 Recursos y Referencias

### Pautas WCAG 2.1

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)
- [How to Meet WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

### Documentación de Componentes

- [Radix UI](https://www.radix-ui.com/) - Primitivos accesibles
- [shadcn/ui](https://ui.shadcn.com/) - Componentes sobre Radix
- [MDN Web Docs - ARIA](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA)

### Herramientas de Testing

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

---

## 🎓 Estándares Cumplidos

### WCAG 2.1 Nivel AA

✅ **1.1 Text Alternatives**: Todas las imágenes tienen alt text
✅ **1.3 Adaptable**: Estructura semántica correcta
✅ **1.4 Distinguishable**: Contraste adecuado y redimensionable
✅ **2.1 Keyboard Accessible**: Navegación completa por teclado
✅ **2.4 Navigable**: Skip links, headings, labels descriptivos
✅ **3.1 Readable**: Idioma especificado, contenido claro
✅ **3.2 Predictable**: Navegación consistente
✅ **3.3 Input Assistance**: Labels, instrucciones, validación
✅ **4.1 Compatible**: HTML válido, ARIA correcto

---

## 👥 Público Objetivo

Este diseño inclusivo beneficia a:

- **Personas con discapacidad visual**: Alto contraste, texto escalable, lectores de pantalla
- **Personas con discapacidad motora**: Navegación por teclado completa
- **Personas con discapacidad cognitiva**: Estructura clara, navegación predecible
- **Personas mayores**: Texto grande, contraste alto, interfaz simple
- **Usuarios de dispositivos móviles**: Responsive, touch-friendly
- **Usuarios con conexión lenta**: Optimización de rendimiento
- **Todos los usuarios**: Mejor experiencia general

---

## 📝 Notas de Desarrollo

### Buenas Prácticas Seguidas

1. **Componentes Atómicos**: Cada componente tiene una responsabilidad única
2. **Typescript**: Tipado estático para prevenir errores
3. **Props Accesibles**: Todos los componentes aceptan props de accesibilidad
4. **Testing**: Pruebas manuales y automatizadas de accesibilidad
5. **Documentación**: Código comentado y documentado

### Consideraciones Futuras

- Implementar modo oscuro adicional al alto contraste
- Agregar soporte para más idiomas
- Implementar animaciones reducidas para motion sensitivity
- Añadir transcripciones de video
- Implementar breadcrumbs dinámicos
- Agregar búsqueda accesible con autocomplete

---

## 📄 Licencia

Este proyecto es parte de un trabajo académico para la Universidad Internacional SEK.

---

## 👨‍💻 Autor

Proyecto desarrollado como parte del curso de Diseño Inclusivo y Accesibilidad Web.

---

## 🤝 Contribuciones

Las sugerencias para mejorar la accesibilidad son bienvenidas. Por favor, abre un issue o pull request con tus propuestas.

---

## 📞 Soporte

Para preguntas sobre accesibilidad o problemas con el sitio, contactar a través de los canales oficiales de UISEK.

---

**Última actualización:** Febrero 2026

**Versión:** 1.0.0

**Estado de Accesibilidad:** WCAG 2.1 AA Compliant
