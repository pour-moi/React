import React from "react";
import ReactDOM from "react-dom";
import { ParentComponent } from "./ParentComponent.jsx";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
