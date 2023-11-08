import React, { useEffect } from "react";
import { useState } from "react";
import { useAppContext } from "../context/Contexto";
import CurrencyInput from "react-currency-input-field";
import TextAutocompletar from "./TextAutocompletar";
import actividades_ciiu from "../assets/actividades_ciiu";
import ProgressBar from "@ramonak/react-progress-bar";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Paso2() {
  const datosContexto = useAppContext();

  const [validado, setValidado] = useState(false);

  //Para ir al siguiente
  const siguiente = () => {
    datosContexto.pasoSiguiente();
  };
  const anterior = () => {
    datosContexto.pasoAnterior();
  };

  //Estados solo del Paso2
  const [actividad1, setActividad1] = useState("");
  const [valorActividad1, setValorActividad1] = useState(0);
  const [montoActividad1, setMontoActividad1] = useState(0);
  const [actividad2, setActividad2] = useState("");
  const [valorActividad2, setValorActividad2] = useState(0);
  const [montoActividad2, setMontoActividad2] = useState(0);
  const [actividad3, setActividad3] = useState("");
  const [valorActividad3, setValorActividad3] = useState(0);
  const [montoActividad3, setMontoActividad3] = useState(0);
  const [actividad4, setActividad4] = useState("");
  const [valorActividad4, setValorActividad4] = useState(0);
  const [montoActividad4, setMontoActividad4] = useState(0);
  //const [montoOtrasActividades, setMontoOtrasActividades] = useState(0);
  const [ley56, setLey56] = useState(0);


  const [validado_sumas_detalle, setValidado_sumas_detalle] = useState(false);

  useEffect(() => {
    validarFormulario();
  }, [
    valorActividad1,
    montoActividad1,
    valorActividad2,
    montoActividad2,
    valorActividad3,
    montoActividad3,
    valorActividad4,
    montoActividad4
  ])
  


  const getSelectedVal = (value) => {
    console.log(value);
  };

  const getMonto1 = (value, name) => {
    setMontoActividad1(value);
    if (montoActividad1 >= 0) {
      setValidado(true);
    } else {
      setValidado(false);
    }
  };
  const getMonto2 = (value, name) => {
    setMontoActividad2(value);
  };
  const getMonto3 = (value, name) => {
    setMontoActividad3(value);
  };

  const getMonto4 = (value) => {
    setMontoActividad4(value);
  };

  /*   const getMontoOtrasActividades = (value) => {
    setMontoOtrasActividades(value);
  }; */

  //Recuperar variables del contexto
  var tipo_identificacion = datosContexto.tipo_identificacion;
  var identificacion = datosContexto.identificacion;
  var nombre = datosContexto.nombre;
  var direccion = datosContexto.direccion;
  var telefono = datosContexto.telefono;
  var correo = datosContexto.correo;

  var v8 = datosContexto.v8;
  var v9 = datosContexto.v9;
  var v11 = datosContexto.v11;
  var v12 = datosContexto.v12;
  var v13 = datosContexto.v13;
  var v14 = datosContexto.v14;
  var v15 = datosContexto.v15;
  var v16 = datosContexto.v16;
  var v19 = datosContexto.v19;
  var v20 = datosContexto.v20;

  function pesos(number) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(number);
  }

  const getSelectedValActividad1 = (value) => {
    const texto = value;
    const actividad1 = texto.split(" - ")[0];
    const valor = texto.split(" - ")[2];
    setActividad1(actividad1);
    setValorActividad1(valor);
  };

  const getSelectedValActividad2 = (value) => {
    const texto = value;
    const actividad2 = texto.split(" - ")[0];
    const valor = texto.split(" - ")[2];
    setActividad2(actividad2);
    setValorActividad2(valor);
  };

  const getSelectedValActividad3 = (value) => {
    const texto = value;
    const actividad3 = texto.split(" - ")[0];
    const valor = texto.split(" - ")[2];
    setActividad3(actividad3);
    setValorActividad3(valor);
  };

  const getSelectedValActividad4 = (value) => {
    const texto = value;
    const actividad4 = texto.split(" - ")[0];
    const valor = texto.split(" - ")[2];
    setActividad4(actividad4);
    setValorActividad4(valor);
  };

  const getLey56 = (value, name) => {
    setLey56(value);
  };

  const calcularV20 = () => {
    console.log(montoActividad1);
    console.log(montoActividad2);
    console.log(montoActividad3);
    console.log(montoActividad4);
    console.log(v16);
    if (
      parseInt(montoActividad1, 10) +
        parseInt(montoActividad2, 10) +
        parseInt(montoActividad3, 10) +
        parseInt(montoActividad4, 10) ===
      v16
    ) {
      const v20 =
        parseInt((valorActividad1 / 1000) * montoActividad1, 10) +
        parseInt((valorActividad2 / 1000) * montoActividad2, 10) +
        parseInt((valorActividad3 / 1000) * montoActividad3, 10) +
        parseInt((valorActividad4 / 1000) * montoActividad4, 10) +
        parseInt(ley56, 10);
      // + montoOtrasActividades
      datosContexto.setV20(v20);
      datosContexto.setV19(ley56);
      console.log(v20);
      setValidado(true);
    } else {
      setValidado(false);
    }
  };

  const getChanges = (value) => {
    console.log(value);
  };


  const validarFormulario = () => {
    calcularV20();
  }

  return (
    <>
      <div className="contenedor">
        <div className="row">
          <div className="col-9">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pago Industria y Comercio</h4>
                <br />
                <p className="card-text">
                  Paga en linea desde tu casa el recibo del impuesto de
                  Industria y Comercio
                </p>
                <b>
                  Ingresa la siguiente información para realizar la liquidación
                  y pagar Online
                </b>
                <br />
                <br />
                <div className="justify-content-center">
                  <p>
                    <b>PASO 2 DE 5</b>
                  </p>
                  <ProgressBar bgColor="#29a740" completed={40} />
                </div>
                <br />
                <br />
                <div className="card">
                  <div className="card-body">
                    <div className="header_card">
                      <div>
                        <p>
                          <b>DISCRIMINACIÓN DE ACTIVIDADES GRAVADAS</b>
                        </p>
                      </div>
                      <div>
                        <p>
                          <div className="actividades_grabadas">
                            {pesos(v16)}
                            <p className="actividades_grabadas_texto">
                              Según lo reportado en el paso anterior
                            </p>
                          </div>
                        </p>
                      </div>
                    </div>
                    <p>
                      <b>
                        Del total de ingresos gravables que es {pesos(v16)} por
                        favor indíquenos las actividades asociadas a ese ingreso. Estas actividades deben sumar el valor total declarado (Casilla Verde)
                      </b>
                    </p>
                    <div className="form-group row">
                      <label className="col-4 texto_campo m-1">
                        Actividad Principal
                      </label>
                    </div>
                    <div className="form-group row">
                      <TextAutocompletar
                        className="form-control col-12 m-1"
                        pholder="Keyword..."
                        data={actividades_ciiu}
                        onSelected={getSelectedValActividad1}
                        onChange={getSelectedVal}
                      />
                      <label className="col-3 texto_campo m-1">Valor:</label>
                      <CurrencyInput
                        className="form-control col-6 texto_formulario number m-1"
                        name="v8"
                        onValueChange={(value, name) => getMonto1(value, name)}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-4 texto_campo m-1">
                        Actividad 2
                      </label>
                    </div>
                    <div className="form-group row">
                      <TextAutocompletar
                        className="form-control col-12 m-1"
                        pholder="Keyword..."
                        data={actividades_ciiu}
                        onSelected={getSelectedValActividad2}
                        onChange={getChanges}
                      />
                      <label className="col-3 texto_campo m-1">Valor:</label>
                      <CurrencyInput
                        className="form-control col-6 texto_formulario number m-1"
                        name="v8"
                        onValueChange={(value, name) => getMonto2(value, name)}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-4 texto_campo m-1">
                        Actividad 3
                      </label>
                    </div>
                    <div className="form-group row">
                      <TextAutocompletar
                        className="form-control col-12 m-1"
                        pholder="Keyword..."
                        data={actividades_ciiu}
                        onSelected={getSelectedValActividad3}
                        onChange={getChanges}
                      />
                      <label className="col-3 texto_campo m-1">Valor:</label>
                      <CurrencyInput
                        className="form-control col-6 texto_formulario number m-1"
                        name="v8"
                        onValueChange={(value, name) => getMonto3(value, name)}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-4 texto_campo m-1">
                        Actividad 4
                      </label>
                    </div>
                    <div className="form-group row">
                      <TextAutocompletar
                        className="form-control col-12 m-1"
                        pholder="Keyword..."
                        data={actividades_ciiu}
                        onSelected={getSelectedValActividad4}
                        onChange={getChanges}
                      />
                      <label className="col-3 texto_campo m-1">Valor:</label>
                      <CurrencyInput
                        className="form-control col-6 texto_formulario number m-1"
                        name="v8"
                        onValueChange={(value, name) => getMonto4(value, name)}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-3 texto_campo m-1">
                        Impuesto Ley 56 de 1981
                      </label>
                      <CurrencyInput
                        className="form-control col-6 texto_formulario number m-1"
                        name="v19"
                        value={ley56}
                        onValueChange={(value, name) => getLey56(value)}
                      />
                    </div>
                    {/*  <div className="form-group row">
                      <label className="col-4 texto_campo m-1">
                        Otras actividades
                      </label>
                      <CurrencyInput
                        className="form-control col-6 texto_formulario number m-1"
                        name="otras_actividades"
                        value={montoOtrasActividades}
                        onValueChange={(value) => getMontoOtrasActividades(value)}
                      />
                      </div> */}
                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                      disabled={validado ? false : true}
                      onClick={siguiente}
                    >
                      CONTINUAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <b>Campos a Diligenciar</b>
              </div>
              <div className="card-body">
                <p className="texto_1">
                  Asegurate que todos los campos del formulario sean
                  diligenciados. <br />
                  Cuando los completas correctamente, se marca con un check
                  verde.
                </p>

                {!validado ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Distribución de Ingresos no suma el valor declarado</span>
                    </div>
                    <div>
                      <span className="falta">
                        <AiFillCloseCircle />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="correcto">Distribución de Ingresos Completada</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
