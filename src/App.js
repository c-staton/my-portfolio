import "./App.scss";
import Project from "./Project";
import LSSImg from "./images/LSS.jpg";
import BDImg from "./images/BD.jpg";
import SFImg from "./images/SF.jpg";
import DevTimeline from "./DevTimeline";
import ContactForm from "./ContactForm";
import Sun from "./images/sun.png";
import Moon from "./images/moon.png";
import ReactGA from "react-ga";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import { useEffect, useState } from "react";

const TRACKING_ID = "UA-245661443-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
	const [isDark, setIsDark] = useState(false);

	const switchTheme = () => {
		setIsDark(!isDark);
	};

	const gaEventTracker = useAnalyticsEventTracker("Link Click");

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div className={`App ${isDark ? "dark-mode" : null}`}>
			<button
				className="darkmode"
				onClick={() => {
					switchTheme();
					gaEventTracker("Dark Mode");
				}}
			>
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
						I'm a software engineer eagerly looking for new technologies to
						learn. All coding projects are built from scratch, from planning and
						designing all the way to solving real-life problems with code. I
						love building projects that can serve as standalone products with
						solid SEO and UI, making the user experiences as intuitive as
						possible. Coming from a background in graphic design & marketing,
						user experience is at the top of my mind with every application I
						develop.
					</p>
				</section>
				<section className="projects">
					<Project
						title="Livestream Search"
						techTags={["React", "Redux", "CSS"]}
						image={LSSImg}
						link="https://www.livestreamsearch.com"
						domain="livestreamsearch.com"
						github="https://github.com/c-staton/livestream-search"
					/>
					<Project
						title="Bill Divider"
						techTags={["React", "Node", "PostgreSQL"]}
						image={BDImg}
						link="https://billdivider.com"
						domain="billdivider.com"
						github="https://github.com/c-staton/billdivider"
					/>
					<Project
						title="Sharefol.io"
						techTags={["Python", "JavaScript", "HTML"]}
						image={SFImg}
						link="https://www.sharefol.io"
						domain="sharefol.io"
						github="https://github.com/c-staton/sharefolio"
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
							onClick={() => gaEventTracker("LinkedIn")}
						>
							<i class="devicon-linkedin-plain"></i>
						</a>
						<a
							className="footer__link"
							href="https://github.com/c-staton"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => gaEventTracker("GitHub")}
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
