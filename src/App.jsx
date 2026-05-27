import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contacts from "./sections/Contacts"
import Footer from "./components/Footer"
import Skills from "./sections/Skills"

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar name="Job Oboth"/>
      <Hero 
      title="Hi, I'm Job👋"
      subtitle="Frontend Developer passionate about building modern web applications" />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer year="2026"/>
    </div>
  )
}

export default App