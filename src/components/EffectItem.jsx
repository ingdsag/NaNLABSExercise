import React from 'react';
import './styles/EffectItem.css'
export default function EffectsItem({onSelect, effect}) {

    return (
        <div className="effect-item" onClick={() => onSelect(effect)}>
            <div className="effect-item-container">{effect.effect}</div>
        </div>

);
}
