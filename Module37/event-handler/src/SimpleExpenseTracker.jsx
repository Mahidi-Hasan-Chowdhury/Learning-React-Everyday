import { useState } from 'react';

export default function SimpleExpenseTracker() {
    // 1. Declare state for expense items array and input fields
    const [expenses, setExpenses] = useState([
        { id: 1, title: 'Groceries', amount: 45.50 },
        { id: 2, title: 'Internet Bill', amount: 30.00 }
    ]);
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');

    // 2. Add expense item handler
    const handleAddExpense = (e) => {
        e.preventDefault();
        const parsedAmount = parseFloat(amountInput);
        if (!titleInput.trim() || isNaN(parsedAmount) || parsedAmount <= 0) {
            alert('Please enter a valid title and positive amount!');
            return;
        }

        const newExpense = {
            id: Date.now(),
            title: titleInput.trim(),
            amount: parsedAmount
        };

        setExpenses((prev) => [...prev, newExpense]);
        setTitleInput('');
        setAmountInput('');
    };

    // 3. Delete single expense handler
    const handleDeleteExpense = (id) => {
        setExpenses((prev) => prev.filter((item) => item.id !== id));
    };

    // 4. Derived total calculation on render
    const totalExpenseCost = expenses.reduce((sum, item) => sum + item.amount, 0).toFixed(2);

    const containerStyle = {
        border: '2px solid #e03131',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff5f5',
        color: '#c92a2a',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const formStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        margin: '15px 0',
        flexWrap: 'wrap'
    };

    const inputStyle = {
        padding: '6px 10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ff8787',
        outline: 'none'
    };

    return (
        <div style={containerStyle}>
            <h3>Simple Expense Tracker (List & Total Math Example)</h3>
            <p style={{ fontSize: '14px', color: '#f03e3e', margin: '5px 0' }}>
                Track daily expenses and calculate total spending dynamically.
            </p>

            {/* Input Form */}
            <form onSubmit={handleAddExpense} style={formStyle}>
                <input
                    type="text"
                    placeholder="Expense title..."
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    style={{ ...inputStyle, width: '130px' }}
                />
                <input
                    type="number"
                    placeholder="Amount ($)..."
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    style={{ ...inputStyle, width: '90px' }}
                    step="0.01"
                    min="0"
                />
                <button
                    type="submit"
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#e03131',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '13px'
                    }}
                >
                    Add Expense ➕
                </button>
            </form>

            {/* Expense List display */}
            <div style={{ maxWidth: '320px', margin: '0 auto', textAlign: 'left' }}>
                {expenses.length === 0 ? (
                    <p style={{ fontStyle: 'italic', color: '#868e96', textAlign: 'center', fontSize: '13px' }}>
                        No expenses logged yet.
                    </p>
                ) : (
                    expenses.map((expense) => (
                        <div
                            key={expense.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '8px 12px',
                                backgroundColor: 'white',
                                borderRadius: '4px',
                                marginBottom: '6px',
                                border: '1px solid #ffe3e3',
                                fontSize: '14px'
                            }}
                        >
                            <span>{expense.title}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <strong style={{ color: '#c92a2a' }}>${expense.amount.toFixed(2)}</strong>
                                <button
                                    onClick={() => handleDeleteExpense(expense.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#fa5252',
                                        cursor: 'pointer',
                                        fontSize: '12px'
                                    }}
                                    title="Delete expense"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))
                )}

                {/* Total Summary */}
                <div
                    style={{
                        marginTop: '12px',
                        paddingTop: '8px',
                        borderTop: '2px solid #ffc9c9',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        color: '#c92a2a'
                    }}
                >
                    <span>Total Spending:</span>
                    <span>${totalExpenseCost}</span>
                </div>
            </div>
        </div>
    );
}
