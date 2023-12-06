//Acceder a propiedades de objetos por clave
/*
Se utiliza comunmente cuando tienes varias opciones y deseas obtener el valor de un objeto buscando por la clave del objeto.
*/

const actividades = {
    "primera": "bañarme",
    "segunda": "desayunar",
    "tercera": "estudiar"
}

function obtenerActividad(valor){
    return actividades[valor]
}

const actividad = obtenerActividad("segunda");

console.log(actividad)