import {
    FaLightbulb,
    FaPaintBrush,
    FaCode,
    FaReact,
    FaServer,
    FaMobileAlt,
    FaTools,
    FaNodeJs,
    FaStripe,
    FaVuejs,
    FaFire,
    FaDatabase,
    FaCloud,
    FaRobot
} from 'react-icons/fa'

import profileImg from '../assets/pic.png'

import projectImg1 from '../assets/project1.avif'
import projectImg2 from '../assets/project2.avif'
import projectImg3 from '../assets/project3.avif'
import projectImg4 from '../assets/project4.avif'
import projectImg5 from '../assets/project5.avif'
import projectImg6 from '../assets/project6.avif'


// ===============================
// Assets
// ===============================

export const assets = {
    profileImg,
}


// ===============================
// About Information
// ===============================

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description:
            'I love creating unique solutions to complex problems with modern technologies.',
        color: 'text-purple'
    },

    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description:
            'Beautiful design and user experience are at the heart of everything I create.',
        color: 'text-pink'
    },

    {
        icon: FaCode,
        title: 'Clean Code',
        description:
            'I write maintainable, efficient code following best practices and modern patterns.',
        color: 'text-blue'
    }
]


// ===============================
// Skills
// ===============================

export const skills = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        description:
            'Building responsive and interactive user interfaces with modern frameworks.',
        tags: [
            'React',
            'Vue.js',
            'Angular',
            'TypeScript'
        ]
    },

    {
        title: 'Backend Development',
        icon: FaServer,
        description:
            'Creating robust server-side applications and RESTful APIs.',
        tags: [
            'Node.js',
            'Express',
            'Django',
            'Laravel'
        ]
    },

    {
        title: 'Database Management',
        icon: FaDatabase,
        description:
            'Designing and optimizing databases for performance and scalability.',
        tags: [
            'MongoDB',
            'PostgreSQL',
            'MySQL',
            'Firebase'
        ]
    },

    {
        title: 'Mobile Development',
        icon: FaMobileAlt,
        description:
            'Building cross-platform mobile applications with modern tools.',
        tags: [
            'React Native',
            'Flutter',
            'Ionic',
            'Swift'
        ]
    },

    {
        title: 'Cloud & DevOps',
        icon: FaCloud,
        description:
            'Deploying and managing applications in cloud environments.',
        tags: [
            'AWS',
            'Docker',
            'Kubernetes',
            'CI/CD'
        ]
    },

    {
        title: 'Tools & Technologies',
        icon: FaTools,
        description:
            'Essential tools and technologies I use in my development workflow.',
        tags: [
            'Git & GitHub',
            'Webpack',
            'Figma',
            'Jest'
        ]
    }
]


// ===============================
// Projects
// ===============================

export const projects = [

    // --------------------------------
    // 1. Safety Application
    // --------------------------------

    {
        title: "Safety Application",

        description:
            "A full-stack personal safety web application with real-time navigation, live location tracking, emergency alert sharing, JWT authentication, and role-based authorization.",

        image: projectImg1,

        tech: [
            "MERN Stack",
            "Docker",
            "Google Maps API",
            "WhatsApp API",
            "JWT"
        ],

        icons: [
            FaReact,
            FaNodeJs,
            FaDatabase,
            FaCloud
        ],

        demo: "",

        github: ""
    },


    // --------------------------------
    // 2. Real-Time Chat Application
    // --------------------------------

    {
        title: "Real-Time Chat Application",

        description:
            "A real-time messaging platform using Socket.IO for low-latency communication with media and file sharing, authentication, chat history, and online/offline presence.",

        image: projectImg2,

        tech: [
            "MERN Stack",
            "Socket.IO",
            "Multer",
            "MongoDB"
        ],

        icons: [
            FaReact,
            FaNodeJs,
            FaDatabase
        ],

        demo: "",

        github: ""
    },


    // --------------------------------
    // 3. Event Management System
    // --------------------------------

    {
        title: "Event Management System",

        description:
            "A full-featured event management platform with user registration, event booking, admin dashboard, secure authentication, and REST APIs.",

        image: projectImg3,

        tech: [
            "MERN Stack",
            "JWT",
            "Bcrypt",
            "Postman"
        ],

        icons: [
            FaReact,
            FaNodeJs,
            FaDatabase
        ],

        demo: "",

        github: ""
    },


    // --------------------------------
    // 4. Library Management System
    // --------------------------------

    {
        title: "Library Management System",

        description:
            "A web-based library management system that allows students to request and manage issued books while administrators can manage student and library records online.",

        image: projectImg4,

        tech: [
            "React",
            "Node.js",
            "MongoDB"
        ],

        icons: [
            FaReact,
            FaNodeJs,
            FaDatabase
        ],

        demo: "https://fancy-panda-fdf021.netlify.app",

        github: ""
    },


    // --------------------------------
    // 5. Task Management System
    // --------------------------------

    {
        title: "Task Management System",

        description:
            "A productivity application for managing tasks with CRUD functionality, responsive UI, and persistent data storage.",

        image: projectImg5,

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "Tailwind CSS"
        ],

        icons: [
            FaFire,
            FaCloud,
            FaDatabase
        ],

        demo: "https://glittery-kitten-c9662f.netlify.app",

        github: ""
    },


    // --------------------------------
    // 6. Login System
    // --------------------------------

    {
        title: "OTP Login System",

        description:
            "An OTP-based authentication system that verifies a user's email address using a one-time password.",

        image: projectImg6,

        tech: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Nodemailer"
        ],

        icons: [
            FaReact,
            FaNodeJs,
            FaDatabase
        ],

        demo: "",

        github: ""
    },


    // --------------------------------
    // 7. Portfolio Website
    // --------------------------------

    {
        title: "Portfolio Website",

        description:
            "A responsive personal portfolio website showcasing projects, skills, experience, and contact information with modern animations.",

        image: projectImg4,

        tech: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "JavaScript"
        ],

        icons: [
            FaReact,
            FaCloud
        ],

        demo: "",

        github: ""
    },


    // --------------------------------
    // 8. Cafe Website
    // --------------------------------

    {
        title: "Cafe Website",

        description:
            "A modern responsive cafe website designed to provide an engaging online experience for customers.",

        image: projectImg5,

        tech: [
            "React",
            "Node.js"
        ],

        icons: [
            FaReact,
            FaNodeJs,
            FaDatabase
        ],

        // IMPORTANT:
        // https:// is required here
        demo: "https://timely-donut-6a406f.netlify.app",

        github: ""
    },


    // --------------------------------
    // 9. Video Call Application
    // --------------------------------

    {
        title: "Video Call Application",

        description:
            "A private video calling application designed for real-time communication between users.",

        image: projectImg6,

        tech: [
            "React",
            "OpenAI API",
            "Cloudinary",
            "Tailwind CSS"
        ],

        icons: [
            FaRobot,
            FaReact,
            FaCloud
        ],

        demo: "https://tourmaline-gecko-3e5a93.netlify.app",

        github: ""
    }

]


// ===============================
// Work Experience
// ===============================

//This is New assets.js

export const workData = [
    {
        role: "Web Developer",
        company: "Haridwar University",
        duration: "2023-present",

        description:
            "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",

        color: "pink"
    }
]