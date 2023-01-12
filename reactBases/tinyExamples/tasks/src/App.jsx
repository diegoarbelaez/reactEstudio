import { Greeting, HelloWorld } from './Greeting'
import './App.css'
import { Counter } from './Counter';

function App() {

  //Mire que estas son variables (a,b) que el Padre (App) conoce
  // y se las podemos pasar al hijo (Greeting) a través de una funcion
  const a = 5;
  const b = 1;

  function sumar(x, y) {
    return x + y
  }

  return (
    <>
      <Greeting />
      <Greeting
        prop1="Diego"
        prop2="Arbelaez"
        operacion={sumar(a, b)} /* Mire como se pasa la funcion al hijo con los parámetros*/  />
      <Greeting propx="pedro" />
      <HelloWorld />
      <Counter contador={10} />
    </>
  )
}

export default App
