import { useState, useEffect } from 'react';

export default function CountdownTimer() {
    // 1. Declare state variables to track countdown progression and inputs
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [minutesInput, setMinutesInput] = useState('');
    const [secondsInput, setSecondsInput] = useState('');
    const [isActive, setIsActive] = useState(false);

    // 2. useEffect hook to count down every second when active
    useEffect(() => {
        let intervalId = null;

        if (isActive && secondsLeft > 0) {
            // Setup interval timer to decrement secondsLeft by 1 every 1000ms
            intervalId = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
        } else if (secondsLeft === 0) {
            // Once countdown reaches 0, deactivate the timer
            setIsActive(false);
        }

        // Cleanup: clear interval to avoid memory leaks or duplicate timers
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isActive, secondsLeft]); // Re-run effect when isActive or secondsLeft changes

    // 3. Event handler to start the timer
    const handleStart = () => {
        const mins = parseInt(minutesInput) || 0;
        const secs = parseInt(secondsInput) || 0;
        const totalSeconds = mins * 60 + secs;

        if (totalSeconds <= 0 && secondsLeft === 0) {
            alert('Please enter a valid duration greater than 0!');
            return;
        }

        // Only update time remaining if starting fresh (not resuming from pause)
        if (secondsLeft === 0) {
            setSecondsLeft(totalSeconds);
        }
        setIsActive(true);
    };

    // 4. Event handler to pause the timer
    const handlePause = () => {
        setIsActive(false);
    };

    // 5. Event handler to reset the timer to initial state
    const handleReset = () => {
        setIsActive(false);
        setSecondsLeft(0);
        setMinutesInput('');
        setSecondsInput('');
    };

    // 6. Helper function to format seconds into MM:SS format
    const formatTime = (totalSecs) => {
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const containerStyle = {
        border: '2px solid #e03131',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff5f5', // Soft red background
        color: '#c92a2a',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const inputStyle = {
        width: '60px', 
        padding: '8px', 
        textAlign: 'center',
        border: '1px solid #ffa8a8',
        borderRadius: '4px',
        fontSize: '16px'
    };

    return (
        <div style={containerStyle}>
            <h3>Countdown Timer (Interval & State Example)</h3>
            <p style={{ fontSize: '14px', margin: '5px 0', color: '#f03e3e' }}>
                Input minutes and seconds, then click Start to count down.
            </p>
            
            {/* Conditional Rendering: Show Inputs if not running, otherwise show time remaining */}
            {!isActive && secondsLeft === 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '15px 0' }}>
                    <input 
                        type="number" 
                        placeholder="Min"
                        value={minutesInput}
                        onChange={(e) => setMinutesInput(e.target.value)}
                        style={inputStyle}
                        min="0"
                    />
                    <span style={{ fontSize: '24px', alignSelf: 'center', fontWeight: 'bold' }}>:</span>
                    <input 
                        type="number" 
                        placeholder="Sec"
                        value={secondsInput}
                        onChange={(e) => setSecondsInput(e.target.value)}
                        style={inputStyle}
                        min="0"
                        max="59"
                    />
                </div>
            ) : (
                <div style={{ fontSize: '42px', fontWeight: 'bold', margin: '15px 0', fontFamily: 'monospace' }}>
                    {formatTime(secondsLeft)}
                    {secondsLeft === 0 && <span style={{ display: 'block', fontSize: '20px', color: '#2b8a3e', marginTop: '5px' }}>Time's up! 🎉</span>}
                </div>
            )}

            {/* Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {isActive ? (
                    <button 
                        onClick={handlePause} 
                        style={{ padding: '8px 16px', backgroundColor: '#e03131', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Pause
                    </button>
                ) : (
                    <button 
                        onClick={handleStart} 
                        style={{ padding: '8px 16px', backgroundColor: '#2b8a3e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Start
                    </button>
                )}
                
                <button 
                    onClick={handleReset} 
                    style={{ padding: '8px 16px', backgroundColor: '#495057', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
