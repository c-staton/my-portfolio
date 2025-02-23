import React, { useState } from "react";

const Project = ({ project, onClick }) => {
    const [wobble, setWobble] = useState(0);

    return (
        <div
            className="card shake"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            onAnimationEnd={() => setWobble(0)}
            wobble={wobble}
        >
            <div className='card__content'>
                <div className='card__logo'>
                    {project.logo}
                </div>
            </div>
            <div className="card__info">
                <h3 className="card__info--title">{project.title}</h3>
                <div className="card__info--tech">
                    {project.techTags.map((tag) => (
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
