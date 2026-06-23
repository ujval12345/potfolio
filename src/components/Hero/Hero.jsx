import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const WORDS = ['Full Stack Developer', 'React Engineer', 'Problem Solver', 'ECE + Software']

export default function Hero() {
  const canvasRef = useRef(null)
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  /* ── Canvas dot grid ─────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMouse)

    const cols = Math.ceil(window.innerWidth / 40)
    const rows = Math.ceil(window.innerHeight / 40)
    const dots = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({ x: c * 40 + 20, y: r * 40 + 20 })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        const dx   = d.x - mouse.x
        const dy   = d.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const radius = dist < 120 ? 1.8 : 0.9
        const alpha  = dist < 120 ? 0.4 + (1 - dist / 120) * 0.5 : 0.12
        ctx.beginPath()
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  /* ── Typing animation ────────────────────────── */
  useEffect(() => {
    const word = WORDS[wordIdx]
    const speed = deleting ? 40 : 85
    const pause = deleting && charIdx === 0 ? 400 : !deleting && charIdx === word.length ? 1800 : 0

    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setDisplayed(word.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true)
      } else if (deleting && charIdx > 0) {
        setDisplayed(word.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else if (deleting && charIdx === 0) {
        setDeleting(false)
        setWordIdx(i => (i + 1) % WORDS.length)
      }
    }, pause || speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__content container">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          Available for opportunities
        </div>

        <h1 className="hero__name">
          <span className="hero__name-line1">Kadem</span>
          <span className="hero__name-line2">Ujval</span>
          <span className="hero__name-line3">
            <em>Narsimha</em>
          </span>
        </h1>

        <div className="hero__typing-wrapper">
          <span className="hero__typing-prefix">I build → </span>
          <span className="hero__typing-word">{displayed}</span>
          <span className="hero__cursor" />
        </div>

        <p className="hero__subtitle">
          3rd-year ECE student at NIT Warangal turning circuits into<br />
          code — MERN stack engineer who loves elegant systems.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
            <span className="hero__btn-arrow">→</span>
          </a>
          <a
            href="/resume.pdf"
            className="hero__btn hero__btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="hero__socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:ujval@example.com"
            className="hero__social-link"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <FiArrowDown size={18} />
        <span>Scroll</span>
      </a>

      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />
    </section>
  )
}
