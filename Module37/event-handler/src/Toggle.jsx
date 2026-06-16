import { useState } from 'react';

export default function Toggle() {
  // 1. Declare a state variable "isOn" with initial value "false"
  //    "setIsOn" is the function used to update this state.
  const [isOn, setIsOn] = useState(false);

  // 2. Define the event handler function that toggles the value between true and false
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  // Inline styling to visually demonstrate the state change
  const toggleStyle = {
    border: '2px solid purple',
    margin: '15px 0',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: isOn ? '#d4edda' : '#f8d7da', // Greenish if true, reddish if false
    color: isOn ? '#155724' : '#721c24',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={toggleStyle}>
      <h3>Toggle Component (State & Event Example)</h3>
      {/* 3. Conditionally display text based on the current state */}
      <p>Current Status: <strong>{isOn ? 'ON (Active)' : 'OFF (Inactive)'}</strong></p>
      
      {/* 4. Attach the event handler to the onClick event of the button */}
      <button onClick={handleToggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}
