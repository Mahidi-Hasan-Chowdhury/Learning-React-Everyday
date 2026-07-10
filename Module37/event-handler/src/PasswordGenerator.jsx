import { useState } from 'react';

export default function PasswordGenerator() {
    // 1. Declare state variables for configurations and outputs
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    // 2. Event handler to construct random passwords based on active criteria
    const handleGeneratePassword = () => {
        let charPool = '';
        if (includeLowercase) charPool += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charPool += '0123456789';
        if (includeSymbols) charPool += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        if (charPool === '') {
            alert('Please select at least one character set configuration!');
            return;
        }

        let generated = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            generated += charPool[randomIndex];
        }

        setPassword(generated);
        setIsCopied(false); // Reset copy tag
    };

    // 3. Event handler to copy the password value to the clipboard
    const handleCopy = async () => {
        if (!password) return;
        try {
            await navigator.clipboard.writeText(password);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Clear copied state after 2 seconds
        } catch (err) {
            console.error('Password clipboard copy failed:', err);
        }
    };

    const containerStyle = {
        border: '2px solid #5f3dc4',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f3f0ff', // Soft violet background
        color: '#5f3dc4',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const configBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '280px',
        margin: '15px auto',
        textAlign: 'left'
    };

    return (
        <div style={containerStyle}>
            <h3>Password Generator (String State Example)</h3>
            
            <p style={{ fontSize: '14px', color: '#7048e8', margin: '5px 0' }}>
                Toggle checklist configurations and length to generate a secure random key.
            </p>
            
            {/* Password Display Panel */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                border: '1px solid #d0bfff',
                borderRadius: '6px',
                padding: '10px',
                minHeight: '40px',
                maxWidth: '280px',
                margin: '15px auto',
                wordBreak: 'break-all'
            }}>
                <span style={{ fontFamily: 'monospace', fontSize: '16px', color: '#343a40' }}>
                    {password || 'Click Generate...'}
                </span>
                
                {password && (
                    <button 
                        onClick={handleCopy}
                        style={{
                            marginLeft: '10px',
                            padding: '4px 8px',
                            backgroundColor: isCopied ? '#2b8a3e' : '#5f3dc4',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {isCopied ? 'Copied! ✓' : 'Copy 📋'}
                    </button>
                )}
            </div>

            {/* Checklist Configuration Settings */}
            <div style={configBoxStyle}>
                {/* Length Slider control */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label>Length: <strong>{length}</strong></label>
                    <input 
                        type="range" 
                        min="6" 
                        max="30" 
                        value={length} 
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                
                {/* Lowercase checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input 
                        type="checkbox" 
                        id="lowercase" 
                        checked={includeLowercase} 
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                    />
                    <label htmlFor="lowercase" style={{ cursor: 'pointer' }}>Include Lowercase (a-z)</label>
                </div>

                {/* Uppercase checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input 
                        type="checkbox" 
                        id="uppercase" 
                        checked={includeUppercase} 
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                    <label htmlFor="uppercase" style={{ cursor: 'pointer' }}>Include Uppercase (A-Z)</label>
                </div>

                {/* Numbers checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input 
                        type="checkbox" 
                        id="numbers" 
                        checked={includeNumbers} 
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                    <label htmlFor="numbers" style={{ cursor: 'pointer' }}>Include Numbers (0-9)</label>
                </div>

                {/* Symbols checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input 
                        type="checkbox" 
                        id="symbols" 
                        checked={includeSymbols} 
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                    <label htmlFor="symbols" style={{ cursor: 'pointer' }}>Include Symbols (!@#$)</label>
                </div>
            </div>

            {/* Generation Action trigger */}
            <button 
                onClick={handleGeneratePassword}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#5f3dc4',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    marginTop: '10px'
                }}
            >
                Generate Password 🔑
            </button>
        </div>
    );
}
