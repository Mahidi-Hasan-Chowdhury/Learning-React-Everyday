import { useState } from 'react';

export default function GreetingInput() {
  // 1. Declare a state variable "name" with an empty string as initial value.
  //    "setName" will be used to update this state.
  const [name, setName] = useState('');

  // 2. Define the event handler function for input changes.
  //    It captures the user's keystrokes from the event target value.
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Inline styling to make the component look modern and clean
  const containerStyle = {
    border: '2px solid #0056b3',
    margin: '15px 0',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#e6f2ff', // Light blue background
    color: '#003366',
    fontFamily: 'sans-serif'
  };

  return (
    <div style={containerStyle}>
      <h3>Greeting Input Component (Input Event Example)</h3>
      
      {/* 3. Input element with onChange event listener attached */}
      <input 
        type="text" 
        placeholder="Type your name..." 
        value={name} 
        onChange={handleInputChange} 
        style={{ 
          padding: '8px', 
          fontSize: '16px', 
          width: '80%', 
          borderRadius: '4px', 
          border: '1px solid #999' 
        }}
      />
      
      {/* 4. Reactive display that updates as the user types */}
      <p style={{ marginTop: '12px', fontSize: '18px' }}>
        Hello, <strong>{name || 'stranger'}</strong>! Have a wonderful day learning React!
      </p>
    </div>
  );
}
