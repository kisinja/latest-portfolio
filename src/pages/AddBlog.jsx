
const AddBlog = () => {
    return (
        <section className="px-[5%]">
            <form className="mx-auto flex flex-col gap-3 w-full sm:w-[700px] p-4 rounded-lg mt-8 bg-black"  >
                <h1 className="text-xl font-semibold text-white text-center mb-3">Publish Blog</h1>
                <div className="flex gap-5">
                    <label className="text-white text-lg" htmlFor="title">Title: </label> 
                    <input type="text" required placeholder="title" id="" className="bg-red-300 rounded text-black p-1 placeholder-gray-500 focus:outline-none w-full"    />
                </div>
                <div className="flex gap-5">
                    <label className="text-white text-lg" htmlFor="content">Content</label>
                    <input type="text" required placeholder="content" id="" className="bg-red-300 rounded text-black p-1 placeholder-gray-500 focus:outline-none w-full" />
                </div>
                <div className="flex gap-5">
                    <label className="text-white text-lg" htmlFor="category">Category</label>
                    <input type="text" required placeholder="category" id="" className="bg-red-300 rounded text-black p-1 placeholder-gray-500 focus:outline-none w-full"/>
                </div>
                <div className="flex gap-5">
                    <label className="text-white text-lg" htmlFor="author">Author</label>
                    <input type="text" required placeholder="author" id="" className="bg-red-300 rounded text-black p-1 placeholder-gray-500 focus:outline-none w-full"/>
                </div>

                <div className='text-center mt-4'>
                    <button type='submit' className='text-white px-6 py-2 bg-red-300 hover:bg-red-600 transition-all rounded-lg'>
                        Publish
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AddBlog