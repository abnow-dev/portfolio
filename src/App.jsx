import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ResumeSection from './components/ResumeSection'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <hr className="comic-divider" />
        <About />
        <hr className="comic-divider" />
        <Skills />
        <hr className="comic-divider" />
        <Experience />
        <hr className="comic-divider" />
        <Projects />
        <hr className="comic-divider" />
        <ResumeSection />
      </main>
    </>
  )
}

export default App
