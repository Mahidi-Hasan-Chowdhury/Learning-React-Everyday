import { useState, useEffect } from 'react';

export default function Stopwatch() {
    // 1. State to track elapsed time (in seconds)
    const [time, setTime] = useState(0);

    // 2. State to track if the stopwatch is currently running
    const [isRunning, setIsRunning] = useState(false);

    // 3. useEffect hook to manage the interval timer
    useEffect(() => {
        let intervalId = null;

        if (isRunning) {
            // Set up a timer to increment time by 1 every second (1000ms)
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        // Cleanup function: run when component unmounts or when isRunning changes.
        // It clears the interval to prevent memory leaks and duplicate timer bugs.
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]); // Effect dependencies: only run this effect when isRunning changes

    // 4. Helper function to format total seconds into MM:SS format
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const containerStyle = {
        border: '2px solid #dc3545',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff5f5', // Light pinkish-red background
        color: '#721c24',
        fontFamily: 'monospace, sans-serif',
        textAlign: 'center'
    };

    const buttonStyle = {
        padding: '8px 16px',
        margin: '0 5px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #dc3545',
        backgroundColor: 'white',
        color: '#dc3545',
        transition: 'all 0.2s ease'
    };

    const startButtonStyle = {
        ...buttonStyle,
        backgroundColor: isRunning ? '#ffc107' : '#28a745',
        color: 'white',
        border: 'none'
    };

    return (
        <div style={containerStyle}>
            <h3 style={{ fontFamily: 'sans-serif', margin: '5px 0' }}>Stopwatch (Timer & Cleanup Example)</h3>
            
            {/* Large digit display */}
            <div style={{ fontSize: '42px', fontWeight: 'bold', margin: '10px 0' }}>
                {formatTime(time)}
            </div>

            {/* Button Controls */}
            <div>
                <button 
                    onClick={() => setIsRunning(!isRunning)} 
                    style={startButtonStyle}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                
                <button 
                    onClick={() => { setTime(0); setIsRunning(false); }} 
                    style={buttonStyle}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
