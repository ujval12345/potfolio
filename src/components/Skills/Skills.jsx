import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const categories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js',    level: 88 },
      { name: 'JavaScript',  level: 85 },
      { name: 'HTML5',       level: 95 },
      { name: 'CSS3',        level: 90 },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',    level: 80 },
      { name: 'Express.js', level: 78 },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL',   level: 65 },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code',      level: 92 },
      { name: 'Postman',      level: 80 },
      { name: 'Docker',       level: 60 },
    ],
  },
]

const techLogos = [
  'React', 'Node', 'MongoDB', 'Express', 'JavaScript',
  'HTML5', 'CSS3', 'Git', 'GitHub', 'VS Code', 'Postman', 'MySQL',
]

function SkillBar({ name, level, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimated(true)
          entries[0].target.querySelectorAll('.skills__animate').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`
            el.classList.add('skills__animate--in')
          })
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label skills__animate">Capabilities</p>
        <h2 className="section-title skills__animate">
          My <em>Stack</em>
        </h2>

        <div className="skills__grid">
          {categories.map((cat, ci) => (
            <div key={ci} className="skills__card glass-card skills__animate">
              <div className="skills__cat-label">{cat.label}</div>
              <div className="skills__bars">
                {cat.skills.map((sk, si) => (
                  <SkillBar
                    key={si}
                    name={sk.name}
                    level={sk.level}
                    animate={animated}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <div className="skills__cloud skills__animate">
          <p className="skills__cloud-label">Also worked with</p>
          <div className="skills__pills">
            {techLogos.map(t => (
              <span key={t} className="skills__pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
