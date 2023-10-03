import React, { useState } from "react";
export default function Elemento({ contenido, actualizar, eliminar }) {
  const [editar, setEditar] = useState(false);

  const FormEdit = ({ contenido }) => {
    const [newValue, setNewValue] = useState(contenido.title);

    function handleSubmit(evento) {
      evento.preventDefault();
    }

    function handleChange(evento) {
      setNewValue(evento.target.value);
    }

    function handleUpdate() {
      actualizar(contenido.id, newValue);
      setEditar(false);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={newValue}
          onChange={handleChange}
        />
        <button className="btn btn-primary btn-sm my-2" onClick={handleUpdate}>
          Actualizar
        </button>
      </form>
    );
  };

  const ItemSolo = ({ contenido, eliminar }) => {
    function handleDelete() {
      eliminar(contenido.id);
    }

    return (
      <>
        <tr>
          <td width="60%">
            <div className="d-flex align-items-center">{contenido.title}</div>
          </td>
          <td width="40%">
            <div>
              <button
                className="btn btn-link btn-sm btn-rounded"
                onClick={() => {
                  setEditar(true);
                }}
              >
                Editar
              </button>
              <button
                className="btn btn-link btn-sm btn-rounded"
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <tbody>
      {editar ? (
        <tr>
          <td width="100%">
            <FormEdit contenido={contenido} />
          </td>
        </tr>
      ) : (
        <ItemSolo contenido={contenido} eliminar={eliminar} />
      )}
    </tbody>
  );
}
