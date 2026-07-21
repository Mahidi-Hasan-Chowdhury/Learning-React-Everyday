import { useState, useRef, useEffect } from 'react';

export default function SimpleCanvas() {
    const canvasRef = useRef(null);
    // 1. Declare state variables to track colors and brush sizes
    const [color, setColor] = useState('#339af0');
    const [brushSize, setBrushSize] = useState(5);
    const [isDrawing, setIsDrawing] = useState(false);

    // 2. Initialize size boundaries on mount
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 300;
        canvas.height = 200;
        const context = canvas.getContext('2d');
        context.lineCap = 'round';
        context.lineJoin = 'round';
    }, []);

    // 3. Drawing coordinate handlers triggered on mouse clicks/drags
    const handleStartDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        const context = canvasRef.current.getContext('2d');
        context.strokeStyle = color;
        context.lineWidth = brushSize;
        context.beginPath();
        context.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const handleDraw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = nativeEvent;
        const context = canvasRef.current.getContext('2d');
        context.lineTo(offsetX, offsetY);
        context.stroke();
    };

    const handleStopDrawing = () => {
        const context = canvasRef.current.getContext('2d');
        context.closePath();
        setIsDrawing(false);
    };

    // 4. Wipe clear drawing canvas board
    const handleClearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const containerStyle = {
        border: '2px solid #adb5bd',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
        color: '#495057',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h3>Simple Drawing Canvas (Mouse Events Example)</h3>
            
            <p style={{ fontSize: '14px', color: '#868e96', margin: '5px 0' }}>
                Hold and drag mouse inside the canvas block to draw. Customize brush style metrics.
            </p>

            {/* Drawing Canvas Frame */}
            <canvas 
                ref={canvasRef}
                onMouseDown={handleStartDrawing}
                onMouseMove={handleDraw}
                onMouseUp={handleStopDrawing}
                onMouseLeave={handleStopDrawing}
                style={{
                    backgroundColor: 'white',
                    border: '1px solid #dee2e6',
                    borderRadius: '4px',
                    cursor: 'crosshair',
                    display: 'block',
                    margin: '15px auto'
                }}
            />

            {/* Control Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                {/* Palette picker */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Color: </label>
                    <input 
                        type="color" 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)} 
                        style={{ cursor: 'pointer', border: 'none', background: 'none', width: '35px', height: '30px' }}
                    />
                </div>

                {/* Size slider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <label style={{ fontWeight: 'bold', fontSize: '14px' }}>Size: <strong>{brushSize}px</strong></label>
                    <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        value={brushSize} 
                        onChange={(e) => setBrushSize(parseInt(e.target.value))}
                        style={{ cursor: 'pointer', width: '80px' }}
                    />
                </div>

                {/* Clear action */}
                <button 
                    onClick={handleClearCanvas}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#fa5252',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '13px'
                    }}
                >
                    Clear Canvas 🧹
                </button>
            </div>
        </div>
    );
}
