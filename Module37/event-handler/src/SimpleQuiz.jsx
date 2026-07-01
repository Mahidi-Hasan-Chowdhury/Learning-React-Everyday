import { useState } from 'react';

export default function SimpleQuiz() {
    // Array of questions containing question text, list of options, and the correct index
    const questions = [
        {
            question: "Which hook is used to perform side effects in functional components?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            correctIndex: 1
        },
        {
            question: "What is the correct syntax to pass a prop named 'title' to a component?",
            options: [
                "<MyComponent title='Hello' />",
                "<MyComponent [title]='Hello' />",
                "<MyComponent (title)='Hello' />",
                "<MyComponent:title='Hello' />"
            ],
            correctIndex: 0
        },
        {
            question: "What does JSX stand for?",
            options: ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "JSON XML Extension"],
            correctIndex: 0
        }
    ];

    // 1. Declare state variables to track quiz progression
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    // 2. Event handler for option clicks
    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    // 3. Event handler to proceed to the next question
    const handleNextQuestion = () => {
        if (selectedOption === null) {
            alert("Please select an option before moving forward!");
            return;
        }

        // Increment score if user choice matches the correct index
        if (selectedOption === questions[currentQuestion].correctIndex) {
            setScore((prevScore) => prevScore + 1);
        }

        const nextIndex = currentQuestion + 1;
        if (nextIndex < questions.length) {
            // Move to next question and reset option selection
            setCurrentQuestion(nextIndex);
            setSelectedOption(null);
        } else {
            // Last question completed, set finished state to true
            setQuizFinished(true);
        }
    };

    // 4. Event handler to restart the quiz
    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setQuizFinished(false);
    };

    const containerStyle = {
        border: '2px solid #e8590c',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff4e6', // Soft orange background
        color: '#d9480f',
        fontFamily: 'sans-serif',
        textAlign: 'left'
    };

    return (
        <div style={containerStyle}>
            <h3 style={{ textAlign: 'center', margin: '5px 0' }}>Mini React Quiz (Quiz Engine Example)</h3>
            
            {quizFinished ? (
                // Render Results Panel
                <div style={{ textAlign: 'center', padding: '10px' }}>
                    <h4>Quiz Completed! 🎉</h4>
                    <p style={{ fontSize: '18px', margin: '15px 0' }}>
                        Your Final Score: <strong>{score} / {questions.length}</strong>
                    </p>
                    <button 
                        onClick={handleRestart}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#e8590c',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '14px'
                        }}
                    >
                        Try Again 🔄
                    </button>
                </div>
            ) : (
                // Render Question Panel
                <div>
                    <p style={{ fontSize: '14px', color: '#f76707', fontWeight: 'bold', margin: '5px 0' }}>
                        Question {currentQuestion + 1} of {questions.length}
                    </p>
                    
                    <h4 style={{ color: '#2b2b2b', margin: '10px 0 15px 0', lineHeight: '1.4' }}>
                        {questions[currentQuestion].question}
                    </h4>
                    
                    {/* Render Choices Options */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
                        {questions[currentQuestion].options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionSelect(idx)}
                                style={{
                                    padding: '10px',
                                    borderRadius: '4px',
                                    border: selectedOption === idx ? '2px solid #e8590c' : '1px solid #dee2e6',
                                    backgroundColor: selectedOption === idx ? '#ffe8cc' : 'white',
                                    color: '#333',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    fontWeight: selectedOption === idx ? 'bold' : 'normal',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {/* Next Question Navigation */}
                    <button
                        onClick={handleNextQuestion}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#e8590c',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            float: 'right',
                            fontSize: '14px'
                        }}
                    >
                        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question ➜'}
                    </button>
                    <div style={{ clear: 'both' }}></div>
                </div>
            )}
        </div>
    );
}
