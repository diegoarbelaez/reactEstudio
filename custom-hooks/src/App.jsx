import { useState } from "react";
import GuardarEmpresas from "./GuardarEmpresas";
import GuardarPersonas from "./GuardarPersonas";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GuardarPersonas />
      <GuardarEmpresas />
    </>
  );
}

export default App;
