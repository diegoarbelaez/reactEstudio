import React from "react";
import { useState } from "react";
import { useAppContext } from "../context/Contexto";
import CurrencyInput from "react-currency-input-field";
import ProgressBar from "@ramonak/react-progress-bar";

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

  //Para ir al siguiente
  const siguiente = () => {
    datosContexto.pasoSiguiente();
  };
  const anterior = () => {
    datosContexto.pasoAnterior();
  };

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

  //Calcular

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
    var valor =
      parseInt(v33) - parseInt(v36) + parseInt(v37) + parseInt(v39);
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
    calcular40();
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

  return (
    <>
      <div className="contenedor">
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
                        value={v22}
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
                        value={v23}
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
                        value={v24}
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
                        value={v26}
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
                        value={v27}
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
                        value={v28}
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
                        value={v29}
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
                        value={v30}
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
                        value={v31}
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
                        value={v32}
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
                        value={v36}
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
                        value={v37}
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
                        value={v39}
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
                          <p className="a_cargo">Según los valores ingresados, este valor debe ser pagado</p>
                        ) : datosContexto.favor_o_cargo === 1 ? (
                          <p className="a_favor">Según los valores ingresados, tienes saldo a favor</p>
                        ) : (
                          null
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                      /* disabled={validado ? false : true} */
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
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="card">
                  <div className="card-body">
                    <p>
                      Tipo de Identificacion: {tipo_identificacion}
                      <br />
                      Identificacion: {identificacion}
                      <br />
                      Nombre: {nombre}
                      <br />
                      Direccion: {direccion}
                      <br />
                      Telefono: {telefono}
                      <br />
                      Correo: {correo}
                      v8: {pesos(v8)}
                      <br />
                      v9: {pesos(v9)}
                      <br />
                      v11: {pesos(v11)}
                      <br />
                      v12: {pesos(v12)}
                      <br />
                      v13: {pesos(v13)}
                      <br />
                      v14: {pesos(v14)}
                      <br />
                      v15: {pesos(v15)}
                      <br />
                      v16: {pesos(v16)}
                      <br />
                      v19: {pesos(v19)}
                      <br />
                      v20: {pesos(v20)}
                      <br />
                      v21: {pesos(v21)}
                      <br />
                      v22: {pesos(v22)}
                      <br />
                      v23: {pesos(v23)}
                      <br />
                      v24: {pesos(v24)}
                      <br />
                      v25: {pesos(v25)}
                      <br />
                      v26: {pesos(v26)}
                      <br />
                      v27: {pesos(v27)}
                      <br />
                      v28: {pesos(v28)}
                      <br />
                      v29: {pesos(v29)}
                      <br />
                      v30: {pesos(v30)}
                      <br />
                      v31: {pesos(v31)}
                      <br />
                      v32: {pesos(v32)}
                      <br />
                      v33: {pesos(v33)}
                      <br />
                      v34: {pesos(v34)}
                      <br />
                      v35: {pesos(v35)}
                      <br />
                      v36: {pesos(v36)}
                      <br />
                      v37: {pesos(v37)}
                      <br />
                      v38: {pesos(v38)}
                      <br />
                      v39: {pesos(v39)}
                      <br />
                      v40: {pesos(v40)}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
