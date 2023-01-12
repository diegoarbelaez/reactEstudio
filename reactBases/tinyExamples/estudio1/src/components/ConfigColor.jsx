import { useState } from "react"
import { BoxColor } from "./BoxColor";

export const ConfigColor = () => {

    const [valorColor, setValorColor] = useState('');
    const [valorFinal, setValorFinal] = useState('');

    const leerInput = (event) => {
        //console.log(event.target.value);
        setValorColor(event.target.value);
    }

    const envioFormulario = (event) => {
        if (valorColor.trim().length <= 1) return;
        console.log(`Envio Formulario con ${valorColor}`);
        event.preventDefault();
        setValorFinal(valorColor);
        setValorColor('');
    }

    return (
        <>
        <BoxColor color={valorFinal}/>
            <form
                onSubmit={envioFormulario}
            >
                <input
                    onChange={leerInput}
                    value={valorColor}
                >
                </input>
                <button

                onClick={envioFormulario}
                >Ajustar Color</button>
            </form>
        </>
    )
}
