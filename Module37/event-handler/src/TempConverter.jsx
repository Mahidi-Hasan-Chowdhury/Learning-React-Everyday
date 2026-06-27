import { useState } from 'react';

export default function TempConverter() {
    // 1. Declare state variables for Celsius and Fahrenheit inputs
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    // Conversion formulas
    const toCelsius = (f) => ((f - 32) * 5) / 9;
    const toFahrenheit = (c) => (c * 9) / 5 + 32;

    // 2. Handler for Celsius input changes
    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);

        if (value === '') {
            setFahrenheit('');
            return;
        }

        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            // Update fahrenheit to match the new celsius input value
            setFahrenheit(toFahrenheit(numericValue).toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    // 3. Handler for Fahrenheit input changes
    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);

        if (value === '') {
            setCelsius('');
            return;
        }

        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            // Update celsius to match the new fahrenheit input value
            setCelsius(toCelsius(numericValue).toFixed(2));
        } else {
            setCelsius('');
        }
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

    const flexContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        marginTop: '15px'
    };

    const inputStyle = {
        padding: '8px',
        fontSize: '16px',
        width: '100px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        textAlign: 'center',
        color: '#495057'
    };

    return (
        <div style={containerStyle}>
            <h3>Temperature Converter (Two-Way Sync Example)</h3>
            <p style={{ fontSize: '14px', margin: '5px 0', color: '#12b886' }}>
                Change either Celsius or Fahrenheit input to see dynamic real-time conversion.
            </p>
            
            <div style={flexContainer}>
                {/* Celsius Input Panel */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Celsius (°C)</label>
                    <input 
                        type="text" 
                        value={celsius}
                        onChange={handleCelsiusChange}
                        placeholder="0"
                        style={inputStyle}
                    />
                </div>
                
                {/* Visual arrow indicating two-way conversion direction */}
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#099268' }}>
                    ⇄
                </span>
                
                {/* Fahrenheit Input Panel */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Fahrenheit (°F)</label>
                    <input 
                        type="text" 
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                        placeholder="32"
                        style={inputStyle}
                    />
                </div>
            </div>
        </div>
    );
}
