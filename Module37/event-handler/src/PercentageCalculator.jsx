import { useState } from 'react';

export default function PercentageCalculator() {
    // 1. Declare state variables to track different calculation inputs
    const [percent, setPercent] = useState('15');
    const [num1, setNum1] = useState('200');
    const [num2, setNum2] = useState('50');
    const [num3, setNum3] = useState('200');

    // 2. Calculation formulas (derived states evaluated on render)
    const getXPercentOfY = () => {
        const p = parseFloat(percent);
        const n = parseFloat(num1);
        if (isNaN(p) || isNaN(n)) return '0';
        return ((p / 100) * n).toFixed(2);
    };

    const getPercentageXOfY = () => {
        const x = parseFloat(num2);
        const y = parseFloat(num3);
        if (isNaN(x) || isNaN(y) || y === 0) return '0';
        return ((x / y) * 100).toFixed(2);
    };

    const containerStyle = {
        border: '2px solid #37b24d',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#ebfbee', // Soft green background
        color: '#2b8a3e',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        margin: '15px 0',
        flexWrap: 'wrap'
    };

    const inputStyle = {
        padding: '6px',
        width: '75px',
        borderRadius: '4px',
        border: '1px solid #a9e34b',
        textAlign: 'center',
        color: '#495057'
    };

    return (
        <div style={containerStyle}>
            <h3>Percentage Calculator</h3>
            
            <p style={{ fontSize: '14px', color: '#40c057', margin: '5px 0' }}>
                Quick utility to compute fractional ratios and values dynamically.
            </p>
            
            {/* Calculation Row 1: What is X% of Y? */}
            <div style={rowStyle}>
                <span>What is</span>
                <input type="number" value={percent} onChange={(e) => setPercent(e.target.value)} style={inputStyle} />
                <span>% of</span>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} style={inputStyle} />
                <span>?</span>
                <span style={{ fontSize: '15px', color: '#2b8a3e' }}>
                    Answer: <strong>{getXPercentOfY()}</strong>
                </span>
            </div>

            {/* Calculation Row 2: X is what percent of Y? */}
            <div style={rowStyle}>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} style={inputStyle} />
                <span>is what % of</span>
                <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} style={inputStyle} />
                <span>?</span>
                <span style={{ fontSize: '15px', color: '#2b8a3e' }}>
                    Answer: <strong>{getPercentageXOfY()}%</strong>
                </span>
            </div>
        </div>
    );
}
