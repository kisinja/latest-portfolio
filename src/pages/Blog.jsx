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
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      <header id='blog-header' className='relative px-4 py-8 bg-gray-900 text-white'>
        <div className='text-center sm:text-left mx-auto sm:mx-0'>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Participate By Writing Your Ideas</h1>
          <p className="text-lg sm:text-xl mt-4">Welcome to the blogs section, where you can read other people&apos;s blogs and write your own. Let&apos;s make it fun.</p>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 sm:w-[500px] sm:border-2 sm:border-white sm:p-3 rounded-lg bg-red-600 text-white p-4">
          <p className="text-md leading-relaxed">{'"'}Our lives begin to end the moment we stop thinking of the things that matter{'"'}</p>
        </div>
      </header>

      <main className='bg-white'>
        <section className="px-4 py-8 sm:px-8 sm:py-16 flex flex-col sm:flex-row sm:justify-between items-center gap-8">
          <div className='flex flex-col gap-4 text-center sm:text-left sm:w-1/2'>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Blog About Everything</h2>
            <Link to="/publishBlog">
              <button className="bg-red-600 text-white font-semibold text-sm py-3 px-6 sm:py-3 sm:px-6 rounded-xl hover:bg-red-700 transition duration-300">
                Publish Blog
              </button>
            </Link>
          </div>
          <div className='text-center sm:text-left sm:w-1/2'>
            <p className="text-gray-600 text-base leading-relaxed">Welcome to our diverse blog platform! Explore a rich array of content covering various topics from unique perspectives. Our community of contributors ensures a wide range of insights, experiences, and interests. Discover something new with every visit and join the conversation today!</p>
            <div className='mt-6'>
              <button className="bg-transparent text-black font-semibold text-sm border-2 border-red-600 py-3 px-6 rounded-xl hover:bg-red-600 hover:text-white transition duration-300">
                Read All Articles
              </button>
            </div>
          </div>
        </section>

        {loading && <Loader text="Fetching Blogs" />}

        <section className='px-4 py-8 bg-gray-100'>
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-8">Latest Blogs</h2>
          <div className='flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-center'>
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;