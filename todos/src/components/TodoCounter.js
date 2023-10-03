import "../styles/TodoCounter.css";

function TodoCounter({ completed, total }) {

  //ejemplo de lógica dentro de un return, se usan los parentesis dentro del return para controlar elementos JSX (html)
  //note como se usa el fragment <></> para encapsular el JSX dentro del operador ternario

  return (
    <h1 className="TodoCounter">
      {completed < total
        ? (
          <>
            Has completado <span style={{ fontWeight: 'bold' }}>{completed}</span> de {total} TODOs
          </>
        )
        : 'Has completado todos los TODOs'}
    </h1>
  );
}

export { TodoCounter };
