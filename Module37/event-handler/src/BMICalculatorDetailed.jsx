import { useState } from 'react';

export default function BMICalculatorDetailed() {
    // 1. Declare state for weight (kg), height (cm), and calculation history
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [history, setHistory] = useState([]);

    // 2. Calculate BMI, category, and health status
    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100; // convert cm to meters

        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
            return null;
        }

        const bmiVal = (w / (h * h)).toFixed(1);
        let category = '';
        let color = '#40c057';

        if (bmiVal < 18.5) {
            category = 'Underweight';
            color = '#15aabf';
        } else if (bmiVal < 25) {
            category = 'Normal weight';
            color = '#40c057';
        } else if (bmiVal < 30) {
            category = 'Overweight';
            color = '#fab005';
        } else {
            category = 'Obesity';
            color = '#fa5252';
        }

        return { bmi: bmiVal, category, color };
    };

    const result = calculateBMI();

    const handleSaveResult = () => {
        if (!result) return;
        const entry = {
            id: Date.now(),
            date: new Date().toLocaleTimeString(),
            weight,
            height,
            bmi: result.bmi,
            category: result.category
        };
        setHistory((prev) => [entry, ...prev.slice(0, 4)]);
    };

    const containerStyle = {
        border: '2px solid #15aabf',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e6fcfe',
        color: '#0b7285',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const inputRow = {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        margin: '15px 0'
    };

    const inputStyle = {
        padding: '6px 10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #22b8cf',
        width: '90px',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>BMI Health Calculator (State & Metrics)</h3>
            <p style={{ fontSize: '14px', color: '#15aabf', margin: '5px 0' }}>
                Calculate Body Mass Index and save measurements to history log.
            </p>

            <div style={inputRow}>
                <div>
                    <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block' }}>Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        style={inputStyle}
                        min="1"
                    />
                </div>
                <div>
                    <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block' }}>Height (cm)</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        style={inputStyle}
                        min="1"
                    />
                </div>
            </div>

            {/* Display BMI Result */}
            {result ? (
                <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #c5f2f7', display: 'inline-block', minWidth: '220px' }}>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: result.color }}>
                        {result.bmi}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: result.color }}>
                        {result.category}
                    </div>
                    <button
                        onClick={handleSaveResult}
                        style={{
                            marginTop: '10px',
                            padding: '4px 10px',
                            backgroundColor: '#15aabf',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}
                    >
                        Save Record 💾
                    </button>
                </div>
            ) : (
                <p style={{ color: '#868e96', fontSize: '13px' }}>Enter valid weight and height.</p>
            )}

            {/* Save Log */}
            {history.length > 0 && (
                <div style={{ marginTop: '15px', textAlign: 'left', maxWidth: '300px', margin: '15px auto 0' }}>
                    <h5 style={{ margin: '0 0 6px 0', color: '#0b7285' }}>Recent Records Log:</h5>
                    {history.map((h) => (
                        <div key={h.id} style={{ fontSize: '12px', backgroundColor: 'white', padding: '4px 8px', borderRadius: '4px', marginBottom: '4px', border: '1px solid #e9ecef', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{h.date} - {h.weight}kg / {h.height}cm</span>
                            <strong>BMI: {h.bmi} ({h.category})</strong>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
