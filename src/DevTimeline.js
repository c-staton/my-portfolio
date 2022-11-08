import React from "react";
import { Timeline, Event } from "react-timeline-scribble";

const DevTimeline = () => {
	return (
		<div className="dev-timeline">
			<h1 className="timeline__h1">Timeline</h1>
			<div className="timeline-comp">
				<Timeline>
					<Event interval={"Today"} title={"Software Engineer"}>
						I found my passion in software engineering and web development.
						Building all my projects from the ground up, I prioritize the end
						user’s experience by incorporating intuitive designs.
					</Event>
					<Event interval={"2022"} title={"Accelerated My Learning"}>
						In 5 months, I learned how to build full-stack applications in
						Springboard's Software Engineering Career Track. Then, for the first
						time, I could use code to bring my visions to life.
					</Event>
					<Event interval={"2021"} title={"Always More to Learn"}>
						I used the university as a tool and learned the core computer
						science concepts the traditional way. I knew how to code but needed
						to gain the skills to program and apply code to real-world
						applications.
					</Event>
					<Event interval={"2018"} title={"Major in Computer Science"}>
						I started my coding journey with the traditional route of attending
						university. I learned C++ as my first language, which gave me an
						excellent understanding of programming fundamentals.
					</Event>
				</Timeline>
			</div>
		</div>
	);
};

export default DevTimeline;
