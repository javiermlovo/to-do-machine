import React from "react";
import { TodoContext } from "../Todocontext";
import {ToDoCounter} from "../ToDoCounter";
import {CreateToDoButton} from "../CreateToDoButton";
import {ToDoSearch} from "../ToDoSearch";
import {ToDoList} from "../ToDoList";
import {ToDoItem} from "../ToDoItem";
import {Modal} from "../Modal";
import { TodoForm } from "../ToDoForm";
import Spinner from "../Spinner";
function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        toggleTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return(
    <React.Fragment> 
        {/* React.Fragment crea una etiqueta 
        invisible que permite hacer los clculos de 
        JSX para renderizar pero no se ve reflejado en 
        la aplicacion como una etiqueta */}
        <ToDoCounter/>
        <ToDoSearch/>
        <ToDoList>
            {error && <p>Hubo un error</p>}
            {loading && <Spinner/>}
            {(!loading && !searchedTodos)&&<p>Crea tu primer ToDo</p>}
            {searchedTodos.map(todo => (
                <ToDoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onCompleted={()=> toggleTodo(todo.text)}
                onDelete={()=> deleteTodo(todo.text)}
                />
            ))}
        </ToDoList>
        {!!openModal && (
        <Modal>
            <TodoForm/>
        </Modal>
        )}
        <CreateToDoButton 
        setOpenModal={setOpenModal} />        
    </React.Fragment>
    )
}

export {AppUI};