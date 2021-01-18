import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Grid } from '@material-ui/core'

import useStyles from '../styles/aboutStyles'
import Title from './Title'
import Subtitle from './Subtitle'
import Image from './Image'
import MainText from './MainText'
import LearningList from './LearningList'
import MobileImage from './MobileImage'

export default function About() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Title />
      <br />
      <Fade bottom cascade>
        <div className={classes.content}>
          <Image />
          <Fade bottom cascade>
            <div className={classes.textContent}>
              <Subtitle />
              <Grid maxWidth="md">
                <Fade bottom cascade>
                  <MainText />
                  <LearningList />
                </Fade>
              </Grid>
            </div>
          </Fade>
        </div>
        <MobileImage />
      </Fade>
    </Container>
  )
}
