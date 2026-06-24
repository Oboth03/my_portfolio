import { motion } from "framer-motion"



function Hero({ title, subtitle, subtitle2 }) {
  return (
    
    <section id="home" className="py-5 px-6 flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black px-6 pt-24">
      <div className="text-center  px-4 max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-5">{title}</motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl leading-relaxed text-gray-300 font-semibold mb-5">{subtitle}</motion.p>
        
        <motion.p initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl leading-relaxed text-gray-300 mb-5">{subtitle2}</motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay:0.4 }}
          className="flex gap-4 justify-center">
 
          <button 
            onClick={() => {
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth"
            })
          }}
            className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:scale-105 duration-300 hover:text-black transition">View Projects</button>
          <button onClick={() => {
            document.getElementById("contact").scrollIntoView({
              behavior: "smooth"
            })
          }}
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black hover:scale-105 duration-300 transition">Contact Me</button>
        </motion.div>
      </div>
          
    </section>
  )
}



export default Hero