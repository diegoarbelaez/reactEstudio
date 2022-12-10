import React from "react";
import ReactDOM from "react-dom/client";
import { DiegoComponent } from "./DiegoComponent";
import {HelloWorldApp} from './HelloWorldApp'

DiegoComponent


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <DiegoComponent />
  </React.StrictMode>
);
