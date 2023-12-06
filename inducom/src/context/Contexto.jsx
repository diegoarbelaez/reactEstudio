import { useContext, createContext, useState } from "react";
import { React } from "react";

const AppContext = createContext({
  // Elementos del contexto
  pasoActivo: 1,
  pasoSiguiente: () => {},
  pasoAnterior: () => {},
  reiniciar: () => {},
  v8: 0,
  setV8: () => {},
  v9: 0,
  setV9: () => {},
  v11: 0,
  setV11: () => {},
  v12: 0,
  setV12: () => {},
  v13: 0,
  setV13: () => {},
  v14: 0,
  setV14: () => {},
  v15: 0,
  setV15: () => {},
  v16: 0,
  setV16: () => {},
  v19: 0,
  setV19: () => {},
  v20: 0,
  setV20: () => {},
  v21: 0,
  setV21: () => {},
  v22: 0,
  setV22: () => {},
  v23: 0,
  setV23: () => {},
  v24: 0,
  setV24: () => {},
  v25: 0,
  setV25: () => {},
  v26: 0,
  setV26: () => {},
  v27: 0,
  setV27: () => {},
  v28: 0,
  setV28: () => {},
  v29: 0,
  setV29: () => {},
  v30: 0,
  setV30: () => {},
  v31: 0,
  setV31: () => {},
  v32: 0,
  setV32: () => {},
  v33: 0,
  setV33: () => {},
  v34: 0,
  setV34: () => {},
  v35: 0,
  setV35: () => {},
  v36: 0,
  setV36: () => {},
  v37: 0,
  setV37: () => {},
  v38: 0,
  setV38: () => {},
  v39: 0,
  setV39: () => {},
  v40: 0,
  setV40: () => {},
  tipo_identificacion: "",
  setTipo_identificacion: () => {},
  identificacion: "",
  setIdentificacion: () => {},
  nombre: "",
  setNombre: () => {},
  direccion: "",
  setDireccion: () => {},
  telefono: "",
  setTelefono: () => {},
  correo: "",
  setCorreo: () => {},
  Fecha: "",
  setFecha: () => {},
  favor_o_cargo: 2, // 0 = a cargo, 1 = a favor, 2 = sin definir
  setFavor_o_cargo: () => {},
  codigoActividad1: 0,
  setCodigoActividad1: () => {},
  milajeActividad1: 0,
  setMilajeActividad1: () => {},
  montoActividad1: 0,
  setMontoActividad1: () => {},
  totalActividad1: 0,
  setTotalActividad1: () => {},
  codigoActividad2: 0,
  setCodigoActividad2: () => {},
  milajeActividad2: 0,
  setMilajeActividad2: () => {},
  montoActividad2: 0,
  setMontoActividad2: () => {},
  totalActividad2: 0,
  setTotalActividad2: () => {},
  codigoActividad3: 0,
  setCodigoActividad3: () => {},
  milajeActividad3: 0,
  setMilajeActividad3: () => {},
  montoActividad3: 0,
  setMontoActividad3: () => {},
  totalActividad3: 0,
  setTotalActividad3: () => {},
  codigoActividad4: 0,
  setCodigoActividad4: () => {},
  milajeActividad4: 0,
  setMilajeActividad4: () => {},
  montoActividad4: 0,
  setMontoActividad4: () => {},
  totalActividad4: 0,
  setTotalActividad4: () => {},
  ley56: 0,
  setLey56: () =>{}
});

