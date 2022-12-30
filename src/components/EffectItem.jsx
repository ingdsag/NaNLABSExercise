import React from 'react';
import './styles/EffectItem.css'
export default function EffectsItem({onSelect, type}) {

    return (
        <div className="effect-item" onClick={() => onSelect(type)}>
            <div className="effect-item-container">{type}</div>
        </div>

);
}
