import React from 'react'

import Slide from 'react-reveal/Slide'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
    marginTop: '40vh',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '55%',
    },
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: 45,
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
    },
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container direction="column" alignItems="flex-start">
        <Slide bottom cascade>
          <Typography className={classes.title}>Hey, I'm B</Typography>
          <br />
          <Typography className={classes.title}>
            Fullstack developer • Plant hoarder
          </Typography>
        </Slide>
      </Grid>
    </Container>
  )
}
