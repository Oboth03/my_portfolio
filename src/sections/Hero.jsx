function Hero({ title, subtitle }) {
  return (
    <section id="home" className="py-5 px-6 flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black px-6 pt-24">
      <div className="text-center  px-4 max-w-5xl mx-auto">
         <h1 className="text-3xl md:text-4xl font-bold mb-5">{ title }</h1>
        <p className="text-lg md:text-2xl leading-relaxed text-gray-300 mb-5">{subtitle}</p>
        
        <div className="flex gap-4 justify-center">
 
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:scale-105 duration-300 hover:text-black transition">View Projects</button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black hover:scale-105 duration-300 transition">Contact Me</button>
        </div>
      </div>
          
    </section>
  )
}



export default Hero