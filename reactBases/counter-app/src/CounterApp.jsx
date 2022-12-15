import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const [nombre, setNombre] = useState('Diego')

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRes = () =>{
    setCounter(counter -1 );
  }

  const handleReset = () => {
    setCounter(value)
  }

  
  


  return (
    <>
      <div>CounterApp</div>
      <div>{counter}</div>
      
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRes}>-1</button>
      <button onClick={handleReset}>Reset</button>
      

    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
