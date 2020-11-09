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
import { SiJavascript, SiCss3, SiHtml5, SiNetlify } from 'react-icons/si'

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

export default function Tetris() {
  const classes = useStyles()

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#tetris'),
      intensity: 0.3,
      image1: 'https://i.ibb.co/LZcsFxy/tetris2.png',
      image2: 'https://i.ibb.co/sHP8ZrB/tetris1.png',
      displacementImage: 'https://i.ibb.co/8YhT8P9/6.jpg',
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 350 / 400,
    })
  }, [])

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>Tetris</Typography>
          <Typography className={classes.subtitle}>
            Solo Project • 7 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            This is my first ever deployed project using only HTML, CSS and
            JavaScript. This was built in a week. I'm pretty sure it's not buggy
            and the music is worth a listen!
          </Typography>
          <br />
          <Typography className={classes.text}>
            As Tetris is such a well known game, I wanted to recreate as much of
            the original game functionalities as possible. I implemented a mini
            grid to see the next tetromino (yes, the shapes are called
            tetrominos!), the 'fast down' movement and the original SEGA scoring
            system.
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
                href="https://sei-project1-tetris.netlify.app/"
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
              <SiNetlify className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
      </div>
      <Hidden smDown>
        <a
          href="https://brendino500.github.io/sei-project-1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia className={classes.image} id="tetris" alt="tetris" />
        </a>
      </Hidden>
    </Card>
  )
}
