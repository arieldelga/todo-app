import React from "react";
import './TodoList.css';

function TodoList(props) {
    return(
        <section className="TodoList-container">
            <ul className="TodoList-list">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};