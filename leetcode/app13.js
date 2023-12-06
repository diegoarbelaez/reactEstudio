// Ejemplo de uso
let textoLargo =
  "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo...";
let resumen = generarResumen(textoLargo, 205);
console.log(resumen);

function generarResumen(textoLargo, limite) {
  return textoLargo.length > limite
    ? textoLargo.slice(0, limite) + "..."
    : textoLargo;
}
