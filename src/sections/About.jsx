function About() {
    return (
    <section id="about" className=" min-h-screen flex items-center justify-center text-white pt-20">
            <div className="max-w-5xl mx-auto  grid md:grid-cols-2 gap-10 items-center px-4">
                <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
             About Me
            </h2>

                <p className="text-lg text-gray-300 mb-4">
                    Hi, I’m Job — a software development student passionate about building modern web applications.
                </p>

                <p className="text-gray-400 mb-6">
                   I enjoy creating responsive user-friendly designs and continuously improving my skills through real world projects
                </p>
                <button className="bg-blue-500 px-4 py-3 rounded-lg hover:bg-blue-600 transition">Download CV</button>
                </div>
                <div className="flex justify-center">
                    <div className="w-56 h-56 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
        </div>
        </div>
        </section>
    )
}

export default About