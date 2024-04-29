import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <main>
            <section className="px-[5%] py-10">
                <div className="flex flex-col gap-3 bg-white rounded-lg p-3 sm:w-fit sm:mx-auto">
                    <div className="text-center text-3xl">
                        <span className="block text-3xl text-red-600 font-bold">404</span>
                    </div>
                    <div className="text-center w-[450px] mx-auto max-w-[550px] flex flex-col gap-3">
                        <h1 className="text-gray-800 text-3xl font-bold tracking-wider">Oops, page not found</h1>
                        <p className="text-gray-500 text-md tracking-wider">Looks like you{"'"}ve wandered off the beaten path. The page you{"'"}re looking for might have been moved, deleted, or never existed. Let{"'"}s get you back on track. Feel free to explore our other pages or return to the homepage.</p>
                        <div className="text-center">
                            <Link to="/">
                                <button className="text-white bg-red-600 hover:bg-red-700 transition-all py-2 px-4 rounded-md shadow-md">BACK TO HOMEPAGE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NotFound