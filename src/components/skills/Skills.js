import React from 'react'
import Confident from './Confident'
import Familiar from './Familiar'
import Beginner from './Beginner'
import useStyles from './styles/mainStyles'

import Fade from 'react-reveal/Fade'
import { Typography, Container } from '@material-ui/core'

export default function Skills() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography className={classes.title}>
        <br />
        SKILLS
      </Typography>

      <Fade bottom>
        <Confident />
        <Familiar />
        <Beginner />
      </Fade>
    </Container>
  )
}
