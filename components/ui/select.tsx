
import React from 'react';

export function Select({ children }) {
    return <select>{children}</select>;
}

export function SelectTrigger({ children }) {
    return <div className="select-trigger">{children}</div>;
}

export function SelectValue({ children }) {
    return <span className="select-value">{children}</span>;
}

export function SelectContent({ children }) {
    return <div className="select-content">{children}</div>;
}

export function SelectItem({ children }) {
    return <div className="select-item">{children}</div>;
}
