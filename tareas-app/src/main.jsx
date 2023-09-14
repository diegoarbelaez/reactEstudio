import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
//import "../dist/output.css";
import { ContextoProvider } from "./context/Contexto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoProvider>
      <App />
    </ContextoProvider>
  </React.StrictMode>
);
