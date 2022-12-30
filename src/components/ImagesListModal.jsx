import React, {useState} from 'react';
import './styles/ImagesListModal.css'
import '../routes/styles/Main.css'
import { IoCloseCircleOutline } from "react-icons/io5";
import classnames from "classnames";
export default function ImagesListModal({images, onCloseModal, onSelectImage}) {
    const [selectedImage, setSelectedImage] = useState({})
    return (
        <div className="images-list-modal">
            <div className="images-container">
                <div className="close-button-container">
                    <div className="close-button" onClick={onCloseModal}>
                        <IoCloseCircleOutline style={{color: 'white'}}/>
                    </div>
                </div>
                <div className="images-list">
                    {images && images.length && images.slice(0,7).map((img) => (<img
                        src={img.url}
                        className=
                            {classnames('images', img.url === selectedImage.url ? 'selected' : '')}
                        alt={img.name}
                        onClick={() => setSelectedImage(img)}/>))}
                </div>
                <div className="buttons-container">
                    <div className={classnames('button-primary', selectedImage && !selectedImage.url ? 'disabled' : '')}
                         onClick={() => selectedImage && selectedImage.url && onSelectImage(selectedImage)}>Submit</div>
                    <div className="button-secondary" onClick={onCloseModal}>Cancel</div>
                </div>
            </div>
        </div>
    );
}
