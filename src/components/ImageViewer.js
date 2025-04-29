import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DownArrow } from '../images/down-arrow.svg';

const ImageViewer = ({ images = [], color }) => {
    const [currIdx, setCurrIdx] = useState(0);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);
    const [activeSide, setActiveSide] = useState(null);

    const imageContainerRef = useRef(null);

    useEffect(() => {
        setCurrIdx(0);
        let loadedCount = 0;
        const totalImages = images.length;

        // Reset state when images prop changes
        setAllImagesLoaded(false);

        // Preload all images
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setAllImagesLoaded(true);
                }
            };
        });
    }, [images]);

    const handleNext = () => {
        setCurrIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    };

    const handleBack = () => {
        setCurrIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
    };

    const handleDotClick = (idx) => {
        if (idx === currIdx) return;
        setCurrIdx(idx);
    };

    const handleImageClick = (e) => {
        if (!imageContainerRef.current) return;

        const rect = imageContainerRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left; // X position relative to the container
        const containerWidth = rect.width;

        if (clickX < containerWidth / 2) {
            handleBack();
            setActiveSide('left'); // Set active side immediately on click
        } else {
            handleNext();
            setActiveSide('right'); // Set active side immediately on click
        }
    };

    const handleMouseMove = (e) => {
        if (!imageContainerRef.current) return; // Don't change side while animating

        const rect = imageContainerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const containerWidth = rect.width;

        if (mouseX < containerWidth / 2) {
            setActiveSide('left');
        } else {
            setActiveSide('right');
        }
    };

    const handleMouseLeave = () => {
        setActiveSide(null);
    };

    if (!allImagesLoaded) {
        return (
            <div className='image-viewer'>
                <div className="image-container loading">
                    <div className="loading-placeholder">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className='image-viewer'>
            <div
                className="image-container"
                ref={imageContainerRef} // Attach ref
                onClick={handleImageClick} // Handle clicks here
                onMouseMove={handleMouseMove} // Track mouse movement
                onMouseLeave={handleMouseLeave} // Reset on mouse leave
            >
                <img
                    className="background-image"
                    src={images[currIdx]}
                    alt=""
                />
                <img
                    className="current-image"
                    src={images[currIdx]}
                    alt=""
                    style={{ opacity: 1 }}
                />
            </div>
            <div className={`nav-arrow back ${activeSide === 'left' ? 'highlight' : ''}`}>
                <DownArrow />
            </div>
            <div className={`nav-arrow forward ${activeSide === 'right' ? 'highlight' : ''}`}>
                <DownArrow />
            </div>
            <div className='slider-pops'>
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={idx === currIdx ? 'selected' : ''}
                        onClick={() => handleDotClick(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageViewer;