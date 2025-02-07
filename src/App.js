import Project from "./components/Project";
import DevTimeline from "./components/DevTimeline";
import ContactForm from "./components/ContactForm";
import Sun from "./images/sun.png";
import Moon from "./images/moon.png";
import ReactGA from "react-ga";
import useAnalyticsEventTracker from "./hooks/useAnalyticsEventTracker";
import { useEffect, useRef, useState } from "react";
import { projects } from './data/projects';
import Spotlight from './components/Spotlight';

const TRACKING_ID = "UA-245661443-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const CURRENT_YEAR = new Date().getFullYear();

function App() {
    const ref = useRef();

    const [isDark, setIsDark] = useState(false);
    const [click, setClick] = useState(0);

    const [fullOpen, setFullOpen] = useState(false);
    const [partialOpen, setPartialOpen] = useState(false);
    const [spotlightIdx, setSpotlightIdx] = useState(null);

    const switchTheme = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        setClick(1);
    }, []);

    const gaEventTracker = useAnalyticsEventTracker("Link Click");

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const getCenterCoords = (element) => {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height;
        return {
            x, y
        };
    };

    const handleClick = (e, idx) => {
        const { x, y } = getCenterCoords(e.currentTarget);
        Object.assign(ref.current.style, {
            transformOrigin: `${x}px ${y}px`
        });
        if (ref.current.classList.contains('zoomed-out')) {
            ref.current.classList.remove('zoomed-out');
        }
        ref.current.classList.add('zoomed-in');
        setSpotlightIdx(idx);
        setPartialOpen(true);
        setTimeout(() => {
            setFullOpen(true);
            const body = document.querySelector('body');
            body.style.overflow = 'hidden';
        }, 500);

    };

    const handleClose = () => {
        setFullOpen(false);
        setPartialOpen(false);
        ref.current.classList.add('zoomed-out');
        setTimeout(() => {
            setSpotlightIdx(null);
        }, 500);
        const body = document.querySelector('body');
        body.style.overflow = 'auto';
    };

    const handleSwipe = (forward = true) => {
        let newIdx = spotlightIdx + 1;
        if (!forward) {
            newIdx = spotlightIdx - 1;
        }
        setSpotlightIdx(newIdx);

        const projectCards = document.querySelectorAll('.card');
        const currCard = projectCards[newIdx];

        const { x, y } = getCenterCoords(currCard);
        Object.assign(ref.current.style, {
            transformOrigin: `${x}px ${y}px`
        });
    };

    return (
        <div className={isDark ? "dark-mode" : ''}>
            <Spotlight
                fullOpen={fullOpen}
                partialOpen={partialOpen}
                spotlightIdx={spotlightIdx}
                handleClose={handleClose}
                handleNext={spotlightIdx < projects.length - 1 ? () => handleSwipe(true) : null}
                handlePrev={spotlightIdx > 0 ? () => handleSwipe(false) : null}
            />
            <div ref={ref} className='app'>
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
                        {/* <p className="intro__title">Software Engineer</p> */}
                        <p className="intro__paragraph">
                            I'm a full-stack software engineer with 3 years of experience in React for frontend development and Flask/Node.js for backend APIs across different projects.
                        </p>
                    </section>
                    <section className="projects">
                        {projects.map((p, idx) => (
                            <Project
                                project={p}
                                onClick={(e) => handleClick(e, idx)}
                            />
                        ))}
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
        </div>
    );
}

export default App;
