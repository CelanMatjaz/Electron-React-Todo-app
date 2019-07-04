import React, { useState } from 'react';

const TodoForm = props => {
    const [todoText, setTodoText] = useState('');

    const handleSumbmit = e => {
        e.preventDefault();
        if(todoText){
            props.addTodo(todoText);
            setTodoText('');
        }
    }

    return (
        <form onSubmit={handleSumbmit}>
            <input 
                value={todoText} 
                onChange={e => 
                    setTodoText(e.target.value)
                }
            />
            <button>Add todo</button>
        </form>
    );
}

export default TodoForm;