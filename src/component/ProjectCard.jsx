import React from 'react'

const ProjectCard = ({ project }) => {
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

                <h3 className='text-xl font-semibold mb-2 text-white'>
                    {project.title}
                </h3>

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

                <div className='flex gap-4 mt-6'>
                    <a href="#" className='flex-1 text-center px-4 py-2 bg-purple  font-medium rounded-lg hover:bg-purple-700 transition duration-300'>
                        View Demo
                    </a>
                    <a href="#" className='flex-1 text-center px-4 py-2 border border-purple  font-medium rounded-lg hover:bg-purple/20 transition duration-300'>Code</a>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;