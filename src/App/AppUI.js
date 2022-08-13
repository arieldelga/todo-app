import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodo } from '../EmptyTodo';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            {/* <TodoLoading/> */}
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <TodoLoading/>}
                {(!loading && !searchedTodos.length) && <EmptyTodo/>}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}

            <CreateTodoButton 
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };