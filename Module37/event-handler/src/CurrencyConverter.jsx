import { useState } from 'react';

export default function CurrencyConverter() {
    // 1. Declare state variables to track amounts and selected currencies
    const [amount, setAmount] = useState('1');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('BDT');

    // 2. Define exchange rates relative to USD (1 USD as base)
    const exchangeRates = {
        USD: 1.00,
        EUR: 0.92,
        BDT: 117.50,
        INR: 83.50,
        GBP: 0.78
    };

    // 3. Derived State: Perform conversion math on every render to avoid sync bugs
    const getConvertedAmount = () => {
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) return '0.00';

        // Math: convert amount to base USD first, then multiply by target rate
        const amountInUSD = parsedAmount / exchangeRates[fromCurrency];
        const converted = amountInUSD * exchangeRates[toCurrency];
        return converted.toFixed(2);
    };

    const containerStyle = {
        border: '2px solid #e8590c',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff4e6', // Soft orange background
        color: '#d9480f',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const flexContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        marginTop: '15px',
        flexWrap: 'wrap'
    };

    const inputStyle = {
        padding: '8px',
        fontSize: '16px',
        width: '120px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        textAlign: 'center',
        color: '#495057'
    };

    const selectStyle = {
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        color: '#495057',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <h3>Currency Converter (Multi-Input Calculation Example)</h3>
            <p style={{ fontSize: '14px', margin: '5px 0', color: '#f76707' }}>
                Enter an amount and choose currencies to convert values dynamically in real-time.
            </p>
            
            <div style={flexContainer}>
                {/* Amount Input */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Amount</label>
                    <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="1.00"
                        style={inputStyle}
                        min="0"
                    />
                </div>

                {/* Base Currency Dropdown */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>From</label>
                    <select 
                        value={fromCurrency} 
                        onChange={(e) => setFromCurrency(e.target.value)}
                        style={selectStyle}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>

                {/* Indicator arrow */}
                <span style={{ fontSize: '24px', fontWeight: 'bold', alignSelf: 'flex-end', marginBottom: '5px' }}>
                    ➜
                </span>

                {/* Target Currency Dropdown */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>To</label>
                    <select 
                        value={toCurrency} 
                        onChange={(e) => setToCurrency(e.target.value)}
                        style={selectStyle}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Results Display */}
            <div style={{
                marginTop: '20px',
                padding: '12px',
                backgroundColor: 'white',
                border: '1px solid #ffe8cc',
                borderRadius: '6px',
                color: '#343a40',
                fontSize: '18px',
                fontWeight: 'bold'
            }}>
                {amount || 0} {fromCurrency} = {getConvertedAmount()} {toCurrency}
            </div>
        </div>
    );
}
