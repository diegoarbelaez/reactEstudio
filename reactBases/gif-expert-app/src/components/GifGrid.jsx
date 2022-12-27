import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {
  
  const [images, setImages] = useState([]);

  //Funcion para obtener las imagenes
  const getImages = async (category) => {
    let images2 = await getGifs(category);
    setImages(images2);
    //console.log(images);
  };

  useEffect(() => {
    getImages(category); //esto es una promesa
    //console.log(images);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map((elemento) => (
          <li key={elemento.id}>{elemento.title}</li>
        ))}
      </ol>
    </>
  );
};
