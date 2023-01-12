import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Counter = ({ contador }) => {

    const [numero, setNumero] = useState(contador);
    const [numero2, setNumero2] = useState(0);



    useEffect(() => {
      setNumero2( (numero2) => numero2 ++)
      console.log(`Numero2: ${numero2}`)
    })

    function incrementar() {
        console.log("Llamamos Incrementar")
        //setNumero( numero + 1 )
        setNumero((numero) => numero = numero + 1) // Una forma de alterar el estado actual
    }

    return (
        <>
            <div>Counter</div>
            <div>{numero}</div>
            <div>{numero2}</div>
            <button
                onClick={incrementar}
            >Incrementar</button>
        </>
    )
}
