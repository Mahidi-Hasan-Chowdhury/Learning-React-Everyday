import { useState, useEffect } from 'react';

export default function PomodoroTimer() {
    // Mode can be 'work' (25 mins) or 'break' (5 mins)
    const WORK_TIME = 25 * 60;
    const BREAK_TIME = 5 * 60;

    const [mode, setMode] = useState('work'); // 'work' | 'break'
    const [timeLeft, setTimeLeft] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [completedSessions, setCompletedSessions] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            if (mode === 'work') {
                setCompletedSessions((prev) => prev + 1);
                setMode('break');
                setTimeLeft(BREAK_TIME);
            } else {
                setMode('work');
                setTimeLeft(WORK_TIME);
            }
            setIsActive(false);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, timeLeft, mode]);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setMode('work');
        setTimeLeft(WORK_TIME);
    };

    const handleSwitchMode = (newMode) => {
        setIsActive(false);
        setMode(newMode);
        setTimeLeft(newMode === 'work' ? WORK_TIME : BREAK_TIME);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const isWork = mode === 'work';

    const containerStyle = {
        border: `2px solid ${isWork ? '#e03131' : '#2b8a3e'}`,
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: isWork ? '#fff5f5' : '#ebfbee',
        color: isWork ? '#c92a2a' : '#2b8a3e',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Pomodoro Productivity Timer</h3>
            
            <p style={{ fontSize: '14px', margin: '5px 0' }}>
                {isWork ? '🔥 Work Session (25 Min)' : '☕ Break Time (5 Min)'}
            </p>

            {/* Timer Display */}
            <div style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'monospace', margin: '15px 0' }}>
                {formatTime(timeLeft)}
            </div>

            {/* Mode Switcher */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '15px' }}>
                <button
                    onClick={() => handleSwitchMode('work')}
                    style={{
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: isWork ? '#e03131' : '#dee2e6',
                        color: isWork ? 'white' : '#495057',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Work (25m)
                </button>
                <button
                    onClick={() => handleSwitchMode('break')}
                    style={{
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: !isWork ? '#2b8a3e' : '#dee2e6',
                        color: !isWork ? 'white' : '#495057',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Break (5m)
                </button>
            </div>

            {/* Timer Action Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button
                    onClick={handleToggle}
                    style={{
                        padding: '8px 20px',
                        backgroundColor: isWork ? '#e03131' : '#2b8a3e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '15px'
                    }}
                >
                    {isActive ? 'Pause ⏸' : 'Start ▶'}
                </button>
                <button
                    onClick={handleReset}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#868e96',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Reset 🔄
                </button>
            </div>

            {/* Session Stats */}
            <div style={{ marginTop: '15px', fontSize: '14px', fontWeight: 'bold' }}>
                Completed Pomodoros: {completedSessions} 🍅
            </div>
        </div>
    );
}