export default function Contexto({ children }) {
  // Elementos del contexto
  const [pasoActivo, setPasoActivo] = useState(1);

  const [tipo_identificacion, setTipo_identificacion] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [Fecha, setFecha] = useState("");
  const [v8, setV8] = useState(0);
  const [v9, setV9] = useState(0);
  const [v11, setV11] = useState(0);
  const [v12, setV12] = useState(0);
  const [v13, setV13] = useState(0);
  const [v14, setV14] = useState(0);
  const [v15, setV15] = useState(0);
  const [v16, setV16] = useState(0); //Se calcula basada en 10 - 11 - 12 - 13 - 14 - 15
  const [v19, setV19] = useState(0); //impuesto de ley 56
  const [v20, setV20] = useState(0); //Se calcula basada en los CIIU seleccionados + v19
  const [v21, setV21] = useState(0); // 15% de v20
  const [v22, setV22] = useState(0); 
  const [v23, setV23] = useState(0);
  const [v24, setV24] = useState(0);
  const [v25, setV25] = useState(0); //Se calcula basada en 20 + 21 + 22 + 23 + 24
  const [v26, setV26] = useState(0);
  const [v27, setV27] = useState(0); // Retenciones que le practicaron a favor del municipio en este periodo
  const [v28, setV28] = useState(0);
  const [v29, setV29] = useState(0); // Anticipos liquidados en el año anterior
  const [v30, setV30] = useState(0); // Anticipo del año siguiente
  const [v31, setV31] = useState(0); 
  const [v32, setV32] = useState(0);
  const [v33, setV33] = useState(0); //SALDO A CARGO - Se calcula asi 25 - 26 - 27 - 28 - 29 + 30 + 31 - 32
  const [v34, setV34] = useState(0); //SALDO A FAVOR - Se calcula asi 25 - 26 - 27 - 28 - 29 + 30 + 31 - 32
  const [v35, setV35] = useState(0); //Valor a pagar (Segun 33 o 34) a favor o a cargo
  const [v36, setV36] = useState(0); //Descuento por pronto pago (Hasta antes del 10 de marzo se aplica el 10% de v35)
  const [v37, setV37] = useState(0); //Calcula intereses de mora a partir de una fecha, usar un endpoint o algo
  const [v38, setV38] = useState(0); //TOTAL a pagar (Segun 35 - 36 + 37)
  const [v39, setV39] = useState(0); // Voluntario
  const [v40, setV40] = useState(0); // Total a pagar con voluntario (38 + 39)
  const [favor_o_cargo, setFavor_o_cargo] = useState(2); // 0 = a cargo, 1 = a favor, 2 = sin definir
  const [codigoActividad1, setCodigoActividad1] = useState(0);
  const [milajeActividad1, setMilajeActividad1] = useState(0);
  const [montoActividad1, setMontoActividad1] = useState(0);
  const [totalActividad1, setTotalActividad1] = useState(0);
  const [codigoActividad2, setCodigoActividad2] = useState(0);
  const [milajeActividad2, setMilajeActividad2] = useState(0);
  const [montoActividad2, setMontoActividad2] = useState(0);
  const [totalActividad2, setTotalActividad2] = useState(0);
  const [codigoActividad3, setCodigoActividad3] = useState(0);
  const [milajeActividad3, setMilajeActividad3] = useState(0);
  const [montoActividad3, setMontoActividad3] = useState(0);
  const [totalActividad3, setTotalActividad3] = useState(0);
  const [codigoActividad4, setCodigoActividad4] = useState(0);
  const [milajeActividad4, setMilajeActividad4] = useState(0);
  const [montoActividad4, setMontoActividad4] = useState(0);
  const [totalActividad4, setTotalActividad4] = useState(0); 
  const [ley56, setLey56] = useState(0);
  
  const pasoSiguiente = () => {
    setPasoActivo(pasoActivo + 1);
  };

  const pasoAnterior = () => {
    setPasoActivo(pasoActivo - 1);
  };

  const reiniciar = () => { 
    setPasoActivo(1);
    setTipo_identificacion("");
    setIdentificacion("");
    setNombre("");
    setDireccion("");
    setTelefono("");
    setCorreo("");
    setFecha("");
    setV8(0);
    setV9(0);
    setV11(0);
    setV12(0);
    setV13(0);
    setV14(0);
    setV15(0);
    setV16(0);
    setV19(0);
    setV20(0);
    setV21(0);
    setV22(0);
    setV23(0);
    setV24(0);
    setV25(0);
    setV26(0);
    setV27(0);
    setV28(0);
    setV29(0);
    setV30(0);
    setV31(0);
    setV32(0);
    setV33(0);
    setV34(0);
    setV35(0);
    setV36(0);
    setV37(0);
    setV38(0);
    setV39(0);
    setV40(0);
  }

  return (
    <AppContext.Provider
      value={{
        pasoActivo,
        setPasoActivo,
        pasoSiguiente,
        pasoAnterior,
        reiniciar,
        tipo_identificacion,
        setTipo_identificacion,
        identificacion,
        setIdentificacion,
        nombre,
        setNombre,
        direccion,
        setDireccion,
        telefono,
        setTelefono,
        correo,
        setCorreo,
        Fecha,
        setFecha,
        v8,
        setV8,
        v9,
        setV9,
        v11,
        setV11,
        v12,
        setV12,
        v13,
        setV13,
        v14,
        setV14,
        v15,
        setV15,
        v16,
        setV16,
        v19,
        setV19,
        v20,
        setV20,
        v21,
        setV21,
        v22,
        setV22,
        v23,
        setV23,
        v24,
        setV24,
        v25,
        setV25,
        v26,
        setV26,
        v27,
        setV27,
        v28,
        setV28,
        v29,
        setV29,
        v30,
        setV30,
        v31,
        setV31,
        v32,
        setV32,
        v33,
        setV33,
        v34,
        setV34,
        v35,
        setV35,
        v36,
        setV36,
        v37,
        setV37,
        v38,
        setV38,
        v39,
        setV39,
        v40,
        setV40,
        favor_o_cargo,
        setFavor_o_cargo,
        codigoActividad1,
        setCodigoActividad1,
        milajeActividad1,
        setMilajeActividad1,
        montoActividad1,
        setMontoActividad1,
        totalActividad1,
        setTotalActividad1,
        codigoActividad2,
        setCodigoActividad2,
        milajeActividad2,
        setMilajeActividad2,
        montoActividad2,
        setMontoActividad2,
        totalActividad2,
        setTotalActividad2,
        codigoActividad3,
        setCodigoActividad3,
        milajeActividad3,
        setMilajeActividad3,
        montoActividad3,
        setMontoActividad3,
        totalActividad3,
        setTotalActividad3,
        codigoActividad4,
        setCodigoActividad4,
        milajeActividad4,
        setMilajeActividad4,
        montoActividad4,
        setMontoActividad4,
        totalActividad4,
        setTotalActividad4,
        ley56,
        setLey56
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
