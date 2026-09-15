import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const MotionDiv = motion.div

const Contact = () => {
    const form = useRef()
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()

        setStatus('Sending...')

        emailjs
            .sendForm(
                'service_ltaq75e',       // Your EmailJS Service ID
                'template_uou0kd9',      // Replace with your Template ID
                form.current,
                {
                    publicKey: 'bN5T8v8LzK0uwVLkW', // Replace with your Public Key
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!')

                    setStatus('Message sent successfully!')

                    // Clear form after successful submission
                    form.current.reset()
                },
                (error) => {
                    console.error('FAILED...', error)

                    setStatus(
                        'Failed to send message. Please try again.'
                    )
                }
            )
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: 'easeOut'
            }}
            viewport={{ once: true }}
            id="contact"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                    Get in <span className="text-purple">Touch</span>
                </h2>

                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
                    Let's collaborate and create something amazing together!
                </p>

                {/* Form + Contact Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-6"
                    >

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-300 mb-2"
                            >
                                Your Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple text-white"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-300 mb-2"
                            >
                                Your Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple text-white"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor = "Phone"
                                className="block text-gray-300 mb-2"
                            >
                                Your Phone
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="user_phone"
                                required
                                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple text-white"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-gray-300 mb-2"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple text-white"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'Sending...'}
                            className="w-full bg-purple text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'Sending...'
                                ? 'Sending...'
                                : 'Send Message'}
                        </button>

                        {/* Status Message */}
                        {status && (
                            <p className="text-center text-gray-300">
                                {status}
                            </p>
                        )}

                    </form>

                    {/* Right Side - Contact Information */}
                    <div className="bg-dark-300 rounded-2xl p-8 flex flex-col justify-center">

                        <h3 className="text-xl font-semibold text-white mb-4">
                            Let's talk
                        </h3>

                        <p className="text-gray-300 mb-6">
                            I'm open to freelance work, internships, and collaborations.
                        </p>

                        {/* Email */}
                        <p className="text-gray-400 mb-3">
                            📧{' '}
                            <a
                                href="mailto:shobhitsaurabh2003@gmail.com"
                                className="hover:text-purple transition"
                            >
                                shobhitsaurabh2003@gmail.com
                            </a>
                        </p>

                        {/* Phone */}
                        <p className="text-gray-400">
                            📱{' '}
                            <a
                                href="tel:6205586704"
                                className="hover:text-purple transition"
                            >
                                6205586704
                            </a>
                        </p>

                    </div>

                </div>

            </div>
        </MotionDiv>
    )
}

export default Contact