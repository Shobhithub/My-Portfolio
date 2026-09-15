import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaCode } from "react-icons/fa"

/* ✅ Define skills */
const skills = [
    {
        icon: FaReact,
        title: "Frontend",
        description: "Building responsive UI using React, HTML, CSS, JavaScript.",
        tags: ["React", "HTML", "CSS", "JS"]
    },
    {
        icon: FaNodeJs,
        title: "Backend",
        description: "Developing APIs using Node.js and Express.",
        tags: ["Node.js", "Express", "API"]
    },
    {
        icon: FaDatabase,
        title: "Database",
        description: "Working with SQL databases and data handling.",
        tags: ["SQL", "MongoDB"]
    },
    {
        icon: FaCode,
        title: "Programming",
        description: "Strong problem-solving using C++ and JavaScript.",
        tags: ["C++", "DSA"]
    }
]

const Skills = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id='skills'
            className='py-20 bg-dark-100 text-white'
        >
            <div className='container mx-auto px-6'>

                <h2 className='text-3xl font-bold text-center mb-4'>
                    My <span className='text-purple'>Skills</span>
                </h2>

                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>
                    I have a strong foundation in web development technologies and enjoy building scalable applications.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {
                        skills.map((skill, index) => (
                            <div 
                                key={index} 
                                className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 hover:scale-105 transition duration-300 cursor-pointer'
                            >
                                <div className='flex items-center mb-4'>
                                    <skill.icon className='text-3xl text-purple mr-4' />
                                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                                </div>

                                <p className='text-gray-400 mb-4'>{skill.description}</p>

                                <div className='flex flex-wrap gap-2'>
                                    {skill.tags.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className='px-3 py-1 bg-dark-400 rounded-full text-sm'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </Motion.div>
    )
}

export default Skills;