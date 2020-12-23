import React from 'react'
import Confident from './Confident'
import Familiar from './Familiar'
import Beginner from './Beginner'

import Fade from 'react-reveal/Fade'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80vw',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '40px',
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
}))

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
