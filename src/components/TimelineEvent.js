import React, { useState } from 'react';
import { Event } from 'react-timeline-scribble';

const TimelineEvent = ({ emote, title, interval, children }) => {
    const [emoteClick1, setEmoteClick1] = useState(0);

    return (
        <Event interval={interval} title={
            <span>
                {title}
                <span
                    className='emote'
                    onClick={() => setEmoteClick1(1)}
                    onAnimationEnd={() => setEmoteClick1(0)}
                    click={emoteClick1}
                >
                    {emote}
                </span>
            </span>
        }>
            {children}
        </Event>
    );
};

export default TimelineEvent;