import React, { useRef, useEffect } from 'react';
import ArrowSectionScroll from './ArrowSectionScroll';

const Section = ({ title, nextSection, reverse = false, children }) => {
    const sectionRef = useRef(null);

    return (
        <div id={title.toLowerCase()} className={`section ${reverse ? 'reverse' : ''}`} ref={sectionRef}>
            <SectionTitle title={title} containerRef={sectionRef} />
            {children}
            {nextSection && (
                <ArrowSectionScroll sectionTitle={nextSection} offset={-35} />
            )}
        </div>
    );
};

const SectionTitle = ({ title, containerRef }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            const container = containerRef.current;
            const text = textRef.current;
            if (!container || !text) return;
            const cRect = container.getBoundingClientRect();
            const H = window.innerHeight;
            const hC = cRect.height;
            const hT = text.offsetHeight;
            // clamp(0, hC - hT, -cRect.top + (H - hT)/2)
            const y = Math.max(
                10,
                Math.min(
                    hC - hT - 10,
                    -cRect.top + (H - hT) / 2
                )
            );
            text.style.transform = `translateY(${y}px)`;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [containerRef]);

    return (
        <div className="section-title">
            <div className="sliding-text" ref={textRef}>
                <span className="text">{title}</span>
            </div>
        </div>
    );
};

export default Section;
