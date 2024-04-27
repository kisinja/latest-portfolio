
const Contact = () => {
    return (
        <main>
            <section className="py-4 sm:py-[50px] px-[5%] bg-red-100">
                <div className="flex flex-col sm:flex-row gap-5">
                    <div className="p-3 bg-white divide-y-2 rounded-xl text-center sm:text-left sm:w-[600px] w-full mx-auto h-fit">
                        <div className="flex flex-col gap-3 pb-8">
                            <h1 className="text-gray-800 text-2xl font-bold">Get in Touch</h1>
                            <p className="text-gray-500 text-md tracking-wider leading-7">Got a question or want to collaborate? Feel free to reach out! Drop me a message, and I{"'"}ll get back to you as soon as possible. Let{"'"}s connect and bring your ideas to life.</p>
                        </div>
                        <div className="pt-8 flex flex-col gap-3 items-center">
                            <h2 className="text-gray-800 font-bold text-lg">GOMYCODE Nairobi Lower Kabete Rd, Nairobi.</h2>
                            <div className="flex gap-5 w-full justify-center">
                                <div>
                                    <i className="fa-solid fa-phone text-3xl text-red-600"></i>
                                </div>
                                <div>
                                    <h1 className="text-gray-800 font-semibold text-xl">+254 713782003</h1>
                                    <p className="text-red-600 font-semibold text-md">kisinjaelvis@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl text-center sm:text-left sm:w-[550px] w-full mx-auto">
                        <center>
                            <small className="text-sm text-red-600 tracking-wider mb-3 font-semibold">CONTACT WITH US</small>
                            <h1 className="text-3xl font-bold text-gray-800 tracking-wider mb-3">Write a Message</h1>
                        </center>
                        <form action="" className="w-full flex flex-col gap-2 bg-white p-3 rounded-xl">
                            <div className="flex gap-5">
                                <input type="text" name="" className="bg-red-200 p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-1/2" placeholder="Full name" />
                                <input type="text" name="" className="bg-red-200 p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-1/2" placeholder="Email Address" />
                            </div>
                            <div className="flex justify-between">
                                <input type="text" name="" className="bg-red-200 p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-1/2" placeholder="Phone" />
                                <input type="text" name="" className="bg-red-200 p-3 ml-4 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-1/2" placeholder="Subject" />
                            </div>
                            <div className="w-full">
                                <textarea placeholder="Write a message" className="bg-red-200 p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-full" cols="30" rows="10"></textarea>
                            </div>

                            <div className="text-center">
                                <button className="bg-red-600 hover:bg-red-700 shadow-lg text-white text-md py-2 px-7">SEND A MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;
