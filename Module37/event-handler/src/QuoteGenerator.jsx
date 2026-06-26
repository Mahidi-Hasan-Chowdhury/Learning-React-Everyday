import { useState } from 'react';

export default function QuoteGenerator() {
    // Array of quote objects
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { text: "Make it simple, but significant.", author: "Don Draper" },
        { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" }
    ];

    // 1. Declare state for the current active quote index and clipboard status
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCopied, setIsCopied] = useState(false);

    // 2. Select a new random quote, ensuring it is different from the current one
    const handleNextQuote = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === currentIndex && quotes.length > 1);

        setCurrentIndex(randomIndex);
        setIsCopied(false); // Reset the clipboard copy text confirmation
    };

    // 3. Write text to browser clipboard using the Web Clipboard API
    const handleCopyQuote = async () => {
        const fullQuote = `"${quotes[currentIndex].text}" — ${quotes[currentIndex].author}`;
        try {
            await navigator.clipboard.writeText(fullQuote);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset the tag back to original after 2 seconds
        } catch (err) {
            console.error("Clipboard copy failed:", err);
        }
    };

    const containerStyle = {
        border: '2px solid #495057',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa', // Slate/light gray background
        color: '#212529',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Random Quote Generator (Clipboard & Event Example)</h3>
            
            {/* Display Board */}
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '6px',
                border: '1px solid #dee2e6',
                color: '#343a40',
                minHeight: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: '15px'
            }}>
                <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '0 0 10px 0', lineHeight: '1.4' }}>
                    "{quotes[currentIndex].text}"
                </p>
                <p style={{ margin: 0, fontWeight: 'bold', alignSelf: 'flex-end', color: '#495057' }}>
                    — {quotes[currentIndex].author}
                </p>
            </div>

            {/* Interaction Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button 
                    onClick={handleNextQuote}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#495057',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s ease'
                    }}
                >
                    Next Quote ➜
                </button>

                <button 
                    onClick={handleCopyQuote}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s ease'
                    }}
                >
                    {isCopied ? 'Copied! ✓' : 'Copy Quote 📋'}
                </button>
            </div>
        </div>
    );
}
