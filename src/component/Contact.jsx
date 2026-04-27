import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>

                {/* Heading */}
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-white'>
                    Get in <span className='text-purple'>Touch</span>
                </h2>

                <p className='text-center text-gray-300 max-w-2xl mx-auto mb-16'>
                    Let's collaborate and create something amazing together!
                </p>

                {/* Form */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                    <form className='space-y-6'>

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple text-white'
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple text-white'
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2'>
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple text-white'
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className='w-full bg-purple text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-300'
                        >
                            Send Message
                        </button>

                    </form>

                    {/* Right Side (optional info box) */}
                    <div className='bg-dark-300 rounded-2xl p-8 flex flex-col justify-center'>
                        <h3 className='text-xl font-semibold text-white mb-4'>
                            Let's talk
                        </h3>
                        <p className='text-gray-300 mb-4'>
                            I'm open to freelance work, internships, and collaborations.
                        </p>
                        <p className='text-gray-400'>📧 joshanshu352@gmail.com</p>
                    </div>

                </div>

            </div>
        </motion.div>
    )
}

export default Contact;