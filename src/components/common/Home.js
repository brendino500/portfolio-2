import React from 'react'

import Fade from 'react-reveal/Fade'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15%',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: 45,
    letterSpacing: 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container direction="column" alignItems="flex-start">
        <Fade>
          <Typography className={classes.title}>Hey, I'm Brenda.</Typography>
          <br />
          <Typography className={classes.title}>
            Fullstack developer • Plant hoarder
          </Typography>
        </Fade>
      </Grid>
    </Container>
  )
}
