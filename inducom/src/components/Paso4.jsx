import React from "react";
import { useAppContext } from "../context/Contexto";

export default function Paso4({ pasoSiguiente, pasoAnterior }) {
  const datosContexto = useAppContext();

  const siguiente = () => {
    datosContexto.pasoSiguiente();
  };

  const anterior = () => {
    datosContexto.pasoAnterior();
  };

  return (
    <>
      <div>Paso 4</div>
      <button onClick={anterior}>Anterior</button>
      
    </>
  );
}
