function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node.js",
        "Tailwind CSS",
        "Git"
    ]

    return (
        <section id="skills" className="py-5 text-white pt-20 flex items-center">
            <div className="max-w-5xl mx-auto px-6 w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Skills</h2>
            
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div   key={index}
                            className="bg-gray-800 p-4 rounded-xl font-semibold text-center hover:scale-105 hover:bg-gray-700 transition">
                          {skill}
    </div>
))}
                </div>
            </div>
            
        </section>
    )
}

export default Skills