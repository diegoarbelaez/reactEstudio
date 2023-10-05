import { createContext, useContext, useEffect, useState } from "react";
// PASO 1: Importar lo que necesitamos createContext y useContext

import React from "react";

// PASO 2: Creamos el contexto con la funcion createContext, con un objeto que define los estados y funciones que vamos a tener en nuestro contexto

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  //PASO 3: Definir los estados y escribir las funciones que hacen las operaciones respectivas del contexto.

  const [items, setItems] = useState([]);

  const createItem = (item_new) => {
    const temp_items = [...items];
    temp_items.push(item_new);
    setItems(temp_items);
  };

  const getItem = (id) => {
    item_encontrado = items.filter((id) => items.id == id);
    return item_encontrado;
  };

  const updateItem = (item) => {
    const posicion = items.findIndex((elemento) => elemento.id === item.id);
    items[index] = { ...item };
  };

  //PASO 4: Declarar el provider tal como está en esta sintaxis. El prop value={ {estdos, funciones} } contiene los estados y funciones desarrolladas en el paso 2
  return (
    <AppContext.Provider value={{ items, createItem, updateItem, getItem }}>
      {children}
    </AppContext.Provider>
  );
}

//PASO 5: Exportar la funcion que retorna el contexto
export function useAppContext() {
  return useContext(AppContext);
}
