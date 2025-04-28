import React from "react";

const TimelineEvent = ({ emoji, year, title, description }) => {
    return (
        <div className='timeline-event'>
            <div className='emote-pop-wrap'>
                <div className='line top' />
                <div className='emote-pop'>
                    <span className='emoji'>{emoji}</span>
                    <span className='year'>{year}</span>
                </div>
                <div className='line bottom' />
            </div>
            <div className='main-content'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
};

const DevTimeline = () => {
    return (
        <div className="dev-timeline">
            <TimelineEvent
                emoji='👨🏻‍💻'
                year='NOW'
                title='Engineering Full Stack Applications'
                description='With all my new tools acquired, I found my passion in web development. From concept to completion, I craft each project with a user-centric approach, ensuring an intuitive and seamless experience.'
            />
            <TimelineEvent
                emoji='👷🏻‍♂️'
                year='2022'
                title='Building Passion Projects'
                description='At the beginning of 2022, I took a pivotal step by joining a software engineering bootcamp. This adventure taught me the joys of building full-stack projects from the ground up. The empowerment of turning ideas into tangible applications was nothing short of exhilarating.'
            />
            <TimelineEvent
                emoji='🧐'
                year='2020'
                title='Programming Algorithms'
                description='In college, I tackled courses like the full calculus series, linear algebra, discrete mathematics, and assembly language programming. While these subjects provided me with a rich understanding of computer science fundamentals, I recognized I needed to bridge the gap between theoretical knowledge and bringing applications to life.'
            />
            <TimelineEvent
                emoji='🥳'
                year='2018'
                title='Coding Scripts'
                description='I began my coding journey with C++ and MATLAB as my foundational languages. Through the precise and detailed nature of C++, I acquired a robust understanding of core programming concepts.'
            />
        </div>
    );
};

export default DevTimeline;