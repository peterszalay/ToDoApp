import React, {useContext} from 'react';
import {ToDoContext} from "../contexts/ToDoContext";

function ToDoTable() {

        const context = useContext(ToDoContext);
        return (
            <div>
                    {context.todos.map(todo => (
                <div>{todo.task}</div>
            ))}</div>
        );
}

export default ToDoTable;