import { useState } from 'react';

export default function RegisterForm() {
    // 1. Declare state as a single object for all form input fields
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // 2. Declare state to track errors for each input field
    const [errors, setErrors] = useState({});

    // 3. Declare state to track successful form submission
    const [successMessage, setSuccessMessage] = useState('');

    // Helper validation function for checking individual inputs
    const validateField = (fieldName, value) => {
        let errorMessage = '';
        
        if (fieldName === 'username') {
            if (value.trim().length < 3) {
                errorMessage = 'Username must be at least 3 characters long.';
            }
        } else if (fieldName === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                errorMessage = 'Please enter a valid email address.';
            }
        } else if (fieldName === 'password') {
            if (value.length < 6) {
                errorMessage = 'Password must be at least 6 characters.';
            }
        } else if (fieldName === 'confirmPassword') {
            if (value !== formData.password) {
                errorMessage = 'Passwords do not match.';
            }
        }

        return errorMessage;
    };

    // 4. Generic input change event handler that handles all inputs dynamically
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Update the form values dynamically based on input element "name" attribute
        setFormData({
            ...formData,
            [name]: value
        });

        // Run validation rules and update corresponding error state
        const fieldError = validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: fieldError
        }));
    };

    // 5. Submit event handler
    const handleSubmit = (event) => {
        event.preventDefault(); // Stop page reload

        // Validate all fields together upon submit attempt
        const finalErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) {
                finalErrors[key] = error;
            }
        });

        // If there are validation errors, block submission and display them
        if (Object.keys(finalErrors).length > 0) {
            setErrors(finalErrors);
            setSuccessMessage('');
            return;
        }

        // If validation passes, reset state and display success summary
        setSuccessMessage(`Account for "${formData.username}" successfully created!`);
        setFormData({ username: '', email: '', password: '', confirmPassword: '' });
        setErrors({});
    };

    const containerStyle = {
        border: '2px solid #4c6ef5',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#edf2ff', // Light indigo background
        color: '#1a202c',
        fontFamily: 'sans-serif',
        textAlign: 'left'
    };

    const inputRowStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px'
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#364fc7'
    };

    const inputStyle = {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        fontSize: '14px'
    };

    const errorStyle = {
        color: '#fa5252',
        fontSize: '12px',
        marginTop: '3px'
    };

    return (
        <div style={containerStyle}>
            <h3>Registration Form (Input Validation Example)</h3>
            
            <form onSubmit={handleSubmit}>
                {/* Username Row */}
                <div style={inputRowStyle}>
                    <label style={labelStyle} htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                    {errors.username && <span style={errorStyle}>{errors.username}</span>}
                </div>

                {/* Email Row */}
                <div style={inputRowStyle}>
                    <label style={labelStyle} htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                    {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>

                {/* Password Row */}
                <div style={inputRowStyle}>
                    <label style={labelStyle} htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                    {errors.password && <span style={errorStyle}>{errors.password}</span>}
                </div>

                {/* Confirm Password Row */}
                <div style={inputRowStyle}>
                    <label style={labelStyle} htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                    {errors.confirmPassword && <span style={errorStyle}>{errors.confirmPassword}</span>}
                </div>

                {/* Submit button */}
                <button 
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4c6ef5',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        marginTop: '5px'
                    }}
                >
                    Register
                </button>
            </form>

            {/* Success notification panel */}
            {successMessage && (
                <div style={{
                    marginTop: '15px',
                    padding: '10px',
                    borderRadius: '4px',
                    backgroundColor: '#d3f9d8',
                    color: '#2b8a3e',
                    border: '1px solid #b2f2bb',
                    fontWeight: 'bold'
                }}>
                    {successMessage}
                </div>
            )}
        </div>
    );
}
