import React from 'react';
import './styles/EffectsMenu.css';
import EffectsItem from "./EffectItem";
export default function EffectsMenu({onSelect}) {
    return (
        <div className="effects-menu">
            <div className="effects-title">Pick an effect:</div>
            <EffectsItem type="Rotation" onSelect={onSelect}/>
            <EffectsItem type="Adjustment" onSelect={onSelect}/>
        </div>

);
}
