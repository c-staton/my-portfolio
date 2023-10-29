import React, { useState } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import TimelineEvent from './TimelineEvent';

const DevTimeline = () => {
	const [emoteClick1, setEmoteClick1] = useState(0);


	return (
		<div className="dev-timeline">
			<h1 className="timeline__h1">Timeline</h1>
			<div className="timeline-comp">
				<Timeline>
					<TimelineEvent interval='NOW' emote='👨🏻‍💻' title='I develop software!'>
						With all my new tools aquired, I found my passion
						in web development. From concept to completion,
						I craft each project with a user-centric approach,
						ensuring an intuitive and seamless experience.
					</TimelineEvent>
					<TimelineEvent interval='2022' emote='👷🏻‍♂️' title='I can build things!'>
						At the beginning of 2022, I took a pivotal step by
						joining a software engineering bootcamp. This adventure
						taught me the joys of building full-stack projects
						from the ground up. The empowerment of turning ideas
						into tangible applications was nothing short of exhilarating.
					</TimelineEvent>
					<TimelineEvent interval='2021' emote='🧐' title='I can do math!'>
						In college, I tackled courses like the full calculus series,
						linear algebra, discrete mathematics, and assembly language
						programming. While these subjects provided me with a rich
						understanding of coding fundamentals, I recognized I needed
						to bridge the gap between theoretical knowledge and bringing
						applications to life.
					</TimelineEvent>
					<TimelineEvent interval='2018' emote='🥳' title='I can code!'>
						I began my coding journey with C++ and MATLAB as my foundational
						languages. Through the precise and detailed nature of C++, I
						acquired a robust understanding of core computer science concepts.
					</TimelineEvent>
				</Timeline>
			</div>
		</div>
	);
};

export default DevTimeline;
