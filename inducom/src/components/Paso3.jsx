import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/Contexto";
import CurrencyInput from "react-currency-input-field";
import ProgressBar from "@ramonak/react-progress-bar";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import Controles from "./Controles";

export default function Paso3({ pasoSiguiente, pasoAnterior }) {
  const datosContexto = useAppContext();

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

  //Para validar Formulario
  const [validado_v22, setValidado_v22] = useState(false);
  const [validado_v23, setValidado_v23] = useState(false);
  const [validado_v24, setValidado_v24] = useState(false);
  const [validado_v26, setValidado_v26] = useState(false);
  const [validado_v27, setValidado_v27] = useState(false);
  const [validado_v28, setValidado_v28] = useState(false);
  const [validado_v29, setValidado_v29] = useState(false);
  const [validado_v30, setValidado_v30] = useState(false);
  const [validado_v31, setValidado_v31] = useState(false);
  const [validado_v32, setValidado_v32] = useState(false);
  const [validado_v36, setValidado_v36] = useState(false);
  const [validado_v37, setValidado_v37] = useState(false);
  const [validado_v39, setValidado_v39] = useState(false);

  
  //Estados solo del Paso3
  const [validado, setValidado] = useState(false);
  const [v21, setV21] = useState(Math.round(datosContexto.v20 * 0.15));
  const [v22, setV22] = useState(0);
  const [v23, setV23] = useState(0);
  const [v24, setV24] = useState(0);
  const [v25, setV25] = useState(0);
  const [v26, setV26] = useState(0);
  const [v27, setV27] = useState(0);
  const [v28, setV28] = useState(0);
  const [v29, setV29] = useState(0);
  const [v30, setV30] = useState(0);
  const [v31, setV31] = useState(0);
  const [v32, setV32] = useState(0);
  const [v33, setV33] = useState(0);
  const [v34, setV34] = useState(0);
  const [v35, setV35] = useState(0);
  const [v36, setV36] = useState(0);
  const [v37, setV37] = useState(0);
  const [v38, setV38] = useState(0);
  const [v39, setV39] = useState(0);
  const [v40, setV40] = useState(0);

  useEffect(() => {
    validarFormulario();
  }, [v22, v23, v24, v26, v27, v28, v29, v30, v31, v32, v36, v37, v39]);

  //Calcular

  const validarFormulario = () => {
    console.log(v22);

    if (v22 == undefined || v22 < 0 || v22 == "") {
      setValidado_v22(false);
      console.log("inició en false");
      console.log(v22);
    } else {
      setValidado_v22(true);
      console.log("inicio en true");
      console.log(v22);
    }

    if (v23 == undefined || v23 < 0 || v23 == "") {
      setValidado_v23(false);
    } else {
      setValidado_v23(true);
    }

    if (v24 == undefined || v24 < 0 || v24 == "") {
      setValidado_v24(false);
    } else {
      setValidado_v24(true);
    }

    if (v26 == undefined || v26 < 0 || v26 == "") {
      setValidado_v26(false);
    } else {
      setValidado_v26(true);
    }

    if (v27 == undefined || v27 < 0 || v27 == "") {
      setValidado_v27(false);
    } else {
      setValidado_v27(true);
    }

    if (v28 == undefined || v28 < 0 || v28 == "") {
      setValidado_v28(false);
    } else {
      setValidado_v28(true);
    }

    if (v29 == undefined || v29 < 0 || v29 == "") {
      setValidado_v29(false);
    } else {
      setValidado_v29(true);
    }

    if (v30 == undefined || v30 < 0 || v30 == "") {
      setValidado_v30(false);
    } else {
      setValidado_v30(true);
    }

    if (v31 == undefined || v31 < 0 || v31 == "") {
      setValidado_v31(false);
    } else {
      setValidado_v31(true);
    }

    if (v32 == undefined || v32 < 0 || v32 == "") {
      setValidado_v32(false);
    } else {
      setValidado_v32(true);
    }

    if (v36 == undefined || v36 < 0 || v36 == "") {
      setValidado_v36(false);
    } else {
      setValidado_v36(true);
    }

    if (v37 == undefined || v37 < 0 || v37 == "") {
      setValidado_v37(false);
    } else {
      setValidado_v37(true);
    }

    if (v39 == undefined || v39 < 0 || v39 == "") {
      setValidado_v39(false);
    } else {
      setValidado_v39(true);
    }
  };

  const calcularV25 = () => {
    setV25(
      datosContexto.v20 +
        parseInt(v21) +
        parseInt(v22) +
        parseInt(v23) +
        parseInt(v24)
    );
  };

  const calcularV33 = () => {
    var valor =
      parseInt(v25) -
      parseInt(v26) -
      parseInt(v27) -
      parseInt(v28) -
      parseInt(v29) +
      parseInt(v30) +
      parseInt(v31) -
      parseInt(v32);
    setV33(valor);
    if (valor < 0) {
      setV34(valor * -1);
    }
  };

  const calcularV35 = () => {
    setV35(parseInt(favor_o_cargo));
  };

  const calcular38 = () => {
    setV38(parseInt(v35) - parseInt(v36) + parseInt(v37));
  };

  const calcularV40 = () => {
    //favor_o_cargo en realidad es la v35
    //que se puso así, para evitar sacar parciales
    var favor_o_cargo = 0;
    if (v33 > 0) {
      favor_o_cargo = v33;
      datosContexto.setFavor_o_cargo(0);
    } else {
      favor_o_cargo = v34;
      datosContexto.setFavor_o_cargo(1);
    }

    //nunca puede ser negativo, si es negativo, se pone en cero
    var valor = parseInt(v33) - parseInt(v36) + parseInt(v37) + parseInt(v39);
    if (valor < 0) {
      setV40(0);
    } else {
      setV40(valor);
    }
  };

  const onChangev37 = (value, name) => {
    setV37(value);
  };

  const onChangev36 = (value, name) => {
    setV36(value);
  };

  const onChangev39 = (value, name) => {
    setV39(value);
    //calcular40();
  };

  const calcular40 = () => {
    setV40(parseInt(v38) + parseInt(v39));
  };

  const onChangev22 = (value, name) => {
    setV22(value);
    calcularV25();
  };

  const onChangev23 = (value, name) => {
    setV23(value);
    calcularV25();
  };

  const onChangev24 = (value, name) => {
    setV24(value);
    calcularV25();
  };

  const onChangev25 = (value, name) => {
    setV25(value);
    calcularV33();
  };

  const onChangev26 = (value, name) => {
    setV26(value);
    calcularV33();
  };

  const onChangev27 = (value, name) => {
    setV27(value);
    calcularV33();
  };

  const onChangev28 = (value, name) => {
    setV28(value);
    calcularV33();
  };

  const onChangev29 = (value, name) => {
    setV29(value);
    calcularV33();
  };

  const onChangev30 = (value, name) => {
    setV30(value);
    calcularV33();
  };

  const onChangev31 = (value, name) => {
    setV31(value);
    calcularV33();
  };

  const onChangev32 = (value, name) => {
    setV32(value);
    calcularV33();
  };

  const onChangev33 = (value, name) => {
    calcularV35();
  };

  const onChangev34 = (value, name) => {
    calcularV35();
  };

  function pesos(number) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(number);
  }


  const siguiente = () => {
    //Guarda los valores v22 a v40 en el contexto
    datosContexto.setV22(v22);
    datosContexto.setV23(v23);
    datosContexto.setV24(v24);
    datosContexto.setV25(v25);
    datosContexto.setV26(v26);
    datosContexto.setV27(v27);
    datosContexto.setV28(v28);
    datosContexto.setV29(v29);
    datosContexto.setV30(v30);
    datosContexto.setV31(v31);
    datosContexto.setV32(v32);
    datosContexto.setV33(v33);
    datosContexto.setV34(v34);
    datosContexto.setV35(v35);
    datosContexto.setV36(v36);
    datosContexto.setV37(v37);
    datosContexto.setV38(v38);
    datosContexto.setV39(v39);
    datosContexto.setV40(v40);
    datosContexto.pasoSiguiente();
  };

  return (
    <>
      <div className="contenedor">
        <Controles />
        <div className="row">
          <div className="col-lg-9">
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
                    <b>PASO 3 DE 5</b>
                  </p>
                </div>
                <ProgressBar bgColor="#29a740" completed={70} />
                <br />
                <br />
                <div className="card">
                  <div className="card-body">
                    <div className="header_card">
                      <div>
                        <p>
                          <b>LIQUIDACIÓN PRIVADA</b>
                        </p>
                      </div>
                      <div>
                        <div className="actividades_grabadas">
                          {pesos(v20)}
                          <p className="actividades_grabadas_texto">
                            Según lo reportado en el paso anterior
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        21. Avisos y tableros: (15%)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v21"
                        disabled={true}
                        value={v21}
                        decimalsLimit={0}
                        onValueChange={(value, name) => getMonto1(value, name)}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo ">
                        22. PAGO POR UNIDADES COMERIALES ADICIONALES DEL SECTOR
                        FINANCIERO
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v22"
                        onValueChange={(value, name) =>
                          onChangev22(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        23. SOBRETASA BOMBERIL (Ley 1575 de 2012) (si la hay,
                        liquide según el acuerdo Municipal o distrital)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v23"
                        onValueChange={(value, name) =>
                          onChangev23(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        24. SOBRETASA DE SEGURIDAD (LEY 1421 de 2011) (SI la
                        hay, liquídela según el acuerdo Municipal o distrital)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v24"
                        onValueChange={(value, name) =>
                          onChangev24(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        25. TOTAL DE IMPUESTO A CARGO (REGLÓN 20+21+22+23+24)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v25"
                        onValueChange={(value, name) =>
                          onChangev25(value, name)
                        }
                        disabled={true}
                        value={v25}
                      />
                    </div>

                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        26. MENOS VALOR DE EXENCION O EXONERACION SOBRE EL
                        IMPUESTO Y NO SOBRE LOS INGRESOS
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v26"
                        onValueChange={(value, name) =>
                          onChangev26(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        27. MENOS RETENCIONES que lo practicaron a favor de este
                        municipio o distrito en este periodo
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v27"
                        onValueChange={(value, name) =>
                          onChangev27(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        28. MENOS AUTORRETENCIONES practicadas a favor de este
                        municipio o distrito en este periodo
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v28"
                        onValueChange={(value, name) =>
                          onChangev28(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        29. MENOS ANTICIPO LIQUIDADO EN EL AÑO ANTERIOR
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v29"
                        onValueChange={(value, name) =>
                          onChangev29(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        30. ANTICIPO DEL AÑO SIGUIENTE (Si existe, liquide
                        porcentaje según Acuerdo Municipal o Distrital)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v30"
                        onValueChange={(value, name) =>
                          onChangev30(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">31. SANCIONES</label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v31"
                        onValueChange={(value, name) =>
                          onChangev31(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        32. MENOS SALDO A FAVOR DEL PERIODO ANTERIOR SIN
                        SOLICITUD DE DEVOLUCIÓN O COMPENSACIÒN
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v32"
                        onValueChange={(value, name) =>
                          onChangev32(value, name)
                        }
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        33. TOTAL SALDO A CARGO (RENGLÓN
                        25-26-27-28-29+30+31-32)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v33"
                        value={v33}
                        disabled={true}
                        onValueChange={(value, name) => {
                          calcularV35(value, name);
                        }}
                      />
                    </div>
                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        34. TOTAL SALDO A FAVOR (RENGLÒN25-26-27-28-29+30+31-32)
                        si el resultado es menor a cero
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v34"
                        value={v34}
                        disabled={true}
                      />
                    </div>

                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        35. VALOR A PAGAR
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v35"
                        value={v35}
                        disabled={true}
                      />
                    </div>

                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        36. DESCUENTO POR PRONTO PAGO (Si existe, liquídelo
                        según el acuerdo Municipal o distrital)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v36"
                        onValueChange={(value, name) =>
                          onChangev36(value, name)
                        }
                      />
                    </div>

                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        37. INTERESES DE MORA
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v37"
                        onValueChange={(value, name) =>
                          onChangev37(value, name)
                        }
                      />
                    </div>

                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        38. TOTAL A PAGAR (RENGLÒN 35-36+37)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v38"
                        value={v38}
                        disabled={true}
                      />
                    </div>

                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        39. LIQUIDE EL VALOR DEL PAGO VOLUNTARIO (Según
                        instrucciones del munucipio/distrito)
                      </label>
                      <CurrencyInput
                        className="form-control col-3 texto_formulario number"
                        name="v39"
                        onValueChange={(value, name) =>
                          onChangev39(value, name)
                        }
                      />
                    </div>

                    <div className="form-group row">
                      <label className="col-9 texto_campo">
                        40. TOTAL A PAGAR CON PAGO VOLUNTARIO (Renglón 38 +39)
                      </label>
                      <p className="valor_a_pagar">{pesos(v40)}</p>
                    </div>

                    <div className="form-group row">
                      <div className="col-9 texto_campo"></div>
                      <div className="col-3">
                        {datosContexto.favor_o_cargo === 0 ? (
                          <>
                            <p className="a_cargo">
                              Según los valores ingresados, este valor debe ser
                              pagado
                            </p>

                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                              style={{
                                display:
                                  validado_v22 &&
                                  validado_v23 &&
                                  validado_v24 &&
                                  validado_v26 &&
                                  validado_v27 &&
                                  validado_v28 &&
                                  validado_v29 &&
                                  validado_v29 &&
                                  validado_v30 &&
                                  validado_v30 &&
                                  validado_v31 &&
                                  validado_v32 &&
                                  validado_v36 &&
                                  validado_v37 &&
                                  validado_v39
                                    ? "block"
                                    : "none",
                              }}
                              onClick={() => {
                                siguiente();
                              }}
                            >
                              GENERAR RECIBO
                            </button>
                          </>
                        ) : datosContexto.favor_o_cargo === 1 ? (
                          <p className="a_favor">
                            Según los valores ingresados, tienes saldo a favor
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                      disabled={
                        validado_v22 &&
                        validado_v23 &&
                        validado_v24 &&
                        validado_v26 &&
                        validado_v27 &&
                        validado_v28 &&
                        validado_v29 &&
                        validado_v29 &&
                        validado_v30 &&
                        validado_v30 &&
                        validado_v31 &&
                        validado_v32 &&
                        validado_v36 &&
                        validado_v37 &&
                        validado_v39
                          ? false
                          : true
                      }
                      onClick={() => {
                        calcularV40();
                      }}
                    >
                      CALCULAR
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

                {!validado_v22 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 22</span>
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
                      <span className="correcto">Campo 22</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v23 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 23</span>
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
                      <span className="correcto">Campo 23</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v24 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 24</span>
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
                      <span className="correcto">Campo 24</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v26 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 26</span>
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
                      <span className="correcto">Campo 26</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v27 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 27</span>
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
                      <span className="correcto">Campo 27</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v28 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 28</span>
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
                      <span className="correcto">Campo 28</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v29 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 29</span>
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
                      <span className="correcto">Campo 29</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v30 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 30</span>
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
                      <span className="correcto">Campo 30</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v31 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 31</span>
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
                      <span className="correcto">Campo 31</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v32 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 32</span>
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
                      <span className="correcto">Campo 32</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v36 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 36</span>
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
                      <span className="correcto">Campo 36</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v37 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 37</span>
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
                      <span className="correcto">Campo 37</span>
                    </div>
                    <div>
                      <span className="correcto">
                        <AiFillCheckCircle />
                      </span>
                    </div>
                  </div>
                )}

                {!validado_v39 ? (
                  <div className="contenedor_mensaje_error">
                    <div>
                      <span className="falta">Campo 39</span>
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
                      <span className="correcto">Campo 39</span>
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
