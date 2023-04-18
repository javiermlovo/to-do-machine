import React from "react";
import {ToDoCounter} from "./ToDoCounter";
import {CreateToDoButton} from "./CreateToDoButton";
import {ToDoSearch} from "./ToDoSearch";
import {ToDoList} from "./ToDoList";
import {ToDoItem} from "./ToDoItem";
// import './App.css';

const toDoList = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Completar curso', completed: false},
  {text: 'Hacer comida', completed: false},
]

function App() {
  return (
    <React.Fragment> 
      {/* React.Fragment crea una etiqueta 
      invisible que permite hacer los clculos de 
      JSX para renderizar pero no se ve reflejado en 
      la aplicacion como una etiqueta */}
      <ToDoCounter/>
          <ToDoSearch/>
          <ToDoList>
            {toDoList.map(todo => (
              <ToDoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}/>
            ))}
          </ToDoList>
          <CreateToDoButton/>         
    </React.Fragment>
  );
}

export default App;
