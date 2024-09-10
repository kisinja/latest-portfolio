import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

const Contact = () => {
    const [showMap, setShowMap] = useState(false);
    const [senderFullName, setSenderFullName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [senderPhoneNumber, setSenderPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const BASE_URL = "https://myhub-server.onrender.com/api/messages/create";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    senderFullName, senderEmail, senderPhoneNumber, subject, message
                })
            });

            const data = await response.json();
            if (data.error) {
                setError(data.error);
                setMsg(null);
            } else {
                setMsg(data.message);
                setError(null);
            }

            if (data.emptyFields) {
                setEmptyFields(data.emptyFields);
            }

            setLoading(false);
            setEmptyFields([]);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setMsg(null);
        }
    };

    return (
        <main>
            <section className="py-4 sm:py-[50px] px-[5%] bg-red-100">
                <div className="flex flex-col gap-5 md:flex-row">
                    <div className="py-3 px-6 bg-white divide-y-2 rounded-xl text-center sm:text-left w-full mx-auto h-fit mb-8">
                        <div className="flex flex-col gap-3 pb-8">
                            <h1 className="text-gray-800 text-2xl font-bold">Get in Touch</h1>
                            <p className="text-gray-500 sm:text-md tracking-wider leading-7 text-lg">
                                Got a question or want to collaborate? Feel free to reach out! Drop me a message, and I{"'"}ll get back to you as soon as possible. Let{"'"}s connect and bring your ideas to life.
                            </p>
                        </div>
                        <div className="pt-8 flex flex-col gap-3">
                            <h2 className="text-gray-800 font-bold text-lg flex gap-2 sm:gap-5 items-center">
                                <FiMapPin className="fa-solid fa-phone text-xl sm:text-3xl text-red-600" />
                                GOMYCODE Nairobi Lower Kabete Rd, Nairobi.
                            </h2>

                            <button onClick={() => setShowMap(!showMap)} className="bg-red-600 hover:bg-red-700 text-white text-md py-2 px-7 rounded-lg">
                                {showMap ? "Hide Map" : "View on Map"}
                            </button>

                            {showMap && (
                                <div className="w-full h-[250px]">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8615806159587!2d36.7947747736721!3d-1.2547772987332744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17c07e842095%3A0x89a643b02ed55fb4!2sGOMYCODE%20Nairobi!5e0!3m2!1sen!2ske!4v1725989433316!5m2!1sen!2ske" width="600" height="450" style={{ "border": 0 }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full rounded-lg"></iframe>
                                </div>
                            )}

                            <div className="flex flex-col gap-5 w-full justify-center">
                                <div className="flex items-center gap-2 sm:gap-5">
                                    <FaPhoneAlt className="fa-solid fa-phone text-xl sm:text-3xl text-red-600" />
                                    <h1 className="text-gray-800 font-semibold text-2xl">+254 713782003</h1>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-5">
                                    <FaEnvelope className="fa-solid fa-phone text-xl sm:text-3xl text-red-600" />
                                    <h1 className="text-gray-800 font-semibold text-2xl">kisinjaelvis@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl text-center sm:text-left sm:w-[550px] w-full mx-auto py-3">
                        <center>
                            <small className="text-sm text-red-600 tracking-wider mb-3 font-semibold">CONTACT WITH ME</small>
                            <h1 className="text-3xl font-bold text-gray-800 tracking-wider mb-3">Write a Message</h1>
                        </center>
                        <form className="w-full flex flex-col gap-2 bg-white py-3 px-8 rounded-xl" onSubmit={handleSubmit}>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <input type="text" onChange={(e) => setSenderFullName(e.target.value)} className={`border p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-full sm:w-1/2 ${emptyFields.includes("senderFullName") ? "border-2 border-red-500" : ""}`} placeholder="Full Name" />
                                <input type="text" onChange={(e) => setSenderEmail(e.target.value)} className={`border p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-full sm:w-1/2 ${emptyFields.includes("senderEmail") ? "border-2 border-red-500" : ""}`} placeholder="Email Address" />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <input type="text" onChange={(e) => setSenderPhoneNumber(e.target.value)} className={`border p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-full sm:w-1/2 ${emptyFields.includes("senderPhoneNumber") ? "border-2 border-red-500" : ""}`} placeholder="Phone Number" />
                                <input type="text" onChange={(e) => setSubject(e.target.value)} className={`border p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-full sm:w-1/2 ${emptyFields.includes("subject") ? "border-2 border-red-500" : ""}`} placeholder="Subject" />
                            </div>
                            <div className="w-full">
                                <textarea placeholder="Write a message" className={`border p-3 text-black font-semibold rounded placeholder-gray-500 focus:outline-none w-full ${emptyFields.includes("message") ? "border-2 border-red-500" : ""} h-[150px]`} cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>

                            {msg && <div className="message">{msg}</div>}
                            {error && <div className="error">{error}</div>}

                            <div className="text-center">
                                <button className="bg-red-600 hover:bg-red-700 shadow-lg text-white text-md py-2 px-7">
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
