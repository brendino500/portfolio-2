import React from 'react'
import Slide from 'react-reveal/Slide'
import { Container, Typography, Grid } from '@material-ui/core'

import useStyles from './styles/homeStyles'

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
