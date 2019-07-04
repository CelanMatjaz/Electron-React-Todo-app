import React, { useState } from 'react';

//Components
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        setTodos([...todos, { text, id: Math.random() }]);
    }

    const removeTodo = id => {
        console.log(todos);
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={removeTodo}/>
        </>
    )
}

export default App;
