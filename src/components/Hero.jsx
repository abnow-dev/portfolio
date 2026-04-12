import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  return (
    <section id="hero" className="hero bg-dots" ref={ref}>
      <div className="hero-inner">

        {/* Decorative floaters */}
        <span className="hero-floater f1 action-badge" style={{ transform: 'rotate(-8deg)' }}>POW!</span>
        <span className="hero-floater f2 action-badge" style={{ transform: 'rotate(5deg)' }}>ZAP!</span>
        <span className="hero-floater f3">✦</span>
        <span className="hero-floater f4">◆</span>
        <span className="hero-floater f5">★</span>

        {/* Main title block */}
        <div className="hero-title-block panel">
          <p className="caption">ISSUE #2019 — FIRST COMMIT</p>
          <h1 className="hero-name">
            Abhinav<br />Singirthi
          </h1>
          <div className="hero-role">
            <span className="hero-role-text">Senior Frontend Engineer</span>
          </div>
          <p className="hero-location">@ ServiceNow · Hyderabad, India</p>
        </div>

        {/* Speech bubble */}
        <div className="hero-bubble-wrap">
          <div className="bubble tail-left hero-bubble">
            <p className="hero-quote">
              "6+ years shipping UIs that don't fall apart.
              Currently making AI talk to humans at ServiceNow —
              Next.js, React, TypeScript, SSE streams, and a lot of coffee."
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#experience" className="btn">
              ↓ View Work
            </a>
            <a href="#resume" className="btn btn-fill">
              ↓ Resume
            </a>
            <a
              href="https://github.com/abnow-dev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-singirthi-158664148/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
