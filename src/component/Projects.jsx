import React from 'react'
import { motion as Motion } from 'framer-motion'
import { projects } from '../assets/assets'   // ✅ FIXED
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            id='projects'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>

                <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-white'>
                    My <span className='text-purple'>Projects</span>
                </h2>

                <p className='text-center text-gray-300 max-w-2xl mx-auto mb-16'>
                    Here are some of the projects I have worked on.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {
                        projects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                            />
                        ))
                    }
                </div>

                <div className=' text-center mt-12'>
                    <a href="#" className=' inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition justify-center duration-300'>
                    <span >View More Projects</span>
                    <FaArrowRight className="ml-2"/>
                    </a>
                </div>

            </div>
        </Motion.div>
    )
}

export default Projects;