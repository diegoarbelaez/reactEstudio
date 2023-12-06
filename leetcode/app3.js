//CODE CHALLENGE DE GLOBANT, COMPLETAR LOS NUMEROS QUE FALTAN EN UNA SECUENCIA EN UN ARRAY

let array = [1, 2, 4, 5, 6, 9]; //Falta 3, 7, 8

let ordenado = array.sort((a, b) => a - b);

let minimo = array[0];
let maximo = array[array.length - 1];
let referencia = [];
let faltantes = [];

let contador = minimo;
for (let i = 0; i < maximo - minimo + 1; i++, contador++) {
  referencia.push(contador);
}

function encontrar(valor, arreglo) {
  let resultado = false;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == valor) resultado = true;
  }
  return resultado;
}

referencia.map((elemento) => {
  //let faltante = array.find ( valor => valor == elemento );
  let faltante = encontrar(elemento,array)
  if (faltante == false) {
    faltantes.push(elemento);
  }
});

console.log(array);
console.log(referencia);
console.log(faltantes);
