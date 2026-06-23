import { useEffect, useRef } from 'react'
import './Timeline.css'

const events = [
  {
    year: '2022',
    title: 'Joined NIT Warangal',
    sub: 'B.Tech ECE — VLSI-DT Specialization',
    body: 'Secured admission to one of India\'s top NITs. Began exploring electronics, semiconductor physics, and VLSI design while simultaneously discovering a love for building software.',
    tag: 'Education',
  },
  {
    year: '2023',
    title: 'Started Web Development',
    sub: 'MERN Stack Self-Learning',
    body: 'Dove deep into the MERN stack: built first React apps, learned REST APIs with Express, and connected everything to MongoDB. Realized software was where I wanted to build my career.',
    tag: 'Development',
  },
  {
    year: '2024',
    title: 'DSA & Competitive Programming',
    sub: 'LeetCode · Codeforces',
    body: 'Committed to solving 250+ DSA problems across LeetCode and Codeforces. Strengthened problem-solving muscles in arrays, trees, graphs, and dynamic programming.',
    tag: 'Algorithms',
  },
  {
    year: '2025',
    title: 'Full-Stack Projects & Internship',
    sub: 'ERPNext · Frappe Framework · Portfolio',
    body: 'Built complex full-stack applications including a fraud detection system with Neo4j + Docker. Joined an internship working with ERPNext and the Frappe Framework.',
    tag: 'Professional',
  },
  {
    year: '2026',
    title: 'Target: SDE Role',
    sub: 'Software Engineering · Product Engineering',
    body: 'Final year underway. Actively targeting SDE and full-stack engineering roles at product-first companies. Building, learning, and shipping every day.',
    tag: 'Goal',
  },
]

export default function Timeline() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.tl__animate').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.15}s`
              el.classList.add('tl__animate--in')
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section timeline" id="timeline" ref={sectionRef}>
      <div className="container">
        <p className="section-label tl__animate">Journey</p>
        <h2 className="section-title tl__animate">
          My <em>Story</em>
        </h2>

        <div className="tl__track">
          <div className="tl__line" />

          {events.map((e, i) => (
            <div
              key={i}
              className={`tl__item tl__animate ${i % 2 === 0 ? 'tl__item--left' : 'tl__item--right'}`}
            >
              <div className="tl__dot">
                <div className="tl__dot-inner" />
              </div>

              <div className="tl__card glass-card">
                <div className="tl__card-header">
                  <span className="tl__tag">{e.tag}</span>
                  <span className="tl__year">{e.year}</span>
                </div>
                <h3 className="tl__title">{e.title}</h3>
                <p className="tl__sub">{e.sub}</p>
                <p className="tl__body">{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
