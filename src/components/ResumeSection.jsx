import { useEffect, useRef } from 'react'
import './ResumeSection.css'

export default function ResumeSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" className="section-wrap bg-stripes resume-section" ref={ref}>
      <div className="inner">
        <div className="resume-inner reveal">

          <div className="resume-text">
            <p className="section-title">Get The<br />Full Story</p>
            <span className="section-rule" />
            <p className="resume-sub">
              6+ years. 3 companies. Real production code.
              <br />
              The full breakdown — one PDF.
            </p>
          </div>

          <div className="resume-action">
            <div className="resume-panel panel">
              <div className="resume-decorations">
                <span className="action-badge rd1" style={{ transform: 'rotate(-6deg)' }}>HIRED!</span>
                <span className="action-badge rd2" style={{ transform: 'rotate(4deg)' }}>WOW!</span>
                <span className="resume-star rs1">✦</span>
                <span className="resume-star rs2">★</span>
              </div>

              <p className="resume-panel-title">ABHINAV SINGIRTHI</p>
              <p className="resume-panel-role">Senior Frontend Engineer</p>
              <p className="resume-panel-stats">
                6.11 yrs · React · Angular · Next.js
              </p>

              <a
                href="resume/resume.docx"
                download="Abhinav_Singirthi_Resume.docx"
                className="btn btn-fill resume-btn"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
