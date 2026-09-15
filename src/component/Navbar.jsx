import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark-100/90 backdrop-blur-sm shadow-lg">

            {/* Main Navbar */}
            <div className="container mx-auto px-5 sm:px-8 py-4">

                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div>
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="text-2xl sm:text-3xl font-bold text-white inline-flex items-center"
                        >
                            Shobhit
                            <span className="text-purple ml-1">
                                Saurabh
                            </span>

                            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple rounded-full ml-1 mt-4"></span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-10">

                        <a
                            href="#home"
                            className="relative text-white/80 transition duration-300 hover:text-purple group"
                        >
                            <span>Home</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#about"
                            className="relative text-white/80 transition duration-300 hover:text-purple group"
                        >
                            <span>About</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#skills"
                            className="relative text-white/80 transition duration-300 hover:text-purple group"
                        >
                            <span>Skills</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#projects"
                            className="relative text-white/80 transition duration-300 hover:text-purple group"
                        >
                            <span>Projects</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#experience"
                            className="relative text-white/80 transition duration-300 hover:text-purple group"
                        >
                            <span>Experience</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#contact"
                            className="relative text-white/80 transition duration-300 hover:text-purple group"
                        >
                            <span>Contact</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                        </a>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setShowMenu(!showMenu)}
                        className="md:hidden text-white text-2xl p-2 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={showMenu}
                    >
                        {showMenu ? <FaXmark /> : <FaBars />}
                    </button>

                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        showMenu
                            ? 'max-h-96 opacity-100 mt-4'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="bg-dark-300 rounded-xl p-5 flex flex-col space-y-4 shadow-lg">

                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="text-white/80 hover:text-purple transition duration-300 py-2"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="text-white/80 hover:text-purple transition duration-300 py-2"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            onClick={closeMenu}
                            className="text-white/80 hover:text-purple transition duration-300 py-2"
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="text-white/80 hover:text-purple transition duration-300 py-2"
                        >
                            Projects
                        </a>

                        <a
                            href="#experience"
                            onClick={closeMenu}
                            className="text-white/80 hover:text-purple transition duration-300 py-2"
                        >
                            Experience
                        </a>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="text-white/80 hover:text-purple transition duration-300 py-2"
                        >
                            Contact
                        </a>

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar