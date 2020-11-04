import React, { useRef } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'

function App() {
  const sectionHomeRef = useRef(null)
  const sectionSkillsRef = useRef(null)
  const sectionProjectsRef = useRef(null)
  const sectionExperienceRef = useRef(null)

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <div style={{ position: 'fixed', top: '16px', left: '16px' }}>
          <button onClick={() => scrollTo(sectionHomeRef)}>Brenda Ty</button>
          <br />
          <button onClick={() => scrollTo(sectionSkillsRef)}>Skills</button>
          <br />
          <button onClick={() => scrollTo(sectionProjectsRef)}>Projects</button>
          <br />
          <button onClick={() => scrollTo(sectionExperienceRef)}>
            Experience
          </button>
        </div>
        <main>
          <div ref={sectionHomeRef} style={{ height: '100vh' }}>
            <Route exact path="/" component={Home} />
          </div>
          <div ref={sectionSkillsRef} style={{ height: '110vh' }}>
            <Skills />
          </div>
          <div ref={sectionProjectsRef} style={{ height: '250vh' }}>
            <Projects />
          </div>
          <div ref={sectionExperienceRef} style={{ height: '100vh' }}>
            <Experience />
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
