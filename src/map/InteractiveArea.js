import React from 'react';
import './InteractiveArea.css'; 

const InteractiveArea = ({ onDotSelect }) => {
    // Sample dots
    const dots = [
        { id: 1, x: 50, y: 50 },
        { id: 2, x: 150, y: 100 },
        { id: 3, x: 100, y: 200 },
        // Add more dots as needed
    ];

    const handleDotClick = (dot) => {
        onDotSelect(dot); // Call the callback function passed from App.js
    };

    return (
        <div className="interactive-area">
            <svg width="100%" height="100%">
                {dots.map(dot => (
                    <circle
                        key={dot.id}
                        cx={dot.x}
                        cy={dot.y}
                        r="20" // Radius of the dots
                        fill="green"
                        onClick={() => handleDotClick(dot)}
                    />
                ))}
            </svg>
        </div>
    );
};

export default InteractiveArea;
