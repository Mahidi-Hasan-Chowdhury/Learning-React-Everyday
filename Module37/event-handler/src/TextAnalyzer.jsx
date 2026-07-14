import { useState } from 'react';

export default function TextAnalyzer() {
    // 1. Declare state variable for the typed text content
    const [text, setText] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    // 2. Derived State calculations (performed automatically on every render)
    const charCountWithSpaces = text.length;
    const charCountNoSpaces = text.replace(/\s+/g, '').length;
    
    // Splitting text by space separators to isolate words, filtering out empty entries
    const words = text.trim().split(/\s+/).filter((word) => word !== '');
    const wordCount = words.length;

    // Splitting sentences based on ending punctuation (. ! ?)
    const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim() !== '');
    const sentenceCount = sentences.length;

    // Approximate reading speed: 200 words per minute
    const readingTime = Math.ceil(wordCount / 200);

    // 3. Event handlers for actions/mutations
    const handleUppercase = () => {
        setText(text.toUpperCase());
    };

    const handleLowercase = () => {
        setText(text.toLowerCase());
    };

    const handleClear = () => {
        setText('');
    };

    const handleCopyText = async () => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500); // Clear tooltip
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    const containerStyle = {
        border: '2px solid #087f5b',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e6fcf5', // Soft teal background
        color: '#087f5b',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const textareaStyle = {
        width: '100%',
        height: '110px',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #96f2d7',
        fontSize: '15px',
        fontFamily: 'inherit',
        outline: 'none',
        boxSizing: 'border-box',
        marginBottom: '12px',
        color: '#343a40'
    };

    const statsGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        margin: '15px 0'
    };

    const statCardStyle = {
        backgroundColor: 'white',
        border: '1px solid #c3fae8',
        borderRadius: '6px',
        padding: '10px 5px',
        textAlign: 'center'
    };

    const actionButtonStyle = {
        padding: '8px 14px',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '13px',
        transition: 'opacity 0.1s ease'
    };

    return (
        <div style={containerStyle}>
            <h3>Text Analyzer & Word Counter (Derived State Example)</h3>
            
            <p style={{ fontSize: '14px', color: '#099268', margin: '5px 0 12px 0' }}>
                Type or paste content below to analyze real-time statistics and apply mutations.
            </p>

            {/* Input area */}
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing your text here..."
                style={textareaStyle}
            />

            {/* Text actions tools */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                    onClick={handleUppercase} 
                    style={{ ...actionButtonStyle, backgroundColor: '#099268', color: 'white' }}
                >
                    UPPERCASE
                </button>
                
                <button 
                    onClick={handleLowercase} 
                    style={{ ...actionButtonStyle, backgroundColor: '#099268', color: 'white' }}
                >
                    lowercase
                </button>
                
                <button 
                    onClick={handleCopyText} 
                    style={{ ...actionButtonStyle, backgroundColor: '#20c997', color: 'white' }}
                >
                    {isCopied ? 'Copied! ✓' : 'Copy Text'}
                </button>
                
                <button 
                    onClick={handleClear} 
                    style={{ ...actionButtonStyle, backgroundColor: '#adb5bd', color: 'white' }}
                >
                    Clear
                </button>
            </div>

            {/* Stats Dashboard Grid */}
            <div style={statsGridStyle}>
                <div style={statCardStyle}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#087f5b' }}>{wordCount}</div>
                    <div style={{ fontSize: '11px', color: '#495057', marginTop: '2px' }}>Words</div>
                </div>
                
                <div style={statCardStyle}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#087f5b' }}>{charCountWithSpaces}</div>
                    <div style={{ fontSize: '11px', color: '#495057', marginTop: '2px' }}>Chars (all)</div>
                </div>
                
                <div style={statCardStyle}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#087f5b' }}>{charCountNoSpaces}</div>
                    <div style={{ fontSize: '11px', color: '#495057', marginTop: '2px' }}>Chars (clean)</div>
                </div>
                
                <div style={statCardStyle}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#087f5b' }}>{sentenceCount}</div>
                    <div style={{ fontSize: '11px', color: '#495057', marginTop: '2px' }}>Sentences</div>
                </div>
            </div>

            {/* Approximate Reading Speeds */}
            <div style={{ fontSize: '13px', fontStyle: 'italic', color: '#099268' }}>
                Estimated reading time: ~{readingTime} {readingTime === 1 ? 'minute' : 'minutes'}
            </div>
        </div>
    );
}
