import Project from "./components/Project";
import DevTimeline from "./components/DevTimeline";
import ContactForm from "./components/ContactForm";
import Sun from "./images/sun.png";
import Moon from "./images/moon.png";
import { useEffect, useRef, useState } from "react";
import { projects } from './data/projects';
import Spotlight from './components/Spotlight';
import posthog from 'posthog-js';
import ProjectGallery from './components/gallery/ProjectGallery';
import Section from './components/Section';
import Card from './components/Card';
import BusinessCard from './components/BusinessCard';

const CURRENT_YEAR = new Date().getFullYear();

function App() {
    const ref = useRef();

    return (
        <div>
            <div ref={ref} className='app'>
                <div className="wrapper">
                    <BusinessCard />
                    <Section title='Projects'>
                        <ProjectGallery />
                    </Section>
                    <Section title='Experience' reverse={true}>
                        <DevTimeline />
                    </Section>
                    <Section title='Contact'>
                        <ContactForm />
                    </Section>
                    <section className="footer">
                        <div className="footer__icons">
                            <a
                                className="footer__link"
                                href="https://www.linkedin.com/in/cstatondev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => posthog.capture("LinkedIn")}
                            >
                                <i class="devicon-linkedin-plain"></i>
                            </a>
                            <a
                                className="footer__link"
                                href="https://github.com/c-staton"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => posthog.capture("GitHub")}
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
