import React, { useState } from "react";
import { useAppContext } from "../store/Store";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

//UI
import { Input, Text, Stack, Button, Checkbox, CheckboxGroup  } from '@chakra-ui/react'


//

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState("");
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

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
    navigate('/');
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
    <Layout>
      <form onSubmit={handleSubmit}>
        <div>
        <Stack spacing={3}>
          <Input placeholder='Title...' size='md'
          type="text"
          name="title"
          onChange={handleChange}
          value={title}
          />
       {/*    <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          /> */}
          <Input
          placeholder="Author"
            mb='8px'
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
          <Input type="file" name="cover" onChange={handleOnchangeFile} />
          <div>{!!cover ? <img src={cover}></img> : <p>No hay imagen</p>}</div>
          <Input
           placeholder="Intro..."
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
          <Checkbox
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          >
            Completed
          </Checkbox>
          <Input
           placeholder="Review.."
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
          <Button colorScheme='linkedin' variant='solid' type="submit" value="Register Book">Create Book</Button>
          </Stack>
        </div>
      </form>
      
    </Layout>
  );
}
