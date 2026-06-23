import { useEffect, useRef } from 'react'
import { FiAward, FiCode, FiZap, FiTarget } from 'react-icons/fi'
import './Achievements.css'

const achievements = [
  {
    icon: <FiAward size={28} strokeWidth={1.5} />,
    title: 'NIT Warangal',
    sub: 'Premier Technical Institute',
    body: 'Among India\'s top 10 NITs — entrance through JEE Mains. ECE with VLSI specialization, building hardware and software skills in parallel.',
    highlight: 'Top 10 NIT',
  },
  {
    icon: <FiCode size={28} strokeWidth={1.5} />,
    title: 'DSA Practitioner',
    sub: 'LeetCode + Codeforces',
    body: '250+ algorithmic problems solved across platforms. Proficient in arrays, linked lists, trees, graphs, recursion, and dynamic programming.',
    highlight: '250+ Problems',
  },
  {
    icon: <FiZap size={28} strokeWidth={1.5} />,
    title: 'Full-Stack Engineer',
    sub: 'MERN Stack',
    body: 'Built production-ready applications with React, Node.js, Express, and MongoDB. Shipped projects with JWT auth, REST APIs, and cloud deployments.',
    highlight: '10+ Projects',
  },
  {
    icon: <FiTarget size={28} strokeWidth={1.5} />,
    title: 'Problem Solver',
    sub: 'Analytical Mindset',
    body: 'Combined ECE systems thinking with software engineering discipline — from circuit design to distributed systems, the mindset is the same: understand first, then build.',
    highlight: 'Systems Thinker',
  },
]

export default function Achievements() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ach__animate').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`
              el.classList.add('ach__animate--in')
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
    <section className="section achievements" id="achievements" ref={sectionRef}>
      <div className="container">
        <p className="section-label ach__animate">Recognition</p>
        <h2 className="section-title ach__animate">
          What I've <em>Built</em>
        </h2>

        <div className="ach__grid">
          {achievements.map((a, i) => (
            <div key={i} className="ach__card glass-card ach__animate">
              <div className="ach__icon">{a.icon}</div>
              <div className="ach__highlight">{a.highlight}</div>
              <h3 className="ach__title">{a.title}</h3>
              <p className="ach__sub">{a.sub}</p>
              <p className="ach__body">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
