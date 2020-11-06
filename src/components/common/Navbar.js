import React, { useRef } from 'react'

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

export default function Navbar() {
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
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Typography className={classes.buttonTitle}>
            <Button className={classes.buttonTitle}>Brenda Ty</Button>
          </Typography>

          <Button className={classes.button}>Skills</Button>
          <Button className={classes.button}>Projects</Button>
          <Button className={classes.button}>About</Button>
          <Button className={classes.button}>Experience</Button>
          <Button className={classes.button}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
