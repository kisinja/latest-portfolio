import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import RightArrow from "../components/RightArrow";
import Projects from "../components/Projects";
import myImage from '../assets/edited-1.png';

const Home = () => {
  return (
    <main className="px-4 xl:px-12 py-6 sm:py-12 bg-gray-100">
      <section>
        <div className="flex md:flex-row flex-col sm:justify-evenly gap-6 sm:gap-12 items-center">
          <div className="w-full sm:w-[350px] h-[300px] sm:h-80 relative" id="">
            <div className="bg-white flex justify-center items-center h-[300px] w-[300px] rounded-full ">
              <img src={myImage} alt="" className="" />
            </div>
          </div>
          <div className="flex flex-col text-center gap-4 w-full sm:w-[400px]">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">I’m Elvis Kiarie</h1>
            <p className="text-lg sm:text-md tracking-wider text-gray-500 font-semibold">I’m a <span className="text-red-600">Software Engineer</span></p>
            <p className="text-gray-600 text-base sm:text-lg tracking-wider leading-7">I’m a Student at GomyCode Kenya, passionate about crafting innovative solutions. Proficient in front-end technologies like React and back-end frameworks like Express.js. Dedicated to continuous learning and eager to embark on professional endeavors. Excited to contribute to cutting-edge projects and make a meaningful impact in the tech industry.</p>
            <div className="flex justify-center items-center md:mx-0">
              <Link to="/contact">
                <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-xl mt-4 hover:bg-red-700 transition-all flex items-center gap-3">Get In Touch <RightArrow /> </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gray-300 mt-12">
        <section className="px-[5%] py-[60px]">
          <div className="flex justify-center">
            <Skills />
          </div>
        </section>
      </main>
      <main className="bg-white">
        <section className="px-[5%] py-[60px]">
          <h1 className="text-gray-800 text-3xl font-light tracking-wider text-center sm:text-left mb-8">Featured Projects</h1>
          <div className="flex justify-center">
            <Projects />
          </div>
          <div className="text-center mt-[60px] flex justify-center items-center">
            <Link to="/projects">
              <button className="bg-red-600 py-3 px-6 rounded-lg text-white hover:bg-red-700 flex gap-2 items-center">
                More Projects
                <RightArrow />
              </button>
            </Link>
          </div>
        </section>
      </main>
    </main>
  );
}

export default Home