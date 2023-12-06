import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/Contexto";
import ProgressBar from "@ramonak/react-progress-bar";
import pdfImage from "../assets/images/pdf.png";
import Controles from "./Controles";

export default function Paso5() {
  const datosContexto = useAppContext();

  const [generado, setGenerado] = useState(0);
  const [urlPdf, setUrlPdf] = useState("");

  const generarPDf = async () => {
    //Cambiamos el estado de generado a 1 para mostrar el spinner
    setGenerado(1);

    //Genera una petición POST al servidor para generar el PDF

    const url = "https://api.craftmypdf.com/v1/create";

    //calculo de algunas variables antes de enviar el PDF
    let v10 = datosContexto.v8 - datosContexto.v9;

    if (!datosContexto.codigoActividad1) {
      datosContexto.codigoActividad1 = 0;
    }
    if (!datosContexto.codigoActividad2) {
      datosContexto.codigoActividad2 = 0;
    }
    if (!datosContexto.codigoActividad3) {
      datosContexto.codigoActividad3 = 0;
    }
    if (!datosContexto.codigoActividad4) {
      datosContexto.codigoActividad4 = 0;
    }


    const data = {
      data: {
        invoice_number: "INV38379",
        Fecha: datosContexto.Fecha,
        nombre: datosContexto.nombre,
        tipo_identificacion: datosContexto.tipo_identificacion,
        identificacion: datosContexto.identificacion,
        direccion: datosContexto.direccion,
        telefono: datosContexto.telefono,
        correo: datosContexto.correo,
        v8: datosContexto.v8,
        v9: datosContexto.v9,
        v10: v10,
        v11: datosContexto.v11,
        v12: datosContexto.v12,
        v13: datosContexto.v13,
        v14: datosContexto.v14,
        v15: datosContexto.v15,
        v16: datosContexto.v16,
        codigoActividad1: datosContexto.codigoActividad1,
        codigoActividad2: datosContexto.codigoActividad2,
        codigoActividad3: datosContexto.codigoActividad3,
        codigoActividad4: datosContexto.codigoActividad4,
        milajeActividad1: datosContexto.milajeActividad1,
        milajeActividad2: datosContexto.milajeActividad2,
        milajeActividad3: datosContexto.milajeActividad3,
        milajeActividad4: datosContexto.milajeActividad4,
        montoActividad1: datosContexto.montoActividad1,
        montoActividad2: datosContexto.montoActividad2,
        montoActividad3: datosContexto.montoActividad3,
        montoActividad4: datosContexto.montoActividad4,
        totalActividad1: datosContexto.totalActividad1,
        totalActividad2: datosContexto.totalActividad2,
        totalActividad3: datosContexto.totalActividad3,
        totalActividad4: datosContexto.totalActividad4,
        ley56: datosContexto.ley56,
      },
      load_data_from: null,
      template_id: "2be77b238d0a35f6",
      version: 8,
      export_type: "json",
      expiration: 60,
      output_file: "inducom.pdf",
      is_cmyk: false,
      image_resample_res: 600,
      direct_download: 0,
      cloud_storage: 1,
      pdf_standard: "string",
      password_protected: true,
      password: "string",
      postaction_s3_filekey: "string",
      postaction_s3_bucket: "string",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "0d2aNzc5ODo3ODI5OkdWV21oa0NJdFJIcnlDdTg",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    setUrlPdf(json.file);
    setGenerado(2);
    console.log(json)
  };

  //Hacer petición fetch

  /*   return (
    <div>
      Paso5
      <button onClick={generarPDf}>IMPRIMIR PDF</button>
    </div>
  );
 */

  //declaramos los componentes para el spinner, botón o descargar

  let componente = null;

  function Spinner() {
    return (
      <div className="divCentrado">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  function Boton() {
    return (
      <div className="divCentrado">
        <button className="boton_imprimir" onClick={generarPDf}>
          IMPRIMIR PDF
        </button>
      </div>
    );
  }

  function LinkDescarga() {
    return (
      <div className="divCentrado">
        <a href={urlPdf} target="new">Descargar</a>
        <img src={pdfImage} alt="pdf" width="50px" />
      </div>
    );
  }
  //Generamos la lógica para saber que componente activar, si generado es 0, entonces mostramos el botón, si es 1 mostramos el spinner y si es 2 mostramos el link de descarga

  if (generado === 0) {
    componente = <Boton />;
  } else if (generado === 1) {
    componente = <Spinner />;
  } else {
    componente = <LinkDescarga />;
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
                    <b>GENERACIÓN DEL RECIBO DE PAGO</b>
                  </p>
                  <ProgressBar bgColor="#29a740" completed={100} labelAlignment="center" />
                </div>
                <br />
                <br />
                <div className="card">
                  <div className="card-body">
                    <div className="header_card_center">
                      <div className="divCentrado">
                        <p className="texto_centrado">
                          <b>DESCARGA AQUÍ EL RECIBO DE PAGO</b>
                        </p>
                      </div>
                      {
                        //Renderizamos el botón, o el spinner o el link de descarga
                        componente
                      }
                    </div>

                    <br />
                    <br />

                    <div className="contenedor_form">
                      <div className="row">
                        <div className="col-12">
                          <div className="divCentrado">
                            <b>
                              FORMATO ÚNICO DE DECLARACIÓN DEL IMPUESTO DE
                              INDUSTRIA Y COMERCIO SEVILLA VALLE
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <b>MUNICIPIO:</b> SEVILLA
                        </div>
                        <div className="col-6">
                          <b>FECHA DE PRESENTACION:</b> {datosContexto.Fecha}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <b> DEPARTAMENTO:</b> VALLE DEL CACUCA
                        </div>
                        <div className="col-6">
                          <b>AÑO GRABABLE:</b> 2023
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <br />
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <b>Descargar el Recibo de Pago</b>
              </div>
              <div className="card-body">
                <p className="texto_1">
                  Aquí puedes descargar el recibo de pago de tu impuesto de
                  Industria y Comercio
                  <br />
                  <br />
                  Con este recibo podrás pagar en Bancos y presentar el pago en
                  hacienda o enviarlo a hacienda@sevilla-valle.gov.co
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
