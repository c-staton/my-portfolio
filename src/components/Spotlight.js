// dependencies
import React from 'react';
// data
import { projects } from '../data/projects';
// components
import ImageViewer from './ImageViewer';
// assets
import { ReactComponent as Arrow } from '../images/next.svg';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as NewTab } from '../images/new-tab.svg';

const Spotlight = ({ fullOpen, partialOpen, spotlightIdx, handleClose, handleNext, handlePrev }) => {
    return (
        <div className={`spotlight ${partialOpen ? 'show' : 'hide'}`}>
            <div className='close' onClick={handleClose}>
                <Close />
            </div>
            <div onClick={handlePrev} className={`prev ${!handlePrev ? 'hidden' : ''}`} >
                <Arrow />
            </div>
            <div onClick={handleNext} className={`next ${!handleNext ? 'hidden' : ''}`} >
                <Arrow />
            </div>
            <div className={`spotlight-content ${fullOpen ? 'full-open' : ''}`} style={{ transform: `translateX(-${spotlightIdx * 25}%)` }}>
                {projects.map((p) => (
                    <div className='sp-proj'>
                        <div className='sp-proj__header'>
                            <h1>{p.title}</h1>
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: p.mainColor }}
                            >
                                {p.domain}
                                <NewTab fill={p.mainColor} style={{ fill: p.mainColor }} />
                            </a>
                        </div>
                        <div className='sp-proj__content'>
                            <ImageViewer images={p.images} color={p.mainColor} />
                        </div>
                        <span className='desc'>{p.subtitle}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Spotlight;