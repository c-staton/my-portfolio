import React, { useState } from 'react';
import Card from './Card';
import { ReactComponent as Logo } from '../images/cs-logo.svg';
import ArrowSectionScroll from './ArrowSectionScroll';

const BusinessCard = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div id='card-section'>
            <Card
                cardClicked={clicked}
                setCardClicked={setClicked}
                frontContent={
                    <div className="card-content">
                        <h2>Chris Staton</h2>
                        <span>
                            Software Engineer
                        </span>
                        <span>
                            Relocating to Austin, TX
                        </span>
                        <Logo />
                    </div>
                }
                backContent={
                    <div className="card-content back">
                        <div className='contact-info'>
                            <h4>3 years of full stack experience</h4>
                            <span>topherstaton@gmail.com</span>
                        </div>
                        <div className='skills'>
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                            </ul>
                            <ul>
                                <li>Flask</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                }
            />
            <ArrowSectionScroll sectionTitle='Projects' />
        </div>
    );
};

export default BusinessCard;