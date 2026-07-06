import { useState, useEffect } from 'react';

export default function ColorPaletteGenerator() {
    // Helper function to generate a single random hex color
    const generateRandomHex = () => {
        const hexSymbols = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hexSymbols[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Helper function to generate a palette array containing 5 random hex colors
    const createNewPalette = () => {
        return Array.from({ length: 5 }, () => generateRandomHex());
    };

    // 1. Declare state with a lazy initializer, retrieving from localStorage if available
    const [palette, setPalette] = useState(() => {
        const savedPalette = localStorage.getItem('saved_color_palette');
        return savedPalette ? JSON.parse(savedPalette) : createNewPalette();
    });

    const [copiedHex, setCopiedHex] = useState(null);

    // 2. Synchronize color palette with localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('saved_color_palette', JSON.stringify(palette));
    }, [palette]);

    // 3. Event handler to copy hex code to clipboard using the Clipboard API
    const handleCopy = async (hexCode) => {
        try {
            await navigator.clipboard.writeText(hexCode);
            setCopiedHex(hexCode);
            setTimeout(() => setCopiedHex(null), 1500); // Clear confirmation message
        } catch (err) {
            console.error('Failed to copy color code:', err);
        }
    };

    const containerStyle = {
        border: '2px solid #212529',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
        color: '#212529',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const paletteContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        margin: '20px 0'
    };

    return (
        <div style={containerStyle}>
            <h3>Color Palette Generator (Array State & Clipboard Example)</h3>
            
            <p style={{ fontSize: '14px', color: '#495057', margin: '5px 0' }}>
                Click on any color bar to copy its HEX value. Click the button to load a new set of random colors.
            </p>
            
            {/* Color Cards grid */}
            <div style={paletteContainerStyle}>
                {palette.map((hex, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleCopy(hex)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            flex: 1,
                            maxWidth: '90px'
                        }}
                    >
                        {/* Dynamic Background Color Swatch */}
                        <div style={{
                            width: '100%',
                            height: '75px',
                            borderRadius: '6px',
                            backgroundColor: hex,
                            border: '1px solid #dee2e6',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                        }} />
                        
                        <span style={{ 
                            fontSize: '12px', 
                            fontWeight: 'bold', 
                            marginTop: '6px', 
                            fontFamily: 'monospace' 
                        }}>
                            {hex}
                        </span>
                        
                        {/* Render copy confirmation status conditionally */}
                        {copiedHex === hex && (
                            <span style={{ fontSize: '10px', color: '#2b8a3e', marginTop: '2px', fontWeight: 'bold' }}>
                                Copied!
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <button 
                onClick={() => setPalette(createNewPalette())}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#212529',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}
            >
                Generate New Palette 🎨
            </button>
        </div>
    );
}
