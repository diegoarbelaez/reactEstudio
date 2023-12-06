import React from "react";
import { useAppContext } from "../context/Contexto";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Controles() {
  const datosContexto = useAppContext();

  const regresarInicio = () => {
    datosContexto.reiniciar();
  };

  const PopupReinicio = () => (
    <Popup
      trigger={<button className="btn btn-success"> COMENZAR DE NUEVO </button>}
      modal
    >
      {(close) => (
        <div className="card">
          <div className="card-body">
            <div className="card-header">
              <b>DESEA REALMENTE INICIAR DE CERO?</b>
            </div>
            <p className="card-text">
              <br />
              Volverás a iniciar a diligenciar los campos y pasos del
              formulario...
            </p>
            <button
              className="btn btn-success btn-block"
              onClick={regresarInicio}
            >
              Si
            </button>
            <button
              className="btn btn-danger btn-block"
              onClick={() => {
                close();
              }}
            >
              No
            </button>
            <br />
          </div>
        </div>
      )}
    </Popup>
  );

  return (
    <>
      <div className="row">
        <div className="col-12 ">
          <div className="card">
            <div className="card-body">
              <PopupReinicio />
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

export default Controles;
