import React from 'react';

const Section = ({ title, children }) => {
    return (
        <div className='section'>
            <div className='section-title'>{title}</div>
            {children}
        </div>
    );
};

export default Section;