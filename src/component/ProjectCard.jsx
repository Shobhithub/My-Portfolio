import React from 'react'

const ProjectCard = ({ project }) => {
    // Make sure URLs are treated as external links
    const demoUrl = project.demo
        ? project.demo.startsWith('http://') || project.demo.startsWith('https://')
            ? project.demo
            : `https://${project.demo}`
        : ''

    const githubUrl = project.github
        ? project.github.startsWith('http://') || project.github.startsWith('https://')
            ? project.github
            : `https://${project.github}`
        : ''

    return (
        <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 transition duration-300 cursor-pointer'>

            {/* Image */}
            <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover'
            />

            {/* Content */}
            <div className='p-6'>

                {/* Title */}
                <h3 className='text-xl font-semibold mb-2 text-white'>
                    {project.title}
                </h3>

                {/* Description */}
                <p className='text-gray-300 mb-4'>
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className='flex flex-wrap gap-2'>
                    {project.tech?.map((item, index) => (
                        <span
                            key={index}
                            className='px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-200'
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className='flex gap-4 mt-6'>

                    {/* View Demo */}
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 text-center px-4 py-2 bg-purple font-medium rounded-lg hover:bg-purple-700 transition duration-300'
                        >
                            View Demo
                        </a>
                    )}

                    {/* GitHub Code */}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300'
                        >
                            Code
                        </a>
                    )}

                </div>

            </div>
        </div>
    )
}

export default ProjectCard