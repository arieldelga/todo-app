import React from "react";
import "./EmptyTodo.css";
import empty from "../img/empty.png";

function EmptyTodo() {
    return (
        <div className="EmptyTodo">
            <img src={empty} alt=""/>
            <p>Crea tu primer TODO!</p>
        </div>
    );
}

export {EmptyTodo};
