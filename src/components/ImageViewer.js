import React, { useState, useEffect } from "react";

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

    const handleNext = () => {
        setCurrIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    };

    return (
        <div className="image-viewer">
            {isLoading ? (
                <div className="loading-placeholder">Loading...</div>
            ) : (
                <img
                    onClick={handleNext}
                    src={images.length > 0 ? images[currIdx] : null}
                    alt=""
                    style={{
                        border: `2px solid ${color}`,
                        opacity: imageCache.has(images[currIdx]) ? 1 : 0,
                    }}
                    loading="eager"
                    decoding="async"
                />
            )}
            <div className="slider-pops">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={idx === currIdx ? "selected" : ""}
                        onClick={() => setCurrIdx(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageViewer;