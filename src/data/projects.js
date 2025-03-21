// assets
import TMGImg1 from "../images/TMG-1.png";
import TMGImg2 from "../images/TMG-2.png";
import TMGImg3 from "../images/TMG-3.png";
import TMGImg4 from "../images/TMG-4.png";
import TMGImg5 from "../images/TMG-5.png";
import TMGImg6 from "../images/TMG-6.png";
import TMGImg7 from "../images/TMG-7.png";
import EMCImg1 from "../images/EMC-1.png";
import EMCImg2 from "../images/EMC-2.png";
import EMCImg3 from "../images/EMC-3.png";
import EMCImg4 from "../images/EMC-4.png";
import EMCImg5 from "../images/EMC-5.png";
import CCRImg1 from "../images/CCR-1.png";
import CCRImg2 from "../images/CCR-2.png";
import CCRImg3 from "../images/CCR-3.png";
import CCRImg4 from "../images/CCR-4.png";
import LLImg1 from "../images/LL-1.png";
import LLImg2 from "../images/LL-2.png";
import LLImg3 from "../images/LL-3.png";
import LLImg4 from "../images/LL-4.png";
import LLImg5 from "../images/LL-5.png";
import TMGLogoImg from '../images/tmg-logo.svg';
import CasaLogoImg from '../images/casa-logo.svg';
import EMCLogoImg from '../images/emc-logo.svg';
import LLLogoImg from '../images/ll-logo.svg';
import { ReactComponent as TMGLogo } from '../images/tmg-logo.svg';
import { ReactComponent as CasaLogo } from '../images/casa-logo.svg';
import { ReactComponent as EMCLogo } from '../images/emc-logo.svg';
import { ReactComponent as LLLogo } from '../images/ll-logo.svg';

const projects = [
    {
        "title": "TWO MOONS",
        "techTags": ["Flask", "Socket.io", "MySQL"],
        "images": [TMGImg1, TMGImg2, TMGImg7, TMGImg3, TMGImg4, TMGImg5, TMGImg6],
        "logo": <TMGLogo />,
        "logoImg": TMGLogoImg,
        "link": "https://twomoons.gg",
        "domain": "twomoons.gg",
        "subtitle": "A dynamic online community platform featuring real-time chat, multiple games (Snake, Connect 4, Blackjack, etc.), and a virtual economy where users can earn and gamble coins. The platform includes global leaderboards, a 24/7 custom music livestream, a shop, and daily/weekly activities like coinflips and rewards. Users can customize their profiles, view stats, and optionally link their Discord accounts for easy login. Built with React and Python Flask, it utilizes WebSockets (via SocketIO) for low-latency, real-time updates, creating an engaging and interactive experience.",
        "mainColor": "#12DEDD"
    },
    {
        "title": "LecturaLab",
        "techTags": ["React", "Express", "OpenAI"],
        "images": [LLImg1, LLImg5, LLImg4, LLImg2, LLImg3],
        "logo": <LLLogo />,
        "logoImg": LLLogoImg,
        "link": "https://lecturalab.com",
        "domain": "lecturalab.com",
        "subtitle": "An AI-powered Spanish reading comprehension tool that allows users to craft custom stories and dialogues, selecting specific pronouns, verb tenses, and vocabulary in both English and Spanish. The tool includes audio pronunciation support, word translation functionality, and a quiz generator for assessment. Users can also export stories and quizzes as PDFs for offline use, making it a versatile and interactive platform for language learning.",
        "mainColor": '#FFF'
    },
    {
        "title": "evenMoreCode",
        "techTags": ["React", "Node.js", "Prisma"],
        "images": [EMCImg1, EMCImg3, EMCImg2, EMCImg4, EMCImg5],
        "logo": <EMCLogo />,
        "logoImg": EMCLogoImg,
        "link": "https://evenmorecode.com",
        "domain": "evenmorecode.com",
        "subtitle": "An e-commerce platform designed to showcase and monetize YouTube tutorial content, allowing users to purchase source code from specific videos. The site integrates with the YouTube API to fetch newly uploaded videos and subscriber counts. When a purchase is made, users are guided through a secure checkout process via Stripe. The source code files are stored securely in an AWS S3 private bucket, and upon successful payment, users receive an automated email with a secure download link.",
        "mainColor": "#01BFD7"
    },
    {
        "title": "Casa Carlos",
        "techTags": ["React", "JavaScript", "CSS"],
        "images": [CCRImg1, CCRImg4, CCRImg2, CCRImg3],
        "logo": <CasaLogo />,
        "logoImg": CasaLogoImg,
        "link": "https://casacarlosrestaurant.com",
        "domain": "casacarlosrestaurant.com",
        "subtitle": "A React-based website for a family-owned Mexican restaurant, part of a rebranding effort. Showcases the restaurant's atmosphere with images, featuring restaurant info, family history, photos, a dynamic menu with prices, and online ordering. Mobile-responsive with analytics tracking over 700 monthly visits. The site's design aligns with the restaurant's heritage, blending vibrant visuals with a clean, modern interface.",
        "mainColor": "#D38E4A"
    }
];

export {
    projects
};