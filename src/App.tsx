import './App.css'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import About from './Components/About'
import Contact from './Components/Contact'
import { useState } from 'react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="logo" href="#home">
            MO<span>.</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-toggle-line"></span>
            <span className="menu-toggle-line"></span>
            <span className="menu-toggle-line"></span>
          </button>

          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? 'nav-open' : ''}`}
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">Hello, I'm</p>

            <h1>Mohammed Obeidi<span>.</span></h1>

            <h2>
              Computer Engineering Student
              <br />
              <span>Software Development & AI</span>
            </h2>

            <p className="hero-description">
              I'm a Computer Engineering Co-op student at the
              University of Guelph, passionate about building
              practical software solutions, exploring artificial
              intelligence, and solving complex problems.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary" href="#projects">
                View My Projects →
              </a>

              <a className="btn btn-secondary" href="#contact">
                Get in Touch
              </a>
            </div>

            <div className="social-links">
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

          <div className="hero-decoration" aria-hidden="true">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="code-card">
              <span className="code-comment">// Developer profile</span>
              <span><b>const</b> developer = {'{'}</span>
              <span>  name: <em>"Mohammed"</em>,</span>
              <span>  focus: <em>"AI & Software"</em>,</span>
              <span>  learning: <em>"Always"</em></span>
              <span>{'}'}</span>
            </div>
          </div>
        </section>

        <About />

        <Projects />

        <Experience />

        <Contact />
      </main>
    </>
  )
}

export default App
