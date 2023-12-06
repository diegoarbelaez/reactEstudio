//Metodo filter, eliminar elementos de un arreglo

const tareas_file = [
  { id: 0, title: "Mi primer tarea", descripcion: "mi primer tarea" },
  { id: 1, title: "Mi segunda tarea", descripcion: "mi segunda tarea" },
  { id: 2, title: "Mi tercer tarea", descripcion: "mi tercer tarea" },
  { id: 3, title: "Mi cuarta tarea", descripcion: "mi cuarta tarea" },
  { id: 4, title: "Mi quinta tarea", descripcion: "mi quinta tarea" },
];

const tareas_copia = tareas_file.filter((elemento) => {
  return elemento.id != 3;
});

console.log(tareas_copia);
