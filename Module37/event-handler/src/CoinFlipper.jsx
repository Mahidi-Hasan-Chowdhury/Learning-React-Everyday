import { useState } from 'react';

export default function CoinFlipper() {
    // 1. Declare state variables to track results and statistical counts
    const [result, setResult] = useState(null);
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    // 2. Event handler to flip the coin with a simulated delay
    const handleFlipCoin = () => {
        setIsFlipping(true);
        setResult(null);

        setTimeout(() => {
            const flipResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
            setResult(flipResult);
            
            if (flipResult === 'Heads') {
                setHeadsCount((prev) => prev + 1);
            } else {
                setTailsCount((prev) => prev + 1);
            }
            setIsFlipping(false);
        }, 600); // 600ms simulated flip delay
    };

    const containerStyle = {
        border: '2px solid #099268',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e6fcf5', // Soft green background
        color: '#099268',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Coin Flipper Game</h3>
            
            {/* Coin Badge Display */}
            <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                backgroundColor: '#fab005',
                border: '4px solid #f59f00',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                margin: '15px auto',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                {isFlipping ? 'Flip...' : result || 'Start'}
            </div>

            <button 
                onClick={handleFlipCoin} 
                disabled={isFlipping}
                style={{ 
                    padding: '8px 16px', 
                    backgroundColor: '#099268', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: isFlipping ? 'not-allowed' : 'pointer', 
                    fontWeight: 'bold',
                    opacity: isFlipping ? 0.7 : 1
                }}
            >
                {isFlipping ? 'Flipping...' : 'Flip Coin'}
            </button>

            {/* Statistics counters */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px', fontSize: '14px', fontWeight: 'bold', color: '#087f5b' }}>
                <span>Heads: {headsCount}</span>
                <span>Tails: {tailsCount}</span>
            </div>
        </div>
    );
}
