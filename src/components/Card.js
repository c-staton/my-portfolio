import React, { useState, useRef } from 'react';

const MAX_TILT = 10;

const Card = ({ frontContent, backContent, className, cardClicked, setCardClicked }) => {
    const [tiltDeg, setTiltDeg] = useState({ x: 0, y: 0 });
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotationDegrees, setRotationDegrees] = useState(0);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateX = ((mouseY - height / 2) / height) * MAX_TILT;
        const rotateY = ((mouseX - width / 2) / width) * MAX_TILT;

        // Calculate if we're looking at front or back based on total rotation
        const isBackFacing = Math.abs(rotationDegrees % 360) > 90 && Math.abs(rotationDegrees % 360) < 270;

        setTiltDeg({
            x: isBackFacing ? rotateX : -rotateX,
            y: isBackFacing ? rotateY : rotateY
        });
    };

    const handleMouseLeave = () => {
        setTiltDeg({ x: 0, y: 0 });
    };

    const handleClick = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const centerX = rect.width / 2;

        const newDirection = mouseX < centerX ? 'left' : 'right';

        // Add or subtract 180 degrees based on direction
        const rotationChange = newDirection === 'left' ? -180 : 180;
        setRotationDegrees(prev => prev + rotationChange);

        // Invert current tilt values when flipping
        setTiltDeg(prev => ({
            x: -prev.x,
            y: prev.y
        }));

        setIsFlipped(!isFlipped);
        setCardClicked(true);
    };

    const getTransform = () => {
        const flipTransform = `rotateY(${rotationDegrees}deg)`;
        const tiltTransform = `rotateX(${tiltDeg.x}deg) rotateY(${tiltDeg.y}deg)`;
        return `perspective(1000px) ${flipTransform} ${tiltTransform}`;
    };

    return (
        <div
            className={`business-card ${className || ''} ${cardClicked ? 'clicked' : ''}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {!cardClicked && (
                <div className='touchable' />
            )}
            <div
                className="card-inner"
                style={{
                    transform: getTransform(),
                }}
            >
                <div className="card-front">
                    {frontContent}
                </div>
                <div className="card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default Card; 