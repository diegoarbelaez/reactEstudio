import React, { useState } from "react";

import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export default function TaskCard({ task }) {
  const { eliminarTarea } = useContext(Contexto);

  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <h1 className="text-2xl font-bold capitalize underline">{task.title}</h1>
      <p className="text-xl text-gray-400">{task.descripcion}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 text-white" onClick={() => eliminarTarea(task.id)}>Eliminar</button>
    </div>
  );
}
