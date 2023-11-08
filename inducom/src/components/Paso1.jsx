import React from "react";
import { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import { useAppContext } from "../context/Contexto.jsx";
import ProgressBar from "@ramonak/react-progress-bar";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Paso1() {
  const datosContexto = useAppContext();

  const [validado, setValidado] = useState(false);

  const siguiente = () => {
    datosContexto.pasoSiguiente();
  };

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

  //validar campos
  //let validado_tipo_identificacion = false;

  const [validado_tipo_identificacion, setValidado_tipo_identificacion] =
    useState(false);

  const [validado_identificacion, setValidado_identificacion] = useState(false);
  const [validado_nombre, setValidado_nombre] = useState(false);
  const [validado_direccion, setValidado_direccion] = useState(false);
  const [validado_telefono, setValidado_telefono] = useState(false);
  const [validado_correo, setValidado_correo] = useState(false);
  const [validado_v8, setValidado_v8] = useState(false);
  const [validado_v9, setValidado_v9] = useState(false);
  const [validado_v11, setValidado_v11] = useState(false);
  const [validado_v12, setValidado_v12] = useState(false);
  const [validado_v13, setValidado_v13] = useState(false);
  const [validado_v14, setValidado_v14] = useState(false);
  const [validado_v15, setValidado_v15] = useState(false);

  useEffect(() => {
    validarFormulario();
  }, [
    datosContexto.tipo_identificacion,
    datosContexto.identificacion,
    datosContexto.nombre,
    datosContexto.direccion,
    datosContexto.telefono,
    datosContexto.correo,
    datosContexto.v8,
    datosContexto.v9,
    datosContexto.v11,
    datosContexto.v12,
    datosContexto.v13,
    datosContexto.v14,
    datosContexto.v15,
    datosContexto.v16,
    validado
  ]);

  //inicializar valores
  /* datosContexto.setV9(16469000); */

  const calcularv16 = (e) => {
    //Esta funcion calcula la variable 16 TOTAL INGRESOS GRAVABLES (RENGLÓN 10 MENOS 11,12,13,14 Y 15)
    datosContexto.setV16(v8 - v9 - v11 - v12 - v13 - v14 - v15);
    siguiente();
  };

  const inputChange = (value, name) => {
    switch (name) {
      case "v8":
        datosContexto.setV8(value);
        v8 = value;
        break;
      case "v9":
        datosContexto.setV9(value);
        break;
      case "v11":
        datosContexto.setV11(value);
        break;
      case "v12":
        datosContexto.setV12(value);
        break;
      case "v13":
        datosContexto.setV13(value);
        break;
      case "v14":
        datosContexto.setV14(value);
        break;
      case "v15":
        datosContexto.setV15(value);
        break;
    }
    validarFormulario();
  };

  function inputChangeText(e) {
    switch (e.target.name) {
      case "tipo_identificacion":
        datosContexto.setTipo_identificacion(e.target.value);
        break;
      case "identificacion":
        datosContexto.setIdentificacion(e.target.value);
        break;
      case "nombre":
        datosContexto.setNombre(e.target.value);
        break;
      case "direccion":
        datosContexto.setDireccion(e.target.value);
        break;
      case "telefono":
        datosContexto.setTelefono(e.target.value);
        break;
      case "correo":
        datosContexto.setCorreo(e.target.value);
        break;
    }
    validarFormulario();
  }

  // validaciones del formulario, todos los estados deben tener algún valor

  const validarFormulario = () => {

    if (tipo_identificacion == 0 || tipo_identificacion == "" || tipo_identificacion == undefined) {
      setValidado_tipo_identificacion(false);
      setValidado(false);
    } else {
      setValidado_tipo_identificacion(true);
      setValidado(true);
    }

    if (
      identificacion == 0 ||
      identificacion == "" ||
      identificacion.length < 5
    ) {
      setValidado_identificacion(false);
      setValidado(false);
    } else {
      setValidado_identificacion(true);
      setValidado(true);
    }

    if (nombre == 0 || nombre == "" || nombre.length < 5) {
      setValidado_nombre(false);
      setValidado(false);
    } else {
      setValidado_nombre(true);
      setValidado(true);
    }

    if (direccion == 0 || direccion == "" || direccion.length < 5) {
      setValidado_direccion(false);
      setValidado(false);
    } else {
      setValidado_direccion(true);
      setValidado(true);
    }

    if (
      telefono == 0 ||
      telefono == "" ||
      telefono.length != 10 ||
      !telefono.startsWith(3)
    ) {
      setValidado_telefono(false);
      setValidado(false);
    } else {
      setValidado_telefono(true);
      setValidado(true);
    }

    if (
      correo == 0 ||
      correo == "" ||
      correo == "" ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)
    ) {
      setValidado_correo(false);
      setValidado(false);
    } else {
      setValidado_correo(true);
      setValidado(true);
    }

    if (v8 == "" || v8 < 0 || v8 == undefined) {
      setValidado_v8(false);
      setValidado(false);
    } else {
      setValidado_v8(true);
      setValidado(true);
    }

    if (v9 < 0 || v9 == "" || v9 == undefined) {
      setValidado_v9(false);
      setValidado(false);
    } else {
      setValidado_v9(true);
      setValidado(true);
    }

    if (v11 < 0 || v11 == "" || v11 == undefined) {
      setValidado_v11(false);
      setValidado(false);
    } else {
      setValidado_v11(true);
      setValidado(true);
    }

    if (v12 < 0 || v12 == "" || v12 == undefined) {
      setValidado_v12(false);
      setValidado(false);
    } else {
      setValidado_v12(true);
      setValidado(true);
    }

    if (v13 < 0 || v13 == "" || v13 == undefined) {
      setValidado_v13(false);
      setValidado(false);
    } else {
      setValidado_v13(true);
      setValidado(true);
    }

    if (v14 < 0 || v14 == "" || v14 == undefined) {
      setValidado_v14(false);
      setValidado(false);
    } else {
      setValidado_v14(true);
      setValidado(true);
    }

    if (v15 < 0 || v15 == "" || v15 == undefined) {
      setValidado_v15(false);
      setValidado(false);
    } else {
      setValidado_v15(true);
      setValidado(true);
    }


    console.log(validado_tipo_identificacion);
    console.log(validado_identificacion);
    console.log(validado_nombre);
    console.log(validado_direccion);
    console.log(validado_telefono);
    console.log(validado_correo);
    console.log(validado_v8);
    console.log(validado_v9);
    console.log(validado_v11);
    console.log(validado_v12);
    console.log(validado_v13);
    console.log(validado_v14);
    console.log(validado_v15);
    console.log(validado);

  };

  return (
    <div className="contenedor">
      <div className="row">
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Pago Industria y Comercio</h4>
              <br />
              <p className="card-text">
                Paga en linea desde tu casa el recibo del impuesto de Industria
                y Comercio
              </p>
              <b>
                Ingresa la siguiente información para realizar la liquidación y
                pagar Online
              </b>
              <br />
              <br />
              <div className="justify-content-center">
                <p>
                  <b>PASO 1 DE 5</b>
                </p>
                <ProgressBar bgColor="#29a740" completed={10} />
                <br />
                <br />
                <div className="card">
                  <div className="card-body">
                    <p>
                      <b>A. INFORMACIÓN DEL CONTRIBUYENTE</b>
                    </p>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Tipo de Identificación</label>
                        <select
                          className="form-control"
                          name="tipo_identificacion"
                          value={tipo_identificacion}
                          onChange={inputChangeText}
                          required
                        >
                          <option value="0">-- Seleccione --</option>
                          <option value="1">Cédula de Ciudadanía</option>
                          <option value="2">Cédula de Extranjería</option>
                          <option value="3">NIT</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Número de Cédula o NIT </label>
                        <input
                          type="number"
                          className="form-control"
                          name="identificacion"
                          value={identificacion}
                          onChange={inputChangeText}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label>Nombres y Apellidos o Razón Social</label>
                        <input
                          type="text"
                          className="form-control"
                          name="nombre"
                          value={nombre}
                          onChange={inputChangeText}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label>Dirección de Notificación</label>
                        <input
                          type="text"
                          className="form-control"
                          name="direccion"
                          value={direccion}
                          onChange={inputChangeText}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Teléfono (Celular)</label>
                        <input
                          type="number"
                          className="form-control"
                          name="telefono"
                          value={telefono}
                          onChange={inputChangeText}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Correo Electrónico</label>
                        <input
                          type="text"
                          className="form-control"
                          name="correo"
                          value={correo}
                          onChange={inputChangeText}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="card">
                <div className="card-body">
                  <p>
                    <b>B. BASE GRABABLE</b>
                  </p>
                  <div className="form-group row">
                    <label className="col-lg-9 texto_campo">
                      8. TOTAL INGRESOS ORDINARIOS Y EXTRAORDINARIOS DEL PERIODO
                      EN TODO EL PAIS
                    </label>
                    <div className="col-lg-3">
                      <CurrencyInput
                        className="form-control texto_formulario number"
                        name="v8"
                        onValueChange={(value, name) =>
                          inputChange(value, name)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-9 texto_campo">
                      9. INGRESOS FUERA DE ESTE MUNICIPIO O DISTRITO
                    </label>
                    <div className="col-lg-3">
                      <CurrencyInput
                        className="form-control texto_formulario number2"
                        name="v9"
                        onValueChange={(value, name) =>
                          inputChange(value, name)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-9 texto_campo">
                      11. INGRESOS POR DEVOLUCIONES, REBAJAS, DESCUENTOS
                    </label>
                    <div className="col-lg-3">
                      <CurrencyInput
                        className="form-control texto_formulario number3"
                        name="v11"
                        onValueChange={(value, name) =>
                          inputChange(value, name)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-9 texto_campo">
                      12. INGRESOS POR EXPORTACIONES
                    </label>
                    <div className="col-lg-3">
                      <CurrencyInput
                        className="form-control texto_formulario number4"
                        name="v12"
                        onValueChange={(value, name) =>
                          inputChange(value, name)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-9 texto_campo">
                      13. INGRESOS POR VENTA DE ACTIVOS FIJOS
                    </label>
                    <div className="col-lg-3">
                      <CurrencyInput
                        className="form-control texto_formulario number5"
                        name="v13"
                        onValueChange={(value, name) =>
                          inputChange(value, name)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-9 texto_campo">
                      14. INGRESOS POR ACTIVIDADES EXCLUIDAS O NO SUJETAS Y
                      OTROS INGRESOS NO GRAVADOS
                    </label>
                    <div className="col-lg-3">
                      <CurrencyInput
                        className="form-control texto_formulario number6"
                        name="v14"
                        onValueChange={(value, name) =>
                          inputChange(value, name)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-9 texto_campo">
                      15. INGRESOS POR OTRAS ACTIVIDADES EXENTAS EN ESTE
                      MINICIPIO O DISTRITO (POR ACUERDO)
                    </label>
                    <div className="col-lg-3">
                      <CurrencyInput
                        className="form-control texto_formulario number7"
                        name="v15"
                        onValueChange={(value, name) =>
                          inputChange(value, name)
                        }
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-success btn-block"
                    onClick={calcularv16}
                    disabled={!validado}
                  >
                    CONTINUAR
                  </button>
                </div>
              </div>
              <br />
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
                Cuando los completas correctamente, se marca con un check verde.
              </p>

              {!validado_tipo_identificacion ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Tipo de Identificacion</span>
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
                    <span className="correcto">Tipo de Identificacion</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_identificacion ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Número de Cédula o NIT</span>
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
                    <span className="correcto">Número de Cédula o NIT</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_nombre ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">
                      Nombres y Apellidos o Razón Social
                    </span>
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
                    <span className="correcto">
                      Nombres y Apellidos o Razón Social
                    </span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_direccion ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Dirección</span>
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
                    <span className="correcto">Dirección</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_telefono ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Teléfono (Celular)</span>
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
                    <span className="correcto">Teléfono (Celular)</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_correo ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Correo Electrónico</span>
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
                    <span className="correcto">Correo Electrónico</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_v8 ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Campo 8</span>
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
                    <span className="correcto">Campo 8</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_v9 ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Campo 9</span>
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
                    <span className="correcto">Campo 9</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_v11 ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Campo 11</span>
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
                    <span className="correcto">Campo 11</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_v12 ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Campo 12</span>
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
                    <span className="correcto">Campo 12</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_v13 ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Campo 13</span>
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
                    <span className="correcto">Campo 13</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_v14 ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Campo 14</span>
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
                    <span className="correcto">Campo 14</span>
                  </div>
                  <div>
                    <span className="correcto">
                      <AiFillCheckCircle />
                    </span>
                  </div>
                </div>
              )}

              {!validado_v15 ? (
                <div className="contenedor_mensaje_error">
                  <div>
                    <span className="falta">Campo 15</span>
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
                    <span className="correcto">Campo 15</span>
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
  );
}
