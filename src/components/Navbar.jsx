function Navbar({name}) {
    return (
        <nav className="fixed px-6 pt-15 w-full top-0 z-50 bg-black/60 border-b border-gray-800 backdrop-blur-xl text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">{name}</h1>

            <div className="flex gap-6">
                <a href="#home" className="hover:text-blue-400">Home</a>
                <a href="#about" className="hover:text-blue-400">About</a>
                <a href="#projects" className="hover:text-blue-400">Projects</a>
                <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar