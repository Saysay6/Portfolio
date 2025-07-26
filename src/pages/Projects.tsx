import "../style/Projects.css";

interface Project {
  title: string;
  link: string;
}

const Projects= () => {
  const projects: Project[] = [
    { title: "Portfolio Website", link: "#" },
    // { title: "E-commerce Store", link: "#" },
    // { title: "Blog Platform", link: "#" },
  ];

  return (
    <section id="projects" className="projects container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;