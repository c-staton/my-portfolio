import TMGImg from "../images/TMG.jpg";
import EMCImg from "../images/EMC.jpg";
import CCRImg from "../images/CCR.jpg";
import LLImg from "../images/LL.png";
import { ReactComponent as TMGLogo } from '../images/tmg-logo.svg';
import { ReactComponent as CasaLogo } from '../images/casa-logo.svg';
import { ReactComponent as EMCLogo } from '../images/emc-logo.svg';
import { ReactComponent as LLLogo } from '../images/ll-logo.svg';

const projects = [
    {
        "title": "TWOMOONS.GG",
        "techTags": ["Flask", "Socket.io", "MySQL"],
        "image": TMGImg,
        "logo": <TMGLogo />,
        "link": "https://twomoons.gg",
        "domain": "twomoons.gg"
    },
    {
        "title": "LecturaLab",
        "techTags": ["React", "Express", "OpenAI"],
        "image": LLImg,
        "logo": <LLLogo />,
        "link": "https://lecturalab.com",
        "domain": "lecturalab.com"
    },
    {
        "title": "evenMoreCode",
        "techTags": ["React", "Node.js", "Prisma"],
        "image": EMCImg,
        "logo": <EMCLogo />,
        "link": "https://evenmorecode.com",
        "domain": "evenmorecode.com"
    },
    {
        "title": "Casa Carlos Restaurant",
        "techTags": ["React", "JavaScript", "CSS"],
        "image": CCRImg,
        "logo": <CasaLogo />,
        "link": "https://casacarlosrestaurant.com",
        "domain": "casacarlosrestaurant.com"
    }
];

export {
    projects
};