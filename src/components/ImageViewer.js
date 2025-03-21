import React, { useState, useEffect } from "react";
import { ReactComponent as DownArrow } from '../images/down-arrow.svg';

const ImageViewer = ({ images = [], color }) => {
    const [currIdx, setCurrIdx] = useState(0);
    const [imageCache, setImageCache] = useState(new Map());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preloadImages = async () => {
            setIsLoading(true);
            const cache = new Map();

            const loadImage = (src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve(src);
                    img.onerror = reject;
                });
            };

            try {
                await Promise.all(
                    images.map(async (src) => {
                        const loadedSrc = await loadImage(src);
                        cache.set(src, loadedSrc);
                    })
                );
                setImageCache(cache);
            } catch (error) {
                console.error("Error preloading images:", error);
            } finally {
                setIsLoading(false);
            }
        };

        preloadImages();
    }, [images]);

    const handleBack = () => {
        setCurrIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
    };

    const handleNext = () => {
        setCurrIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    };

    return (
        <div className='image-viewer'>
            <img
                onClick={handleNext}
                src={images.length > 0 ? images[currIdx] : null}
                alt=''
                loading='eager'
                decoding='async'
            />
            <div className='nav-arrow back' onClick={handleBack}>
                <DownArrow />
            </div>
            <div className='nav-arrow forward' onClick={handleNext}>
                <DownArrow />
            </div>
            <div className='slider-pops'>
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={idx === currIdx ? 'selected' : ''}
                        onClick={() => setCurrIdx(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageViewer;