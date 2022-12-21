import {fireEvent, render, screen} from '@testing-library/react';
import { CounterApp } from '../../src/CounterApp';


describe('Prueba Counter App', ()=>{


    test('Match con el Snapshot', ()=>{
        const { container } = render (<CounterApp value={20} />);
        expect (container) .toMatchSnapshot();
    })

    test('Debe Mostrar 100 al inicio', ()=>{
        render(<CounterApp value={100} />);
        const valor = screen.getByText(100);
        expect (valor.innerHTML) .toContain("100");
    })


    test('Debe incrementar', ()=>{
        render(<CounterApp value={100} />);
        fireEvent.click( screen.getByTestId('boton-incrementar'));
        fireEvent.click( screen.getByTestId('boton-incrementar'));
        fireEvent.click( screen.getByTestId('boton-incrementar'));
        expect ( screen.getByTestId('div-contador').innerHTML).toContain("103")
        screen.debug();
    })


})