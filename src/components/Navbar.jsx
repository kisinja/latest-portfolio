import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="w-full sticky top-0 flex justify-between items-center py-3 px-[5%] bg-white z-[10000]">
            <div>
                <Link to="/">
                    <h1 className="text-2xl font-bold tracking-wider">
                        <span>Elvis</span>
                        <span className="text-red-600">Kiarie</span>
                    </h1>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="hidden sm:flex sm:gap-8">
                    <li>
                        <Link to="/" className="font-bold hover:text-red-600 transition-all">HOME</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="font-bold hover:text-red-600 transition-all">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="font-bold hover:text-red-600 transition-all">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="font-bold hover:text-red-600 transition-all">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/about" className="font-bold hover:text-red-600 transition-all">ABOUT</Link>
                    </li>
                </ul>
                <div className="absolute right-[5%] sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
