import { useState } from 'react';

export default function FeedbackForm() {
    // 1. Declare separate state variables for rating, comment, and submitted response
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [submittedFeedback, setSubmittedFeedback] = useState(null);

    // 2. Handler to set the rating when a button is clicked
    const handleRatingSelect = (selectedRating) => {
        setRating(selectedRating);
    };

    // 3. Handler to update the comment as the user types
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    // 4. Handler to manage the form submission event
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent standard page refresh
        if (rating === 0) {
            alert('Please select a rating scale before submitting!');
            return;
        }

        // Save submitted values to show in the UI
        setSubmittedFeedback({ rating, comment });

        // Reset the input fields
        setRating(0);
        setComment('');
    };

    const containerStyle = {
        border: '2px solid #17a2b8',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e2f9fb', // Light cyan background
        color: '#0f6674',
        fontFamily: 'sans-serif'
    };

    const ratingButtonContainer = {
        display: 'flex',
        gap: '10px',
        margin: '10px 0'
    };

    // Generate dynamic button styles based on whether the button is active
    const getButtonStyle = (num) => ({
        padding: '8px 16px',
        borderRadius: '4px',
        border: '1px solid #17a2b8',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: rating === num ? '#17a2b8' : 'white',
        color: rating === num ? 'white' : '#17a2b8',
        transition: 'all 0.2s ease'
    });

    return (
        <div style={containerStyle}>
            <h3>Feedback Form (Multi-State & Form Event Example)</h3>
            
            <form onSubmit={handleSubmit}>
                {/* Rating Input */}
                <div>
                    <label>Select Rating (1 to 5 Stars):</label>
                    <div style={ratingButtonContainer}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button 
                                key={num}
                                type="button"
                                style={getButtonStyle(num)}
                                onClick={() => handleRatingSelect(num)}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Comment Textarea Input */}
                <div style={{ margin: '15px 0' }}>
                    <label htmlFor="comment">Your Review/Comments:</label>
                    <textarea 
                        id="comment"
                        placeholder="Write your feedback..."
                        value={comment}
                        onChange={handleCommentChange}
                        rows="3"
                        style={{
                            width: '90%',
                            padding: '8px',
                            marginTop: '5px',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>

                <button 
                    type="submit"
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#17a2b8',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Submit Feedback
                </button>
            </form>

            {/* Display submitted feedback conditionally */}
            {submittedFeedback && (
                <div style={{
                    marginTop: '20px',
                    padding: '12px',
                    border: '1px dashed #17a2b8',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    color: '#333',
                    textAlign: 'left'
                }}>
                    <h4>Thank You for Your Feedback!</h4>
                    <p>Rating: <strong>{submittedFeedback.rating} / 5 Stars</strong></p>
                    <p>Comment: <em>{submittedFeedback.comment || 'No comment provided.'}</em></p>
                </div>
            )}
        </div>
    );
}
