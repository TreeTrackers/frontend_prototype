import React from 'react';

const TreeInfo = ({ info, onClose }) => {
    if (!info) return null; // Don't render if there's no info

    return (
        <div className="tree-info">
            <button className="close-button" onClick={onClose}>X</button>
            <p>tree ID: {info.id}</p>
            <p>Coordinates: ({info.x}, {info.y})</p>
        </div>
    );
};

export default TreeInfo;
