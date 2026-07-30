import { useState } from 'react';

export default function LoanPayoffCalculator() {
    // 1. Declare state variables for loan amount ($), interest rate (%), and monthly payment ($)
    const [loanAmount, setLoanAmount] = useState('5000');
    const [interestRate, setInterestRate] = useState('6');
    const [monthlyPayment, setMonthlyPayment] = useState('200');

    // 2. Payoff Schedule Calculation
    const calculatePayoff = () => {
        let principal = parseFloat(loanAmount);
        const annualRate = parseFloat(interestRate) / 100;
        const payment = parseFloat(monthlyPayment);

        if (isNaN(principal) || isNaN(annualRate) || isNaN(payment) || principal <= 0 || payment <= 0) {
            return null;
        }

        const monthlyRate = annualRate / 12;
        // Check if payment cover monthly interest
        if (payment <= principal * monthlyRate) {
            return { error: 'Payment is too low to cover monthly interest charge!' };
        }

        let totalInterest = 0;
        let months = 0;

        // Loop amortization month by month until paid off (limit loop to 600 months to prevent freezes)
        while (principal > 0 && months < 600) {
            const interestForMonth = principal * monthlyRate;
            totalInterest += interestForMonth;
            const principalForMonth = payment - interestForMonth;
            principal -= principalForMonth;
            months++;
        }

        const years = (months / 12).toFixed(1);

        return {
            months,
            years,
            totalInterest: totalInterest.toFixed(2),
            totalPaid: (parseFloat(loanAmount) + totalInterest).toFixed(2)
        };
    };

    const result = calculatePayoff();

    const containerStyle = {
        border: '2px solid #e8590c',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff4e6',
        color: '#d9480f',
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
        border: '1px solid #ff922b',
        width: '90px',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Loan Payoff & Amortization Calculator</h3>
            <p style={{ fontSize: '14px', color: '#f76707', margin: '5px 0' }}>
                Calculate months required and total interest paid to clear debts.
            </p>

            <div style={formGrid}>
                <div style={inputGroup}>
                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Loan Balance ($)</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        style={inputStyle}
                        min="1"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Interest Rate (%)</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        style={inputStyle}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Monthly Pay ($)</label>
                    <input
                        type="number"
                        value={monthlyPayment}
                        onChange={(e) => setMonthlyPayment(e.target.value)}
                        style={inputStyle}
                        min="1"
                    />
                </div>
            </div>

            {/* Payoff Results display */}
            {result ? (
                result.error ? (
                    <p style={{ color: '#e03131', fontSize: '13px', fontWeight: 'bold' }}>{result.error}</p>
                ) : (
                    <div style={{
                        backgroundColor: 'white',
                        padding: '12px 20px',
                        borderRadius: '6px',
                        border: '1px solid #ffd8a8',
                        display: 'inline-block',
                        textAlign: 'left',
                        minWidth: '240px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px', color: '#d9480f' }}>
                            <span>Payoff Time:</span>
                            <strong>{result.months} months ({result.years} yrs)</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px', color: '#e8590c' }}>
                            <span>Total Interest:</span>
                            <strong>${result.totalInterest}</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #dee2e6', paddingTop: '6px', fontSize: '16px', fontWeight: 'bold', color: '#d9480f' }}>
                            <span>Total Out of Pocket:</span>
                            <span>${result.totalPaid}</span>
                        </div>
                    </div>
                )
            ) : (
                <p style={{ color: '#868e96', fontSize: '13px' }}>Please enter valid numbers.</p>
            )}
        </div>
    );
}
