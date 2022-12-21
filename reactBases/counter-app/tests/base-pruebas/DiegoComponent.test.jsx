import { render } from '@testing-library/react';
import { DiegoComponent } from '../../src/DiegoComponent';


describe('Prueba del Componente Diego', ()=>{
    test('Probando que el Titulo esté', ()=>{    
       const { container} = render(<DiegoComponent nombre='Diego' apellido='Arbelaez' edad={41}/>);
       

       //forma como accedemos al DOM para hacer una prueba querySelector
       const contenidoDiv = container.querySelector('div');
       console.log(contenidoDiv.innerHTML);
       expect( contenidoDiv.innerHTML).toBe('Diego Arbelaez Componente');


    })

   
})
