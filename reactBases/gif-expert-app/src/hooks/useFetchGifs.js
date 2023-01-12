
import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    //Funcion para obtener las imagenes

    /*
    Este es un custom Hook, es una funcion que sirve para procesar, 
    empaquetar código y regresar una respuseta, 
    que puede ser una variable, un array o un objeto
    */

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading);


    const getImages = async (category) => {
        let images2 = await getGifs(category);
        setImages(images2);
        setIsLoading(false);
        console.log(isLoading);
    };

    useEffect(() => {
        getImages(category); //esto es una promesa
        //console.log(images);
    }, []);

    //Un Custom Hook es una funcion, que retorna un valor
    return {
        images: images,
        isLoading: isLoading
    }
}
