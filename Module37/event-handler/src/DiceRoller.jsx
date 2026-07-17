import { useState } from 'react';

export default function DiceRoller() {
    // 1. Declare state variables to track roll values, animation state, and histories
    const [diceValue, setDiceValue] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const [history, setHistory] = useState([]);

    // 2. Event handler to roll the 6-sided dice with interval simulation
    const handleRollDice = () => {
        setIsRolling(true);
        let rollIterations = 0;

        // Change values at small intervals to simulate rolling physics
        const intervalId = setInterval(() => {
            setDiceValue(Math.floor(Math.random() * 6) + 1);
            rollIterations++;
            
            if (rollIterations > 8) {
                clearInterval(intervalId);
                const finalRoll = Math.floor(Math.random() * 6) + 1;
                setDiceValue(finalRoll);
                setHistory((prev) => [finalRoll, ...prev.slice(0, 4)]); // Keep last 5 rolls
                setIsRolling(false);
            }
        }, 80); // Refresh every 80ms
    };

    const containerStyle = {
        border: '2px solid #be4bdb',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f8f0fc', // Soft light purple background
        color: '#862e9c',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const diceBoxStyle = {
        width: '75px',
        height: '75px',
        border: '4px solid #862e9c',
        borderRadius: '12px',
        backgroundColor: 'white',
        color: '#862e9c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '36px',
        fontWeight: 'bold',
        margin: '20px auto',
        boxShadow: '0 4px 6px rgba(0,0,0,0.08)'
    };

    return (
        <div style={containerStyle}>
            <h3>Dice Roller Game</h3>
            
            {/* Numeric Dice Frame */}
            <div style={diceBoxStyle}>
                {diceValue}
            </div>

            <button 
                onClick={handleRollDice}
                disabled={isRolling}
                style={{ 
                    padding: '8px 16px', 
                    backgroundColor: '#862e9c', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: isRolling ? 'not-allowed' : 'pointer', 
                    fontWeight: 'bold' 
                }}
            >
                {isRolling ? 'Rolling...' : 'Roll Dice'}
            </button>

            {/* Roll History panel */}
            {history.length > 0 && (
                <div style={{ marginTop: '15px', fontSize: '14px', color: '#ae3ec9' }}>
                    <span style={{ fontWeight: 'bold' }}>Recent History: </span>
                    <span style={{ fontFamily: 'monospace', fontSize: '15px', fontWeight: 'bold' }}>
                        {history.join(' ➜ ')}
                    </span>
                </div>
            )}
        </div>
    );
}
