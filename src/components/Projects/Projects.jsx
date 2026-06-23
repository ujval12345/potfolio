import { useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Interactive Todo List',
    description:
      'A feature-rich task management app with drag-and-drop reordering, priority labels, local persistence, and smooth micro-animations. Designed for focus and minimal distraction.',
    tech: ['React', 'CSS3', 'localStorage', 'DnD API'],
    github: 'https://github.com/',
    live: '#',
    accent: '#ffffff',
  },
  {
    number: '02',
    title: 'Personal Finance Tracker',
    description:
      'Full-stack budgeting app with category-wise expense tracking, interactive charts, monthly summaries, and JWT-secured user accounts stored in MongoDB.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/',
    live: '#',
    accent: '#c0c0c0',
  },
  {
    number: '03',
    title: 'E-commerce Price Tracker',
    description:
      'Web scraper + dashboard that monitors product prices across platforms and notifies users via email when prices drop below a set threshold.',
    tech: ['Node.js', 'Puppeteer', 'MongoDB', 'Nodemailer', 'React'],
    github: 'https://github.com/',
    live: '#',
    accent: '#808080',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.proj__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.15}s`
              el.classList.add('proj__animate--in')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section projects" id="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-label proj__animate">Work</p>
        <h2 className="section-title proj__animate">
          Selected <em>Projects</em>
        </h2>

        <div className="projects__list">
          {projects.map((p) => (
            <article key={p.number} className="project-card glass-card proj__animate">
              {/* Screenshot placeholder */}
              <div className="project-card__img">
                <div className="project-card__img-inner">
                  <FiLayers size={32} strokeWidth={1} />
                  <span>Project Preview</span>
                </div>
                <div className="project-card__number">{p.number}</div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>

                <div className="project-card__tech">
                  {p.tech.map(t => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn project-card__btn--ghost"
                  >
                    <FiGithub size={15} />
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn project-card__btn--solid"
                  >
                    <FiExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more proj__animate">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__more-link"
          >
            View all projects on GitHub
            <span className="projects__more-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
