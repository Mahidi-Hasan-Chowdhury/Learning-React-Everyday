import { useState, useEffect } from 'react';

export default function WindowResizeListener() {
    // 1. Declare state variables to hold current window dimensions
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // 2. Set up useEffect to listen to window resize events
    useEffect(() => {
        // Define the callback function to run on resize
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        // Attach event listener to the window resize event
        window.addEventListener('resize', handleResize);

        // Cleanup function: remove the event listener when component unmounts
        // This is critical to prevent memory leaks and unwanted event executions
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array [] ensures this runs only once when component mounts

    const containerStyle = {
        border: '2px solid #007bff',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e7f1ff', // Light blue background
        color: '#004085',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    // Derived logic to classify the viewport screen layout
    const getViewportType = () => {
        if (width < 576) return 'Mobile Device 📱';
        if (width < 992) return 'Tablet/Laptop 💻';
        return 'Desktop Screen 🖥️';
    };

    return (
        <div style={containerStyle}>
            <h3>Window Resize Listener (Browser Event & Cleanup Example)</h3>
            
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
                Window Size: <strong>{width}px</strong> (Width) × <strong>{height}px</strong> (Height)
            </p>
            
            <div style={{ 
                marginTop: '10px', 
                fontSize: '16px', 
                padding: '8px 16px', 
                backgroundColor: 'white', 
                borderRadius: '4px',
                display: 'inline-block',
                border: '1px solid #b8daff'
            }}>
                Layout Viewport: <strong>{getViewportType()}</strong>
            </div>
            
            <p style={{ fontSize: '12px', color: '#6c757d', marginTop: '10px', marginBottom: '0' }}>
                Resize your browser window to see these coordinates update dynamically!
            </p>
        </div>
    );
}
