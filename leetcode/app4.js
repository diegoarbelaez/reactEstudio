//REDUCE

let compras = [
  { objeto: "martillo", valor: 3000 },
  { objeto: "puntillas", valor: 4000 },
  { objeto: "cemento", valor: 1000 },
  { objeto: "ladrillos", valor: 9000 },
];

//let facturas = compras.reduce( function (valorAnterior.valor, valorActual, indice, vector){return valorAnterior + valorActual})

/* let factura = 0;
compras.forEach((element) => {
  factura += element.valor;
});
 */


let factura = compras.reduce ( (total, compra)=>{ return total + compra.valor}, 0)
console.log(factura);

let palabra = ['d','i','e','g','o','.']

let nombre = palabra.reduce ( (completo,elemento)=>{return completo + elemento}, '')
console.log(nombre);
