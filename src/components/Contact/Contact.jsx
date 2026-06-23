import { useRef, useState, useEffect } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ct__animate').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`
              el.classList.add('ct__animate--in')
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <p className="section-label ct__animate">Connect</p>
        <h2 className="section-title ct__animate">
          Let's <em>Talk</em>
        </h2>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info ct__animate">
            <p className="contact__intro">
              I'm currently open to full-stack engineering roles, internships, and interesting
              collaborations. Whether it's a job opportunity or just a conversation about tech —
              my inbox is always open.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FiMail size={18} />
                </div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <a
                    href="mailto:ujvalkadem@gmail.com"
                    className="contact__detail-value"
                  >
                    ujvalkadem@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FiPhone size={18} />
                </div>
                <div>
                  <div className="contact__detail-label">Phone</div>
                  <span className="contact__detail-value">+91 8247026844</span>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <div className="contact__detail-label">Location</div>
                  <span className="contact__detail-value">India 🇮🇳</span>
                </div>
              </div>
            </div>

            <div className="contact__availability">
              <span className="contact__avail-dot" />
              Available for new opportunities
            </div>
          </div>

          {/* Form */}
          <form className="contact__form ct__animate" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">Name</label>
              <input
                className="contact__input"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="email">Email</label>
              <input
                className="contact__input"
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea
                className="contact__input contact__textarea"
                id="message"
                name="message"
                placeholder="Tell me about the opportunity or project..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`contact__submit ${sent ? 'contact__submit--sent' : ''}`}
              disabled={sending || sent}
            >
              {sent ? (
                <>
                  <FiCheck size={16} />
                  Message sent!
                </>
              ) : sending ? (
                <>
                  <span className="contact__spinner" />
                  Sending…
                </>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
