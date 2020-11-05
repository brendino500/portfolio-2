import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'

import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardMedia,
} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#394651',
    padding: 20,
    width: 400,
    margin: 8,
  },
  title: {
    fontSize: 50,
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
    fontSize: 25,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
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
    fontSize: 18,
    letterSpacing: 1,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 11,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
  },
  image: {
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingLeft: '-2%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '7%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: 200,
    },
  },
  profileLinks: {
    color: '#d3c9c0',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
    },
  },
}))

function APPerture() {
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
      imagesRatio: 350 / 400,
    })
  }, [])

  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <CardContent>
              <Typography className={classes.title}>APPerture</Typography>
              <Typography className={classes.subtitle}>
                Paired Project • 7 Days
              </Typography>
              <Typography className={classes.text}>
                Instagram x Unsplash
              </Typography>
              <Typography className={classes.text}>
                For this project, we really wanted to{' '}
                <i>push ourselves with Material UI</i> (we definitely had to
                prove our styling was better than in our Reactathon project...
                lol!) and{' '}
                <i>learning Material UI was such a rewarding experience.</i> We
                also implemented some <i>sexy parallax.</i>
              </Typography>
              <br />
              <Typography className={classes.text}>
                We made our own Python Django API using REST Framework and
                Postgres Database. Users can register, sign in, create a
                profile, follow other users and upload their own photos.
              </Typography>
            </CardContent>
            <Grid container justify="space-between">
              <Grid>
                <IconButton
                  href="https://github.com/brendino500/APPerture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={('github-link', classes.profileLinks)}
                    fontSize="large"
                  />
                </IconButton>
                <IconButton
                  href="http://apperture-project.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon
                    className={('github-link', classes.profileLinks)}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
              <Grid>
                <i className="devicon-javascript-plain project-icon"></i>
                <i className="devicon-html5-plain project-icon"></i>
                <i className="devicon-css3-plain project-icon"></i>
                <i className="devicon-sass-original project-icon"></i>
                <i className="devicon-python-plain project-icon"></i>
                <i className="devicon-django-plain project-icon"></i>
                <i className="devicon-postgresql-plain project-icon"></i>
                <i className="devicon-npm-original-wordmark project-icon"></i>
                <i className="devicon-react-original project-icon"></i>
                <i className="devicon-nodejs-plain project-icon"></i>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <a
          href="http://apperture-project.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            className={classes.image}
            id="apperture-project"
          ></CardMedia>
        </a>
      </Grid>
    </Card>
  )
}

export default APPerture
