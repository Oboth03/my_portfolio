function About() {
    return (
    <section id="about" className="px-6 min-h-screen flex items-center justify-center text-white pt-24">
            <div className="max-w-5xl mx-auto  grid md:grid-cols-2 gap-10 items-center px-4">
                <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
             About Me
            </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
                    Hi, I’m Job — a software development student passionate about building modern web applications.
                </p>

                <p className="text-gray-400 mb-6 leading-relaxed">
                   I enjoy creating responsive user-friendly designs and continuously improving my skills through real world projects
                </p>
                <button className="bg-blue-500 px-6 font-semibold py-3 rounded-lg hover:text-black hover:bg-blue-600 hover:scale-105 duration-300 transition">Download CV</button>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/hero.png"
                    alt="job"
                    className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl shadow-blue-500/20"/>
                  
        </div>
        </div>
        </section>
    )
}

export default About