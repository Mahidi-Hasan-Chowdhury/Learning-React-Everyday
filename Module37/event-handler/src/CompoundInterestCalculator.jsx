import { useState } from 'react';

export default function CompoundInterestCalculator() {
    // 1. State variables for Principal ($), Interest Rate (%), Time (Years), and Compound Frequency
    const [principal, setPrincipal] = useState('1000');
    const [rate, setRate] = useState('5');
    const [years, setYears] = useState('5');
    const [frequency, setFrequency] = useState('12'); // 12 = Monthly, 1 = Annually, 4 = Quarterly

    // 2. Compound Interest Calculation: A = P(1 + r/n)^(nt)
    const calculateCompoundInterest = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        const t = parseFloat(years);
        const n = parseInt(frequency, 10);

        if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n) || p <= 0 || r < 0 || t <= 0) {
            return null;
        }

        const amount = p * Math.pow(1 + r / n, n * t);
        const interestEarned = amount - p;

        return {
            totalAmount: amount.toFixed(2),
            interest: interestEarned.toFixed(2)
        };
    };

    const result = calculateCompoundInterest();

    const containerStyle = {
        border: '2px solid #5c7cfa',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#edf2ff',
        color: '#3b5bdb',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const formGrid = {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        margin: '15px 0'
    };

    const inputGroup = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
    };

    const inputStyle = {
        padding: '6px 8px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #748ffc',
        width: '85px',
        textAlign: 'center'
    };

    const selectStyle = {
        padding: '6px 8px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #748ffc',
        cursor: 'pointer',
        color: '#343a40'
    };

    return (
        <div style={containerStyle}>
            <h3>Compound Interest Calculator</h3>
            <p style={{ fontSize: '14px', color: '#4c6ef5', margin: '5px 0' }}>
                Calculate investment growth over time with compound interest.
            </p>

            <div style={formGrid}>
                <div style={inputGroup}>
                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Principal ($)</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        style={inputStyle}
                        min="0"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Annual Rate (%)</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        style={inputStyle}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Time (Years)</label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        style={inputStyle}
                        min="1"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Compounding</label>
                    <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        style={selectStyle}
                    >
                        <option value="12">Monthly</option>
                        <option value="4">Quarterly</option>
                        <option value="1">Annually</option>
                    </select>
                </div>
            </div>

            {/* Results display */}
            {result ? (
                <div style={{
                    backgroundColor: 'white',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    border: '1px solid #bac8ff',
                    display: 'inline-block',
                    textAlign: 'left',
                    minWidth: '220px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px', color: '#4c6ef5' }}>
                        <span>Interest Earned:</span>
                        <strong>+${result.interest}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #dee2e6', paddingTop: '6px', fontSize: '17px', fontWeight: 'bold', color: '#3b5bdb' }}>
                        <span>Future Value:</span>
                        <span>${result.totalAmount}</span>
                    </div>
                </div>
            ) : (
                <p style={{ color: '#868e96', fontSize: '13px' }}>Please enter valid numbers.</p>
            )}
        </div>
    );
}
