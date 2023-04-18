import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton() {
    const onClickButon = (msg)=>{
        alert(msg)
    };
    return(
        <button 
        className="CreateToDoButton"
        onClick={() => onClickButon('aca va el modal')}
        >
            +
        </button>
    );
}

export {CreateToDoButton};