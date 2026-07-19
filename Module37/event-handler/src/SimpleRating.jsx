import { useState } from 'react';

export default function SimpleRating() {
    // 1. Declare state variables to track rating value and hover overlays
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const containerStyle = {
        border: '2px solid #e08119',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff4e6', // Soft warm orange background
        color: '#d9480f',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    // Style dynamically depending on user hover indices and finalized click rating
    const getStarStyle = (index) => {
        const isFilled = index <= (hover || rating);
        return {
            fontSize: '36px',
            color: isFilled ? '#f59f00' : '#dee2e6',
            cursor: 'pointer',
            transition: 'color 0.1s ease',
            margin: '0 4px',
            userSelect: 'none'
        };
    };

    return (
        <div style={containerStyle}>
            <h3>Simple Star Rating Component</h3>
            
            <p style={{ fontSize: '14px', color: '#f76707', margin: '5px 0' }}>
                Hover to preview stars, click to select and persist your score rating.
            </p>
            
            {/* Stars row map layout */}
            <div style={{ margin: '15px 0' }}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <span 
                        key={index}
                        style={getStarStyle(index)}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Display message feedback */}
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#e8590c' }}>
                {rating > 0 ? `Selected Rating: ${rating} / 5 stars` : 'Please select a rating.'}
            </div>
        </div>
    );
}
