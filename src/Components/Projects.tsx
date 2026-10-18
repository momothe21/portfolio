
import './Projects.css'

const projects = [
  {
    title: 'Student Information System',
    description:
      'Independently built a student information management application with a C shared library, Python interface, and MySQL database. Implemented the application logic, database operations, and integration between components, using Docker for testing.',
    technologies: ['C', 'Python', 'MySQL', 'Docker'],
    github: 'https://github.com/momothe21/Student_Database',
    image: '/projects/student-database.png',
  },
  {
    title: 'AI Focus Detection',
    description:
      'Independently trained a computer vision model to classify head direction from a live webcam feed. Built a real-time Python application that displays predictions and tracks the percentage of observed time spent in each detected direction.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/momothe21/FocusDetection',
    image: '/projects/focus-detection.png',
  },
  {
    title: 'Travelling Salesmen — JavaFX Game',
    description:
      'Led a six-person team developing a JavaFX game, building the initial application structure and implementing core gameplay actions. Managed GitHub issues and task assignments, reviewed contributions, and integrated teammates’ code into the main branch.',
    technologies: ['Java', 'JavaFX', 'FXML', 'Git', 'GitHub'],
    github: 'https://github.com/momothe21/TravellingSalesman',
    image: '/projects/travelling-salesmen.png',
  },
  {
    title: 'NLTK — Hindi Language Support',
    description:
      'Implemented Hindi stemming and stop-word support in a collaborative NLTK fork, developed a comprehensive test suite, and analyzed upstream issues. Submitted the changes for review through a pull request.',
    technologies: ['Python', 'NLTK', 'Unit Testing', 'Git', 'GitHub'],
    github: 'https://github.com/momothe21/F25-Group17-NLTK-CBFork',
    image: '/projects/nltk-hindi.png',
  },
]

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <p className="section-label">WHAT I'VE BUILT</p>
        <h2 className="section-title">
          Featured Projects<span>.</span>
        </h2>

        <p className="projects-intro">
          A selection of projects exploring software development,
          artificial intelligence, and practical problem-solving.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <a
                  className="project-image"
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View full screenshot of ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} application screenshot`}
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="project-icon" aria-hidden="true">
                {'</>'}
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
