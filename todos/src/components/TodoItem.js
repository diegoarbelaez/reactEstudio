import "../styles/TodoItem.css";
import { MdCheck } from "react-icons/md";
import { MdCancel } from "react-icons/md";


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        <MdCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <MdCancel />
      </span>
    </li>
  );
}

export { TodoItem };
