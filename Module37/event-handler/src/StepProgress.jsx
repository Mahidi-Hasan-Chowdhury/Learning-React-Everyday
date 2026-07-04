import { useState } from 'react';

export default function StepProgress() {
    // 1. Declare state variable to track the active step (range: 1 to 4)
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { label: "Step 1: User Profile", description: "Enter your personal details, email, and password." },
        { label: "Step 2: Verification", description: "Confirm your phone number via a one-time OTP code." },
        { label: "Step 3: Upload ID", description: "Provide a scan of your driving license or passport." },
        { label: "Step 4: Done", description: "Verification completed successfully! Account created." }
    ];

    // 2. Navigation handlers to change step boundaries
    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const containerStyle = {
        border: '2px solid #00c49f',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e6faf5', // Soft light mint background
        color: '#00856a',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const stepsContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%',
        maxWidth: '450px',
        margin: '20px auto'
    };

    // Style for the gray progress bar line
    const lineStyle = {
        position: 'absolute',
        top: '50%',
        left: 0,
        height: '4px',
        width: '100%',
        backgroundColor: '#dee2e6',
        transform: 'translateY(-50%)',
        zIndex: 1
    };

    // Style for the green completed progress bar line
    const activeLineStyle = {
        ...lineStyle,
        width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
        backgroundColor: '#00c49f',
        transition: 'width 0.4s ease',
        zIndex: 2
    };

    // Dynamic style calculation for circle progress nodes
    const getCircleStyle = (stepNum) => {
        const isActive = currentStep === stepNum;
        const isCompleted = currentStep > stepNum;
        
        return {
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            backgroundColor: isCompleted ? '#00c49f' : isActive ? 'white' : '#dee2e6',
            border: `3px solid ${isActive || isCompleted ? '#00c49f' : '#adb5bd'}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: isCompleted ? 'white' : '#495057',
            fontWeight: 'bold',
            zIndex: 3,
            transition: 'all 0.4s ease'
        };
    };

    return (
        <div style={containerStyle}>
            <h3>Step Progress Wizard (Timeline State Example)</h3>
            <p style={{ fontSize: '14px', margin: '5px 0', color: '#12b886' }}>
                Use Next and Prev buttons to navigate. Notice the progress timeline updates dynamically.
            </p>
            
            {/* Progress Bar Timeline */}
            <div style={stepsContainer}>
                <div style={lineStyle}></div>
                <div style={activeLineStyle}></div>
                {[1, 2, 3, 4].map((num) => (
                    <div key={num} style={getCircleStyle(num)}>
                        {currentStep > num ? '✓' : num}
                    </div>
                ))}
            </div>

            {/* Description Details Card */}
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '6px',
                border: '1px solid #c3e6cb',
                color: '#333',
                minHeight: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '20px 0 15px 0',
                textAlign: 'left'
            }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#00856a' }}>
                    {steps[currentStep - 1].label}
                </h4>
                <p style={{ margin: 0, fontSize: '15px', color: '#495057' }}>
                    {steps[currentStep - 1].description}
                </p>
            </div>

            {/* Navigation Buttons Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button 
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#495057',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
                        opacity: currentStep === 1 ? 0.5 : 1,
                        fontWeight: 'bold'
                    }}
                >
                    ◀ Prev
                </button>

                <button 
                    onClick={handleNext}
                    disabled={currentStep === steps.length}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#00c49f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: currentStep === steps.length ? 'not-allowed' : 'pointer',
                        opacity: currentStep === steps.length ? 0.5 : 1,
                        fontWeight: 'bold'
                    }}
                >
                    Next ▶
                </button>
            </div>
        </div>
    );
}
