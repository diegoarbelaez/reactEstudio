//App para manejo de una biblioteca, tiene los métodos agregarLibro, buscarLibro, eliminarLibro, listarLibros

let biblioteca = [];

function agregarLibro(Libro) {
  biblioteca.push(Libro);
}

function buscarLibro(titulo) {
  libro_encontrado = biblioteca.find((libro) => libro.titulo == titulo);
  if (libro_encontrado) {
    return libro_encontrado;
  } else {
    return false;
  }
}

function eliminarLibro(titulo) {
  let libroEncontrado = buscarLibro(titulo);
  if (libroEncontrado) {
    biblioteca = biblioteca.filter((libro) => libro.titulo != titulo);
    return true;
  } else {
    return false;
  }
}

function listarLibros() {
  console.log([...biblioteca]);
}

// Llamados a las funciones

let libro1 = {
  id: 1,
  titulo: "El principito",
  autor: "Antoine de Saint-Exupéry",
  editorial: "Salamandra",
  año: 1943,
};

let libro2 = {
  id: 2,
  titulo: "El señor de los anillos",
  autor: "J. R. R. Tolkien",
  editorial: "Minotauro",
  año: 1954,
};

agregarLibro(libro1);
listarLibros();
agregarLibro(libro2);
listarLibros();
eliminarLibro("El señor de los anillos");
listarLibros();
