import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer({ year }) {
    
    const socialLinks = [
        {
            name: "Github",
            url: "https://github.com/Oboth03",
            icon: <FaGithub />
        }, 
         {
            name: "LinkedIn",
             url: "https://www.linkedin.com/in/job-oboth-3aa66a27a/",
            icon: <FaLinkedin />
        },
          {
            name: "Facebook",
              url: "https://www.facebook.com/share/18YeWY9zjg/?mibextid=wwXIfr",
            icon: <FaFacebook />
        }, 
           {
            name: "Email",
               url: "mailto:joboboth601@gmail.com",
            icon: <FaEnvelope />
        },
            {
            name: "WhatsApp",
                url: "https://wa.me/256773389175",
            icon: <FaWhatsapp />
        }
    ]
    return (  
        <footer className=" text-white p-4 text-center">
            <div className="mt-3 flex justify-center gap-4">
                 {
        socialLinks.map((social) => (
            <a className=" text-blue-400 text-2xl hover:scale-110 transition"
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
            >
                {social.icon}
            </a>
        ))}
        </div>
            <p className="mt-5 text-gray-500">©️ {year } Job Oboth. All rights reserved.</p>
        </footer>

    )
}

export default Footer