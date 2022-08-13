import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {

        props.setOpenModal(prevState => !prevState);

        // if (props.openModal) {
        //     props.setOpenModal(false);
        // } else {
        //     props.setOpenModal(true);
        // }

    }
    return(
        <button 
            type="button" 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};