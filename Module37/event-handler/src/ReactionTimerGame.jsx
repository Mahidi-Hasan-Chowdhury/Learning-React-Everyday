import { useState, useRef, useEffect } from 'react';

export default function ReactionTimerGame() {
    // 1. Declare state variables to track game phase and results
    // gameState options: 'idle', 'waiting', 'ready', 'finished', 'early'
    const [gameState, setGameState] = useState('idle');
    const [reactionTime, setReactionTime] = useState(null);
    const [personalBest, setPersonalBest] = useState(null);

    const delayTimer = useRef(null);
    const startTime = useRef(null);

    // Cleanup timing cycles on component unmount
    useEffect(() => {
        return () => {
            if (delayTimer.current) {
                clearTimeout(delayTimer.current);
            }
        };
    }, []);

    // 2. Start game cycle: schedule target change state after random offset delay
    const handleStartGame = () => {
        setGameState('waiting');
        setReactionTime(null);
        
        const randomDelay = Math.floor(Math.random() * 3000) + 2000; // Delay of 2 to 5 seconds
        
        delayTimer.current = setTimeout(() => {
            setGameState('ready');
            startTime.current = Date.now(); // Record start timestamp
        }, randomDelay);
    };

    // 3. User clicks the panel box area
    const handleBoxClick = () => {
        if (gameState === 'waiting') {
            // Clicked before color turned green: stop the timer & flag early
            clearTimeout(delayTimer.current);
            setGameState('early');
        } else if (gameState === 'ready') {
            // Correct click: compute elapsed milliseconds
            const elapsed = Date.now() - startTime.current;
            setReactionTime(elapsed);
            setGameState('finished');
            
            // Record personal best score
            if (personalBest === null || elapsed < personalBest) {
                setPersonalBest(elapsed);
            }
        }
    };

    // 4. Reset to idle status
    const handleReset = () => {
        setGameState('idle');
        setReactionTime(null);
    };

    const containerStyle = {
        border: '2px solid #20c997',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e6fcf5', // Soft green background
        color: '#087f5b',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    // Style computed dynamically based on the current step/state of the test
    const getBoxStyle = () => {
        let bgColor = '#adb5bd'; // default grey
        let cursor = 'default';

        if (gameState === 'waiting') {
            bgColor = '#fa5252'; // Alert red
            cursor = 'pointer';
        } else if (gameState === 'ready') {
            bgColor = '#37b24d'; // Success green
            cursor = 'pointer';
        } else if (gameState === 'early') {
            bgColor = '#fd7e14'; // Warning orange
        }

        return {
            width: '100%',
            maxWidth: '300px',
            height: '140px',
            backgroundColor: bgColor,
            borderRadius: '6px',
            margin: '15px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '22px',
            cursor: cursor,
            userSelect: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.06)',
            transition: 'background-color 0.1s ease'
        };
    };

    return (
        <div style={containerStyle}>
            <h3>Reaction Time Tester (Timing State Game)</h3>
            {personalBest !== null && <p style={{ fontWeight: 'bold', margin: '5px 0' }}>Personal Best: {personalBest}ms</p>}

            {/* Click Target Box Area */}
            <div onClick={handleBoxClick} style={getBoxStyle()}>
                {gameState === 'idle' && 'Click Start Test Below'}
                {gameState === 'waiting' && 'Wait for Green...'}
                {gameState === 'ready' && 'CLICK NOW! ⚡'}
                {gameState === 'early' && 'Too Early! ⚠️'}
                {gameState === 'finished' && `${reactionTime} ms`}
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {(gameState === 'idle' || gameState === 'finished' || gameState === 'early') && (
                    <button 
                        onClick={handleStartGame} 
                        style={{ 
                            padding: '8px 16px', 
                            backgroundColor: '#087f5b', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px', 
                            cursor: 'pointer', 
                            fontWeight: 'bold' 
                        }}
                    >
                        Start Test
                    </button>
                )}

                {(gameState === 'early' || gameState === 'finished') && (
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
                        Reset
                    </button>
                )}
            </div>
        </div>
    );
}
