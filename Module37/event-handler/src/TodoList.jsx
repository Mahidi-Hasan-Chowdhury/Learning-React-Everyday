import { useState } from 'react';

export default function TodoList() {
    // 1. Declare state for the list of items (starts with two default tasks)
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React Basics' },
        { id: 2, text: 'Understand Event Handling' }
    ]);

    // 2. Declare state for the input text field
    const [inputText, setInputText] = useState('');

    // 3. Handler to update the input text state as the user types
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    // 4. Handler to add a new todo to the list
    const handleAddTodo = (event) => {
        event.preventDefault(); // Prevent page reload on form submit
        if (inputText.trim() === '') return; // Prevent adding empty tasks

        const newTodo = {
            id: Date.now(), // Generate a unique ID using current timestamp
            text: inputText
        };

        // Update state by spreading existing todos and adding the new one
        setTodos([...todos, newTodo]);
        setInputText(''); // Clear input field
    };

    // 5. Handler to remove a todo item from the list by filtering it out
    const handleDeleteTodo = (id) => {
        const remainingTodos = todos.filter(todo => todo.id !== id);
        setTodos(remainingTodos);
    };

    const containerStyle = {
        border: '2px solid #28a745',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#eafaf1', // Light green background
        color: '#1e7e34',
        fontFamily: 'sans-serif'
    };

    return (
        <div style={containerStyle}>
            <h3>Todo List (Array State & Event Example)</h3>
            
            {/* Form to capture input and add to list */}
            <form onSubmit={handleAddTodo} style={{ marginBottom: '15px' }}>
                <input 
                    type="text" 
                    placeholder="Add a new task..." 
                    value={inputText} 
                    onChange={handleInputChange} 
                    style={{ 
                        padding: '8px', 
                        fontSize: '14px', 
                        width: '60%', 
                        borderRadius: '4px', 
                        border: '1px solid #ccc',
                        marginRight: '10px'
                    }}
                />
                <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>
                    Add Task
                </button>
            </form>

            {/* Conditional rendering based on whether list is empty */}
            {todos.length === 0 ? (
                <p>No tasks left! You are all done.</p>
            ) : (
                <ul style={{ textAlign: 'left', listStyleType: 'none', paddingLeft: '0' }}>
                    {todos.map(todo => (
                        <li key={todo.id} style={{ 
                            padding: '8px 0', 
                            borderBottom: '1px dashed #c3e6cb', 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span>{todo.text}</span>
                            <button 
                                onClick={() => handleDeleteTodo(todo.id)} 
                                style={{ 
                                    backgroundColor: '#dc3545', 
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '4px', 
                                    padding: '4px 8px', 
                                    cursor: 'pointer',
                                    fontSize: '12px'
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
