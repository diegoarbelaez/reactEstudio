import React from "react";
import { useAppContext } from "../context/Contexto";
import ProgressBar from "@ramonak/react-progress-bar";
import Controles from "./Controles";



export default function Paso4({ pasoSiguiente, pasoAnterior }) {
  const datosContexto = useAppContext();

  const siguiente = () => {
    datosContexto.pasoSiguiente();
  };

  const anterior = () => {
    datosContexto.pasoAnterior();
  };

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
        <Controles /> 
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
                    <b>PASO 4 DE 5</b>
                  </p>
                  <ProgressBar bgColor="#29a740" completed={80} />
                </div>
                <br />
                <br />
                <div className="card">
                  <div className="card-body">
                    <div className="header_card">
                      <div>
                        <p>
                          <b>RESUMEN DE TU LIQUIDACIÓN</b>
                        </p>
                      </div>
                      <div>
                        <div className="actividades_grabadas">
                          {pesos(datosContexto.v40)}
                          <p className="actividades_grabadas_texto">
                            Este es el valor a pagar
                          </p>
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />

                    <div className="contenedor_form">
                      <div className="row">
                        <div className="col-12">
                          <div className="divCentrado">
                          <b>FORMATO ÚNICO DE DECLARACIÓN DEL IMPUESTO DE INDUSTRIA
                          Y COMERCIO SEVILLA VALLE</b>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <b>MUNICIPIO:</b> SEVILLA
                        </div>
                        <div className="col-6"><b>FECHA DE PRESENTACION:</b> {datosContexto.Fecha}</div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <b> DEPARTAMENTO:</b> VALLE DEL CACUCA
                        </div>
                        <div className="col-6"><b>AÑO GRABABLE:</b> 2023</div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <br />

                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Concepto</th>
                          <th scope="col">Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Tipo de Documento</th>
                          <td>
                            {
                              {
                                1: "Cédula de Ciudadanía",
                                2: "Cédula de Extranjería",
                                3: "NIT",
                              }[datosContexto.tipo_identificacion]
                            }
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Número del Documento</th>
                          <td>{datosContexto.identificacion}</td>
                        </tr>
                        <tr>
                          <th scope="row">Dirección</th>
                          <td colSpan="2">{datosContexto.direccion}</td>
                        </tr>
                        <tr>
                          <th scope="row">Teléfono (Celular)</th>
                          <td colSpan="2">{datosContexto.telefono}</td>
                        </tr>
                        <tr>
                          <th scope="row">Correo Electrónico</th>
                          <td colSpan="2">{datosContexto.correo}</td>
                        </tr>
                        <tr>
                          <th scope="row">Valor en Ventas</th>
                          <td colSpan="2">{pesos(datosContexto.v16)}</td>
                        </tr>
                        <tr>
                          <th scope="row">Valor Industria y Comercio</th>
                          <td colSpan="2">{pesos(datosContexto.v20)}</td>
                        </tr>
                        <tr>
                          <th scope="row">Valor Avisos y Tableros</th>
                          <td colSpan="2">{pesos(datosContexto.v21)}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            PAGO POR UNIDADES COMERCIALES ADICIONALES DEL SECTOR
                            FINANCIERO
                          </th>
                          <td colSpan="2">{pesos(datosContexto.v22)}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            DESCUENTO POR PRONTO PAGO (Si existe, liquídelo
                            según el Acuerdo Municipal o distrital
                          </th>
                          <td colSpan="2">{pesos(datosContexto.v23)}</td>
                        </tr>
                        <tr>
                          <th scope="row">INTERESES DE MORA</th>
                          <td colSpan="2">{pesos(datosContexto.v37)}</td>
                        </tr>
                        <tr>
                          <th scope="row">APORTE VOLUNTARIO</th>
                          <td colSpan="2">{pesos(datosContexto.v39)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="acciones">
                  <button
                    type="button"
                    className="btn btn-success btn-lg"
                    onClick={siguiente}
                  >
                    GENERAR RECIBO DE PAGO PARA PAGAR EN BANCO
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={siguiente}
                  >
                    PAGAR ONLINE CON PSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <b>Resumen de tu liquidación</b>
              </div>
              <div className="card-body">
                <p className="texto_1">
                  Aquí aparecen los datos finales después de realizar los
                  calculos del pago de Industria y Comercio.
                  <br />
                  <br />
                  Recuerda que si tienes alguna duda en inquietud puedes
                  comunicarte con la secretaría de hacienda municipal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
