// LLAMADAS
const contenedorLibros = document.querySelector(".contenedor-libreria");
const formulario = document.querySelector("#formulario");

// VARIABLES
let estado;

// MI BIBLIOTECA DE LIBROS
// Array donde se van a guardar todos los libros creados con el constructor Libros
const libreria = [];

// Recorre el array "libreria" y, por cada libro, crea un div con sus datos
// (título, autor, páginas y estado de lectura) dentro de contenedorLibros.
// Antes de dibujar, vacía el contenedor para evitar que los libros se dupliquen.
function recorrerLibreria() {
    contenedorLibros.textContent = "";

    for (const libro of libreria) {

        if (libro.lectura === false) {
            estado = "No leido";
        }else {
            estado = "Leido";
        };

        // CREAR ELEMENTOS
        const div = document.createElement("div");
        div.setAttribute("data-id", libro.id);
        contenedorLibros.appendChild(div);
        div.textContent = (`Titulo: ${libro.titulo} Autor: ${libro.autor} Paginas: ${libro.paginas} Estado: ${estado}`);
    };
}

// MOLDE CONSTRUCTOR DE UN LIBRO
// Define la forma que tiene cada libro: título, autor, páginas, si se ha leído,
// y un id único generado automáticamente.
function Libros(titulo, autor, paginas, lectura) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lectura = lectura;
}

// GESTIONAR LA COLECCIÓN
// Recibe los datos de un libro, crea una instancia con el constructor Libros
// y la añade al array libreria.
function agregarLibro(titulo, autor, paginas, lectura) {
    const libro = new Libros (titulo, autor, paginas, lectura);
    libreria.push(libro);
}

// ESCUCHAR EL FORMULARIO
// Al enviar el formulario, recoge los valores de los campos, los convierte
// a los tipos correctos (número para páginas, booleano para lectura),
// crea el libro, refresca la pantalla y limpia el formulario.
formulario.addEventListener("submit", function (e) {
    e.preventDefault(); //evita que la página se recargue

    const titulo = document.querySelector("#titulo");
    const autor = document.querySelector("#autor");
    const paginas = document.querySelector("#paginas");
    const lectura = document.querySelector("#lectura");

    const numeroDepaginas = parseInt(paginas.value)

    let leido = false;

    if (lectura.value === "false") {
        leido = false;
    } else {
        leido = true;
    }

    agregarLibro(titulo.value, autor.value, numeroDepaginas, leido);
    recorrerLibreria();

    // resetear los campos del formulario
    formulario.reset();

});