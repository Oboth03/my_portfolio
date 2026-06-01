function Contacts() {
    return (
        <section id="contact" className="py-5 flex items-center px-6 text-white pt-20">
            <div className="max-w-5xl mx-auto px-6 w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>
                
                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-gray-300">Name</label>
                        <input
                            type="text"
                         placeholder="Enter your name"
                         className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-blue-500"/>
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-gray-300">Email</label>
                        <input
                            type="email"
                         placeholder="Enter your email" required
                         className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-blue-500"/>
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-gray-300">Message</label>
                        <textarea  type="text"
                         placeholder="Enter your message"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-blue-500">
                           </textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">Send Message
                        </button>

                </form>
            </div>
    
</section>
    )
}



export default Contacts