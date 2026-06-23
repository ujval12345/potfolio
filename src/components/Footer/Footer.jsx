import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import './Footer.css'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/ujval12345', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },

  { icon: <FiMail size={18} />, href: 'mailto:ujvalkadem@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            KUN
            <span className="footer__logo-bracket">/&gt;</span>
          </span>
          <p className="footer__tagline">
            Building elegant software from Warangal, India.
            <br />ECE engineer who codes for the web.
          </p>
          <div className="footer__socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer__social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__nav">
          <p className="footer__nav-title">Navigation</p>
          <ul className="footer__nav-list">
            {quickLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="footer__nav-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact-col">
          <p className="footer__nav-title">Contact</p>
          <div className="footer__contact-items">
            <a href="mailto:ujvalkadem@gmail.com" className="footer__contact-item">
              <FiMail size={14} /> ujval.kadem@example.com
            </a>
            <span className="footer__contact-item">
              <FiGithub size={14} /> github.com/ujval
            </span>
          </div>
          <a
            href="/resume.pdf"
            className="footer__resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <div className="footer__divider" />
        <div className="footer__bottom-row">
          <p className="footer__copy">
            © {new Date().getFullYear()} Kadem Ujval Narsimha. Crafted with React + Vite.
          </p>
          <p className="footer__made">
            Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
