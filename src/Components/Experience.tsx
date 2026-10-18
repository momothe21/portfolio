
import './Experience.css'

const experiences = [
  {
    title: 'Manufacturing Engineering Co-op',
    company: 'Linamar Corporation',
    location: 'Guelph, Ontario',
    period: 'Jan 2026 – Apr 2026',
    description: [
      'Redesigned and documented manufacturing components for supplier quotations, supporting the identification of approximately $100,000 in projected cost savings through lower-cost supplier alternatives.',
      'Captured and labeled images of manufacturing components to prepare training datasets, then used the inspection system\'s graphical interface to execute AI model-training workflows for defect detection.',
      'Evaluated an AI-assisted business-card extraction workflow by testing PDF processing limits, validating extraction across multiple languages, and reviewing the agent’s workflow for potential issues and improvements.',
      'Debugged and corrected Excel formulas in quality inventory spreadsheets, ensuring that removed records did not disrupt remaining calculations or data integrity.',
    ],
    technologies: [
      'AI Inspection',
      'Excel',
      'SharePoint',
      'SolidWorks',
    ],
  },
  {
    title: 'Undergraduate Teaching Assistant',
    company: 'University of Guelph',
    location: 'Guelph, Ontario',
    period: 'Sep 2025 – Present',
    description: [
      'Supported students during introductory C programming labs by reviewing lab concepts, answering technical questions, and helping troubleshoot code.',
      'Guided students through topics including C fundamentals, bitwise operations, debugging, and GitHub workflows.',
      'Collaborated with course staff to identify recurring technical challenges and improve student support.',
    ],
    technologies: [
      'C',
      'VS Code',
      'GCC',
      'Debugging',
    ],
  },
  {
    title: 'Engineering Peer Helper',
    company: 'University of Guelph',
    location: 'Guelph, Ontario',
    period: 'Sep 2024 – Present',
    description: [
      'Facilitated collaborative midterm and final exam preparation sessions, guiding students through problem-solving strategies without providing formal course instruction.',
      'Helped students approach practice problems by identifying relevant information, outlining general problem-solving steps, and encouraging peer discussion.',
      'Maintained and updated the Engineering Peer Helper website and Linktree to improve access to program information and academic support resources.',
      'Monitored program email communications and helped manage course-specific Discord channels, supporting student questions and session announcements.',
    ],
    technologies: [
      'Communication',
      'Collaboration',
      'Peer Support',
    ],
  },
  {
    title: 'IT Help Desk',
    company: 'University of Waterloo',
    location: 'Waterloo, Ontario',
    period: 'Jan 2022 – Sep 2022',
    description: [
      'Registered and documented over 1,000 IT equipment items, maintaining accurate hardware inventory records.',
      'Resolved over 50 IT support requests, assisting users with technical issues and troubleshooting.',
      'Assisted with the physical installation of two servers in university server rooms.',
    ],
    technologies: [
      'IT Support',
      'Troubleshooting',
      'Ticketing Systems',
    ],
  },
]

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <p className="section-label">WHERE I'VE WORKED</p>

        <h2 className="section-title">
          Professional Experience<span>.</span>
        </h2>

        <p className="experience-intro">
          Experience across engineering, software support,
          artificial intelligence, and technical collaboration.
        </p>

        <div className="timeline">
          {experiences.map((experience) => (
            <article
              className="timeline-item"
              key={`${experience.company}-${experience.title}`}
            >
              <div className="timeline-dot" aria-hidden="true" />

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{experience.title}</h3>
                    <p className="experience-company">
                      {experience.company}
                    </p>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-location">
                  {experience.location}
                </p>

                <ul className="experience-bullets">
                  {experience.description.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {experience.technologies.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
