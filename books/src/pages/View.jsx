import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";



export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext(); //PASO 6: Usamos el contexto en el componente que querramos, inicializando una variable y usando el método que exportamos en el paso 5. (Mirar Store.jsx, paso 5)

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
    console.log(book);
  }, []);

  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      
        <h2>{item.title}</h2>
        <div>{item.cover ? <img src={item.cover} /> : ""}</div>
        <div>{item.author}</div>
        <div>{item.intro}</div>
        <div>
          {item.completed ? (
            <div>Completed, read!</div>
          ) : (
            <div>In progress...</div>
          )}
        </div>
        <div>{item.review}</div>
      
    </Layout>
  );
}
