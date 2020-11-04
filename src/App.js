import React, { useRef } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Skills from './components/skills/Skills'

function App() {
  const sectionHomeRef = useRef(null)
  const sectionSkillsRef = useRef(null)

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
          {/* <br />
          <button onClick={() => scrollTo(section3Ref)}>Section 3</button> */}
        </div>
        <main>
          <div ref={sectionHomeRef} style={{ height: '100vh' }}>
            <Route exact path="/" component={Home} />
          </div>
          <div ref={sectionSkillsRef} style={{ height: '100vh' }}>
            <Skills />
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
