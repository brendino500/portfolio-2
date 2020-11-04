import React from 'react'
import GeneralAssembly from './GeneralAssembly'
import FreelancePhotographer from './FreelancePhotographer'
import CraftLondon from './CraftLondon'

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

export default function Experience() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography className={classes.title}>EXPERIENCE</Typography>
      <GeneralAssembly />
      <FreelancePhotographer />
      <CraftLondon />
    </Container>
  )
}
