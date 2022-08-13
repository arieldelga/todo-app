import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <label className="form-label">Escribe tu nuevo TODO</label>
            <textarea
                className="form-textarea"
                value={newTodoValue}
                onChange={onChange}
                // placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="form-buttons">
                <button
                    className="cancel-button"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="submit-button"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };