# 📚 Library — Gestor de Biblioteca Personal

Aplicación web interactiva para gestionar una biblioteca de libros personal: agregar, visualizar, alternar el estado de lectura (leído/no leído) y eliminar libros en tiempo real, todo desde el navegador y con una interfaz moderna en modo oscuro.

> Proyecto desarrollado como parte del currículo de JavaScript de **[The Odin Project](https://www.theodinproject.com/)**.

---

## ✨ Funcionalidades

- ➕ **Agregar nuevos libros:** Mediante un formulario modal nativo con campos de título, autor, número de páginas y estado de lectura.
- 📖 **Visualización dinámica:** Tarjetas individuales organizadas en una cuadrícula responsiva (*CSS Grid*).
- 🔄 **Cambiar estado de lectura:** Alterna entre "Leído" y "No leído" con un clic utilizando métodos en el prototipo (`prototype`).
- 🗑️ **Eliminar libros:** Borra cualquier libro de la colección actualizando la interfaz reactivamente.
- 🆔 **Identificadores únicos:** Cada libro cuenta con un UUID único generado con `crypto.randomUUID()`.
- 🎨 **Diseño Moderno (*Dark Mode*):** Efectos visuales con gradientes sutiles, micro-interacciones al pasar el cursor y ventana modal con fondo desenfocado (*backdrop blur*).

---

## 🛠️ Tecnologías utilizadas

- **HTML5:** Estructura semántica y uso del elemento nativo `<dialog>`.
- **CSS3:** Variables personalizadas (`:root`), CSS Grid, Flexbox, transiciones y diseño responsivo.
- **JavaScript (ES6+ Vanilla):** Sin librerías ni frameworks externos, aplicando programación orientada a objetos basada en prototipos.

---

## 🧠 Conceptos clave aplicados

- **Funciones Constructoras:** Molde de objetos `Libro` instanciados con `new`.
- **Prototipos de JavaScript:** Definición de métodos compartidos en `Libro.prototype.toggleLectura` para optimizar memoria.
- **Manipulación del DOM:** Creación dinámica de elementos (`createElement`), asignación de atributos y renderizado condicional.
- **Manejo de Formularios y Eventos:** Control de eventos `submit` y `click`, uso de `e.preventDefault()` y `reset()`.
- **UX con Diálogo Nativo:** Control programático del modal mediante `dialog.showModal()` y `dialog.close()`.

---

## 🚀 Cómo ejecutar el proyecto localmente

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/s9code/Library.git
   ```

2. **Entrar en la carpeta:**
   ```bash
   cd Library
   ```

3. **Abrir el proyecto:**
   - Abre el archivo `index.html` en tu navegador favorito, o utiliza la extensión **Live Server** en VS Code.

*(No requiere instalación de dependencias ni procesos de compilación).*

---

## 👤 Autor

- **GitHub:** [@s9code](https://github.com/s9code)
