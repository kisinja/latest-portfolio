import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="flex gap-4 mb-4">
                        <a
                            href="https://www.instagram.com/lvs.gk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-red-600 transition-colors"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/elvis-kiarie-ab915427b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-red-600 transition-colors"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://github.com/kisinja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-red-600 transition-colors"
                        >
                            <FaGithub className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Elvis Kiarie. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;