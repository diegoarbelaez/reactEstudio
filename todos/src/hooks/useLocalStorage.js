
import { useState } from "react";

//Custom Hook para guardar en el local storage
export function useLocalStorage(itemName, initialValue) {
  const localStoreItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStoreItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStoreItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem)); //Actualiza el Local Storage
    setItem(newItem); //Actualiza el estado
  };

  return [item, saveItem]; //Exportamos lo que usaremos del custom hook
}
