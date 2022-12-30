import React from 'react';
import './styles/SelectedImage.css'
import SelectImageButton from "./SelectImageButton";
export default function SelectedImage({selectedImage, images, onSelect, effectsString}) {
    //?q=70&auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59&blend64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L2hwL3NhbGUtYmx1ZS5wbmc_aD02MDE&bx=0&bm=normal&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L2hwL3dhbmRlci1sb2dvLmFpP3c9MzAwJmZtPXBuZw&markscale=8&markpad=20&markalign=top&__hstc=158051173.7663e6a8a7be252c4c6a9988f44cb1d0.1672421486347.1672421486347.1672432450159.2&__hssc=158051173.7.1672432450159&__hsfp=2718063962
    return (
        <div className="selected-image">
            <div className="selected-image-container">
            <SelectImageButton images={images} onSelect={(img) => onSelect(img)}/>
                {selectedImage && <img src={`${selectedImage.url}${effectsString}`} alt={selectedImage.name}/>}
            </div>
        </div>

    );
}
