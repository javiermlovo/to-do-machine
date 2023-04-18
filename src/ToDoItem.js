import React from "react";
import './ToDoItem.css'

function ToDoItem(props) {
    const onCompleted = ()=>{
        alert(`Ya completo la tarea ${props.text}`)
    };
    const onDelete = ()=>{
        alert(`Borraste la tarea ${props.text}`)
    };
    return (
        <li className="ToDoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onCompleted}
            >
            √</span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
            X</span>
        </li>
    )
}

export {ToDoItem};