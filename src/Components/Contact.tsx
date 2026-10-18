
import './Contact.css'

function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <p className="section-label">WHAT'S NEXT?</p>

          <h2 className="section-title">
            Let's Connect<span>.</span>
          </h2>

          <p className="contact-description">
            I'm always interested in opportunities to learn,
            collaborate, and contribute to meaningful software
            engineering projects. Whether you'd like to discuss
            a project or a potential opportunity, feel free
            to reach out.
          </p>

          <a
            className="btn btn-primary contact-button"
            href="mailto:mobeidi@uoguelph.ca"
          >
            Say Hello ↗
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/momothe21"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-obeidi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Designed & Built by Mohammed Obeidi</p>
        <p>React · TypeScript · CSS</p>
      </footer>
    </>
  )
}

export default Contact
