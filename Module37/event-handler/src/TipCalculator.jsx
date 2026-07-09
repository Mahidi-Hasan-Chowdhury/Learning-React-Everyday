import { useState } from 'react';

export default function TipCalculator() {
    // 1. Declare state variables to track inputs
    const [billTotal, setBillTotal] = useState('50');
    const [tipPercentage, setTipPercentage] = useState('15');
    const [peopleCount, setPeopleCount] = useState('2');

    // 2. Derived State: Perform calculations dynamically during every render pass
    const calculateTotals = () => {
        const bill = parseFloat(billTotal) || 0;
        const tipPercent = parseFloat(tipPercentage) || 0;
        const people = parseInt(peopleCount) || 1;

        const tipAmount = (bill * tipPercent) / 100;
        const totalWithTip = bill + tipAmount;
        const sharePerPerson = totalWithTip / Math.max(people, 1);

        return {
            tipAmount: tipAmount.toFixed(2),
            totalWithTip: totalWithTip.toFixed(2),
            sharePerPerson: sharePerPerson.toFixed(2)
        };
    };

    const computed = calculateTotals();

    const containerStyle = {
        border: '2px solid #5c7cfa',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#edf2ff', // Light indigo background
        color: '#364fc7',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const flexColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '280px',
        margin: '15px auto',
        textAlign: 'left'
    };

    const inputStyle = {
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        fontSize: '14px',
        width: '100%',
        boxSizing: 'border-box',
        color: '#495057'
    };

    return (
        <div style={containerStyle}>
            <h3>Tip Calculator (Multi-Input Calculations Example)</h3>
            
            <p style={{ fontSize: '14px', margin: '5px 0', color: '#4c6ef5' }}>
                Enter the bill details below to calculate tip amounts and split totals dynamically.
            </p>

            <div style={flexColumnStyle}>
                {/* Bill Amount Input */}
                <div>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Bill Total ($)</label>
                    <input 
                        type="number" 
                        value={billTotal}
                        onChange={(e) => setBillTotal(e.target.value)}
                        placeholder="0.00"
                        style={inputStyle}
                        min="0"
                    />
                </div>
                
                {/* Tip Percentage Selection */}
                <div>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Tip Percentage (%)</label>
                    <select 
                        value={tipPercentage}
                        onChange={(e) => setTipPercentage(e.target.value)}
                        style={inputStyle}
                    >
                        <option value="10">10% (Good)</option>
                        <option value="15">15% (Great)</option>
                        <option value="20">20% (Outstanding)</option>
                        <option value="25">25% (Exceptional)</option>
                    </select>
                </div>
                
                {/* Split Count Input */}
                <div>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Number of People</label>
                    <input 
                        type="number" 
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(e.target.value)}
                        placeholder="1"
                        style={inputStyle}
                        min="1"
                    />
                </div>
            </div>

            {/* Calculations Breakdown display box */}
            <div style={{
                marginTop: '15px',
                padding: '12px',
                backgroundColor: 'white',
                borderRadius: '6px',
                border: '1px solid #bac8ff',
                color: '#343a40',
                textAlign: 'left',
                maxWidth: '280px',
                marginInline: 'auto'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span>Tip Amount:</span>
                    <strong>${computed.tipAmount}</strong>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span>Total Bill:</span>
                    <strong>${computed.totalWithTip}</strong>
                </div>
                
                {/* Split amount displayed with highlighting */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    borderTop: '1px dashed #ced4da', 
                    paddingTop: '6px', 
                    fontSize: '18px', 
                    color: '#364fc7' 
                }}>
                    <span>Per Person:</span>
                    <strong>${computed.sharePerPerson}</strong>
                </div>
            </div>
        </div>
    );
}
