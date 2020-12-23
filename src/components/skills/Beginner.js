import React from 'react'
import Theme from '../../Theme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, ThemeProvider, Grid } from '@material-ui/core'
import { SiJest, SiRedux } from 'react-icons/si'

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

export default function Beginner() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Typography className={classes.subtitle}>BEGINNER</Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid className={classes.iconAndText}>
          <i className="devicon-java-plain skills-details-icon">
            <Typography className={classes.text}>Java</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-python-plain skills-details-icon">
            <Typography className={classes.text}>Python</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-django-plain skills-details-icon">
            <Typography className={classes.text}>Django</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-postgresql-plain skills-details-icon">
            <Typography className={classes.text}>PostgreSQL</Typography>
          </i>
        </Grid>
        <Grid className={`${classes.iconAndText} material-ui-icons`}>
          <SiJest className="devicon-react-original skills-details-icon" />
          <Typography className={classes.text}>Jest</Typography>
        </Grid>
        <Grid className={`${classes.iconAndText} material-ui-icons`}>
          <SiRedux className="devicon-react-original skills-details-icon" />
          <Typography className={classes.text}>Redux</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
