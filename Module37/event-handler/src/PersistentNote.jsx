import { useState, useEffect } from 'react';

export default function PersistentNote() {
    // 1. Initialize state using a callback function (Lazy State Initialization)
    //    to load the saved value from localStorage only on the initial mount.
    const [note, setNote] = useState(() => {
        const savedNote = localStorage.getItem('persistent_scratchpad_note');
        return savedNote || '';
    });

    // 2. Synchronize state with localStorage using useEffect.
    //    Whenever the "note" state changes, update the browser's storage.
    useEffect(() => {
        localStorage.setItem('persistent_scratchpad_note', note);
    }, [note]); // Runs only when "note" changes

    const containerStyle = {
        border: '2px solid #20c997',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e6fcf5', // Light mint green background
        color: '#087f5b',
        fontFamily: 'sans-serif',
        textAlign: 'left'
    };

    const textareaStyle = {
        width: '90%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #adb5bd',
        fontFamily: 'inherit',
        marginTop: '8px'
    };

    return (
        <div style={containerStyle}>
            <h3>Persistent Note (LocalStorage & useEffect Example)</h3>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#12b886' }}>
                Type a note below. Refresh the page or close your browser, and your notes will remain intact!
            </p>
            
            {/* Control textarea input */}
            <textarea
                placeholder="Write your sticky notes here..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="4"
                style={textareaStyle}
            />
            
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button 
                    onClick={() => setNote('')} 
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#fa5252',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: 'bold'
                    }}
                >
                    Clear Note
                </button>
                
                <span style={{ fontSize: '12px', color: '#868e96' }}>
                    Characters written: <strong>{note.length}</strong>
                </span>
            </div>
        </div>
    );
}
