import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaCalendar, FaTags } from "react-icons/fa";
import Loader from "../components/Loader";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const BASE_URL = `https://myhub-server.onrender.com/api/blogs/${id}`;

    useEffect(() => {
        const getBlogById = async () => {
            try {
                const res = await fetch(BASE_URL);

                if (res.ok) {
                    const data = await res.json();
                    setBlog(data);
                    setLoading(false);
                } else {
                    setError("Something went wrong");
                    setLoading(false);
                }
            } catch (error) {
                console.log(error.message);
                setError(error.message);
            }
        };

        getBlogById();
    }, [BASE_URL]);

    const imageUrl = `http://localhost:5555/${blog.imgUrl?.replace('\\', '/')}`;

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
        </section>
    );
};

export default BlogDetails;