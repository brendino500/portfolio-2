import React, { useRef } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import About from './components/common/About'
import Stalk from './components/common/Stalk'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: '#d3c9c0',
    fontFamily: 'Libre Baskerville',
    letterSpacing: 2,
  },
  buttonTitle: {
    color: '#d3c9c0',
    fontFamily: 'Libre Baskerville',
    letterSpacing: 4,
    fontSize: 20,
    flexGrow: 1,
  },
  buttonGroup: {
    marginRight: 0,
  },
}))

function App() {
  const classes = useStyles()
  const sectionHomeRef = useRef(null)
  const sectionSkillsRef = useRef(null)
  const sectionProjectsRef = useRef(null)
  const sectionExperienceRef = useRef(null)
  const sectionAboutRef = useRef(null)
  const sectionStalkRef = useRef(null)

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar
            position="fixed"
            style={{
              background: '#323e47',
              boxShadow: 'none',
            }}
          >
            <Toolbar>
              <Typography className={classes.buttonTitle}>
                <Button
                  className={classes.buttonTitle}
                  onClick={() => scrollTo(sectionHomeRef)}
                >
                  Brenda Ty
                </Button>
              </Typography>

              <Button
                className={classes.button}
                onClick={() => scrollTo(sectionSkillsRef)}
              >
                Skills
              </Button>
              <Button
                className={classes.button}
                onClick={() => scrollTo(sectionProjectsRef)}
              >
                Projects
              </Button>

              <Button
                className={classes.button}
                onClick={() => scrollTo(sectionExperienceRef)}
              >
                Experience
              </Button>
              <Button
                className={classes.button}
                onClick={() => scrollTo(sectionAboutRef)}
              >
                About
              </Button>
              <Button
                className={classes.button}
                onClick={() => scrollTo(sectionStalkRef)}
              >
                Contact
              </Button>
            </Toolbar>
          </AppBar>
        </div>

        {/* <div style={{ position: 'fixed', top: '16px', left: '16px' }}>
          <button onClick={() => scrollTo(sectionHomeRef)}>Brenda Ty</button>
          <br />
          <button onClick={() => scrollTo(sectionSkillsRef)}>Skills</button>
          <br />
          <button onClick={() => scrollTo(sectionProjectsRef)}>Projects</button>
          <br />
          <button onClick={() => scrollTo(sectionExperienceRef)}>
            Experience
          </button>
          <br />
          <button onClick={() => scrollTo(sectionAboutRef)}>About</button>
          <br />
          <button onClick={() => scrollTo(sectionStalkRef)}>Stalk</button>
        </div> */}
        <main>
          <div ref={sectionHomeRef} style={{ height: '100vh' }}>
            <Route exact path="/" component={Home} />
          </div>
          <div ref={sectionSkillsRef} style={{ height: '110vh' }}>
            <Skills />
          </div>
          <div ref={sectionProjectsRef} style={{ height: '300vh' }}>
            <Projects />
          </div>
          <div ref={sectionExperienceRef} style={{ height: '100vh' }}>
            <Experience />
          </div>
          <div ref={sectionAboutRef} style={{ height: '100vh' }}>
            <About />
          </div>
          <div ref={sectionStalkRef} style={{ height: '100vh' }}>
            <Stalk />
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
