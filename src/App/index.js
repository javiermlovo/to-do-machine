import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../Todocontext";
// import './App.css';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Completar curso', completed: false},
//   {text: 'Hacer comida', completed: false},
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
