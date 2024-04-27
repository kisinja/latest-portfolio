import { projectList } from '../assets/index';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (<>
        <div className="w-full flex flex-col gap-8 items-center sm:gap-5 sm:flex-row sm:justify-between mx-auto">
            {projectList.map((item) => (
                <Link to={item.link} target='_blank' key={item.id}>
                    <div className='w-full sm:w-[300px] h-[350px] sm:h-[300px] relative cursor-pointer' title='see project' id='project'>
                        <div className='h-full w-full'>
                            <img src={item.img} className='h-full w-full object-cover rounded-lg' alt="project" id="project-img" />
                        </div>
                        <div className="absolute bg-red-600 bg-opacity-80 w-full rounded-b-lg" id='project-details'>
                            <p className="text-md text-white font-bold tracking-wider">{item.name}.</p>
                            <p className="text-lg text-white tracking-wider">{item.description}.</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </>

    );
}

export default Projects;
