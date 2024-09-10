import { projectList } from '../assets/index';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="w-full flex flex-col gap-8 items-center sm:gap-5 sm:flex-row sm:justify-between mx-auto px-4">
            {projectList.map((item) => (
                <Link to={item.link} target='_blank' key={item.id}>
                    <div className='relative cursor-pointer border-2 border-red-600 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105' title='See Project'>
                        <img src={item.img} className='w-full h-56 sm:h-48 object-cover' alt="project" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 opacity-0 hover:opacity-100 transition-opacity">
                            <p className="text-xl text-white font-bold mb-2">{item.name}</p>
                            <p className="text-sm text-white">{item.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Projects;