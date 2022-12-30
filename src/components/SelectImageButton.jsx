import React, {useState} from 'react';
import './styles/SelectImageButton.css'
import ImagesListModal from "./ImagesListModal";
import { BiImageAdd } from 'react-icons/bi';
export default function SelectImageButton({onSelect, images}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="select-image-button-container">
            {showModal && <ImagesListModal
                images={images}
                onCloseModal={() => setShowModal(false)}
                onSelectImage={(img) => {
                    setShowModal(false);
                    onSelect(img);
                }}
            />}
            <div className="select-image-button" onClick={() => setShowModal(true)}>
                <div className="select-image-button-icon" onClick={() => setShowModal(true)}>
                    <BiImageAdd style={{color: 'white'}}/>
                </div>
            </div>
        </div>

    );
}
