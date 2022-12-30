import React, {useEffect, useState} from 'react';
import EffectsMenu from "../components/EffectsMenu";
import HistoryItem from "../components/HistoryItem";
import SelectedImage from "../components/SelectedImage";
import axios from "axios";
import * as R from 'ramda';
import './styles/Main.css'
import Properties from "../components/Properties";
export default function Main() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedEffect, setSelectedEffect] = useState('');
    const [effectsArray, setEffectsArray] = useState([]);
    const effectsList = [
        {
            name: 'Rotation',
            group: [{
                id: 1,
                effect: 'Flip',
                name: 'flip',
                type: 'list',
                values: ['none', 'h', 'v', 'hv']
            }, {
                id: 2,
                effect: 'Orient',
                name: 'orient',
                type: 'list',
                values: [1 ,2 ,3 ,4 ,6 ,7 ,8 ,90 ,180 ,270]
            }, {
                id: 3,
                effect: 'Rotation',
                name: 'rot',
                type: 'slider',
                max: 359,
                min: 0,
            }],
        },
        {
            name: 'Adjustment',
            group: [{
                id: 4,
                effect: 'Brightness',
                name: 'bri',
                type: 'slider',
                max: 100,
                min: -100,
            }, {
                id: 5,
                effect: 'Contrast',
                name: 'con',
                type: 'slider',
                max: 100,
                min: -100,
            }, {
                id: 6,
                effect: 'Exposure',
                name: 'exp',
                type: 'slider',
                max: 100,
                min: -100,
            }, {
                id: 7,
                effect: 'Gamma',
                name: 'gam',
                type: 'slider',
                max: 100,
                min: -100,
            }, {
                id: 8,
                effect: 'Highlight',
                name: 'gam',
                type: 'slider',
                max: 0,
                min: -100,
            }, {
                id: 9,
                effect: 'Hue',
                name: 'hue',
                type: 'slider',
                max: 360,
                min: 0,
            }, {
                id: 10,
                effect: 'Invert',
                name: 'invert',
                type: 'boolean',
            }, {
                id: 11,
                effect: 'Saturation',
                name: 'sat',
                type: 'slider',
                max: 100,
                min: -100,
            }, {
                id: 12,
                effect: 'Shadow',
                name: 'shad',
                type: 'slider',
                max: 100,
                min: 0,
            }, {
                id: 13,
                effect: 'Sharpen',
                name: 'sharp',
                type: 'slider',
                max: 100,
                min: 0,
            }, {
                id: 14,
                effect: 'Unsharp Mask',
                name: 'usm',
                type: 'slider',
                max: 100,
                min: -100,
            }, {
                id: 15,
                effect: 'Unsharp Mask Radius',
                name: 'usmrad',
                type: 'slider',
                max: 500,
                min: 0,
            }, {
                id: 16,
                effect: 'Vibrance',
                name: 'vib',
                type: 'slider',
                max: 100,
                min: -100,
            }],
        }
    ]
    useEffect(() => {
        axios.get(`https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json`)
            .then((res) => {
                setImages(R.path(['data'],res))
                setSelectedImage(R.path(['data'],res)[0])
        }).catch(error => {
        })

    }, []);
    return (
        <div className="main-container">
            <div className="left-menu">
                <EffectsMenu onSelect={(effectType) => setSelectedEffect(effectType)} effectsList={effectsList}/>
            </div>
            <div className="right-menu">
                <div className="right-menu-container">

                    <SelectedImage images={images}
                                   effectsString={effectsArray && effectsArray.length
                                       ? `?${R.map((e) => `${e[0]}=${e[1]}`, 
                                           R.toPairs(R.fromPairs(effectsArray
                                           .map(e => [e.name, e.value])))).join('&')}` : ''}
                                   selectedImage={selectedImage} onSelect={(img) => {
                        setSelectedImage(img);
                    }}/>
                    <HistoryItem effectsArray={effectsArray} effectsList={effectsList} sliceFromEffect={(effect) => {
                        setEffectsArray(effectsArray.slice(0, effect + 1))
                    }}/>
                    <Properties selectedEffect={selectedEffect} effectsList={effectsList}
                                setEffectValue={(effect) => {
                                    setEffectsArray([...effectsArray, effect])
                                }}/>
                </div>
            </div>
        </div>
    );
}
