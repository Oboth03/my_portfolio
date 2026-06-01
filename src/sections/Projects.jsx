function Projects() {
    const projects = [
        {
            "title": "Nile Safaris",
            "description": "A website for showing travel destinations and booking safaris",
            "live": "",
            "code": ""
         },
        {
            "title": "To do list app",
            "description": "system to manage data and tasks",
             "live": "",
            "code": ""
         },
        
        {
            "title": "Chamber of commerce",
            "description": "Market place",
            "live": "",
            "code": ""
        },
         {
            "title": "Tents E-commerce",
             "description": "Market place",
            "live": "",
            "code": ""
        },
          {
            "title": "Fitness App",
              "description": "Market place",
            "live": "",
            "code": ""
        },
           {
            "title": "Smart English Language Hub",
               "description": "Market place",
            "live": "",
            "code": ""
         },
        
    ]

    return (
        <section id="projects" className="py-5 px-6 p-8 text-white pt-20 flex items-center">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Projects</h2>
                <div className="grid md:grid-cols-2 md:grid-cols-4 gap-8 ">
                    {projects.map((project, index) => (
                        <div key={index} className=" bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition">
                            {/*Image placeholder*/}
                            <div className="h-40 border border-gray-800 bg-gray-700 rounded-xl  overflow-hidden hover:-translate-y-2 transition  duration-300"></div>
                            <div className="p-3 ">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex gap-2 mt-4">
                                    <button className=" bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Live</button>
                                    <button className=" border px-4 py-2 rounded hover:bg-white hover:text-black">Code</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}


export default Projects