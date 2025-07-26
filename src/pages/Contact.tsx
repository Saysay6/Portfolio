import "../style/Contact.css";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2>Let's connect</h2>
      <p>I'd love to collaborate! Reach me through any of these platforms</p>
      <div className="link">
        <a href="mailto:Sarahodah4@gmail.com" target="_blank" rel="noopener noreferrer">
      <FaEnvelope className="icon" /> Sarahodah4@gmail.com
        </a>
        <a href="https://instagram.com/say_ralyn" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" /> Instagram
        </a>
         <a href="https://github.com/Saysay6" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> Github
        </a>
      </div>
    </section>
    
  )
}


export default Contact;