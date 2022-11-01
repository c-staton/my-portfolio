import "./App.scss";
import Project from "./Project";
import LSSImg from "./images/LSS.jpg";
import BDImg from "./images/BD.jpg";
import SFImg from "./images/SF.jpg";
import DevTimeline from "./DevTimeline";
import ContactForm from "./ContactForm";
import Sun from "./images/sun.png";
import Moon from "./images/moon.png";
import { useState } from "react";

function App() {
	const [isDark, setIsDark] = useState(false);

	const switchTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<div className={`App ${isDark ? "dark-mode" : null}`}>
			<button className="darkmode" onClick={switchTheme}>
				{isDark ? (
					<img className="icon" src={Sun} alt="light-mode" />
				) : (
					<img className="icon" src={Moon} alt="dark-mode" />
				)}
			</button>
			<div className="wrapper">
				<section className="intro">
					<h1 className="intro__h1">Chris Staton</h1>
					<p className="intro__title">Software Engineer & Web Developer</p>
					<p className="intro__paragraph">
						I'm a front-end developer eagerly looking for new technologies to
						learn. All coding projects are built from scatch, from planning and
						designing all the way to solving real-life problems with code. I
						love building projects that can serve as standalone products with
						solid SEO and UI making the user exeriences as intuitive as
						possible. Coming from a background in graphic design & marketing,
						user flow is on the top of my mind with every application I develop.
					</p>
				</section>
				<section className="projects">
					<Project
						title="Bill Divider"
						techTags={["React", "Node", "PostgreSQL"]}
						image={BDImg}
						link="https://billdivider.netlify.app"
					/>
					<Project
						title="Livestream Search"
						techTags={["React", "JavaScript", "CSS"]}
						image={LSSImg}
						link="https://www.livestreamsearch.com"
					/>
					<Project
						title="Sharefol.io"
						techTags={["Python", "JavaScript", "HTML"]}
						image={SFImg}
						link="https://www.sharefol.io"
					/>
				</section>
				<section className="timeline">
					<DevTimeline />
				</section>
				<section className="contact">
					<ContactForm />
				</section>
				<section className="footer">
					<div className="footer__icons">
						<a
							className="footer__link"
							href="https://www.linkedin.com/in/cstatondev/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="devicon-linkedin-plain"></i>
						</a>
						<a
							className="footer__link"
							href="https://github.com/c-staton"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="devicon-github-original"></i>
						</a>
					</div>
					<p className="footer__copyright">
						© 2022 Chris Staton. All rights reserved.
					</p>
				</section>
			</div>
		</div>
	);
}

export default App;
