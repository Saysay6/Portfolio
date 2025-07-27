import "../style/Contact.css";
import { FaEnvelope, FaGithub, } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2>Let's connect</h2>
      <p>I'd love to collaborate!</p>
      <div className="link">
        <a href="mailto:Sarahodah4@gmail.com" target="_blank" rel="noopener noreferrer">
      <FaEnvelope className="icon" /> Sarahodah4@gmail.com
        </a>
        <a href="https://linkedin.com/in/odahsarah" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" /> Linkedin
        </a>
         <a href="https://github.com/Saysay6" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> Github
        </a>
      </div>
    </section>
    
  )
}


export default Contact;