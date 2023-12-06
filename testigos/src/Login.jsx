import React from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ApiURL } from "./lib/ApiURL";
import { Navigate, redirect } from "react-router-dom";

import "./styles/Login.css";

import { useAuth } from "./context/AuthProvider";

export default function Login() {
  const [usuario, setUsuario] = useState("94287419");
  const [password, setPassword] = useState("123456");

  const auth = useAuth();

  // ...

  function login(e) {
    e.preventDefault();
    fetch(`${ApiURL}/login.php`, {
      method: "POST",
      body: JSON.stringify({
        usuario: usuario,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          console.log(data);
          console.log(auth.isAuthenticated);
          auth.setIsAuthenticated(true);
          console.log(auth.isAuthenticated);
        } else {
          alert("Usuario o clave incorrectos");
        }
      });
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <Card className="card" sx={{ maxWidth: 245, borderRadius: 5 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Consulta Testigos
          </Typography>
          <form onSubmit={login}>
            <TextField
              id="usuario"
              label="cédula"
              variant="outlined"
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
              value={usuario}
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              label="Clave"
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" type="submit" fullWidth>
              INGRESAR
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}
