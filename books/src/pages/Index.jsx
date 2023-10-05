import React from "react";
import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";

export default function Index() {
  const store = useAppContext();

  return (
    <div>
      <Link to="/create">CREATE</Link>
      {store.items.map((elemento) => {
        return (
          <div key={elemento.id}>
            <p>{elemento.title}</p>
            <p>{elemento.author}</p>
            <img src={elemento.cover}></img>
            <p>{elemento.completed}</p>
          </div>
        );
      })}
    </div>
  );
}
