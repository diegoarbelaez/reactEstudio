import React from "react";
import { ReactComponent as CheckIcon } from "../res/check.svg";
import { ReactComponent as DeleteIcon } from "../res/check.svg";
import "../styles/TodoIcon.css"

export default function TodoIcon({ tipo }) {
  const tipoIcono = {
    "check": <DeleteIcon />,
    "check": <CheckIcon />,
  };

  return (
    <span className={`Icon Icon-svg Icon-${tipo}`}>{tipoIcono[tipo]}</span>
  );
}
