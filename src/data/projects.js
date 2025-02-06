import TMGImg from "../images/TMG.jpg";
import EMCImg from "../images/EMC.jpg";
import CCRImg from "../images/CCR.jpg";
import LLImg from "../images/LL.png";

const projects = [
    {
        "title": "twomoons.gg",
        "techTags": ["Flask", "Socket.io", "MySQL"],
        "image": TMGImg,
        "link": "https://twomoons.gg",
        "domain": "twomoons.gg"
    },
    {
        "title": "LecturaLab",
        "techTags": ["React", "Express", "OpenAI"],
        "image": LLImg,
        "link": "https://lecturalab.com",
        "domain": "lecturalab.com"
    },
    {
        "title": "evenMoreCode",
        "techTags": ["React", "Node.js", "Prisma"],
        "image": EMCImg,
        "link": "https://evenmorecode.com",
        "domain": "evenmorecode.com"
    },
    {
        "title": "Casa Carlos",
        "techTags": ["React", "JavaScript", "CSS"],
        "image": CCRImg,
        "link": "https://casacarlosrestaurant.com",
        "domain": "casacarlosrestaurant.com"
    }
];

export {
    projects
};