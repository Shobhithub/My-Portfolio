import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaCode, FaUserGraduate, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

/* ✅ Define this (you were missing it) */
const aboutInfo = [
    {
        icon: FaCode,
        title: "Skills",
        description: "Experienced in React, Node.js, JavaScript, and modern web technologies."
    },
    {
        icon: FaUserGraduate,
        title: "Education",
        description: "B.Tech in Computer Science with strong academic background."
    },
    {
        icon: FaProjectDiagram,
        title: "Projects",
        description: "Built multiple real-world applications including ML and full-stack projects."
    },
    {
        icon: FaLaptopCode,
        title: "Experience",
        description: "Hands-on internship and development experience."
    }
];

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id="about"
            className="py-20 bg-dark-200 text-white"
        >
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    About <span className="text-purple">Me</span>
                </h2>

                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
                    Get to know more about my background and passion
                </p>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image */}
                    <div className="md:w-1/2 rounded-4xl overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            src={assets.profileImg}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <div className="rounded-2xl p-8">

                            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

                            <p className="text-gray-300 mb-6">
                                I am a passionate full stack developer with a love for creating innovative web applications.
                                My journey in tech started with curiosity about how websites work, which quickly evolved into
                                a deep passion for coding and design.
                            </p>

                            <p className="text-gray-300 mb-6">
                                I enjoy learning new technologies, contributing to projects, and building applications
                                that solve real-world problems. My goal is to create impactful and user-friendly digital experiences.
                            </p>

                            {/* Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {aboutInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 hover:scale-105 cursor-pointer"
                                    >
                                        <div className="text-purple text-4xl mb-4">
                                            <item.icon />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
};

export default About;