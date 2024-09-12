import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DOMPurify from "dompurify";

const BlogCard = ({ blog }) => {
    // Construct the image URL
    const imageUrl = `https://myhub-server.onrender.com/${blog.imgUrl.replace('\\', '/')}`;

    const sanitizedContent = DOMPurify.sanitize(blog.content);

    const formatTime = time => {
        const date = new Date(time);
        const options = { month: "short", day: "numeric" }
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className='w-full bg-white rounded-lg shadow-sm md:w-[350px] flex flex-col h-fit relative'>

            <div className="text-xs flex items-center font-light w-fit bg-red-600 text-white p-2 absolute right-0">
                <FaCalendarAlt className="mr-2" /> {formatTime(blog.createdAt)}
            </div>

            {/* Blog Image */}
            {blog.imgUrl && (
                <div className='w-full h-[280px]'>
                    <img src={imageUrl} alt={blog.title} className='w-full h-full object-cover' />
                </div>
            )}

            <div className='py-6 px-12 shadow rounded space-y-3 bg-gray-100'>
                {/* Blog category */}
                <div>
                    <p className="text-gray-400 uppercase text-md">
                        {blog.category}
                    </p>
                </div>

                {/* Blog Title and Background */}
                <div className=''>
                    <h1 className="text-gray-800 text-lg font-semibold">{blog.title}</h1>
                </div>

                {/* Blog Content */}
                {/* <div className=''>
                    <p className="text-gray-600 text-base leading-6 tracking-wider">
                        {blog.content.length > 100 ? `${blog.content.slice(0, 100)}...` : blog.content}
                    </p>
                </div> */}

                <div className="text-gray-600 text-base leading-6 tracking-wider" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />

                {/* Blog Metadata */}
                {/* <div className='flex justify-between items-center'>
                    <p className="text-xs text-gray-500 flex items-center font-semibold">
                        <FaClock className="text-gray-500 mr-2" /> {formatTime(blog.createdAt)}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center font-semibold cursor-pointer">
                        <FaUser className="text-gray-500 mr-2" /> {blog.author}
                    </p>
                </div> */}

                {/* Read More Button */}
                <div>
                    <Link to={`/blog/${blog._id}`} className='text-md text-red-600 hover:underline'>
                        Read More...
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;