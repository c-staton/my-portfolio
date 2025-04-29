import React, { useState, useRef } from 'react';
import FloatBox from './FloatBox';
import { projects } from '../../data/projects';
import { ReactComponent as DownArrow } from '../../images/down-arrow.svg';
import ImageViewer from '../ImageViewer';

const ScrollSidebar = ({ projs, setProjs, setSelected }) => {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    const [disabled, setDisabled] = useState(false);

    const handleCycle = () => {
        setDisabled(true);
        topRef.current.style.transform = 'scale(0.85) translateY(-8%)';
        topRef.current.style.transition = 'transform 0.2s ease-out';
        bottomRef.current.style.transform = 'translateY(calc(-50% - 10px))';
        bottomRef.current.style.transition = 'transform 0.4s ease-out';
        bottomRef.current.style.transitionDelay = '0.2s';

        const floatBox = topRef.current.querySelector('.float-box');
        floatBox.style.transition = 'all 0.1s ease-out';
        floatBox.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';

        setTimeout(() => {
            setProjs((prev) => {
                const newProjs = [...prev];
                const elem = newProjs.shift();
                newProjs.push(elem);
                return newProjs;
            });
            topRef.current.style.transform = 'scale(1)';
            topRef.current.style.transition = 'none';
            bottomRef.current.style.transition = 'none';
            bottomRef.current.style.transform = 'translateY(0)';

            floatBox.style.transition = 'transform 0.1s ease-out';
            floatBox.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 10px 10px, rgba(0, 0, 0, 0.05) 0px 5px 10px';
            setDisabled(false);
        }, 600);
    };

    return (
        <div className='proj-gallery__sidebar'>
            <div className='sidebar-content'>
                <div className='top-box' ref={topRef}>
                    <FloatBox onClick={() => setSelected(projs[0])}>
                        <div className='project-logo'>
                            {projs[0].logo}
                            <span style={{ color: projs[0].mainColor }}>{projs[0].title}</span>
                        </div>
                    </FloatBox>
                </div>
                <div className='scroll-content' ref={bottomRef}>
                    {projs.map((p, idx) => {
                        if (idx === 0) return null;
                        return (
                            <FloatBox key={p.domain} onClick={() => setSelected(p)}>
                                <div className='project-logo' >
                                    {p.logo}
                                    <span style={{ color: p.mainColor }}>{p.title}</span>
                                </div>
                            </FloatBox>
                        );
                    })}
                </div>
            </div>
            <button disabled={disabled} onClick={handleCycle}>
                <DownArrow />
            </button>
            <div className='bg-spot' />
        </div>
    );
};

const ProjectGallery = () => {
    const [projs, setProjs] = useState(projects);
    const [selected, setSelected] = useState(projects[0]);

    return (
        <div className='proj-gallery-wrap'>
            <div className='proj-gallery'>
                <ImageViewer images={selected.images} color={selected.mainColor} />
                <ScrollSidebar projs={projs} setProjs={setProjs} setSelected={setSelected} />
            </div>
            <div className='proj-title'>
                {selected.title}
            </div>
            <div className='proj-description'>
                {selected.subtitle}
            </div>
        </div>
    );
};

export default ProjectGallery;