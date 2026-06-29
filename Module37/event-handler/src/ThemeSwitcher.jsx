import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
    // 1. Lazy state initialization: load saved theme from localStorage,
    //    defaulting to 'light' if none is found.
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('app_theme_selection') || 'light';
    });

    // 2. useEffect hook to apply side-effects when theme changes.
    //    It updates the body className and persists the selected value in localStorage.
    useEffect(() => {
        // Clean up previous theme classes from body
        document.body.classList.remove('theme-light', 'theme-dark', 'theme-solar', 'theme-cyber');

        // Add the selected theme class to body
        document.body.classList.add(`theme-${theme}`);

        // Persist theme selection in localStorage
        localStorage.setItem('app_theme_selection', theme);
    }, [theme]); // Runs whenever "theme" changes

    const containerStyle = {
        border: '2px solid #5c7cfa',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };

    // Calculate theme-specific styles dynamically for the card inside the switcher
    const getCardStyle = () => {
        switch(theme) {
            case 'dark':
                return { backgroundColor: '#1c1e22', color: '#c1c2c5', border: '1px solid #373a40' };
            case 'solar':
                return { backgroundColor: '#fdf6e3', color: '#586e75', border: '1px solid #93a1a1' };
            case 'cyber':
                return { backgroundColor: '#001219', color: '#00f5d4', border: '1px solid #9b5de5' };
            default: // light
                return { backgroundColor: '#ffffff', color: '#212529', border: '1px solid #dee2e6' };
        }
    };

    const activeButtonStyle = (themeName) => ({
        padding: '8px 12px',
        cursor: 'pointer',
        borderRadius: '4px',
        border: theme === themeName ? '2px solid #5c7cfa' : '1px solid #ccc',
        backgroundColor: theme === themeName ? '#5c7cfa' : 'white',
        color: theme === themeName ? 'white' : '#495057',
        fontWeight: 'bold',
        transition: 'all 0.2s ease'
    });

    return (
        <div style={{ ...containerStyle, ...getCardStyle() }}>
            <h3>Theme Switcher (DOM Side-Effects & Persistence Example)</h3>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>
                Select a theme to see the entire page colors transition dynamically.
            </p>
            
            {/* Theme selector row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
                <button onClick={() => setTheme('light')} style={activeButtonStyle('light')}>
                    Light ☀️
                </button>
                <button onClick={() => setTheme('dark')} style={activeButtonStyle('dark')}>
                    Dark 🌙
                </button>
                <button onClick={() => setTheme('solar')} style={activeButtonStyle('solar')}>
                    Solar ☕
                </button>
                <button onClick={() => setTheme('cyber')} style={activeButtonStyle('cyber')}>
                    Cyber ⚡
                </button>
            </div>
        </div>
    );
}
