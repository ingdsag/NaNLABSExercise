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
    useEffect(() => {
        axios.get(`https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json`)
            .then((res) => {
                setImages(R.path(['data'],res))
                setSelectedImage(R.path(['data'],res)[0])
        }).catch(error => {
        })

    }, []);
    const onEffectSelected = (effectType) => {
        setSelectedEffect(effectType)
    }
    return (
        <div className="main-container">
            <div className="left-menu">
                <EffectsMenu onSelect={onEffectSelected}/>
            </div>
            <div className="right-menu">
                <div className="right-menu-container">

                    <SelectedImage images={images}
                                   effectsString={`q?=${effectsArray.join('&').slice(0, 1)}`}
                                   selectedImage={selectedImage} onSelect={(img) => {
                        setSelectedImage(img);
                    }}/>
                    <HistoryItem/>
                    <Properties selectedEffect={selectedEffect}/>
                </div>
            </div>
        </div>
    );
}
