import { useState, useEffect } from 'react';

export default function ClickSpeedTester() {
    const [clicks, setClicks] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let timer = null;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            setIsFinished(true);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const handleStart = () => {
        setClicks(0);
        setTimeLeft(5);
        setIsActive(true);
        setIsFinished(false);
    };

    const handleClicked = () => {
        if (isActive) {
            setClicks(prev => prev + 1);
        }
    };

    const containerStyle = {
        border: '2px solid #2b8a3e',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#ebfbee', // Soft green background
        color: '#2b8a3e',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Click Speed Tester (5 Second Challenge)</h3>
            
            <div style={{ fontSize: '20px', margin: '10px 0' }}>
                {isActive ? `Time Remaining: ${timeLeft}s` : isFinished ? 'Time is up!' : 'Click Start to Begin'}
            </div>

            <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '15px 0' }}>
                Clicks: {clicks}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {!isActive && !isFinished ? (
                    <button onClick={handleStart} style={{ padding: '8px 16px', backgroundColor: '#2b8a3e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                        Start Game
                    </button>
                ) : isActive ? (
                    <button onClick={handleClicked} style={{ padding: '15px 30px', fontSize: '18px', backgroundColor: '#40c057', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                        CLICK! 💥
                    </button>
                ) : (
                    <button onClick={handleStart} style={{ padding: '8px 16px', backgroundColor: '#868e96', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                        Try Again
                    </button>
                )}
            </div>

            {isFinished && (
                <div style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
                    Your Speed: {(clicks / 5).toFixed(1)} clicks/second
                </div>
            )}
        </div>
    );
}
