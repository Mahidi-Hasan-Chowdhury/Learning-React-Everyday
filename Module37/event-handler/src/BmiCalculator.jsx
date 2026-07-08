import { useState } from 'react';

export default function BmiCalculator() {
    // 1. Declare state variables to track inputs and calculations
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);

    // 2. Clear state variables back to initial state
    const handleReset = () => {
        setHeight('');
        setWeight('');
        setBmiResult(null);
    };

    // 3. Event handler to calculate BMI on form submit
    const handleCalculate = (event) => {
        event.preventDefault(); // Stop page refresh
        const heightMeters = parseFloat(height) / 100; // Convert cm to meters
        const weightKg = parseFloat(weight);

        if (isNaN(heightMeters) || isNaN(weightKg) || heightMeters <= 0 || weightKg <= 0) {
            alert('Please enter valid numeric height and weight values!');
            return;
        }

        // Formula: BMI = weight (kg) / height (m)^2
        const bmi = weightKg / (heightMeters * heightMeters);
        setBmiResult(bmi.toFixed(1)); // Keep 1 decimal place
    };

    // 4. Derived classification category based on BMI scale
    const getBmiCategory = (bmi) => {
        const score = parseFloat(bmi);
        if (score < 18.5) return { label: 'Underweight 🟡', color: '#e28743' };
        if (score < 25.0) return { label: 'Normal Weight 🟢', color: '#2b8a3e' };
        if (score < 30.0) return { label: 'Overweight 🟠', color: '#fd7e14' };
        return { label: 'Obese 🔴', color: '#fa5252' };
    };

    const containerStyle = {
        border: '2px solid #1098ad',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e2f9fb', // Light cyan background
        color: '#0b7285',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const inputRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
    };

    const inputStyle = {
        padding: '6px', 
        width: '120px', 
        borderRadius: '4px', 
        border: '1px solid #ced4da',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>BMI Calculator (Mathematical State Example)</h3>
            
            <p style={{ fontSize: '14px', margin: '5px 0', color: '#15aabf' }}>
                Enter your height in centimeters (cm) and weight in kilograms (kg) to calculate Body Mass Index.
            </p>
            
            <form onSubmit={handleCalculate} style={{ maxWidth: '260px', margin: '15px auto' }}>
                {/* Height Input */}
                <div style={inputRowStyle}>
                    <label style={{ fontWeight: 'bold' }}>Height (cm)</label>
                    <input 
                        type="number" 
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="e.g. 170"
                        style={inputStyle}
                        min="1"
                    />
                </div>
                
                {/* Weight Input */}
                <div style={inputRowStyle}>
                    <label style={{ fontWeight: 'bold' }}>Weight (kg)</label>
                    <input 
                        type="number" 
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="e.g. 65"
                        style={inputStyle}
                        min="1"
                    />
                </div>

                {/* Form Controls */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button 
                        type="submit" 
                        style={{ 
                            flex: 1, 
                            padding: '8px', 
                            backgroundColor: '#1098ad', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px', 
                            cursor: 'pointer', 
                            fontWeight: 'bold' 
                        }}
                    >
                        Calculate
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={handleReset} 
                        style={{ 
                            flex: 1, 
                            padding: '8px', 
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
                </div>
            </form>

            {/* Display Box: render conditionally only if results exist */}
            {bmiResult && (
                <div style={{
                    marginTop: '15px',
                    padding: '12px',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    border: '1px solid #c5f2f7',
                    color: '#343a40'
                }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '18px' }}>
                        Your BMI: <strong>{bmiResult}</strong>
                    </p>
                    <div style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        color: 'white',
                        fontWeight: 'bold',
                        backgroundColor: getBmiCategory(bmiResult).color
                    }}>
                        {getBmiCategory(bmiResult).label}
                    </div>
                </div>
            )}
        </div>
    );
}
