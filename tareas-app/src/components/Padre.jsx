import React from "react";
import Hijo from "./Hijo";
import { useState } from "react";


//Como comunicar funciones hijo con las funciones padre
/***  Pasos
1. crear la funcion que modifica el estado en el padre, es decir, la funcion que en el padre presenta el resultado o maneja el estado
2. enviar la función como prop al hijo
3. desde el hijo crear una funcion que llame la funcion del padre mediante un eventHandler (mirar Hijo.jsx)
*/


export default function Padre() {
  
const [regalo, setregalo] = useState("");

  const enviarRegalo = (regalo) => {
    setregalo(regalo)
  };

  return (
    <div>
      <p>Soy el Padre, regalo: {regalo}</p>
      <hr></hr>
      <Hijo enviarRegalo={enviarRegalo} />
    </div>
  );
}
 