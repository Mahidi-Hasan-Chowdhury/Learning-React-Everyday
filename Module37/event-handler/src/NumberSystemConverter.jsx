import { useState } from 'react';

export default function NumberSystemConverter() {
    // 1. Declare state variable for the input decimal value
    const [decimal, setDecimal] = useState('10');

    // 2. Calculation logic for base conversions
    const convertValue = (base) => {
        const num = parseInt(decimal, 10);
        if (isNaN(num)) return '';
        if (base === 2) return num.toString(2);
        if (base === 16) return num.toString(16).toUpperCase();
        return '';
    };

    const containerStyle = {
        border: '2px solid #0c8599',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e3fafc', // Soft light cyan background
        color: '#0c8599',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const inputStyle = {
        padding: '8px',
        fontSize: '16px',
        width: '130px',
        borderRadius: '4px',
        border: '1px solid #99e9f2',
        textAlign: 'center',
        color: '#495057'
    };

    return (
        <div style={containerStyle}>
            <h3>Number System Converter</h3>
            
            <p style={{ fontSize: '14px', color: '#15aabf', margin: '5px 0' }}>
                Enter a decimal integer below to calculate its binary and hexadecimal representations.
            </p>
            
            <div style={{ margin: '15px 0' }}>
                <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Decimal Input: </label>
                <input 
                    type="number"
                    value={decimal}
                    onChange={(e) => setDecimal(e.target.value)}
                    style={inputStyle}
                    min="0"
                />
            </div>

            {/* Calculations Breakdown Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '15px', fontSize: '15px' }}>
                <div>
                    <span style={{ fontWeight: 'bold', display: 'block', color: '#495057' }}>Binary (Base 2)</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '18px', color: '#0b7285', fontWeight: 'bold', display: 'block', marginTop: '4px' }}>
                        {convertValue(2) || '0'}
                    </span>
                </div>
                
                <div>
                    <span style={{ fontWeight: 'bold', display: 'block', color: '#495057' }}>Hexadecimal (Base 16)</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '18px', color: '#0b7285', fontWeight: 'bold', display: 'block', marginTop: '4px' }}>
                        {convertValue(16) || '0'}
                    </span>
                </div>
            </div>
        </div>
    );
}
