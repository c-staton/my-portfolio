import "./App.scss";
import Project from "./Project";
import TMGImg from "./images/TMG.jpg";
import EMCImg from "./images/EMC.jpg";
import CCRImg from "./images/CCR.jpg";
import DevTimeline from "./DevTimeline";
import ContactForm from "./ContactForm";
import Sun from "./images/sun.png";
import Moon from "./images/moon.png";
import ReactGA from "react-ga";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import { useEffect, useState } from "react";

const TRACKING_ID = "UA-245661443-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const CURRENT_YEAR = new Date().getFullYear();

function App() {
    const [isDark, setIsDark] = useState(false);
    const [click, setClick] = useState(0);


    const switchTheme = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        setClick(1);
        setInterval(() => {
            setClick(1);
        }, [8000]);
    }, []);

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
                    <h1
                        id='my-name'
                        onClick={() => setClick(1)}
                        className="intro__h1 shine"
                        onAnimationEnd={() => setClick(0)}
                        click={click}
                    >Chris Staton</h1>
                    <p className="intro__title">Software Engineer</p>
                    <p className="intro__paragraph">
                        I continuously seek emerging technologies to master and incoroparte into my projects.
                        Every application I undertake is
                        meticulously crafted from inception to execution,
                        reflecting a blend of thoughtful planning, design,
                        and implementation. I'm deeply passionate about
                        creating not just applications, but distinct digital
                        brands accentuated with robust SEO and user-centric UI.
                    </p>
                </section>
                <section className="projects">
                    <Project
                        title="twomoons.gg"
                        techTags={["Flask", "Socket.io", "MySQL"]}
                        image={TMGImg}
                        link="https://twomoons.gg"
                        domain="twomoons.gg"
                    />
                    <Project
                        title="evenMoreCode"
                        techTags={["React", "Node.js", "Prisma"]}
                        image={EMCImg}
                        link="https://evenmorecode.com"
                        domain="evenmorecode.com"
                    />
                    <Project
                        title="Casa Carlos"
                        techTags={["React", "JavaScript", "CSS"]}
                        image={CCRImg}
                        link="https://casacarlosrestaurant.com"
                        domain="casacarlosrestaurant.com"
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
                        © {CURRENT_YEAR} Chris Staton. All rights reserved.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default App;
