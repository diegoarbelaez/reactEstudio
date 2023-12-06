//Script para calcular cuántos días faltan para el cumpleaños de una persona

// 1. Crear una función que reciba como parámetro una fecha de cumpleaños
// 2. Calcular cuántos días faltan para el cumpleaños de la persona
// 3. Mostrar en consola la cantidad de días que faltan


function diasFaltantes(fechaCumple) {
    let fechaActual = new Date();
    let fechaCumple2 = new Date(fechaCumple);
    let dias = fechaCumple2.getTime() - fechaActual.getTime();
    let diasFaltantes = Math.round(dias / (1000 * 60 * 60 * 24));
    console.log(`Faltan ${diasFaltantes} días para tu cumpleaños`);
}

diasFaltantes("2024-10-11");



