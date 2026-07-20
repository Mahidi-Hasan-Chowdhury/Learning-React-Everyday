import { useState } from 'react';

export default function RgbColorMixer() {
    // 1. Declare state variables to track RGB color values
    const [red, setRed] = useState(128);
    const [green, setGreen] = useState(128);
    const [blue, setBlue] = useState(128);
    const [isCopied, setIsCopied] = useState(false);

    // Helper function to format decimal into double-digit hexadecimal string
    const toHexFormat = (val) => {
        const hex = val.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    // 2. Derived State: Blend colors and calculate final HEX representation
    const hexCode = `#${toHexFormat(red)}${toHexFormat(green)}${toHexFormat(blue)}`.toUpperCase();

    // 3. Event handler to copy HEX value to clipboard
    const handleCopyHex = async () => {
        try {
            await navigator.clipboard.writeText(hexCode);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500); // Clear confirmation message
        } catch (err) {
            console.error('Failed to copy color code:', err);
        }
    };

    const containerStyle = {
        border: '2px solid #339af0',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e7f5ff', // Soft light blue background
        color: '#1c7ed6',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const controlRowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        maxWidth: '300px',
        margin: '10px auto'
    };

    const previewPanelStyle = {
        width: '100%',
        maxWidth: '300px',
        height: '95px',
        borderRadius: '6px',
        backgroundColor: hexCode,
        margin: '15px auto',
        border: '1px solid #ced4da',
        boxShadow: '0 4px 6px rgba(0,0,0,0.06)'
    };

    return (
        <div style={containerStyle}>
            <h3>RGB Color Mixer (Sliders State Example)</h3>
            
            <p style={{ fontSize: '14px', color: '#228be6', margin: '5px 0' }}>
                Drag the red, green, and blue range sliders to blend a custom background color swatch.
            </p>

            {/* Dynamic Swatch Preview Box */}
            <div style={previewPanelStyle} />

            {/* Red Channel Control */}
            <div style={controlRowStyle}>
                <label style={{ width: '55px', textAlign: 'left', fontWeight: 'bold', color: '#fa5252' }}>Red</label>
                <input 
                    type="range" 
                    min="0" 
                    max="255" 
                    value={red} 
                    onChange={(e) => setRed(parseInt(e.target.value))}
                    style={{ flex: 1, cursor: 'pointer' }}
                />
                <span style={{ width: '35px', fontWeight: 'bold', textAlign: 'right' }}>{red}</span>
            </div>

            {/* Green Channel Control */}
            <div style={controlRowStyle}>
                <label style={{ width: '55px', textAlign: 'left', fontWeight: 'bold', color: '#40c057' }}>Green</label>
                <input 
                    type="range" 
                    min="0" 
                    max="255" 
                    value={green} 
                    onChange={(e) => setGreen(parseInt(e.target.value))}
                    style={{ flex: 1, cursor: 'pointer' }}
                />
                <span style={{ width: '35px', fontWeight: 'bold', textAlign: 'right' }}>{green}</span>
            </div>

            {/* Blue Channel Control */}
            <div style={controlRowStyle}>
                <label style={{ width: '55px', textAlign: 'left', fontWeight: 'bold', color: '#228be6' }}>Blue</label>
                <input 
                    type="range" 
                    min="0" 
                    max="255" 
                    value={blue} 
                    onChange={(e) => setBlue(parseInt(e.target.value))}
                    style={{ flex: 1, cursor: 'pointer' }}
                />
                <span style={{ width: '35px', fontWeight: 'bold', textAlign: 'right' }}>{blue}</span>
            </div>

            {/* HEX display & actions */}
            <div style={{ marginTop: '15px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}>
                    {hexCode}
                </span>
                
                <button 
                    onClick={handleCopyHex}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#1c7ed6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '13px'
                    }}
                >
                    {isCopied ? 'Copied! ✓' : 'Copy HEX 📋'}
                </button>
            </div>
        </div>
    );
}
