import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';

const Blog = () => {

  const BASE_URL = 'https://myhub-server.onrender.com/api';

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
          console.log(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }

    getBlogs();
  }, []);

  return (<>
    <header id='blog-header' className='h-[300px] sm:h-[500px] relative px-[5%] py-8'>
      <div className='text-center w-[350px] sm:w-[500px] mx-auto sm:text-left sm:mx-0 flex flex-col gap-3'>
        <h1 className="text-white text-3xl sm:text-5xl tracking-wider font-bold">Participate By Writing your Ideas</h1>
        <p className="text-gray-300 text-lg tracking-wider leading-7">Welcome to the blogs section, where you can read other people{"'"}s blogs and write your own. Come on let{"'"}s make it fun.</p>
      </div>

      <div className="hidden sm:bottom-[30px]  sm:absolute sm:right-[4%] sm:w-[500px] sm:border-2 sm:border-white sm:p-3 rounded-lg h-[200px] sm:flex items-start justify-start">
        <div className='w-fit p-2 rounded-xl bg-red-600 text-left'>
          <p className="text-gray-300 text-md">{'"'}Our Lives begin to end <br /> the moment we stop thinking <br /> of the things that matter{'"'}</p>
        </div>
      </div>
    </header>

    <main className='bg-white'>
      <section className="px-[5%] py-[50px] flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className='text-center sm:text-left flex flex-col gap-3 sm:w-1/2'>
          <h1 className="text-4xl text-gray-800 font-bold tracking-wider">Blog about <br /> everything</h1>
          <div>
            <Link to="/publishBlog">
              <button className="bg-red-600 text-white font-semibold text-sm py-3 px-7 rounded-xl focus:ring-4 focus:ring-blue-500 focus:bg-white focus:text-black hover:bg-red-700">
                Publish Blog
              </button>
            </Link>
          </div>
        </div>
        <div className='w-1/2 text-center sm:text-left sm:w-[500px]'>
          <p className="text-gray-500 text-lg tracking-wider leading-7">Welcome to our diverse blog platform! Explore a rich array of content covering various topics from unique perspectives. Our community of contributors ensures a wide range of insights, experiences, and interests. Discover something new with every visit and join the conversation today!</p>
          <div className='mt-5'>
            <button className="bg-transparent text-black font-semibold text-sm border-2 border-red-600 py-3 px-7 rounded-xl">Read all Articles</button>
          </div>
        </div>
      </section>

      {loading && <Loader text="Fetching Blogs" />}

      <section className='px-[5%] bg-gray-100 py-[50px]'>

        <h1 className="text-4xl font-light text-center mb-6">Latest Blogs</h1>

        <div className='flex flex-col gap-5 md:flex-row md:justify-center sm:gap-[50px]'>
          {blogs && blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  </>

  )
}

export default Blog
