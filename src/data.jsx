import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Soban',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Khan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Pakistan',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Punjab Faisalabad',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+92 324 1087295',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'rsoban22@gmail.com',
  },

  {
    id: 9,
    title: 'Whatsapp : ',
    description: '+92 324 1087295',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Urdu, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '27+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '14+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '20+',
    title: ' Websites <br /> made',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Web Developer <span> Freelance </span>',
    desc: 'Developing Websites from 2 years and helping my clients to their desired website design',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - present',
    title: 'UI/UX Designer <span> Freelance </span>',
    desc: 'Learning about User interfaces and User Experiences and trying to improve my designs',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - present',
    title: 'Video Editing <span> Freelance </span>',
    desc: 'A part-time video editor with a passion for crafting engaging and visually compelling stories',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-2025',
    title: 'Computer Science <span> GCUF </span>',
    desc: 'Currently Doing my Bachelors in Computer Science form Government College University Faisalabad',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'FSC <span> PGC Jhang Road </span>',
    desc: 'Did my Fsc Pre-Medical degree from Punjab College ',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Matric <span> Laboratory High School FSD </span>',
    desc: 'Did my matric in sciences from laboratory high school faisalabad ',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '56',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'TailwindCss',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '29',
  },

  {
    id: 6,
    title: 'C++',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Nextjs',
    percentage: '32',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'NextJs Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website Developement',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Infinite Studios',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'NEXTjs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://www.infinitestudio.online/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Study Sync',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://study-sync-alpha-ten.vercel.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: ' ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Capcut',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Instagram',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Tailwind Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website with TailwindCSS',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'toDesktop',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'TailwindCSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://todesktop-app-clone.netlify.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Video Editing',
    details: [
      {
        title: 'Project : ',
        desc: 'Short Video',
      },
      {
        title: 'Client : ',
        desc: '',
      },
      {
        title: 'Language : ',
        desc: 'Capcut',
      },
      {
        title: 'Preview : ',
        desc: 'instagram',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Page',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: ' ',
      },
      {
        icon: <FaCode />,
        title: 'Software : ',
        desc: 'Figma',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
