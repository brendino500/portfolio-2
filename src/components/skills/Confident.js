import React from 'react'
import Theme from '../../Theme'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, ThemeProvider, Grid } from '@material-ui/core'
import { SiMaterialUi, SiAdobelightroomclassic } from 'react-icons/si'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
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

export default function Confident() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.root}>
        <Typography color="primary" className={classes.title}>
          CONFIDENT
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid className={classes.iconAndText}>
            <i className="devicon-javascript-plain skills-details-icon">
              <Typography className={classes.text}>JavaScript</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-html5-plain skills-details-icon">
              <Typography className={classes.text}>HTML</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-css3-plain skills-details-icon">
              <Typography className={classes.text}>CSS</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-sass-original skills-details-icon">
              <Typography className={classes.text}>SASS</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-react-original skills-details-icon">
              <Typography className={classes.text}>React.js</Typography>
            </i>
          </Grid>
          <Grid className={`${classes.iconAndText} material-ui-icons`}>
            <SiMaterialUi className="devicon-react-original skills-details-icon" />
            <Typography className={classes.text}>Material UI</Typography>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-git-plain skills-details-icon">
              <Typography className={classes.text}>Git</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-github-plain skills-details-icon">
              <Typography className={classes.text}>GitHub</Typography>
            </i>
          </Grid>
          <Grid className={`${classes.iconAndText} material-ui-icons`}>
            <SiAdobelightroomclassic className="devicon-react-original skills-details-icon" />
            <Typography className={classes.text}>Adobe Lightroom</Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
