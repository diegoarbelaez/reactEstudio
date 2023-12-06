//App to validate if an expresion is well formed with parenthesis
//For example: ()[]{} is well formed but (] is not

let error = false;

//let expresion = "(()())";
//let expresion = ")(";
let expresion = "( ( (a) (b) ) (c))";

let veces_abre = 0;
let veces_cierra = 0;

for (let i = 0; i < expresion.length; i++) {
  if (expresion[i] === "(") {
    veces_abre++;
  } else if (expresion[i] === ")") {
    veces_cierra++;
  }

  if (veces_abre < veces_cierra) {
    error = true;
    break;
  }
}

if (veces_abre != veces_cierra || error === true) {
  console.log("La expresion no esta bien formada");
} else {
  console.log("La expresion esta bien formada");
}
