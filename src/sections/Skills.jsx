import { motion } from "framer-motion"


function Skills() {
const skillCategories = [
{
title: "Frontend",
skills: [
"HTML5",
"CSS3",
"JavaScript",
"React",
"Tailwind CSS",
"Responsive Design",
"Component-Based Development"
]
},
{
title: "Backend",
skills: [
"Node.js",
"Express.js",
"REST APIs",
"Server-Side Development",
"API Integration"
]
},
{
title: "Databases",
skills: [
"PostgreSQL",
"MongoDB",
"Database Design"
]
},
{
title: "Tools & Deployment",
skills: [
"Git",
"GitHub",
"VS Code",
"npm",
"Render"
]
}
]


return (
<section id="skills" className="py-5 px-6 text-white pt-20 flex items-center">
<div className="max-w-5xl mx-auto px-6 w-full">

<h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
My Skills
</h2>

<div className="grid md:grid-cols-2 gap-8">

{skillCategories.map((category, index) => (
<div
key={index}
className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition"
>

<h3 className="text-2xl font-semibold mb-5 text-blue-400">
{category.title}
</h3>

<div className="flex flex-wrap gap-3">
{category.skills.map((skill, skillIndex) => (
<span
key={skillIndex}
className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition"
>
{skill}
</span>
))}
</div>

</div>
))}

</div>

</div>
</section>
)
}

export default Skills
