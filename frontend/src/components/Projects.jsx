import projects from '../data/projects'

const Projects = () => (
  <div className="section-card" id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
)
export default Projects
