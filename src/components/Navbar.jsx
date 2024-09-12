import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-full sticky top-0 flex justify-between items-center py-3 px-4 sm:px-8 bg-white z-[10000]">
            <div>
                <Link to="/" className="text-2xl font-bold tracking-wider">
                    {/* Elvis
                    <span className="text-red-600">Kiarie</span> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" width="200" height="60">
                        <circle cx="75" cy="75" r="35" fill="red" />
                        <circle cx="75" cy="75" r="10" fill="white" />
                        <line x1="75" y1="40" x2="75" y2="10" stroke="red" strokeWidth="6" />
                        <line x1="75" y1="110" x2="75" y2="140" stroke="red" strokeWidth="6" />
                        <line x1="40" y1="75" x2="10" y2="75" stroke="red" strokeWidth="6" />
                        <line x1="110" y1="75" x2="140" y2="75" stroke="red" strokeWidth="6" />

                        <text x="150" y="90" fontFamily="Arial" fontSize="70" fontWeight="bold" fill="red">
                            my
                        </text>
                        <text x="250" y="90" fontFamily="Arial" fontSize="70" fontWeight="bold" fill="black">
                            Hub
                        </text>
                    </svg>

                </Link>
            </div>
            <div className="flex items-center">
                {/* Desktop Navigation */}
                <ul className="hidden sm:flex sm:gap-8">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `font-normal hover:text-red-600 transition-all text-lg ${isActive ? 'active' : ''}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `font-normal hover:text-red-600 transition-all text-lg ${isActive ? 'active' : ''}`}
                        >
                            Projects
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => `font-normal hover:text-red-600 transition-all text-lg ${isActive ? 'active' : ''}`}
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `font-normal hover:text-red-600 transition-all text-lg ${isActive ? 'active' : ''}`}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `font-normal hover:text-red-600 transition-all text-lg  ${isActive ? 'active' : ''}`}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="sm:hidden relative">
                    <button onClick={toggleMobileMenu} className="text-gray-700">
                        {isMobileMenuOpen ? (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>


                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                            <ul className="flex flex-col gap-2 p-4">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => `block font-bold hover:text-red-600 transition-all ${isActive ? 'active' : ''}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) => `block font-bold hover:text-red-600 transition-all ${isActive ? 'active' : ''}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Projects
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive }) => `block font-bold hover:text-red-600 transition-all ${isActive ? 'active' : ''}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) => `block font-bold hover:text-red-600 transition-all ${isActive ? 'active' : ''}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => `block font-bold hover:text-red-600 transition-all ${isActive ? 'active' : ''}`}
                                        onClick={toggleMobileMenu}
                                    >
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;