import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; 
import ToDoList from "./ToDoList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    < ToDoList/>
  </React.StrictMode>
);
