import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

export const Singup = () => {
  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const actualizarName = (event) => {
    setName(event.target.value);
  };

  const actualizarUsername = (event) => {
    setUsername(event.target.value);
  };

  const actualizarPassowrd = (event) => {
    setPassword(event.target.value);
  };

  const registrarse = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/api/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Username, password }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          console.log("Usuario creado satisfactoriamente");
        } else {
          throw new Error("Login incorrecto");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <DefaultLayout>
      <form className="form" onSubmit={registrarse}>
        <h1>Registrarse</h1>

        <label>Name</label>
        <input type="text" onChange={actualizarName} value={Name}></input>

        <label>Username</label>
        <input
          type="text"
          onChange={actualizarUsername}
          value={Username}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={actualizarPassowrd}
          value={password}
        ></input>
        <button>REGISTRARSE</button>
      </form>
    </DefaultLayout>
  );
};
