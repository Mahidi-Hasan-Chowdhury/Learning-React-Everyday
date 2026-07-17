import { useState } from 'react';

export default function RandomNumberGenerator() {
    // 1. Declare state variables
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [randomNumber, setRandomNumber] = useState(null);

    // 2. Event handler to generate random number in range [min, max]
    const handleGenerate = (e) => {
        e.preventDefault();
        const minimum = parseInt(min);
        const maximum = parseInt(max);

        if (isNaN(minimum) || isNaN(maximum)) {
            alert('Please enter valid integers!');
            return;
        }
        if (minimum >= maximum) {
            alert('Minimum must be less than Maximum!');
            return;
        }

        const rand = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        setRandomNumber(rand);
    };

    const containerStyle = {
        border: '2px solid #748ffc',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#edf2ff', // Soft blue background
        color: '#364fc7',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Random Number Generator</h3>
            
            <form onSubmit={handleGenerate} style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', margin: '15px 0' }}>
                <input 
                    type="number" 
                    value={min} 
                    onChange={(e) => setMin(e.target.value)} 
                    placeholder="Min"
                    style={{ width: '60px', padding: '6px', textAlign: 'center', borderRadius: '4px', border: '1px solid #adc5fc' }}
                />
                <span>to</span>
                <input 
                    type="number" 
                    value={max} 
                    onChange={(e) => setMax(e.target.value)} 
                    placeholder="Max"
                    style={{ width: '60px', padding: '6px', textAlign: 'center', borderRadius: '4px', border: '1px solid #adc5fc' }}
                />
                <button type="submit" style={{ padding: '6px 12px', backgroundColor: '#4c6ef5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Generate
                </button>
            </form>

            {randomNumber !== null && (
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1c7ed6', margin: '10px 0' }}>
                    {randomNumber}
                </div>
            )}
        </div>
    );
}
