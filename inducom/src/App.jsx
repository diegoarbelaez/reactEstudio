import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contexto from "./context/Contexto";
import Selector from "./components/Selector";

function App() {
  return (
    <>
      <Contexto>
        <Selector />
      </Contexto>
    </>
  );
}

export default App;
