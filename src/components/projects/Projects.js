import React from 'react'
import JungleKobenhavn from './JungleKobenhavn'
import Apperture from './APPerture'
import Nalu from './Nalu'
import WeatherxTfl from './WeatherxTfl'
import Tetris from './Tetris'
import Aventyr from './Aventyr'
import MaxwellAndSkinner from './MaxwellAndSkinner'
import SpaceInvaders from './SpaceInvaders'

import Fade from 'react-reveal/Fade'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '85%',
    marginTop: '10%',
  },
  projectCards: {
    marginTop: '5%',
  },
  projects: {
    margin: 10,
    marginTop: '5vh',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 38,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 40,
    },
  },
  dividerLeft: {
    backgroundColor: '#d3c9c0',
    height: 2,
    width: '50vw',
  },
  dividerRight: {
    backgroundColor: '#d3c9c0',
    height: 2,
    width: '50vw',
    marginLeft: '30vw',
  },
}))

export default function Projects() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography varient="h1" className={classes.title}>
        <br />
        PROJECTS
      </Typography>
      <div className={classes.projectCards}>
        <Fade>
          <div className={classes.projects}>
            <SpaceInvaders />
            <Divider className={classes.dividerLeft} />
          </div>
          <div className={classes.projects}>
            <JungleKobenhavn />
            <Divider className={classes.dividerRight} />
          </div>
          <div className={classes.projects}>
            <Aventyr />
            <Divider className={classes.dividerLeft} />
          </div>
          <div className={classes.projects}>
            <MaxwellAndSkinner />
            <Divider className={classes.dividerRight} />
          </div>

          {/* <div className={classes.projects}>
            <Apperture />
          </div>
          <div className={classes.projects}>
            <Nalu />
          </div>
          <div className={classes.projects}>
            <WeatherxTfl />
          </div>
          <div className={classes.projects}>
            <Tetris />
          </div> */}
        </Fade>
      </div>
    </Container>
  )
}
