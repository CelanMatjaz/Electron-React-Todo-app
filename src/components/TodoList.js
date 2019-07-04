import React from 'react'

const TodoList = props => {
    const handleDelete = id => {
        props.deleteTodo(id);
    }

    const todos =  props.todos.length > 0 ? (props.todos.map(todo => 
        <li key={todo.id} onClick={() => handleDelete(todo.id)}>
            {todo.text}
        </li>
    )) : '';
    return (
        <ul>
            {todos}
        </ul>
    );
}

export default TodoList;