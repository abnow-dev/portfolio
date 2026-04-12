import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section" ref={ref}>
      <p className="section-title">About</p>
      <span className="section-rule" />

      <div className="about-grid">

        <div className="panel about-card reveal" style={{ transitionDelay: '0ms' }}>
          <p className="caption">BACKSTORY</p>
          <img
            src="abhinav_profile.jpg"
            alt="Abhinav Singirthi"
            className="about-avatar"
          />
          <p className="about-bio">
            Frontend engineer with a love for clean interfaces and well-structured code.
            B.Tech graduate (CGPA 9.64) who's shipped real products at
            Capgemini, Cisco, and ServiceNow.
          </p>
          <div className="about-tag-row">
            <span className="about-tag">6.11 yrs exp</span>
            <span className="about-tag">B.Tech 9.64</span>
          </div>
        </div>

        <div className="panel about-card reveal" style={{ transitionDelay: '80ms' }}>
          <p className="caption">CONTACT</p>
          <ul className="about-list">
            <li>
              <span className="about-icon">✉</span>
              <a href="mailto:singirthi.abhinav2@gmail.com" className="about-link">
                singirthi.abhinav2@gmail.com
              </a>
            </li>
            <li>
              <span className="about-icon">◎</span>
              <span>Hyderabad, India</span>
            </li>
            <li>
              <span className="about-icon">◈</span>
              <a
                href="https://www.linkedin.com/in/abhinav-singirthi-158664148/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                linkedin/abhinav-singirthi
              </a>
            </li>
            <li>
              <span className="about-icon">⌨</span>
              <a
                href="https://github.com/abnow-dev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                github/abnow-dev
              </a>
            </li>
            <li>
              <span className="about-icon">◉</span>
              <a
                href="https://abnow-dev.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                abnow-dev.github.io
              </a>
            </li>
          </ul>
        </div>

        <div className="panel about-card reveal" style={{ transitionDelay: '160ms' }}>
          <p className="caption">LANGUAGES</p>
          <ul className="about-langs">
            <li><span className="lang-flag">EN</span> English</li>
            <li><span className="lang-flag">HI</span> Hindi</li>
            <li><span className="lang-flag">TE</span> Telugu</li>
          </ul>

          <p className="caption" style={{ marginTop: '1.5rem' }}>CERTIFIED</p>
          <ul className="about-certs">
            {[
              { label: 'Azure Fundamentals', url: 'https://www.credly.com/badges/4bfb3812-4b98-4a43-8d80-85ec22c4fa78' },
              { label: 'React (Frontend Dev)', url: 'https://www.hackerrank.com/certificates/d48784dd6413' },
              { label: 'React (Basic)', url: 'https://www.hackerrank.com/certificates/c3ae7db81b46' },
              { label: 'Angular (Intermediate)', url: 'https://www.hackerrank.com/certificates/b63fe14db229' },
              { label: 'Python (Basic)', url: 'https://www.hackerrank.com/certificates/348454a7388e' },
            ].map(c => (
              <li key={c.label}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="about-link cert-link">
                  ↗ {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
