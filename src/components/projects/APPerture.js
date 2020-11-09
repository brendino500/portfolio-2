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
import { DiDjango } from 'react-icons/di'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiMaterialUi,
  SiSass,
  SiReact,
  SiHeroku,
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

export default function APPerture() {
  const classes = useStyles()

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#apperture-project'),
      intensity: 0.3,
      image1: 'https://i.ibb.co/mvYsY2Y/apperture-home.png',
      image2: 'https://i.ibb.co/SJrrDH5/apperture-screenshot1.png',
      displacementImage: 'https://i.ibb.co/jGFsy1r/8.jpg',
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 320 / 400,
    })
  }, [])

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>APPerture</Typography>
          <Typography className={classes.subtitle}>
            Paired Project • 7 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>Instagram x Unsplash</Typography>
          <Typography className={classes.text}>
            For this project, we really wanted to{' '}
            <i>push ourselves with Material UI</i> (we definitely had to prove
            our styling was better than in our Reactathon project... lol!) and{' '}
            <i>learning Material UI was such a rewarding experience.</i> We also
            implemented some <i>sexy parallax.</i>
          </Typography>
          <br />
          <Typography className={classes.text}>
            We made our own Python Django API using REST Framework and Postgres
            Database. Users can register, sign in, create a profile, follow
            other users and upload their own photos.
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
                href="https://github.com/brendino500/APPerture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
              <IconButton
                href="http://apperture-project.herokuapp.com/"
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
              <SiMaterialUi className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiPython className={classes.techIcon} />
              <DiDjango className={classes.techIcon} />
              <SiPostgresql className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <SiHeroku className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
      </div>

      <a
        href="http://apperture-project.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          className={classes.image}
          id="apperture-project"
          alt="apperture-project"
        />
      </a>
    </Card>
  )
}
