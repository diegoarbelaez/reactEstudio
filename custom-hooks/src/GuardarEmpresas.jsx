import React, { useState } from "react";
import "./index.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function GuardarEmpresas() {
  const [nit, setNit] = useState("");
  const [empleados, setEmpleados] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [mostrarNit, setMostrarNit] = useState("");
  const [mostrarEmpleados, setMostrarEmpleados] = useState("");
  const [mostrarCiudad, setMostrarCiudad] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(nit);
    console.log(empleados);
    console.log(ciudad);
    setMostrarNit(nit);
    setMostrarEmpleados(empleados);
    setMostrarCiudad(ciudad);

    const objetoEmpresa = {
      nit,
      empleados,
      ciudad,
    };

    useLocalStorage("OBJETO_EMPRESA", objetoEmpresa);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="divSolido">
          Guardar Empresas NIT
          <input
            onChange={(evento) => {
              setNit(evento.target.value);
            }}
            value={nit}
          ></input>
          Empleados
          <input
            onChange={(evento) => {
              setEmpleados(evento.target.value);
            }}
            value={empleados}
          ></input>
          Ciudad
          <input
            onChange={(evento) => {
              setCiudad(evento.target.value);
            }}
            value={ciudad}
          ></input>
          <button>Guardar</button>
        </div>
      </form>
      <div>
        <span>NIT: {mostrarNit}</span>
        <span>Empleados: {mostrarEmpleados}</span>
        <span>Ciudad: {mostrarCiudad}</span>
      </div>
    </>
  );
}

export default GuardarEmpresas;
