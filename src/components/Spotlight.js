import React from 'react';
import { projects } from '../data/projects';
// assets
import { ReactComponent as Arrow } from '../images/next.svg';
import { ReactComponent as Close } from '../images/close.svg';

const Spotlight = ({ fullOpen, partialOpen, spotlightIdx, handleClose, handleNext, handlePrev }) => {
    return (
        <div className={`spotlight ${partialOpen ? 'show' : 'hide'}`}>
            <div className='close' onClick={handleClose}>
                <Close />
            </div>
            <div className={`prev ${!handlePrev ? 'hidden' : ''}`} >
                <Arrow onClick={handlePrev} />
            </div>
            <div className={`next ${!handleNext ? 'hidden' : ''}`} >
                <Arrow onClick={handleNext} />
            </div>
            <div className={`spotlight-content ${fullOpen ? 'full-open' : ''}`} style={{ transform: `translateX(-${spotlightIdx * 25}%)` }}>
                {projects.map((p) => (
                    <div className='sp-proj'>
                        <div className='sp-proj__content'>
                            <img src={p.image} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Spotlight;