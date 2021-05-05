import React, { useRef, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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

import Home from './components/common/Home'
import Skills from './components/skills/Skills'
import About from './components/common/about/About'
import Stalk from './components/common/stalk/Stalk'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import useStyles from './styles/mainAppStyles'
import NavButton from './components/nav/NavButton'
import Photos from './components/common/photos/Index'

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
            // scrollTo(sectionAboutRef)
          }}
        >
          PHOTOS
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
    <div className={`${classes.root} menu menu--inola`}>
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
                <NavButton
                  styles={classes.button}
                  text="Skills"
                  scroll={() => scrollTo(sectionSkillsRef)}
                />
                <NavButton
                  styles={classes.button}
                  text="Projects"
                  scroll={() => scrollTo(sectionProjectsRef)}
                />
                <NavButton
                  styles={classes.button}
                  text="Experience"
                  scroll={() => scrollTo(sectionExperienceRef)}
                />
                <NavButton
                  styles={classes.button}
                  text="About"
                  scroll={() => scrollTo(sectionAboutRef)}
                />
                <Button
                  className={`${classes.button} menu__item`}
                  // onClick={() => scrollTo(sectionAboutRef)}
                >
                  <span className="menu__item-name">Photos</span>
                </Button>
                <NavButton
                  styles={classes.button}
                  text="Contact"
                  scroll={() => scrollTo(sectionStalkRef)}
                />
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
          <div ref={sectionProjectsRef} id="project-height">
            <Projects />
          </div>
          <div ref={sectionExperienceRef} id="experience-height">
            <Experience />
          </div>
          <div ref={sectionAboutRef} id="about-height">
            <About />
          </div>
          <div ref={sectionStalkRef} id="stalk-height">
            <Stalk />
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
