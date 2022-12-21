import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { DiegoComponent } from "./DiegoComponent";
import { Funcion } from "./Funcion";
import {HelloWorldApp} from './HelloWorldApp';

import './stiles.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp />
    <DiegoComponent nombre='Diego!' apellido='Arbelaez' edad={41} />
    <Funcion /> 
    <CounterApp value={20} />
    <DiegoComponent nombre='Diego' apellido='Arbelaez' edad={41} />*/ 
    }
     <CounterApp value={20} />
   
  </React.StrictMode>
);
