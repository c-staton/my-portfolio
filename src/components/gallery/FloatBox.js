import React, { useState, useRef } from 'react';

const MAX = 1;

const FloatBox = ({ extraClass, children, onClick }) => {
    const [skewDeg, setSkewDeg] = useState({ x: 0, y: 0 });
    const boxRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = boxRef.current.getBoundingClientRect();

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const normalizedX = (mouseX - centerX) / centerX;
        const normalizedY = (mouseY - centerY) / centerY;

        setSkewDeg({
            x: -normalizedY * MAX,
            y: -normalizedX * MAX
        });
    };

    const handleMouseLeave = () => {
        setSkewDeg({ x: 0, y: 0 });
    };

    return (
        <div
            ref={boxRef}
            className={`float-box${extraClass ? ' ' + extraClass : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                transform: `perspective(1000px) rotateX(${-skewDeg.x * 2}deg) rotateY(${skewDeg.y * 2}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
        >
            {children}
        </div>
    );
};

export default FloatBox;
