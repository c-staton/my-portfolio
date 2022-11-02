import React, { useState } from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import "./Project.css";

const Project = ({ title, techTags, image, link, github, domain }) => {
	const [visibleLinks, setVisibleLinks] = useState(false);
	const gaEventTracker = useAnalyticsEventTracker("Project Click");

	const showLinks = () => {
		setVisibleLinks(true);
	};

	const mobileToggle = () => {
		setVisibleLinks(!visibleLinks);
	};

	const hideLinks = () => {
		setVisibleLinks(false);
	};

	return (
		<div
			className="card"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			onClick={mobileToggle}
			onMouseOver={showLinks}
			onMouseOut={hideLinks}
		>
			<div className={`card__links ${visibleLinks ? null : "hidden"}`}>
				<a
					href={link}
					className="card__info--tag button"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => gaEventTracker(`${title} - Live Link`)}
				>
					{domain}
				</a>
				<a
					href={github}
					className="card__info--tag button"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => gaEventTracker(`${title} - Github`)}
				>
					<i class="devicon-github-original"></i>Github
				</a>
			</div>
			<img
				src={image}
				alt={title}
				className={`card__img ${visibleLinks ? "hidden" : null}`}
			/>
			<div className="card__info">
				<h3 className="card__info--title">{title}</h3>
				<div className="card__info--tech">
					{techTags.map((tag) => (
						<span className="card__info--tag" key={tag}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
