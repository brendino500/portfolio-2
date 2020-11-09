import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
  Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiBulma,
  SiSass,
  SiReact,
  SiNetlify,
  SiNpm,
  SiNodeDotJs,
} from 'react-icons/si'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#394651',
  },
  content: {
    width: 'auto',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    letterSpacing: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 36,
    },
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 22,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 13,
    letterSpacing: 1,
    margin: 10,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 11,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
  },
  profileLinks: {
    color: '#d3c9c0',
    margin: 10,
  },
  techIcon: {
    color: '#d3c9c0',
    fontSize: 20,
    margin: 5,
    marginTop: '10%',
  },
  iconLayout: {
    positon: 'absolute',
    bottom: 0,
  },
}))

export default function WeatherxTfl() {
  const classes = useStyles()

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#nalu'),
      intensity: 0.3,
      image1: 'https://i.ibb.co/ccfsnPW/nalu-screenshot.png',
      image2: 'https://i.ibb.co/y0fgrmk/Screenshot-2020-09-28-at-14-20-21.png',
      displacementImage: 'https://i.ibb.co/306vvr1/7.jpg',
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 350 / 400,
    })
  }, [])

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>Weather x TfL</Typography>
          <Typography className={classes.subtitle}>
            Paired Project • 48 Hours
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            Out of the whole of the General Assembly course, this was, by far,
            the <i>most fun project!</i> I was paired with Julien Xemard, and
            little did we know that would start our intense coding relationship(
            <s>friendship?</s>)
            <br />
            <br />
            We wanted to create an app with geolocation (if the user accepted)
            which would gather the local weather and time for their current
            location. The other pages were linked to the current London Tube
            line services, the TfL Bike Points as well as the Air Quality Index
            in London.
          </Typography>
        </div>
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <Grid>
              <IconButton
                href="https://github.com/brendino500/sei-project-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
              <IconButton
                href="https://weather-bike-tube.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
            </Grid>
            <Grid>
              <SiJavascript className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiSass className={classes.techIcon} />
              <SiBulma className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <SiNetlify className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
      </div>
      <Hidden smDown>
        <a
          href="https://weather-bike-tube.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            className={classes.image}
            id="weather-tfl"
            alt="weather-tfl"
          />
        </a>
      </Hidden>
    </Card>
  )
}
