import { useEffect, useRef, useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 'sre-chatbot',
    tag: 'ServiceNow · 2025',
    title: 'AI SRE Chatbot',
    blurb: 'Real-time AI-powered incident resolution interface for on-call engineers.',
    stack: ['Next.js', 'React', 'TypeScript', 'SSE'],
    detail: [
      'Streamed multi-agent AI responses using Server-Sent Events — structured data (alerts, CI context, KB articles) rendered progressively with sub-second perceived latency.',
      'Human-in-the-loop approval gates let engineers review and authorize AI-suggested remediation actions before execution.',
      'Built on internal AI/ML platform with strict OOP component architecture.',
    ],
  },
  {
    id: 'ert',
    tag: 'ServiceNow · 2025',
    title: 'ERT — Estimated Run Time',
    blurb: 'ML-powered dashboard predicting workflow runtimes with trend analysis.',
    stack: ['React', 'TypeScript', 'REST APIs', 'Charts'],
    detail: [
      'Integrated an ML model into the frontend to predict workflow runtimes.',
      'Built comparison dashboards visualising predicted vs. actual results with trend charts and historical analysis.',
    ],
  },
  {
    id: 'ztp',
    tag: 'Cisco · 2022–2024',
    title: 'Zero Touch Provisioning',
    blurb: 'Shared component library powering 70–80% of ZTP screens across 5+ teams.',
    stack: ['Angular', 'TypeScript', 'Design System'],
    detail: [
      'Led the design and creation of the shared component library from scratch.',
      'Onboarded and mentored 4+ engineers across multiple pods on architecture best practices.',
      'Components adopted across the entire Core UI team for consistency.',
    ],
  },
  {
    id: 'webex',
    tag: 'Cisco · 2021–2023',
    title: 'Webex Video Mesh',
    blurb: 'Real-time monitoring dashboards for 100+ node Webex hybrid clusters.',
    stack: ['Angular', 'RxJS', 'Control Hub', 'REST APIs'],
    detail: [
      'Built QoS metrics panels, service health charts, and alert panels on Cisco Control Hub.',
      'Real-time data polling and reactive state management with RxJS.',
    ],
  },
  {
    id: 'security',
    tag: 'Cisco · 2022',
    title: 'Hybrid Data Security Tool',
    blurb: 'Security management app — migrated from vanilla JS to Angular 14 and containerised.',
    stack: ['Angular 14', 'Docker', 'Kubernetes', 'TypeScript'],
    detail: [
      'Built the application end-to-end from a vanilla JS prototype to a production Angular 14 app.',
      'Containerised with Docker and deployed to Kubernetes in production.',
    ],
  },
  {
    id: 'torch',
    tag: 'Capgemini · 2019–2021',
    title: 'TORCH — Corporate Healthcare',
    blurb: 'Large-scale insurance management app migrated from jQuery to Angular 8.',
    stack: ['Angular 8', 'jQuery', 'Bootstrap', 'jqGrid'],
    detail: [
      'Led migration from vanilla JS/jQuery to a fully componentised Angular 8 architecture.',
      'Refactored using OOP principles — reduced code duplication, improved maintainability and performance.',
    ],
  },
]

function ProjectCard({ project, delay }) {
  const [open, setOpen] = useState(false)
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
      className={`project-card panel reveal${open ? ' project-card--open' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="project-top" onClick={() => setOpen(o => !o)}>
        <span className="caption project-tag">{project.tag}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-blurb">{project.blurb}</p>
        <div className="project-stack">
          {project.stack.map(s => <span key={s} className="job-stack-tag">{s}</span>)}
        </div>
        <button className="project-toggle">
          {open ? '▲ LESS' : '▼ MORE'}
        </button>
      </div>

      {open && (
        <ul className="project-detail">
          {project.detail.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrap bg-dots">
      <div className="inner">
        <p className="section-title reveal">Greatest Hits</p>
        <span className="section-rule reveal" />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
