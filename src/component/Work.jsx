import React from 'react'
import { motion as Motion } from 'framer-motion'

const experiences = [
    {
        title: 'Software Developer Intern',
        company: 'Willovate Pvt Ltd',
        duration: 'June 2026 – August 2026',
        description:
            'Worked on web application development using React, TypeScript, Tailwind CSS, and C# ASP.NET. Integrated frontend and backend functionality, fixed features, participated in code reviews and testing, and collaborated with the team using Git, GitHub, feature branches, and pull requests in an Agile environment.',
        technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'C#',
            'ASP.NET',
            'Git',
            'GitHub'
        ]
    },
    {
        title: 'Web Developer Intern',
        company: 'Aarsh AI Technologies',
        duration: 'June 2026 – July 2026',
        description:
            'Developed an Event Management application using the MERN stack. Worked on React frontend development, REST API integration, backend functionality, database operations, and CRUD features.',
        technologies: [
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'REST APIs',
            'CRUD'
        ]
    },
    {
        title: 'Software Developer Intern',
        company: 'Yuga Yatra',
        duration: 'April 2026 – June 2026',
        description:
            'Developed responsive web applications using React and Tailwind CSS. Built reusable UI components, worked with Node.js, and improved the responsiveness and overall user experience of web pages.',
        technologies: [
            'React',
            'Tailwind CSS',
            'Node.js',
            'JavaScript',
            'Responsive Design'
        ]
    },
    {
        title: 'Data Science & Machine Learning Intern',
        company: 'CertED',
        duration: 'June 2025 – August 2025',
        description:
            'Worked with Python for data processing and machine learning tasks using Pandas and NumPy. Worked on a Smart Music Player recommendation project involving data analysis and recommendation concepts.',
        technologies: [
            'Python',
            'Pandas',
            'NumPy',
            'Machine Learning',
            'Data Science'
        ]
    }
]

const Work = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: 'easeOut'
            }}
            viewport={{ once: true }}
            id="experience"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                    My <span className="text-purple">Experience</span>
                </h2>

                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
                    My professional experience and internships in software
                    development, web development, and machine learning.
                </p>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-10">

                        {experiences.map((data, index) => (
                            <Motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -30 : 30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                                viewport={{ once: true }}
                                className="relative pl-10 md:pl-12"
                            >

                                {/* Timeline Line */}
                                <div
                                    className="absolute left-[5px] md:left-[6px] top-0 
                                    w-[2px] h-full bg-purple"
                                ></div>

                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-[-4px] md:left-[-3px] top-1
                                    w-5 h-5 rounded-full bg-purple
                                    border-4 border-dark-200"
                                ></div>

                                {/* Experience Card */}
                                <div
                                    className="bg-dark-300 rounded-2xl p-6 md:p-8
                                    hover:-translate-y-2
                                    transition-all duration-300
                                    border border-transparent
                                    hover:border-purple/40"
                                >

                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">

                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-white">
                                                {data.title}
                                            </h3>

                                            <p className="text-purple font-medium mt-1">
                                                {data.company}
                                            </p>
                                        </div>

                                        <span
                                            className="text-sm text-gray-400
                                            bg-dark-200 px-3 py-1 rounded-full
                                            whitespace-nowrap"
                                        >
                                            {data.duration}
                                        </span>

                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 leading-relaxed mb-5">
                                        {data.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {data.technologies.map((technology, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-sm text-purple
                                                bg-purple/10
                                                border border-purple/20
                                                px-3 py-1 rounded-full"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                            </Motion.div>
                        ))}

                    </div>
                </div>

            </div>
        </Motion.div>
    )
}

export default Work