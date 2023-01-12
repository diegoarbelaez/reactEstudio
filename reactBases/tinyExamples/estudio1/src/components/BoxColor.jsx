

import { useEffect, useState } from 'react';
import '../App.css'
export const BoxColor = ({ color }) => {

    const definirColor = (param) => {
        console.log(`Se llamo definir color`)
        switch (param) {
            case 'rojo': return '#FF3333';
            case 'azul': return '#336DFF';
            case 'amarillo': return '#FFF833';
            case 'naranja': return '#E15700';
            case 'verde': return '#1DE100';
            case 'violeta': return '#E100DF';
            default: return '#00E1C8';
        }
    }

    return (
        /*  {definirColor(color)} */
        <>
            <div className='boxColor' style={{ background: definirColor(color) }}> {color}</div>
        </>
    )
}
