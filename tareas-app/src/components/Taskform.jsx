import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export function Taskform() {
  const { addTarea } = useContext(Contexto);

  const [title, settitle] = useState("");
  const [descripcion, setDescription] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    addTarea(title, descripcion);
    settitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto m-10 p-10">
      <form className="bg-slate-800 p-10 rounded-md" onSubmit={handleSubmit}>
        <p className="text-gray-300 text-2xl text-center py-2">Escribe tu tarea</p>
        <input
          onChange={(evento) => {
            settitle(evento.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        ></input>
        <textarea
          onChange={(evento) => {
            setDescription(evento.target.value);
          }}
          placeholder="Escribe la descripcion"
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        ></textarea>
        <div className="grid content-center justify-center ">
          <button className="bg-gray-400 py-3 rounded-md px-3 hover:bg-gray-300 ">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
