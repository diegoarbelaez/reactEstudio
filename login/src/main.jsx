import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Singup } from "./routes/Singup.jsx";
import { Dashboards } from "./routes/Dashboards.jsx";
import { Clientes } from "./routes/Clientes.jsx";
import { ProtectedRoute } from "./routes/ProtectedRoute.jsx";
import { AuthProvider } from "./auth/AuthProvider.jsx";
import { Login } from "./routes/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
  {
    path: "/login",
    element: <Login />,
  },


  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboards />,
      },
      {
        path: "clientes",
        element: <Clientes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
