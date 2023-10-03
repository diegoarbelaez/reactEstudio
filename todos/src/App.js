import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Mi Item", completed: false },
];

function App() {
  /**
   * inicializamos el custom hook de local storage
   */

  useEffect(() => {
    console.log("render unico")
  }, [])
  

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  let completed_elements = todos.filter((elemento) => {
    return elemento.completed === true;
  });

  //Estados derivados, estos son variables que se calculan a partir de los estados
  let completed = completed_elements.length;
  let total = todos.length;
  let todos_encontrados = todos.filter((elemento) => {
    return elemento.text
      .toLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  const completarTodo = (text) => {
    console.log("llamado completarTodo");
    console.log(text);
    const newTodos = [...todos];
    const indice = newTodos.findIndex((elemento) => elemento.text === text);
    console.log(indice);
    newTodos[indice].completed = !newTodos[indice].completed;
    saveTodos(newTodos);
  };

  //Hacer el método de eliminar Todo

  const eliminarTodo = (text) => {
    let newTodos = todos.filter((elemento) => elemento.text !== text);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todos_encontrados.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              setTodos={saveTodos}
              onComplete={() => {
                //Encapsulamiento de funciones esto es: una funcion anonima que llama a otra funcion
                completarTodo(todo.text);
              }}
              onDelete={() => {
                eliminarTodo(todo.text);
              }}
            />
          );
        })}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
