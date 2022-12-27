import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Saint Seiya"
  ]);

  const onNewCategory = (value) => {
    // setCategories([value, ...categories])
    if (categories.includes(value)) {
      return;
    }
    setCategories([...categories, value]); // Agrega al final del arreglo
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onNewCategory} valor="Diego" />
      {categories.map((element) => (
        <GifGrid key={element} category={element} />
      ))}
    </>
  );
};
