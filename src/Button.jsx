import React from 'react';

export default function Button({ label, onClick, color = "blue" }) {
    return (
        <button style={{ backgroundColor: color }} onClick={onClick}>
            {label}
        </button>
    );
}

