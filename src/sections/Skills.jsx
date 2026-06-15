import { motion } from "framer-motion"


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

    const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

    return (
        <section id="skills" className="py-5 px-6 text-white pt-20 flex items-center">
            <div className="max-w-5xl mx-auto px-6 w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Skills</h2>
            
                <motion.div valiants={containerVariants}
                    initial="hidden"
          whileInView="visible"
          viewport = {{once: true}}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div   key={index}
                            className="bg-gray-800 p-4 rounded-xl font-semibold text-center hover:scale-105 hover:bg-gray-700 transition hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                          {skill}
    </div>
))}
                </motion.div>
            </div>
            
        </section>
    )
}

export default Skills