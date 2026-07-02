import { useState } from 'react';

export default function SimpleAccordion() {
    // Array of accordion data items
    const accordionData = [
        {
            title: "What is React?",
            content: "React is a popular open-source JavaScript library developed by Meta for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components."
        },
        {
            title: "Why use React?",
            content: "React uses a virtual DOM to optimize rendering performance, supports component-based architecture for clean code organization, and has a rich ecosystem with a massive developer community."
        },
        {
            title: "What are Hooks in React?",
            content: "Hooks are functions that let functional components use state and other React features (like lifecycle side-effects) without writing class components. Common hooks include useState and useEffect."
        }
    ];

    // 1. Declare state to track the index of the currently open section (null means all closed)
    const [openIndex, setOpenIndex] = useState(null);

    // 2. Toggle handler: opens the clicked section, or closes it if it is already open
    const handleToggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const containerStyle = {
        border: '2px solid #5c7cfa',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#edf2ff', // Soft indigo background
        color: '#364fc7',
        fontFamily: 'sans-serif',
        textAlign: 'left'
    };

    const getHeaderStyle = (isOpen) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: isOpen ? '#d0ebff' : 'white',
        border: '1px solid #ced4da',
        borderRadius: isOpen ? '4px 4px 0 0' : '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#1c7ed6',
        marginTop: '8px',
        userSelect: 'none',
        transition: 'all 0.2s ease'
    });

    const contentStyle = {
        padding: '12px 16px',
        backgroundColor: 'white',
        border: '1px solid #ced4da',
        borderTop: 'none',
        borderRadius: '0 0 4px 4px',
        color: '#495057',
        fontSize: '14px',
        lineHeight: '1.5'
    };

    return (
        <div style={containerStyle}>
            <h3 style={{ textAlign: 'center', margin: '5px 0' }}>Simple Accordion (Collapsible State Example)</h3>
            
            {/* 3. Map through the data and render sections */}
            {accordionData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index}>
                        {/* Header trigger */}
                        <div 
                            onClick={() => handleToggleSection(index)}
                            style={getHeaderStyle(isOpen)}
                        >
                            <span>{item.title}</span>
                            <span>{isOpen ? '▲' : '▼'}</span>
                        </div>
                        
                        {/* Collapsible Content panel */}
                        {isOpen && (
                            <div style={contentStyle}>
                                {item.content}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
