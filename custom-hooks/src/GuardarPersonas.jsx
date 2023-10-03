import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function GuardarPersonas() {
  const [Nombre, setNombre] = useState("");
  const [Apellidos, setApellidos] = useState("");
  const [Edad, setEdad] = useState("");

  const [mostrarNombre, setMostrarNombre] = useState("");
  const [mostrarApellidos, setMostrarApellidos] = useState("");
  const [mostrarEdad, setMostrarEdad] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setMostrarNombre(Nombre);
    setMostrarApellidos(Apellidos);
    setMostrarEdad(Edad);

    const objetoPersona = {
      Nombre,
      Apellidos,
      Edad,
    };
    useLocalStorage("OBJETO_PERSONA", objetoPersona);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="divSolido">
          Guardar Personas Nombre
          <input
            onChange={(evento) => {
              setNombre(evento.target.value);
            }}
            value={Nombre}
          ></input>
          Apellidos
          <input
            onChange={(evento) => {
              setApellidos(evento.target.value);
            }}
            value={Apellidos}
          ></input>
          Edad
          <input
            onChange={(evento) => {
              setEdad(evento.target.value);
            }}
            value={Edad}
          ></input>
          <button>Guardar</button>
        </div>
      </form>
      <div>
        <span>Nombre: {mostrarNombre}</span>
        <span>Apellidos: {mostrarApellidos}</span>
        <span>Edad: {mostrarEdad}</span>
      </div>
    </>
  );
}
