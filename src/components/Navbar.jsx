function Navbar({name}) {
    return (
        <nav className="w-full top-0 backdrop-blur-md text-white p-4 flex justify-between items-center">
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