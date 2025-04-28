import React from 'react';
import { scrollTo } from '../services/utils';
import { ReactComponent as DownArrow } from '../images/double-arrow-down.svg';

const ArrowSectionScroll = ({ sectionTitle, offset = 20 }) => {
    return (
        <div
            className='arrow-container'
            onClick={() => scrollTo(sectionTitle.toLowerCase())}
            style={{ bottom: offset }}
        >
            <DownArrow />
            <span>{sectionTitle}</span>
            <DownArrow />
        </div>
    );
};

export default ArrowSectionScroll;