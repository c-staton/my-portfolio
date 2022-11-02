import React from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import "./Project.css";

const Project = ({ title, techTags, image, link }) => {
	const gaEventTracker = useAnalyticsEventTracker("Project Click");

	return (
		<a
			className="card"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			onClick={() => gaEventTracker(title)}
		>
			<img src={image} alt={title} className="card__img" />
			<div className="card__info">
				<h3 className="card__info--title">{title}</h3>
				<div className="card__info--tech">
					{techTags.map((tag) => (
						<span className="card__info--tag">{tag}</span>
					))}
				</div>
			</div>
		</a>
	);
};

export default Project;
