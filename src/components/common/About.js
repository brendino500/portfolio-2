import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 2,
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography>About</Typography>
    </Container>
  )
}

//https://i.ibb.co/415wtzS/photo-for-website.jpg
