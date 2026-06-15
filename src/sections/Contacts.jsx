import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)
        setSuccess("")
        setError("")

        emailjs.send(
            "service_ofh5gab",
        "template_ee9vkhv",
        formData,
        "EDCnsjvxJetEqrg5v"
        )
            .then(() => {
                setSuccess("Message sent successfully")
                setLoading(false)

                // e.target.reset();

            setFormData({
                 name: "",
                 email: "",
                 message: ""
            })
                
                setTimeout(() => {
                    setSuccess("")
                }, 3000)
            }) .catch ((error) => {
                setLoading(false)
                setError("Something went wrong! Please try again.")
        })
     }

        return (
            <section id="contact" className="py-5 flex items-center px-6 text-white pt-20">
                <div className="max-w-5xl mx-auto px-6 w-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>
                
                    <form onSubmit={handleSubmit}
                        className="space-y-6">
                        <div>
                            <label className="block mb-2 text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-blue-500" />
                        </div>
                    
                        <div>
                            <label className="block mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email" required
                                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-blue-500" />
                        </div>
                    
                        <div>
                            <label className="block mb-2 text-gray-300">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-blue-500">
                            </textarea>
                        </div>
                    
                        {success && (
                        <p className="text-green-400 text-center">Message sent successfully</p>
                        )}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </div>
    
            </section>
        )
    }



export default Contacts