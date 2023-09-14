import TaskCard from "./TaskCard";
import { Contexto } from "../context/Contexto";
import { useContext } from "react";

function Tasklist() {
  const { tareas } = useContext(Contexto);

  if (tareas.length == 0) {
    return <p className="text-white text-center"> No hay tareas aún...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((elemento) => {
        return (
          <div key={elemento.id}>
            <TaskCard task={elemento} />
          </div>
        );
      })}
    </div>
  );
}

export default Tasklist;
