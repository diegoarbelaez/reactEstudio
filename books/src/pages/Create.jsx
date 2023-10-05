import React, { useState } from "react";
import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState("");
  const [review, setReview] = useState("");

  const store = useAppContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;
      default:
        break;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    //Agregar Libro
    store.createItem(newBook);
  }

  function handleOnchangeFile(e) {
    //
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCover(reader.result.toString());
    };
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
          <input type="file" name="cover" onChange={handleOnchangeFile} />
          <div>{!!cover ? <img src={cover}></img> : <p>No hay imagen</p>}</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
          <input type="submit" value="Register Book"></input>
        </div>
      </form>
    </div>
  );
}