import { useState, useEffect  } from "react"


function Navbar({ name }) {
    const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState("false")

    const links = [
        "home",
        "about",
         "skills",
        "projects",
        "contact"
        
    ]

    useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    return () => {
        sections.forEach((section) => {
            observer.unobserve(section);
        });
    };

    }, []);
    
    useEffect(() => {
const handleResize = () => {
if (window.innerWidth >= 768) {
setMenuOpen(false);
}
};

window.addEventListener("resize", handleResize);

return () => {
window.removeEventListener("resize", handleResize);
};
    }, []);
    
    return (
        <nav className="fixed px-4 sm:px-6 py-4 w-full top-0 z-50 bg-black/60 border-b border-gray-800 backdrop-blur-xl text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">{name}</h1>

            <button  onClick={() => setMenuOpen(!menuOpen)}  className="md:hidden gap-8 text-2xl">
                {menuOpen ? "x": "≡"}
            </button>

            <div 
className={`
${menuOpen ? "flex" : "hidden"}
md:flex
flex-col
md:flex-row
items-center
gap-4
absolute
md:static
top-full
left-0
w-full
md:w-auto
bg-black
md:bg-transparent
p-6
md:p-0
`}
>
              {links.map((link) => (
    <a
      key={link}
                      href={`#${link}`}
 onClick={() => setMenuOpen(false)}
      className={`capitalize ${
        active === link ? "text-blue-400" : ""
      }`}
    >
      {link}
    </a>
))}
            </div>
        </nav>
    )
}

export default Navbar