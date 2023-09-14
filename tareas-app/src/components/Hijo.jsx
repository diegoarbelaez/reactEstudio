import React from "react";

export default function Hijo({ enviarRegalo }) {
  /**
     La funcion generarRegalo es la que se llama en el onClick
     al llamar esta funcion, invoca la funcion del padre que fue escrita en el padre y pasada como prop
     la funcion que fue pasada desde el padre, ya conoce el contexto y sabe como manejar el estado
     */

  const generarRegalo = () => {
    enviarRegalo("este es el regalo");
  };

  return (
    <>
      <p>Hijo: </p>
      {<button onClick={generarRegalo}>Regalar</button>}
    </>
  );
}
