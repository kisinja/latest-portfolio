import { Link } from 'react-router-dom';
import { frontEnd, backEnd, otherSkills } from '../assets/index';
import RightArrow from './RightArrow';

const Skills = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-left">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mx-auto">
                <div className="bg-white rounded-lg shadow-md w-[430px] text-center sm:w-[380px]">
                    <div className="w-full bg-red-200 p-2 rounded-t-lg">
                        <h1 className="text-xl font-bold text-gray-800">Frontend</h1>
                    </div>
                    <ul className="mt-3 flex flex-col gap-5 py-1 px-2 divide-y-2">
                        {frontEnd.map((item) => (
                            <li className="text-gray-600 font-semibold flex gap-3 justify-between items-center w-full p-2 rounded hover:bg-red-100 transition-all" key={item.id}>
                                <img src={item.img} alt={item.name} className="w-20 h-15 inline-block object-cover" />
                                <p className="text-lg font-semibold">{item.name}</p>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md w-[430px] text-center sm:w-[380px]">
                    <div className="w-full bg-red-200 p-2 rounded-t-lg">
                        <h1 className="text-xl font-bold text-gray-800">Backend</h1>
                    </div>
                    <ul className="mt-3 flex flex-col gap-5 py-1 px-2 divide-y-2">
                        {backEnd.map((item) => (
                            <li className="text-gray-600 font-semibold flex gap-3 justify-between items-center w-full p-2 rounded hover:bg-red-100 transition-all" key={item.id}>
                                <img src={item.img} alt={item.name} className="w-19 h-9 inline-block object-cover" />
                                <p className="text-lg font-semibold">{item.name}</p>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md w-[430px] text-center sm:w-[380px]">
                    <div className="w-full bg-red-200 p-2 rounded-t-lg">
                        <h1 className="text-xl font-bold text-gray-800">Other Skills</h1>
                    </div>
                    <ul className="mt-3 flex flex-col gap-5 divide-y-2 py-1 px-2">
                        {otherSkills.map((item) => (
                            <li className="text-gray-600 font-semibold flex gap-3 justify-between items-center w-full p-2 rounded hover:bg-red-100 transition-all" key={item.id}>
                                <img src={item.img} alt={item.name} className="w-19 h-9 inline-block object-cover" />
                                <p className="text-lg font-semibold">{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='text-center'>
                <Link to="/projects"><button className="py-3 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold mt-5 flex justify-center gap-3 items-center mx-auto">See Projects <RightArrow /> </button></Link>
            </div>
        </div>
    )
}

export default Skills
