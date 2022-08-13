import React from "react";
import { TodoIcon } from "./";

function CompleteIcon ({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? 'rgb(93, 155, 1);' : 'gray'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };