import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaCalendar, FaTags } from "react-icons/fa";
import Loader from "../components/Loader";
import BlogCard from "../components/BlogCard";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    const BASE_URL = `https://myhub-server.onrender.com/api`;

    useEffect(() => {
        const fetchBlogAndRelated = async () => {
            try {
                const blogRes = await fetch(`${BASE_URL}/blogs/${id}`);
                if (!blogRes.ok) {
                    throw new Error('Blog not found');
                }

                const blogData = await blogRes.json();
                setBlog(blogData);

                const relatedRes = await fetch(`${BASE_URL}/blogs?category=${blogData.category}`);
                if (!relatedRes.ok) {
                    throw new Error('Error fetching related blogs');
                }

                const relatedData = await relatedRes.json();
                setRelatedBlogs(relatedData.filter(b => b._id !== id)); // Exclude the current blog
            } catch (error) {
                console.error(error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        fetchBlogAndRelated();
    }, [BASE_URL, id]);

    const imageUrl = `https://myhub-server.onrender.com/${blog.imgUrl?.replace('\\', '/')}`;

    return (
        <section className="px-6 xl:px-12 py-8 max-w-4xl mx-auto">
            {loading && <Loader text="Hang on tight..." />}

            {error && <div className="bg-red-200 text-red-800 p-4 rounded mb-4">{error}</div>}



            {blog && (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {blog.imgUrl && (
                        <img src={imageUrl} alt={blog.title} className="w-full h-[450px] object-cover" />
                    )}
                    <div className="p-6">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{blog.title}</h1>
                        <div className="flex items-center text-gray-500 mb-4">
                            <FaUser className="mr-2" /> <span>{blog.author}</span>
                            <span className="mx-2">|</span>
                            <FaCalendar className="mr-2" /> <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                            <span className="mx-2">|</span>
                            <FaTags className="mr-2" /> <span>{blog.category}</span>
                        </div>
                        <p className="text-gray-600 text-base leading-7 tracking-wider">{blog.content}</p>
                    </div>
                </div>
            )}

            {/* Related Blogs section */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>
                {relatedBlogs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedBlogs.map(relatedBlog => (
                            <BlogCard key={relatedBlog._id} blog={relatedBlog} />
                        ))}
                    </div>
                ) : (
                    <div className="text-xl text-gray-800 text-center">No related blogs found.</div>
                )}
            </section>
        </section>
    );
};

export default BlogDetails;