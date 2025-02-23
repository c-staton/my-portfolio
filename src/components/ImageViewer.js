// dependencies
import React, { useState } from 'react';

const ImageViewer = ({ images = [], color }) => {
    const [currIdx, setCurrIdx] = useState(0);

    const handleNext = () => {
        if (currIdx === images.length - 1) {
            setCurrIdx(0);
        } else {
            setCurrIdx(currIdx + 1);
        }
    };

    return (
        <div className='image-viewer'>
            <img
                onClick={handleNext}
                src={images.length > 0 ? images[currIdx] : null}
                alt=''
                style={{ border: `2px solid ${color}` }}
            />
            <div className='slider-pops'>
                {images.map((_, idx) => (
                    <div className={idx === currIdx ? 'selected' : ''} onClick={() => setCurrIdx(idx)} />
                ))}
            </div>
        </div>
    );
};

export default ImageViewer;