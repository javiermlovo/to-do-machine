import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
    const onClickButon = ()=>{
        props.setOpenModal(preState => !preState); 
    };
    return(
        <button 
        className="CreateToDoButton"
        onClick={onClickButon}
        >
            +
        </button>
    );
}

export {CreateToDoButton};