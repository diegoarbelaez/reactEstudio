import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([
    "Saint Seiya",
    "Street Figther",
  ]);

  const onAddCategory = (value) =>{
    // setCategories([value, ...categories])
    setCategories([...categories, value]) // Agrega al final del arreglo
}


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory = { onAddCategory } />
     
      <ol>
        {categories.map((element, id) => {
          return <li key={element}>{element}</li>;
        })}
      </ol>
    </>
  );
};
