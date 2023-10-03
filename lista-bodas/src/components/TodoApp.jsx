import React, { useEffect } from "react";
import { useState } from "react";
import Elemento from "./Elemento";
import "../styles/TodoApp.css";

export default function TodoApp() {
  //Cargas iniciales

  useEffect(() => {
    document.body.classList.add("centrar");
  }, []);

  //

  const [title, setTitle] = useState("");
  const [lista, setLista] = useState([]);

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    //
    if(title.length < 2) return;

    const newList = [...lista];
    newList.push(newItem);
    setLista(newList);
    setTitle("");
  };

  const handleChange = (evento) => {
    setTitle(evento.target.value);
  };

  function actualizaItem(id, valor) {
    const itemEncontrado = lista.find((elemento) => elemento.id === id);
    itemEncontrado.title = valor;
  }

  function eliminarTarea(id) {
    const temp = lista.filter((elemento) => elemento.id != id);
    setLista(temp);
  }

  return (
    <>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-6">
            <div className="card">
              <img
                src="https://cdn0.matrimonio.com.co/article-vendor/7583/3_2/960/jpg/dsc05559_10_137583-165826795483668.jpeg"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">Lista de Invitados</h5>
                <p className="card-text">
                  Escribe aquí los nombres de los invitados
                </p>
                <form onSubmit={handleSubmit}>
                  <label className="form-label" htmlFor="form12">
                    Nombre Completo
                  </label>
                  <input
                    id="form12"
                    className="form-control"
                    value={title}
                    onChange={handleChange}
                  ></input>
                  <button className="btn btn-primary my-2">
                    Crear Persona
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">{ lista.length } Invitados hasta ahora</h5>
                <table className="table align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th><p className="text-center">Nombre</p></th>
                      <th><p className="text-center">Acciones</p></th>
                    </tr>
                  </thead>

                  {lista.map((elemento) => {
                    return (
                      <Elemento
                        key={elemento.id}
                        contenido={elemento}
                        actualizar={actualizaItem}
                        eliminar={eliminarTarea}
                      />
                    );
                  })}
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
