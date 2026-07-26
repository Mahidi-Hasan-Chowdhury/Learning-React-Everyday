import { useState } from 'react';

export default function DiscountCalculator() {
    // 1. Declare state variables for price, discount %, and tax %
    const [originalPrice, setOriginalPrice] = useState('100');
    const [discountPercent, setDiscountPercent] = useState('20');
    const [taxPercent, setTaxPercent] = useState('5');

    // 2. Derived calculations for final price, savings, and tax
    const calculateTotals = () => {
        const price = parseFloat(originalPrice) || 0;
        const discount = parseFloat(discountPercent) || 0;
        const tax = parseFloat(taxPercent) || 0;

        const discountAmount = (price * discount) / 100;
        const priceAfterDiscount = price - discountAmount;
        const taxAmount = (priceAfterDiscount * tax) / 100;
        const finalPrice = priceAfterDiscount + taxAmount;

        return {
            savings: discountAmount.toFixed(2),
            tax: taxAmount.toFixed(2),
            final: finalPrice.toFixed(2)
        };
    };

    const totals = calculateTotals();

    const containerStyle = {
        border: '2px solid #2b8a3e',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#ebfbee',
        color: '#2b8a3e',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const formGrid = {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
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
        padding: '6px 10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #40c057',
        width: '90px',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Discount & Price Calculator</h3>
            <p style={{ fontSize: '14px', color: '#40c057', margin: '5px 0' }}>
                Calculate savings, sales tax, and final checkout price dynamically.
            </p>

            <div style={formGrid}>
                <div style={inputGroup}>
                    <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Price ($)</label>
                    <input
                        type="number"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        style={inputStyle}
                        min="0"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Discount (%)</label>
                    <input
                        type="number"
                        value={discountPercent}
                        onChange={(e) => setDiscountPercent(e.target.value)}
                        style={inputStyle}
                        min="0"
                        max="100"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Tax (%)</label>
                    <input
                        type="number"
                        value={taxPercent}
                        onChange={(e) => setTaxPercent(e.target.value)}
                        style={inputStyle}
                        min="0"
                    />
                </div>
            </div>

            {/* Results breakdown */}
            <div style={{
                backgroundColor: 'white',
                padding: '12px 20px',
                borderRadius: '6px',
                border: '1px solid #b2f2bb',
                display: 'inline-block',
                textAlign: 'left',
                minWidth: '220px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px', color: '#2b8a3e' }}>
                    <span>You Save:</span>
                    <strong>${totals.savings}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px', color: '#495057' }}>
                    <span>Tax:</span>
                    <strong>${totals.tax}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #dee2e6', paddingTop: '6px', fontSize: '17px', fontWeight: 'bold', color: '#2b8a3e' }}>
                    <span>Final Price:</span>
                    <span>${totals.final}</span>
                </div>
            </div>
        </div>
    );
}
