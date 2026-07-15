import { useState } from 'react';

export default function AgeCalculator() {
    // 1. Declare state variables to track inputs and outputs
    const [birthdate, setBirthdate] = useState('');
    const [ageResult, setAgeResult] = useState(null);

    // 2. Clear state variables back to initial state
    const handleReset = () => {
        setBirthdate('');
        setAgeResult(null);
    };

    // 3. Event handler to calculate exact age in years, months, and days
    const handleCalculateAge = (event) => {
        event.preventDefault(); // Prevent page refresh
        
        if (!birthdate) {
            alert('Please select a valid birthdate!');
            return;
        }

        const today = new Date();
        const birthDateObj = new Date(birthdate);

        if (birthDateObj > today) {
            alert('Birthdate cannot be in the future!');
            return;
        }

        let years = today.getFullYear() - birthDateObj.getFullYear();
        let months = today.getMonth() - birthDateObj.getMonth();
        let days = today.getDate() - birthDateObj.getDate();

        // If the day difference is negative, borrowing days from previous month
        if (days < 0) {
            months--;
            // Find total days in the month before today's month
            const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
            days += tempDate.getDate();
        }

        // If the month difference is negative, borrowing months from previous year
        if (months < 0) {
            years--;
            months += 12;
        }

        setAgeResult({ years, months, days });
    };

    const containerStyle = {
        border: '2px solid #e03131',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff5f5', // Soft light red background
        color: '#c92a2a',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const displayGridStyle = {
        marginTop: '15px',
        padding: '12px',
        backgroundColor: 'white',
        borderRadius: '6px',
        border: '1px solid #ffe3e3',
        color: '#343a40',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '15px',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyle}>
            <h3>Age Calculator (Date Manipulation Example)</h3>
            
            <p style={{ fontSize: '14px', margin: '5px 0 12px 0', color: '#f03e3e' }}>
                Select your birth date below to determine your exact age in years, months, and days.
            </p>

            <form onSubmit={handleCalculateAge} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '260px', margin: '15px auto' }}>
                <input 
                    type="date" 
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    style={{ 
                        padding: '8px', 
                        borderRadius: '4px', 
                        border: '1px solid #ffa8a8', 
                        fontSize: '15px', 
                        textAlign: 'center', 
                        width: '100%', 
                        boxSizing: 'border-box',
                        color: '#495057'
                    }}
                />
                
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        type="submit" 
                        style={{ 
                            flex: 1, 
                            padding: '8px 14px', 
                            backgroundColor: '#e03131', 
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
                            padding: '8px 14px', 
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

            {/* Render age results breakdown conditionally */}
            {ageResult && (
                <div style={displayGridStyle}>
                    <div>
                        <span style={{ display: 'block', fontSize: '24px', color: '#c92a2a' }}>{ageResult.years}</span>
                        <span>Years</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '24px', color: '#c92a2a' }}>{ageResult.months}</span>
                        <span>Months</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '24px', color: '#c92a2a' }}>{ageResult.days}</span>
                        <span>Days</span>
                    </div>
                </div>
            )}
        </div>
    );
}
