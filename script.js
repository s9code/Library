// 1. LLamadas a elementos del DOM
const contenedorLibros = document.querySelector(".contenedor-libreria");
const formulario = document.querySelector("#formulario");

// 2. Array donde se guardan los libros
const libreria = [];

// 3. Función que recorre el array libreria y muestra los libros
// Recorre el array "libreria" y, por cada libro, crea un div con sus datos
// (título, autor, páginas y estado de lectura) dentro de contenedorLibros.
// Antes de dibujar, vacía el contenedor para evitar que los libros se dupliquen.
function recorrerLibreria() {

    // 3.1. Vacía el contenedor para evitar que los libros se dupliquen
    contenedorLibros.textContent = "";

    // 3.2. Recorre el array "libreria"
    for (const libro of libreria) {

        // 3.2.1. Evalúa si el libro ha sido leído o no.
        const estado = libro.lectura ? "Leido" : "No leido";

        // 3.3. Se crean los elementos para guardar los datos de cada libro.
        const div = document.createElement("div");
        const h3 = document.createElement("h3"); 
        const parrafoAutor = document.createElement("p");
        const parrafoPaginas = document.createElement("p");
        const lectura = document.createElement("p");
        const btnEstado = document.createElement("button");
        const btnEliminar = document.createElement("button");

        // 3.3.1 Añade un atributo "data-id" al <div>
        div.setAttribute("data-id", libro.id);

        // 3.3.2 Añade el <div> al final del contenedor y luego añade los elementos h3, parrafoAutor, etc al <div>
        contenedorLibros.appendChild(div);
        div.appendChild(h3);
        div.appendChild(parrafoAutor);
        div.appendChild(parrafoPaginas);
        div.appendChild(lectura);
        div.appendChild(btnEliminar);
        div.appendChild(btnEstado);

        // 3.4. Establece el contenido de texto de cada elemento.
        h3.textContent = (libro.titulo);
        parrafoAutor.textContent = (libro.autor); 
        parrafoPaginas.textContent = (libro.paginas);
        lectura.textContent = (estado);
        btnEliminar.textContent = ("Eliminar")
        btnEstado.textContent = ("cambiar estado");

        // 3.5 Añade un evento al botón "cambiar estado"
        btnEstado.addEventListener("click", () => {
            // Cambia el estado de lectura del libro
            libro.toggleLectura();
            // Refresca la visualización de la librería
            recorrerLibreria();
        })

        // 3.6 Añade un evento al botón "Eliminar"
        btnEliminar.addEventListener("click", () => {

            // Busca el índice del libro actual en el array libreria
            const indice = libreria.findIndex((item) => item.id === libro.id);
            // Elimina el libro del array
            libreria.splice(indice, 1);

            // Refresca la visualización de la librería
            recorrerLibreria();

        })

    };
}

// 4. Constructor para crear un libro
function Libro(titulo, autor, paginas, lectura) {
    this.id = crypto.randomUUID(); // Identificador único generado automáticamente
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lectura = lectura;
}

// 4.1 Metodo para cambiar el estado de lectura (actualiza la propiedad lectura)
Libro.prototype.toggleLectura = function () {
    // Invierte el valor actual de la propiedad lectura
    this.lectura = !this.lectura;
};

// 5. Función para añadir un libro a la librería
// Recibe los datos de un libro, crea una instancia con el constructor Libros
// y la añade al array libreria.
function agregarLibro(titulo, autor, paginas, lectura) {
    // Crea una nueva instancia de Libro con los datos proporcionados
    const libro = new Libro (titulo, autor, paginas, lectura);
    // Añade el nuevo libro al array libreria
    libreria.push(libro);
}

// 6. Función para escuchar el formulario
// Al enviar el formulario, recoge los valores de los campos, los convierte
// a los tipos correctos (número para páginas, booleano para lectura),
// crea el libro, refresca la pantalla y limpia el formulario.
formulario.addEventListener("submit", function (e) {
    // Evita que la página se recargue
    e.preventDefault();

    // Obtiene los valores de los campos del formulario
    const titulo = document.querySelector("#titulo");
    const autor = document.querySelector("#autor");
    const paginas = document.querySelector("#paginas");
    const lectura = document.querySelector("#lectura");

    // Convierte el valor de páginas a número
    const numeroDepaginas = parseInt(paginas.value);

    // Convierte el valor del select a booleano: si es "true" se guarda como true, si no como false.
    const leido = lectura.value === "true" ? true : false;

    // Agrega el libro al array libreria
    agregarLibro(titulo.value, autor.value, numeroDepaginas, leido);
    // Y actualiza la visualización
    recorrerLibreria();

    // Resetear los campos del formulario
    formulario.reset();

});