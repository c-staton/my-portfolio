import React from "react";
import { Timeline, Event } from "react-timeline-scribble";

const DevTimeline = () => {
	return (
		<div className="dev-timeline">
			<h1 className="timeline__h1">Timeline</h1>
			<div className="timeline-comp">
				<Timeline>
					<Event interval={"Today"} title={"Front-End Developer"}>
						I really found my passion with frontend development. I prioritize
						user flow inside all my projects, wanting the experience for the end
						user to be as intuitive as possible.
					</Event>
					<Event interval={"2022"} title={"Attend Coding Bootcamp"}>
						In the span of 5 months I learned JavaScript, Python, SQL, Node, and
						React. For the first time I could actually use code to bring my
						visions to life, which is the coolest feeling in the world.
					</Event>
					<Event interval={"2021"} title={"Drop Out of University"}>
						Traditional school was never for me. I used it as a tool and took
						from it what I needed. I left with a strong core understanding of
						computer science but lacked the skills to actually program.
					</Event>
					<Event interval={"2018"} title={"Major in Computer Science"}>
						I started my coding journey with the traditional route of attending
						university. I learned C++ as my very first language which gave me a
						very solid understanding of programming fundamentals.
					</Event>
				</Timeline>
			</div>
		</div>
	);
};

export default DevTimeline;
