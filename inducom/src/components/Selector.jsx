import React from "react";
import { useAppContext } from "../context/Contexto";
import Paso1 from "./Paso1";
import Paso2 from "./Paso2";
import Paso3 from "./Paso3";
import Paso4 from "./Paso4";

export default function Selector() {
  const datosContexto = useAppContext();
  const { pasoActivo } = datosContexto;

  switch (pasoActivo) {
    case 1:
      return <Paso1 />;
    case 2:
      return <Paso2 />;
    case 3:
      return <Paso3 />;
    case 4:
      return <Paso4 />;
    default:
      return <Paso1 />;
  }
}
