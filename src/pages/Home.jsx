import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import RightArrow from "../components/RightArrow";
import Projects from "../components/Projects";

const Home = () => {
  return (<>
    <header className="px-[5%] py-4 sm:py-[50px] bg-gray-100">
      <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-5 sm:gap-[100px]">
        <div className="w-full sm:w-[500px] h-[400px] sm:h-[400px] relative" id="image-c">
        </div>
        <div className="flex flex-col text-center sm:text-left gap-2 w-full sm:gap-4 sm:w-[500px]">
          <h1 className="text-4xl font-bold text-gray-800">I{"'"}m Elvis Kiarie</h1>
          <p className="text-md tracking-wider text-gray-500 font-semibold">I{"'"}m an <span className="text-red-600">Engineer</span></p>
          <p className="text-gray-600 text-lg tracking-wider leading-7">I{"'"}m Fullstack software engineer student at GomyCode Kenya, passionate about crafting innovative solutions. Proficient in front-end technologies like React and back-end frameworks like Express.js. Dedicated to continuous learning and eager to embark on professional endeavors. Excited to contribute to cutting-edge projects and make a meaningful impact in the tech industry.</p>
          <div className="mx-auto sm:text-left">
            <Link to="/contact">
              <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-xl mt-4 hover:bg-red-700 transition-all flex items-center gap-3">Hire Me <RightArrow /> </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
    <main className="bg-gray-300">
      <section className="px-[5%] py-[60px]">
        <div className="flex justify-center">
          <Skills />
        </div>
      </section>
    </main>
    <main className="bg-white">
      <section className="px-[5%] py-[60px]">
        <h1 className="text-gray-800 text-3xl font-bold tracking-wider text-center sm:text-left mb-8">Featured Projects</h1>
        <div className="flex justify-center">
          <Projects />
        </div>
        <div className="text-center mt-[60px]">
          <Link to="/projects">
            <button className="bg-red-600 py-3 px-6 rounded-lg text-white hover:bg-red-700">More Projects</button>
          </Link>
        </div>
      </section>
    </main>
  </>
  );
}

export default Home