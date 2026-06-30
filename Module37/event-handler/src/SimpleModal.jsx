import { useState } from 'react';

export default function SimpleModal() {
    // 1. Declare state to track if the modal dialog is open or closed
    const [isOpen, setIsOpen] = useState(false);

    const containerStyle = {
        border: '2px solid #0b7285',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e3fafc', // Light teal background
        color: '#0b7285',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    // Modal background overlay styling
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black backdrop
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    };

    // Modal dialog box styling
    const modalContentStyle = {
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        maxWidth: '450px',
        width: '90%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        color: '#495057',
        textAlign: 'left'
    };

    return (
        <div style={containerStyle}>
            <h3>Simple Modal Dialog (Event Propagation Example)</h3>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>
                Demonstrates how to handle interactive modal overlays and event propagation in React.
            </p>
            
            {/* Button to open the modal */}
            <button 
                onClick={() => setIsOpen(true)}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#0b7285',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginTop: '10px'
                }}
            >
                Open Modal 🔓
            </button>

            {/* 2. Conditionally render the modal dialog portal/overlay */}
            {isOpen && (
                // Clicking the overlay background triggers close event
                <div onClick={() => setIsOpen(false)} style={overlayStyle}>
                    
                    {/* 
                      3. Prevent Event Propagation:
                      e.stopPropagation() stops the click event from bubbling up to the overlay backdrop, 
                      which would otherwise close the modal unexpectedly.
                    */}
                    <div onClick={(e) => e.stopPropagation()} style={modalContentStyle}>
                        <h4 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#0b7285' }}>
                            React Event Bubbling 📣
                        </h4>
                        
                        <p style={{ lineHeight: '1.5', fontSize: '15px', margin: '0 0 20px 0' }}>
                            This dialog overlay is active. If you click anywhere inside this white card, 
                            the dialog remains open. If you click outside the card on the dark backdrop, 
                            it will close!
                        </p>
                        
                        {/* Button to close the modal */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#fa5252',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            Close Modal 🔒
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
