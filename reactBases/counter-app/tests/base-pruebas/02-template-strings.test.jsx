import {getSaludo} from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-template-strings', ()=>{

    test('Prueba de Nombre', ()=> {

       const name = 'Diego';

       const message = getSaludo ( name )

       expect ( message).toBe( `Hola ${name}`)


    })


})