import React from 'react';
import './styles/Properties.css'
import {Slider} from "@mui/material";
import _ from 'lodash'
import {DropdownButton, Dropdown, Button} from "react-bootstrap";
export default function Properties({selectedEffect, effectsList, setEffectValue}) {
    console.log(selectedEffect);
    return (
        <div className="properties">
            <div className="properties-container">
                {selectedEffect && selectedEffect.effect ? <div>
                    <div className="effects-title">{selectedEffect.effect}</div>
                    {selectedEffect && selectedEffect.type === 'slider' ? <Slider key={selectedEffect.id}
                             defaultValue={(selectedEffect.max + selectedEffect.min) / 2}
                             valueLabelDisplay="auto"
                             min={selectedEffect.min}
                             max={selectedEffect.max}
                             onChange=
                                 {(e) => {
                                     const debounceFunc = _.debounce(() => {
                                         setEffectValue({name: selectedEffect.name, value: e.target.value})
                                     }, 1000)
                                     debounceFunc();
                                 }}
                    /> : null}
                    {selectedEffect && selectedEffect.type === 'boolean' ?
                        <><Button onClick={() => {
                            setEffectValue({name: selectedEffect.name, value: true})
                        }
                        }>True</Button><Button onClick={() => {
                            setEffectValue({name: selectedEffect.name, value: false})
                        }
                        }>False</Button></> : null}
                    {selectedEffect && selectedEffect.type === 'list' ?
                        <>{selectedEffect.values.map(le => {
                            return <Button onClick={() => {
                                setEffectValue({name: selectedEffect.name, value: le})
                            }
                            }>{le}</Button>
                        })}</> : null}
                </div> : null}
            </div>
        </div>

);
}
