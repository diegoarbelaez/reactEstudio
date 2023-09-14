/***
 * El contexto tiene dos elementos
 *
 * 1. la constante Contexto que proviene del uso de createContext();
 * 2. la funcion proveedora, que es el componente que contendrá el contexto.  Es allí en esa funcion donde
 *    escribimos las variables y métodos que estarán disponibles en el contexto del App
 * 3. El retorno de esta funcion proveedora debe ser siempre esta sintaxis:
 *    <Contexto.Provider value={{x,y}}>{props.children}</Contexto.Provider>;
 *    siempre tiene un valor value y un objeto, en ese objeto estan
 * 4. en el objeto value, se encapsulan todas las funciones y variables que quieren hacerse disponibles en el contexto
 *
 * Para usar el Contexto
 *
 * 1. Envolver en el componente padre del App (main) el app con el ContextProvider
 *
 *    main.jsx
 *
 *    1. import { ContextoProvider } from "./context/Contexto.jsx";
 *    2. <ContextoProvider> ...App()... </ContextoProvider>
 *
 * 2. En el componente donde desees acceder al contexto, debes hacer lo siguiente
 *
 *    1. Importar el contexto -> import { Contexto } from "../context/Contexto";
 *    2. crear el contexto importado como variable -> const valor = useContext(Contexto);
 *       ya en este objeto valor están tanto las funciones como las variables que se declararon en el contexto
 *    3. Usar el objeto como si estuviera local en el componente valor.variable o valor.funcion();
 */

import { createContext } from "react";
import { useState } from "react";
import { tareas_file } from "../tasks";

export const Contexto = createContext();

export function ContextoProvider(props) {
  const [tareas, settareas] = useState(tareas_file);

  const addTarea = (titulo, descripcion) => {
    settareas([
      ...tareas,
      { id: tareas.length, title: titulo, descripcion: descripcion },
    ]);
  };

  const eliminarTarea = (id) => {
    const tareas_copia = tareas.filter((tarea) => tarea.id != id);
    settareas(tareas_copia);
  };

  return (
    <Contexto.Provider value={{ tareas, addTarea, eliminarTarea }}>
      {props.children}
    </Contexto.Provider>
  );
}
