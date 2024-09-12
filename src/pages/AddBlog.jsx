import { useState } from "react";
import { useDropzone } from 'react-dropzone';
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const BASE_URL = 'https://myhub-server.onrender.com/api/blogs';

    const navigate = useNavigate();

    const onDrop = acceptedFiles => {
        // get the uploaded file
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Only accept image files
        multiple: false, // Allow only single file upload
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);
        setMessage(null);

        if (!title || !content || !author || !category || !file) {
            alert('Please fill all fields including the image.');
            return;
        }

        // Form data to handle file and text inputs
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('author', author);
        formData.append('category', category);
        formData.append('imgUrl', file); // Attach the file

        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                body: formData,
            });

            console.log(content);

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setMessage('Blog created successfully');
                setTitle('');
                setContent('');
                setAuthor('');
                setCategory('');
                setFile(null);

                navigate('/blog');
            } else {
                const data = await response.json();
                setError(data.error);
            }

            setLoading(false);
        } catch (error) {
            setError(error.message);
            console.error(error.message);
            setLoading(false);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-600 to-gray-500 p-6">
            <h1 className="text-5xl md:text-6xl text-white text-center font-light mb-3">
                Create Blog
            </h1>

            {loading && <Loader text="Please wait..." />}

            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-3">

                    {/* Image Upload Drop Zone */}
                    <div
                        {...getRootProps()}
                        className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p className="text-gray-600">Drop the image here...</p>
                        ) : (
                            <p className="text-gray-600">Drag &apos;n&apos; drop an image <span className="font-semibold">here</span>, or click to select</p>
                        )}
                    </div>
                    {file && (
                        <p className="text-gray-600 mt-2 text-sm">
                            Selected file: <span className="font-semibold">{file.name}</span>
                        </p>
                    )}

                    {/* Blog Title */}
                    <div>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                    </div>

                    {/* Blog Content */}
                    <div>
                        {/* <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Content"
                            rows="6"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        /> */}

                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            theme="snow"
                            placeholder="Write your blog content here..."
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Author"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Category"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        />
                    </div>

                    {/* Error Message */}
                    {error && <div className="error">{error}</div>}

                    {/* Message */}
                    {message && <div className="message">{message}</div>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-4 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                    >
                        {loading ? "Publishing" : "Publish Blog"}
                    </button>
                </form>
            </div>
        </section>

    );
};

export default AddBlog;