import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 sm:px-12">
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center sm:text-left py-3 px-8 bg-white rounded shadow">
          <small className='mb-4'>
            <h5 className='text-red-600 font-bold underline'>ABOUT ME</h5>
          </small>
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-4">
            Hi, I&apos;m Elvis Githinji
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Innovative Software Developer Specializing in Full-Stack Web Development and Scalable Solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
            <a href={`mailto:kisinjaelvis@gmail.com`} className="hover:underline flex items-center gap-2 text-gray-600 underline">
              <FaMailBulk className='text-lg text-gray-800' />
              kisinjaelvis@gmail.com
            </a>
            <span className="text-gray-500">|</span>
            <a href={`tel:+254713782003`} className="hover:underline flex items-center gap-2 text-gray-600 underline">
              <FaPhoneAlt />
              +254 713 782 003
            </a>
          </div>
        </header>

        {/* Summary Section */}
        <section id="summary" className="mt-12 mb-8 py-3 px-8 rounded-lg shadow">
          <h2 className="text-2xl sm:text-3xl font-light text-red-600 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate and dedicated software developer with experience in creating dynamic and responsive web applications. Proficient in modern technologies such as React.js, Node.js, and MongoDB, with a strong focus on building scalable and efficient solutions. Adept at problem-solving, debugging, and collaborating with cross-functional teams to deliver high-quality software products. Committed to continuous learning and staying updated with industry trends to drive innovation and success in every project.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-12 mb-8 py-3 px-8 rounded-lg shadow">
          <h2 className="text-2xl sm:text-3xl font-light text-red-600 mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'MERN Stack', description: 'Full-Stack Development', keywords: ['React', 'Node-JS', 'Mongo DB', 'Express JS'] },
              { name: 'Tailwind CSS', description: 'Styling', keywords: ['tailwindcss'] },
              { name: 'Next JS', description: 'Framework', keywords: ['Next Js'] },
              { name: 'Sanity IO', description: 'CMS', keywords: ['sanity io'] },
              { name: 'Typescript', description: 'Language', keywords: ['sanity io'] },
              { name: 'MySQL', description: 'Databases', keywords: ['typescript'] },
            ].map(skill => (
              <div key={skill.name} className="bg-white shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600 mb-4 text-sm italic">{skill.description}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {skill.keywords.map(keyword => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-12 mb-8 py-3 px-8 rounded-lg shadow">
          <h2 className="text-2xl sm:text-3xl font-light text-red-600 mb-4">Education</h2>
          <div className="space-y-6">
            {[
              {
                institution: 'Multimedia University of Kenya',
                studyType: "Bachelor's Degree",
                area: 'Computer Technology',
                date: 'August 2021 - 2026',
                summary: 'Currently pursuing a degree in Computer Technology with a focus on acquiring advanced knowledge and skills in software development, network systems, and multimedia technologies. Strong foundation in programming languages, data structures, and algorithms.',
              },
              {
                institution: 'GomyCode Kenya',
                studyType: 'Diploma',
                area: 'Software Development',
                date: 'February 2024 - July 2024',
                summary: 'Enthusiastic software development student gaining comprehensive skills in modern web technologies and programming languages. Proficient in building responsive and user-friendly applications using frameworks such as React.js and Node.js.',
              }
            ].map(edu => (
              <div key={edu.institution} className="bg-white shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.institution}</h3>
                <p className="text-gray-600 mb-1">{edu.studyType} in {edu.area}</p>
                <p className="text-gray-500 mb-4">{edu.date}</p>
                <p className="text-gray-700">{edu.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mt-12 mb-8 py-3 px-8 rounded-lg shadow">
          <h2 className="text-2xl sm:text-3xl font-light text-red-600 mb-4">Experience</h2>
          <div className="space-y-6">
            {[
              {
                company: 'Megadel Africa',
                position: 'Backend Engineer - Internship',
                location: '10 Hughes Ave, Alagomeji-Yaba, Lagos',
                date: 'September 2024 - November 2024',
                summary: 'Designed, developed, tested, and deployed backend services and APIs. Implemented authentication, authorization, and security measures while optimizing performance for scalability. Collaborated with frontend engineers and participated in code reviews to maintain a reliable and secure backend.'
              }
            ].map(exp => (
              <div key={exp.company} className="bg-white shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{exp.position}</h3>
                <p className="text-gray-600 mb-1">{exp.company}</p>
                <p className="text-gray-500 mb-1">{exp.location}</p>
                <p className="text-gray-500 mb-4">{exp.date}</p>
                <p className="text-gray-700">{exp.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-12 mb-8 py-3 px-8 rounded-lg shadow">
          <h2 className="text-2xl sm:text-3xl font-light text-red-600 mb-4">Projects</h2>
          <div className="space-y-6">
            {[
              {
                name: 'Book Store Web-App',
                description: 'A simple MERN bookstore',
                date: 'June 2024 - June 2024',
                summary: 'A CRUD bookstore application built using the MERN stack. Allows users to manage a collection of books with functionalities to add, view, update, and delete books. Ensures a user-friendly interface and efficient data management.',
                url: 'https://github.com/kisinja/Book-App'
              },
              {
                name: 'TechPoster',
                description: 'Job Portal for posting and applying for jobs.',
                date: 'July 2024 - September 2024',
                summary: 'Users can search, post, and apply for jobs. Users are recommended courses upon failure to qualify for a job, based on their skills in the profile page.',
                url: 'https://techposter-frontend.onrender.com'
              },
              {
                name: 'MyDuka',
                description: 'E-commerce site for fashion and outfits.',
                date: 'Sep 2024',
                summary: 'A fashion website that offers clothing based on users\' favorite colors and sizes. Allows browsing and purchasing of curated clothing and accessories. Stripe is implemented for payment processing.',
                url: 'https://myduka-client.onrender.com'
              }
            ].map(project => (
              <div key={project.name} className="bg-white shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-1">{project.description}</p>
                <p className="text-gray-500 mb-1">{project.date}</p>
                <p className="text-gray-700 mb-4">{project.summary}</p>
                <a href={project.url} className="text-blue-600 hover:underline " target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mt-12 mb-8 py-3 px-8 rounded-lg shadow">
          <h2 className="text-2xl sm:text-3xl font-light text-red-600 mb-4">Certifications</h2>
          <div className="space-y-6">
            {[
              {
                name: 'Software Development',
                issuer: 'GomyCode Kenya',
                date: 'August 2024',
                url: 'https://diploma.gomycode.app/?id=31724580017733925'
              },
              {
                name: 'Responsive Web Design',
                issuer: 'FreeCodeCamp.org',
                date: 'June 2024',
                url: 'https://www.freecodecamp.org/certification/ElvisGithinji/responsive-web-design'
              }
            ].map(cert => (
              <div key={cert.name} className="bg-white shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-1">Issued by: {cert.issuer}</p>
                <p className="text-gray-500 mb-4">{cert.date}</p>
                <a href={cert.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Certification
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;