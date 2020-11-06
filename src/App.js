import React, { useRef, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import About from './components/common/About'
import Stalk from './components/common/Stalk'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
  IconButton,
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'

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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    Paper: {
      backgroundColor: '#d3c9c0',
    },
  },
  burgerIcon: {
    color: '#d3c9c0',
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
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (e) => {
    setMobileMoreAnchorEl(e.currentTarget)
  }

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const menuId = 'primary-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  )

  const mobileMenuId = 'primary-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose()
            scrollTo(sectionProjectsRef)
          }}
        >
          PROJECTS
        </p>
      </MenuItem>
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose()
            scrollTo(sectionExperienceRef)
          }}
        >
          EXPERIENCE
        </p>
      </MenuItem>
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose()
            scrollTo(sectionAboutRef)
          }}
        >
          ABOUT
        </p>
      </MenuItem>
      <MenuItem>
        <p
          className={classes.button}
          onClick={() => {
            handleMobileMenuClose()
            scrollTo(sectionStalkRef)
          }}
        >
          CONTACT
        </p>
      </MenuItem>
    </Menu>
  )

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

              <div className={classes.sectionDesktop}>
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
              </div>

              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MenuIcon className={classes.burgerIcon} />
                </IconButton>
              </div>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
          </AppBar>
        </div>

        <main>
          <div ref={sectionHomeRef} id="home-height">
            <Route exact path="/" component={Home} />
          </div>
          <div ref={sectionSkillsRef} id="skills-height">
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
