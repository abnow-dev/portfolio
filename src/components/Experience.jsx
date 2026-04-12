import { useEffect, useRef, useState } from 'react'
import './Experience.css'

const JOBS = [
  {
    episode: '#003',
    company: 'ServiceNow',
    role: 'Senior Software Engineer (IC3) — UI',
    period: 'May 2025 – Present',
    location: 'Hyderabad, India',
    stack: ['Next.js', 'React', 'TypeScript', 'SSE'],
    bullets: [
      'Architected the frontend for an AI-powered SRE chatbot — real-time alert investigation and incident resolution for on-call engineers.',
      'Designed SSE-based streaming UI for multi-agent AI responses, handling progressive rendering (alerts, CI context, KB results) with sub-second perceived latency.',
      'Built reusable, scalable components on internal AI/ML platforms following strict OOP architectural standards.',
      'Integrated human-in-the-loop approval gates — engineers review and authorize AI-suggested remediation before execution.',
      'Enforced coding standards and 95%+ test coverage using AI-assisted dev tooling.',
    ],
  },
  {
    episode: '#002',
    company: 'Cisco',
    role: 'UI Engineer (SDE-3)',
    period: 'Nov 2021 – May 2025',
    location: 'Bangalore, India',
    stack: ['Angular 14', 'React', 'Docker', 'Kubernetes', 'TypeScript'],
    bullets: [
      'Webex Video Mesh: real-time monitoring dashboards for 100+ node clusters — QoS metrics, service health charts, alert panels on Control Hub.',
      'Security Tool: built end-to-end from vanilla JS to Angular 14, containerized with Docker, deployed to Kubernetes in production.',
      'Zero Touch Provisioning: led creation of a shared component library consumed by 70–80% of screens across multiple pods; mentored 4+ engineers.',
      'Maintained 95% SonarQube coverage and 85% unit test coverage; established code review standards across Core UI team.',
    ],
  },
  {
    episode: '#001',
    company: 'Capgemini',
    role: 'Associate Consultant (UI)',
    period: 'Jun 2019 – Oct 2021',
    location: 'Navi Mumbai, India',
    stack: ['Angular 8', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3'],
    bullets: [
      'TORCH (Corporate Healthcare): migrated a large-scale insurance management app from vanilla JS/jQuery to Angular 8 — improved performance, modularity, and UX.',
      'Refactored codebase using OOP principles and reusable component patterns, cutting code duplication significantly.',
    ],
  },
]

function JobPanel({ job, delay }) {
  const [open, setOpen] = useState(true)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="job-panel panel reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="job-header" onClick={() => setOpen(o => !o)}>
        <span className="caption job-episode">EPISODE {job.episode}</span>
        <div className="job-title-row">
          <h3 className="job-company">{job.company}</h3>
          <span className="job-toggle">{open ? '▲' : '▼'}</span>
        </div>
        <p className="job-role">{job.role}</p>
        <div className="job-meta">
          <span>{job.period}</span>
          <span className="job-dot">·</span>
          <span>{job.location}</span>
        </div>
        <div className="job-stack">
          {job.stack.map(s => (
            <span key={s} className="job-stack-tag">{s}</span>
          ))}
        </div>
      </div>

      {open && (
        <ul className="job-bullets">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-title">Origin Story</p>
      <span className="section-rule" />

      <div className="exp-timeline">
        {JOBS.map((job, i) => (
          <JobPanel key={job.company} job={job} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
