import { useState, useEffect } from 'react';

export default function WordScrambleGame() {
    const wordPool = ["react", "javascript", "developer", "component", "state", "effect", "router", "vite", "props", "hook"];

    // 1. Declare state variables for game mechanics
    const [score, setScore] = useState(0);
    const [originalWord, setOriginalWord] = useState('');
    const [scrambledWord, setScrambledWord] = useState('');
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');

    // Fisher-Yates shuffle algorithm to scramble string letters
    const scramble = (word) => {
        const letters = word.split('');
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }
        const scrambled = letters.join('');
        // Make sure it doesn't accidentally scramble back to the original word
        return scrambled === word ? scramble(word) : scrambled;
    };

    // Helper to select and load a new word from the pool
    const loadNewWord = () => {
        const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
        setOriginalWord(randomWord);
        setScrambledWord(scramble(randomWord));
        setGuess('');
        setFeedback('');
    };

    // 2. Load the initial game word on mounting
    useEffect(() => {
        loadNewWord();
    }, []);

    // 3. Handle guess checking on submit
    const handleSubmit = (event) => {
        event.preventDefault();
        if (guess.toLowerCase().trim() === originalWord) {
            setFeedback('Correct! 🎉 +10 Points');
            setScore((prev) => prev + 10);
            setTimeout(loadNewWord, 1500); // Automatically load new word after 1.5s
        } else {
            setFeedback('Incorrect, please try again! ❌');
        }
    };

    const containerStyle = {
        border: '2px solid #fd7e14',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff9db', // Soft yellow background
        color: '#d9480f',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Word Scramble Game (Shuffling State Game)</h3>
            <p style={{ fontWeight: 'bold', fontSize: '18px', margin: '5px 0' }}>Score: {score}</p>
            
            {/* Scrambled Word display */}
            <div style={{
                fontSize: '28px',
                fontWeight: 'bold',
                letterSpacing: '4px',
                margin: '15px 0',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
                color: '#e67e22'
            }}>
                {scrambledWord}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', justifyContent: 'center', maxWidth: '280px', margin: '10px auto' }}>
                <input 
                    type="text" 
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Unscramble the word..."
                    style={{ 
                        padding: '8px', 
                        borderRadius: '4px', 
                        border: '1px solid #ffd43b', 
                        flex: 1, 
                        fontSize: '14px',
                        textAlign: 'center'
                    }}
                />
                
                <button 
                    type="submit" 
                    style={{ 
                        padding: '8px 14px', 
                        backgroundColor: '#fd7e14', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer', 
                        fontWeight: 'bold' 
                    }}
                >
                    Guess
                </button>
            </form>

            {/* Game Feedback */}
            {feedback && <p style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0' }}>{feedback}</p>}
            
            {/* Skip Option */}
            <button 
                onClick={loadNewWord} 
                style={{ 
                    marginTop: '5px', 
                    padding: '6px 12px', 
                    backgroundColor: '#868e96', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer', 
                    fontSize: '12px' 
                }}
            >
                Skip Word ➜
            </button>
        </div>
    );
}
