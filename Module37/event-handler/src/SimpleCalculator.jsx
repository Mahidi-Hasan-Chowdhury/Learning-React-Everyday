import { useState } from 'react';

export default function SimpleCalculator() {
    // 1. Declare state variables to track inputs and computed results
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    // 2. Click handler to append inputs to the formula expression string
    const handleButtonClick = (value) => {
        setExpression((prev) => prev + value);
    };

    // 3. Clear handler to reset the calculator state
    const handleClear = () => {
        setExpression('');
        setResult('');
    };

    // 4. Backspace handler to remove the last character of the expression
    const handleBackspace = () => {
        setExpression((prev) => prev.slice(0, -1));
    };

    // 5. Evaluation handler: Safely evaluates the expression
    const handleCalculate = () => {
        try {
            // Remove any characters that aren't numbers, operators, or decimals for safety
            const sanitizedExpression = expression.replace(/[^0-9+\-*/.]/g, '');
            if (sanitizedExpression === '') return;

            // Safe calculation using the Function constructor instead of eval
            const calculatedValue = new Function(`return ${sanitizedExpression}`)();
            setResult(calculatedValue.toString());
        } catch (err) {
            setResult('Error');
        }
    };

    const containerStyle = {
        border: '2px solid #2b8a3e',
        margin: '15px auto',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#ebfbee', // Soft warm green background
        color: '#2b8a3e',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        maxWidth: '320px'
    };

    const displayStyle = {
        backgroundColor: 'white',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        padding: '10px',
        minHeight: '60px',
        textAlign: 'right',
        fontFamily: 'monospace',
        marginBottom: '15px',
        color: '#495057'
    };

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px'
    };

    const getBtnStyle = (isAction = false) => ({
        padding: '12px',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        cursor: 'pointer',
        backgroundColor: isAction ? '#d3f9d8' : 'white',
        color: isAction ? '#2b8a3e' : '#495057',
        transition: 'background-color 0.1s ease',
        outline: 'none'
    });

    return (
        <div style={containerStyle}>
            <h3>Simple Calculator (State Logic Example)</h3>
            <p style={{ fontSize: '13px', margin: '5px 0 10px 0', color: '#40c057' }}>
                Performs basic arithmetic operations using state evaluation.
            </p>
            
            {/* Screen Display */}
            <div style={displayStyle}>
                <div style={{ fontSize: '14px', color: '#868e96', minHeight: '20px' }}>
                    {expression || ' '}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {result || '0'}
                </div>
            </div>

            {/* Layout Button Pad */}
            <div style={gridContainer}>
                <button onClick={handleClear} style={getBtnStyle(true)}>C</button>
                <button onClick={handleBackspace} style={getBtnStyle(true)}>⌫</button>
                <button onClick={() => handleButtonClick('/')} style={getBtnStyle(true)}>/</button>
                <button onClick={() => handleButtonClick('*')} style={getBtnStyle(true)}>×</button>

                <button onClick={() => handleButtonClick('7')} style={getBtnStyle()}>7</button>
                <button onClick={() => handleButtonClick('8')} style={getBtnStyle()}>8</button>
                <button onClick={() => handleButtonClick('9')} style={getBtnStyle()}>9</button>
                <button onClick={() => handleButtonClick('-')} style={getBtnStyle(true)}>-</button>

                <button onClick={() => handleButtonClick('4')} style={getBtnStyle()}>4</button>
                <button onClick={() => handleButtonClick('5')} style={getBtnStyle()}>5</button>
                <button onClick={() => handleButtonClick('6')} style={getBtnStyle()}>6</button>
                <button onClick={() => handleButtonClick('+')} style={getBtnStyle(true)}>+</button>

                <button onClick={() => handleButtonClick('1')} style={getBtnStyle()}>1</button>
                <button onClick={() => handleButtonClick('2')} style={getBtnStyle()}>2</button>
                <button onClick={() => handleButtonClick('3')} style={getBtnStyle()}>3</button>
                
                {/* Equals Action span 2 rows vertically */}
                <button 
                    onClick={handleCalculate} 
                    style={{ 
                        ...getBtnStyle(true), 
                        gridRow: 'span 2', 
                        height: '100%', 
                        backgroundColor: '#2b8a3e', 
                        color: 'white', 
                        border: 'none' 
                    }}
                >
                    =
                </button>

                <button onClick={() => handleButtonClick('0')} style={{ ...getBtnStyle(), gridColumn: 'span 2' }}>0</button>
                <button onClick={() => handleButtonClick('.')} style={getBtnStyle()}>.</button>
            </div>
        </div>
    );
}
