import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contacts from "./sections/Contacts"
import Footer from "./components/Footer"
import Skills from "./sections/Skills"
import BackToTop from "./components/BackToTop"

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar name="Job Oboth"/>
      <Hero 
      title="Hi, I'm Job👋"
        subtitle="Full-Stack Developer (Backend-Focused)"
       subtitle2="I build modern web applications, REST APIs, and database-driven systems with a focus on reliable backend solutions." />

      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer year="2026" />
      <BackToTop />
    </div>
  )
}

export default App