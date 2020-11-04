import React from 'react'
import JungleKobenhavn from './JungleKobenhavn'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}))

export default function Projects() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography varient="h1" className={classes.title}>
        PROJECTS
      </Typography>
      <JungleKobenhavn />
    </Container>
  )
}
