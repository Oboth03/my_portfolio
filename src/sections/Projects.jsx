import { motion } from "framer-motion"

function Projects() {
    const projects = [
        {
            "title": "Nile Safaris",
            "description": "A website for showing travel destinations and booking safaris",
            "image": "/nile.png",
            "live": "",
            "code": ""
         },
        {
            "title": "To do list app",
            "description": "system to manage data and tasks",
            "image": "",
             "live": "https://oboth02job.github.io/MyTodoApp/",
            "code": "https://github.com/oboth02Job/MyTodoApp"
         },
        
        {
            "title": "Chamber of commerce",
            "description": "Market place",
            "image": "",
            "live": "",
            "code": ""
        },
         {
            "title": "Tents E-commerce",
             "description": "Market place",
             "image": "",
            "live": "https://oboth02job.github.io/wdd330-sleepoutside/",
            "code": "https://github.com/oboth02Job/wdd330-sleepoutside"
        },
          {
            "title": "Fitness App",
              "description": "Market place",
              "image": "",
            "live": "",
            "code": ""
        },
           {
            "title": "Smart English Language Hub",
               "description": "Market place",
               "image": "",
            "live": "https://oboth03.github.io/hubWebsite/",
            "code": "https://github.com/Oboth03/hubWebsite"
         },
        
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
  }
};

    return (
        <section id="projects" className="py-5 px-6 p-8 text-white pt-20 flex items-center">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Projects</h2>
                <motion.div variants={containerVariants}
                    initial="hidden"
          whileInView="visible"
          viewport = {{once: true}}
                    className="grid md:grid-cols-2 md:grid-cols-4 gap-8 ">
                    {projects.map((project, index) => (
                        <motion.div key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            
                            className=" bg-gray-800 rounded-xl overflow-hidden transition flex flex-col">
                            <div className="h-40 border border-gray-800 rounded-xl  overflow-hidden hover:-translate-y-2 transition  duration-300"></div>
                            <p>{project.image}</p>
                            <motion.img 
                                 src={project.image}
                                alt={project.title}
                                className="w-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="p-3">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="flex gap-2 mt-4">
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className=" bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Live</motion.a>
                                    <motion.a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className=" border px-4 py-2 rounded hover:bg-white hover:text-black">Code</motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

    )
}


export default Projects