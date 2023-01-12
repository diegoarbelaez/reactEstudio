import React from 'react'

export const Greeting = ( {prop1, prop2, propx, operacion} ) => {
    
    const persona = {
        nombre: 'Diego',
        apellido: 'Arbeláez'
      }

 

      return (
        <>
          <h1> Nombre: {persona.nombre}</h1>
          <h1> Apellido: {persona.apellido}</h1>
          <h1> Prop1: {prop1}</h1>
          <h1> Prop2: {prop2}</h1>
          <h1> Prop2: {propx}</h1>
          <h1> Function: {operacion > 10 ? "Es mayor que 10 ":"No supera el monto :(" }</h1>

        </>
      )
}

export const HelloWorld = () => {
  const persona2 = {
      nombre: 'Pedro',
      apellido: 'Pérez'
    }
    return (
      <>
        <h1> Nombre: {persona2.nombre}</h1>
        <h1> Apellido: {persona2.apellido}</h1>
      </>
    )
}

