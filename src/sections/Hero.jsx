function Hero({ title, subtitle }) {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black pt-20">
      <div className="text-center max-w-2xl px-4">
         <h1 className="text-3xl md:text-4xl font-bold mb-6">{ title }</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <div className="flex gap-4 justify-center">
 
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:text-black transition">View Projects</button>
          <button className="border border-white  px-6 py-3 rounded-lg font-semibold hover:text-black transition">Contact Me</button>
        </div>
      </div>
          
    </section>
  )
}



export default Hero