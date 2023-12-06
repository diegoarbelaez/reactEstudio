//Operador Spread

let personas = [
  {
    nombre: "Diego",
    apellidos: "Arbelaez",
    edad: 42,
  },
  {
    nombre: "Angelica",
    apellidos: "Ceballos",
    edad: 30,
    nacimiento: "sevilla",
  },
  {
    nombre: "Sebastian",
    apellidos: "Diaz",
    edad: 36,
    nacimiento: "sevilla",
  },
];

//crea un nuevo arreglo con la funcion map donde cada objeto tiene el nombre en mayúsculas
let personas2 = personas.map((elemento) => {
  return {
    ...elemento, //Agrega los atributos del objeto al return
    nombre: elemento.nombre.toUpperCase(), //el atributo nombre lo pone en mayúsculas
  };
});

console.log(personas2);

//Combinar dos arreglos:
const frutasA = ["manzana", "naranja", "uva"];
const frutasB = ["pera", "kiwi", "fresa"];

const frutasC = [
    ...frutasA, ...frutasB
]
//Organizarlos alfabéticamente
frutasC.sort();
console.log(frutasC)

//Actualizar objeto
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
  };
  
  // Tu tarea: crea un nuevo objeto personaModificada que sea una copia de persona,
  // pero con una edad actualizada a 31 y una nueva propiedad "pais" establecida en "Argentina".

let personaModificada = {
    ...persona,
    pais: "Argentina",
    edad: 31
}

console.log(personaModificada)