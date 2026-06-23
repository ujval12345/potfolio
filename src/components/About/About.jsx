import { useEffect, useRef } from 'react'
import { FiUser, FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi'
import './About.css'

const stats = [
  { icon: <FiCode size={20} />,      value: '10+',  label: 'Projects Built' },
  { icon: <FiCpu size={20} />,       value: '15+',  label: 'Technologies' },
  { icon: <FiTrendingUp size={20} />, value: '250+', label: 'DSA Problems' },
  { icon: <FiUser size={20} />,      value: 'NIT',  label: 'Warangal' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.about__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.12}s`
              el.classList.add('about__animate--in')
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <p className="section-label about__animate">Biography</p>
        <h2 className="section-title about__animate">
          Who I <em>Am</em>
        </h2>

        <div className="about__grid">
          {/* Photo */}
          <div className="about__photo-col about__animate">
            <div className="about__photo-frame">
              <div className="about__photo-placeholder">
                <FiUser size={60} strokeWidth={1} />
                <span>Your Photo</span>
              </div>
              <div className="about__photo-tag">
                <span className="about__photo-tag-dot" />
                NIT Warangal, 2026
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about__text-col">
            <div className="about__text-block about__animate">
              <h3 className="about__heading">ECE student who fell in love with software</h3>
              <p className="about__body">
                I'm Kadem Ujval Narsimha, a 3rd-year B.Tech student in Electronics &amp; Communication
                Engineering with a VLSI-DT specialization at NIT Warangal. While my degree dives deep
                into semiconductors and chip design, I discovered an equal passion for building things
                on the web.
              </p>
              <p className="about__body">
                What started as curiosity about how websites work became a full-on obsession: building
                MERN stack applications, solving 250+ DSA problems, and shipping projects that touch
                real problems. I treat code the same way I treat circuit design — precision,
                architecture, and an eye for elegance.
              </p>
              <p className="about__body">
                Currently seeking full-stack engineering roles where I can bring both the systems
                thinking of an ECE background and the product sensibility of a developer.
              </p>
            </div>

            <div className="about__tags about__animate">
              {['MERN Stack', 'DSA', 'System Design', 'VLSI', 'Open Source', 'Problem Solving'].map(tag => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about__stats about__animate">
          {stats.map((s, i) => (
            <div key={i} className="about__stat glass-card">
              <div className="about__stat-icon">{s.icon}</div>
              <div className="about__stat-value">{s.value}</div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
