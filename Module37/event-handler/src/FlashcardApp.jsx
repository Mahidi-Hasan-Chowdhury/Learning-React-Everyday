import { useState } from 'react';

export default function FlashcardApp() {
    const flashcardsData = [
        {
            id: 1,
            question: "What is JSX in React?",
            answer: "JSX stands for JavaScript XML. It allows writing HTML-like code inside JavaScript."
        },
        {
            id: 2,
            question: "What is Virtual DOM?",
            answer: "A lightweight in-memory representation of the real DOM used by React for fast rendering updates."
        },
        {
            id: 3,
            question: "What is state in React?",
            answer: "An object that holds component data that may change over time, triggering re-renders when updated."
        },
        {
            id: 4,
            question: "What is a Prop?",
            answer: "Short for properties, props are read-only inputs passed from parent to child components."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
    };

    const currentCard = flashcardsData[currentIndex];

    const containerStyle = {
        border: '2px solid #7950f2',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f3f0ff',
        color: '#5f3dc4',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const cardStyle = {
        backgroundColor: isFlipped ? '#eebefa' : 'white',
        border: '2px solid #d0bfff',
        borderRadius: '8px',
        padding: '20px',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '15px auto',
        maxWidth: '320px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        userSelect: 'none'
    };

    return (
        <div style={containerStyle}>
            <h3>Flashcard Study App (Card Flip State Example)</h3>
            <p style={{ fontSize: '14px', color: '#7048e8', margin: '5px 0' }}>
                Click on the card to flip between Question and Answer.
            </p>

            <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#845ef7' }}>
                Card {currentIndex + 1} of {flashcardsData.length}
            </div>

            {/* Flashcard Component */}
            <div style={cardStyle} onClick={handleFlip}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: isFlipped ? '#862e9c' : '#5f3dc4', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {isFlipped ? 'Answer 💡' : 'Question ❓'}
                </span>
                <p style={{ fontSize: '16px', fontWeight: 'bold', margin: 0, color: '#343a40' }}>
                    {isFlipped ? currentCard.answer : currentCard.question}
                </p>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button
                    onClick={handlePrev}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#7950f2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    ◀ Prev
                </button>
                <button
                    onClick={handleFlip}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#ae3ec9',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Flip 🔄
                </button>
                <button
                    onClick={handleNext}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#7950f2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Next ▶
                </button>
            </div>
        </div>
    );
}
