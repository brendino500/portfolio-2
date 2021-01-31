import React from 'react'
import JungleKobenhavn from './JungleKobenhavn'
import Apperture from './APPerture'
import Nalu from './Nalu'
import WeatherxTfl from './WeatherxTfl'
import Tetris from './Tetris'
import Aventyr from './Aventyr'
import MaxwellAndSkinner from './MaxwellAndSkinner'
import SpaceInvaders from './SpaceInvaders'
import Pong from './Pong'
import RPS from './RPS'
import Brodologi from './Brodologi'
import useStyles from './styles/mainStyles'

import Fade from 'react-reveal/Fade'
import { Typography, Container, Divider } from '@material-ui/core'

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
            <Brodologi />
            <Divider className={classes.dividerRight} />
          </div>
          <div className={classes.projects}>
            <SpaceInvaders />
            <Divider className={classes.dividerLeft} />
          </div>
          <div className={classes.projects}>
            <JungleKobenhavn />
            <Divider className={classes.dividerRight} />
          </div>
          <div className={classes.projects}>
            <RPS />
            <Divider className={classes.dividerRight} />
          </div>
          {/* <div className={classes.projects}>
            <Aventyr />
            <Divider className={classes.dividerLeft} />
          </div> */}
          <div className={classes.projects}>
            <Apperture />
            <Divider className={classes.dividerRight} />
          </div>
          <div className={classes.projects}>
            <Nalu />
            <Divider className={classes.dividerLeft} />
          </div>
          <div className={classes.projects}>
            <WeatherxTfl />
            <Divider className={classes.dividerRight} />
          </div>
          <div className={classes.projects}>
            <Tetris />
            <Divider className={classes.dividerLeft} />
          </div>
          <div className={classes.projects}>
            <Pong />
            <Divider className={classes.dividerRight} />
          </div>
          {/* <div className={classes.projects}>
            <MaxwellAndSkinner />
          </div> */}
        </Fade>
      </div>
    </Container>
  )
}
