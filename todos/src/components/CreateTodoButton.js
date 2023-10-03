import "../styles/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      onClick={(event) => {
        console.log(event.target)
      }}
      className="CreateTodoButton"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
