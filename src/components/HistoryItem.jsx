import React from 'react';
import './styles/HistoryItem.css'
import * as R from 'ramda';
export default function HistoryItem({effectsArray, effectsList, sliceFromEffect}) {
    return (
        <div className="history-item">
            <div className="history-item-container">
                {effectsArray.map((el, i) => {
                    const item = (R.flatten(R.map(e => e.group, effectsList)).find(e => e.name === el.name));
                    return <div className="history-item-details" key={i} onClick={() => {
                        sliceFromEffect(effectsArray.indexOf(el));
                    }}>
                        <div className="history-details-title">
                            {item.effect}
                        </div>
                        <div className="history-details-value">
                            {el.value.toString()}
                        </div>
                    </div>
                })}
            </div>
        </div>

);
}
