import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id='experience'
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                    My <span className="text-purple">Experience</span>
                </h2>

                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
                    I have gained valuable experience through internships and projects.
                </p>

                <div className='max-w-4xl mx-auto'>
                    <div className='space-y-8'>

                        {workData.map((data, index) => (
                            <div
                                key={index}
                                className="relative pl-12 
                                before:content-[''] before:absolute before:left-0 
                                before:top-0 before:w-[2px] before:h-full 
                                before:bg-purple cursor-pointer 
                                hover:-translate-y-2 transition-all duration-300"
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple"></div>

                                {/* Card */}
                                <div className="bg-dark-300 rounded-2xl p-6">

                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold text-white">
                                            {data.title}
                                        </h3>
                                        <span className="text-sm text-gray-400">
                                            {data.duration}
                                        </span>
                                    </div>

                                    <p className="text-purple mb-2">
                                        {data.company}
                                    </p>

                                    <p className="text-gray-300">
                                        {data.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Work;