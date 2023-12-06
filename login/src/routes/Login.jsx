import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { API_URL } from "../auth/constats";

export const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const isAuth = useAuth();

  if (isAuth.isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  const enviarFormulario = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { Username, password },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Login incorrecto");
      })
      .then((data) => {
        isAuth.setIsAuthenticated(true);
      })
      .catch((error) => console.log(error));
    
  }

  return (
    <DefaultLayout>
      <form className="form" onSubmit={enviarFormulario}>
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          value={Username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button>ENVIAR</button>
      </form>
    </DefaultLayout>
  );
};
