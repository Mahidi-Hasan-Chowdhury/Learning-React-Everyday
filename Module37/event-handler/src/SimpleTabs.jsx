import { useState } from 'react';

export default function SimpleTabs() {
    // 1. Declare state to track the active tab name (defaults to 'profile')
    const [activeTab, setActiveTab] = useState('profile');

    const containerStyle = {
        border: '2px solid #e83e8c',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff0f6', // Light pink background
        color: '#a61e4d',
        fontFamily: 'sans-serif',
        textAlign: 'left'
    };

    const tabHeaderStyle = {
        display: 'flex',
        borderBottom: '2px solid #e83e8c',
        marginBottom: '15px',
        gap: '5px'
    };

    // Helper to calculate active tab button styles dynamically
    const getTabButtonStyle = (tabName) => ({
        padding: '8px 16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px 4px 0 0',
        backgroundColor: activeTab === tabName ? '#e83e8c' : '#fcc419', // Pink if active, yellow if inactive
        color: activeTab === tabName ? 'white' : '#333',
        fontWeight: 'bold',
        outline: 'none',
        transition: 'all 0.2s ease'
    });

    return (
        <div style={containerStyle}>
            <h3>Simple Tabs Component (Switching State Example)</h3>
            
            {/* 2. Tab Navigation Header */}
            <div style={tabHeaderStyle}>
                <button 
                    onClick={() => setActiveTab('profile')} 
                    style={getTabButtonStyle('profile')}
                >
                    Profile
                </button>
                <button 
                    onClick={() => setActiveTab('settings')} 
                    style={getTabButtonStyle('settings')}
                >
                    Settings
                </button>
                <button 
                    onClick={() => setActiveTab('contact')} 
                    style={getTabButtonStyle('contact')}
                >
                    Contact
                </button>
            </div>

            {/* 3. Conditional Tab Content Panels */}
            <div style={{ 
                backgroundColor: 'white', 
                padding: '15px', 
                borderRadius: '4px', 
                border: '1px solid #ffd8a8', 
                color: '#495057' 
            }}>
                {activeTab === 'profile' && (
                    <div>
                        <h4>👤 Profile Info</h4>
                        <p>Learner Account: <strong>Mahidi Hasan Chowdhury</strong></p>
                        <p>Current Skill Level: React Explorer</p>
                    </div>
                )}
                
                {activeTab === 'settings' && (
                    <div>
                        <h4>⚙️ Preferences</h4>
                        <p>Visual Style: 🎨 Colorful Theme</p>
                        <p>Language: 🌐 JavaScript / React</p>
                    </div>
                )}
                
                {activeTab === 'contact' && (
                    <div>
                        <h4>✉️ Contact Details</h4>
                        <p>Support: <em>learning-react@everyday.com</em></p>
                        <p>Progress: Day-by-Day commits on GitHub</p>
                    </div>
                )}
            </div>
        </div>
    );
}
