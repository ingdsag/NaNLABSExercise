import React from 'react';
import './styles/EffectsMenu.css';
import EffectsItem from "./EffectItem";
export default function EffectsMenu({onSelect, effectsList}) {
    return (
        <div className="effects-menu">
            <div className="effects-title">Pick an effect:</div>

            {effectsList && effectsList.length ? effectsList.map((effectsGroup, i) => {
                return <div key={i}>
                    <div className="effects-sub-title">{effectsGroup.name}</div>
                    {effectsList && effectsList.length ?
                        effectsGroup.group.map((effect, i) =>
                            <EffectsItem key={i} effect={effect} onSelect={onSelect}/>) : null}
                </div>;
            }) : null}

        </div>

);
}
