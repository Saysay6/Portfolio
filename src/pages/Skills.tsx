import "../style/Skills.css";
import { FaHtml5, FaJsSquare, FaCss3Alt, FaGithub } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";



const Skills = () => {
 return (
   <section id="skills" className="skill section">
     <h2>My skills</h2>
     <div className="skill pole">
       <div className="card">
         <FaHtml5 className="icon" style={{color:"#D92D00"}} />
         {/* <p>HTML5</p> */}
         </div>
       <div className="card">
         <FaCss3Alt className="icon" style={{color:"#006BB4"}} />
         {/* <p>CSS3</p> */}
       </div>
        <div className="card">
          <FaJsSquare className="icon" style={{color:"#EFD81D"}} />
           {/* <p>JavaScript</p> */}
       </div>
       <div className="card">
         <FaReact className="icon" style={{color:"#0172B3"}} />
       </div>
       <div className="card">
         <VscVscode className="icon" style={{ color:"#0172B3" }} />
         {/* <p>VS Code</p> */}
       </div>
       <div className="card">
         <FaGithub className="icon" style={{ color:"#6D0096"}} />
         {/* <p>GitHub</p> */}
       </div>
       <div className="card">
         < RiTailwindCssFill className="icon" style={{color:"#36B7F0"}} />
         {/* <p>Tailwind CSS</p> */}
       </div>
     </div>
      </section>
  );
};

export default Skills;