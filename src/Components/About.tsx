
import './About.css'

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'OpenCV'],
  },
  {
    category: 'Development Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code'],
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS'],
  },
  {
    category: 'Currently Learning',
    skills: ['JavaScript', 'TypeScript', 'React'],
  },
]

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <p className="section-label">GET TO KNOW ME</p>

        <h2 className="section-title">
          About Me<span>.</span>
        </h2>

        <div className="about-grid">
          <div className="about-content">
            <h3>Engineering meets software.</h3>

            <p>
              I'm a Computer Engineering Co-op student at the
              University of Guelph with a strong interest in
              software development, artificial intelligence,
              and building practical solutions to complex problems.
            </p>

            <p>
              Through my projects, I've independently developed
              applications integrating C, Python, and MySQL,
              trained computer vision models, and led a six-person
              Java development team. I've also contributed to a
              collaborative Python NLP project, gaining experience
              with testing, code reviews, and Git-based development
              workflows.
            </p>

            <p>
              My engineering co-op experience has strengthened
              my approach to problem-solving through AI workflow
              evaluation, technical troubleshooting, and working
              with real-world systems. I'm particularly interested
              in opportunities to build reliable software, learn
              modern development technologies, and contribute to
              products that solve meaningful problems.
            </p>

            <div className="about-details">
              <div>
                <span className="detail-label">Education</span>
                <strong>University of Guelph</strong>
              </div>

              <div>
                <span className="detail-label">Degree</span>
                <strong>Computer Engineering (Co-op)</strong>
              </div>

              <div>
                <span className="detail-label">Graduation</span>
                <strong>Winter 2028 (Expected)</strong>
              </div>

              <div>
                <span className="detail-label">Location</span>
                <strong>Kitchener, Ontario</strong>
              </div>
            </div>

            <a
              className="btn btn-primary about-resume"
              href="/resume.pdf"
              download
            >
              Download Resume ↓
            </a>
          </div>

          <div className="skills-panel">
            <h3>Technical Skills</h3>

            {skillGroups.map((group) => (
              <div className="skill-group" key={group.category}>
                <h4>{group.category}</h4>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
