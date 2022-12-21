import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    console.log(inputValue);
    setInputValue(event.target.value);
  };

  const envioFormulario = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; //valida que sea mayor a 1 caracter, para agregarlo
    onAddCategory(inputValue.trim());
    console.log("Formulario enviado...");
  };

  return (
    <form
      onSubmit={(event) => {
        envioFormulario(event);
        setInputValue(""); //Hace que al envío se vacíe el valor del Input Value
      }}
    >
      <input
        type="text"
        placeholder="Buscar GIFS"
        value={inputValue}
        onChange={(event) => {
          onInputChange(event);
        }}
      ></input>
    </form>
  );
};
