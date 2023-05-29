import React from "react";
import './ToDoSearch.css';
import { TodoContext } from "../Todocontext";

function ToDoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value);
    }
    return(
        <input 
            className="ToDoSearch" 
            placeholder="Busca el ToDo"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export {ToDoSearch};