import React from 'react'
import Theme from '../../Theme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, ThemeProvider, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: '10vh',
    marginBottom: 10,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
      textAlign: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 24,
      textAlign: 'center',
      letterSpacing: 2,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 22,
      textAlign: 'center',
      letterSpacing: 4,
      marginBottom: 20,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 22,
      textAlign: 'center',
      letterSpacing: 4,
      marginBottom: 20,
    },
  },
  iconAndText: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    [theme.breakpoints.up('xl')]: {
      margin: 10,
    },
    icons: {
      color: '#d3c9c0',
      fontSize: 30,
      textAlign: 'center',
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 18,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 11,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 16,
      letterSpacing: 2,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 15,
    },
  },
}))

export default function Familiar() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Typography className={classes.subtitle}>FAMILIAR</Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid className={classes.iconAndText}>
          <i className="devicon-mongodb-plain skills-details-icon">
            <Typography className={classes.text}>MongoDB</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-express-original skills-details-icon">
            <Typography className={classes.text}>Express</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-typescript-plain skills-details-icon">
            <Typography className={classes.text}>TypeScript</Typography>
          </i>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
