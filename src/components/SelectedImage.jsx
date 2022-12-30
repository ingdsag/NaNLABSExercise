import React from 'react';
import './styles/SelectedImage.css'
import SelectImageButton from "./SelectImageButton";
export default function SelectedImage({selectedImage, images, onSelect, effectsString}) {
    return (
        <div className="selected-image">
            <div className="selected-image-container">
            <SelectImageButton images={images} onSelect={(img) => onSelect(img)}/>
                {selectedImage && <img src={`${selectedImage.url}${effectsString}`} alt={selectedImage.name}/>}
            </div>
        </div>

    );
}
