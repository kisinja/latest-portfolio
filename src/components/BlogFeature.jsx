import { Link } from 'react-router-dom';

const BlogFeature = () => {
    return (
        <section className="relative py-12 px-4 bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 opacity-50"></div>
            <div className="relative container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Image Section */}
                <div className="lg:w-1/2 w-full h-[350px]">
                    <img
                        src="https://i.pinimg.com/236x/6e/f2/58/6ef2589c73c9abe82c1dc0560eb7ca1f.jpg"
                        alt="Publishing Blogs"
                        className="w-full h-full rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Share Your Ideas with the World
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Our new blog publishing feature allows you to share your insights, experiences, and stories with a global audience. Whether you&apos;re an expert or a passionate writer, publishing your blog has never been easier.
                    </p>
                    <Link to="/blog">
                        <button className="bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                            Explore Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogFeature;