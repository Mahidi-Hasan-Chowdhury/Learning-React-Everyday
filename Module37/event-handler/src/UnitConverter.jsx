import { useState } from 'react';

export default function UnitConverter() {
    // 1. Declare state variables to track value, input unit, and output unit
    const [inputValue, setInputValue] = useState('1');
    const [fromUnit, setFromUnit] = useState('meters');
    const [toUnit, setToUnit] = useState('feet');

    // 2. Conversion conversion factors relative to meters (base unit)
    const conversionFactors = {
        meters: 1,
        kilometers: 1000,
        centimeters: 0.01,
        feet: 0.3048,
        inches: 0.0254,
        miles: 1609.34
    };

    // 3. Derived calculation for converted length value
    const getConvertedValue = () => {
        const val = parseFloat(inputValue);
        if (isNaN(val)) return '0';
        
        // Convert to base meters first, then to target unit
        const valueInMeters = val * conversionFactors[fromUnit];
        const result = valueInMeters / conversionFactors[toUnit];
        
        return result.toFixed(4);
    };

    const containerStyle = {
        border: '2px solid #1098ad',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e6fcfe',
        color: '#0b7285',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const flexStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        margin: '15px 0'
    };

    const inputStyle = {
        padding: '8px',
        fontSize: '15px',
        borderRadius: '4px',
        border: '1px solid #15aabf',
        width: '100px',
        textAlign: 'center'
    };

    const selectStyle = {
        padding: '8px',
        fontSize: '15px',
        borderRadius: '4px',
        border: '1px solid #15aabf',
        cursor: 'pointer',
        color: '#343a40'
    };

    return (
        <div style={containerStyle}>
            <h3>Unit Converter (Length Measurement Example)</h3>
            <p style={{ fontSize: '14px', color: '#15aabf', margin: '5px 0' }}>
                Select length units and input values to calculate conversions dynamically.
            </p>

            <div style={flexStyle}>
                <input 
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={inputStyle}
                />

                <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={selectStyle}>
                    <option value="meters">Meters</option>
                    <option value="kilometers">Kilometers</option>
                    <option value="centimeters">Centimeters</option>
                    <option value="feet">Feet</option>
                    <option value="inches">Inches</option>
                    <option value="miles">Miles</option>
                </select>

                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>➡</span>

                <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={selectStyle}>
                    <option value="meters">Meters</option>
                    <option value="kilometers">Kilometers</option>
                    <option value="centimeters">Centimeters</option>
                    <option value="feet">Feet</option>
                    <option value="inches">Inches</option>
                    <option value="miles">Miles</option>
                </select>
            </div>

            <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'white', padding: '10px', borderRadius: '6px', border: '1px solid #c5f2f7', display: 'inline-block', minWidth: '200px' }}>
                {inputValue || '0'} {fromUnit} = <span style={{ color: '#0b7285' }}>{getConvertedValue()}</span> {toUnit}
            </div>
        </div>
    );
}
