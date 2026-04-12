import { useEffect, useRef } from 'react'
import './Skills.css'

const SKILLS = [
  // Logo available
  { name: 'React.js',     logo: 'react_logo.svg' },
  { name: 'Angular',      logo: 'angular_logo.svg' },
  { name: 'JavaScript',   logo: 'javascript_logo.svg' },
  { name: 'TypeScript',   logo: 'typescript_logo.svg' },
  { name: 'Node.js',      logo: 'nodejs_logo.svg' },
  { name: 'HTML5',        logo: 'html_logo.svg' },
  { name: 'CSS3',         logo: 'css_logo.svg' },
  { name: 'Bootstrap',    logo: 'bootstrap_logo.svg' },
  { name: 'jQuery',       logo: 'jquery_logo.svg' },
  { name: 'Python',       logo: 'python_logo.svg' },
  { name: 'Docker',       logo: 'docker_logo.svg' },
  { name: 'SQL',          logo: 'sql_logo.svg' },
  // Text-only badges
  { name: 'Next.js',      logo: null },
  { name: 'Redux',        logo: null },
  { name: 'RxJS',         logo: null },
  { name: 'GraphQL',      logo: null },
  { name: 'SASS/SCSS',    logo: null },
  { name: 'Jest',         logo: null },
  { name: 'Kubernetes',   logo: null },
  { name: 'Webpack',      logo: null },
  { name: 'Figma',        logo: null },
  { name: 'SonarQube',    logo: null },
  { name: 'REST APIs',    logo: null },
  { name: 'CI/CD',        logo: null },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-wrap bg-stripes" ref={ref}>
      <div className="inner">
        <p className="section-title reveal">Arsenal</p>
        <span className="section-rule reveal" />

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-chip panel reveal"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {skill.logo
                ? <img src={skill.logo} alt={skill.name} className="skill-logo" width={28} height={28} />
                : <span className="skill-fallback-icon">◈</span>
              }
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
