import React from 'react'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  IconButton,
  Divider,
  Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

import { SiTypescript } from 'react-icons/si'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#323E47',
    border: 'none',
    boxShadow: 'none',
    height: 400,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 550,
      // marginLeft: 200,
      height: '80vh',
    },
  },
  content: {
    width: 500,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 300,
    },
  },
  title: {
    fontSize: 40,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    letterSpacing: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 30,
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
      fontSize: 16,
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
  },
  techIcon: {
    color: '#d3c9c0',
    fontSize: 20,
    margin: 5,
  },
  iconLayout: {
    positon: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  linksIcons: {
    margin: 0,
    [theme.breakpoints.between('xs', 'sm')]: {
      alignItems: 'center',
    },
  },
  divider: {
    backgroundColor: '#d3c9c0',
    height: '2px',
    width: '9vw',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '30vw',
    },
  },
  number: {
    fontSize: 18,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 14,
    },
  },
  projectImg: {
    height: 'auto',
    width: '25vw',
    margin: '5vh 3vw 0 3vw',
  },
  details: {
    marginLeft: '3vw',
  },
  icons: {
    marginLeft: 10,
  },
}))

export default function SpaceInvaders() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <div>
          <a
            href="https://github.com/brendino500/space-invaders"
            target="_blank"
            rel="noopener noreferrer"
            className="project-img"
          >
            <img
              src="https://i.ibb.co/XxgR9c5/spaceinvaders.png"
              alt="space invaders"
              className={classes.projectImg}
            />
          </a>
        </div>
      </Hidden>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>12 . 2020</Typography>
          <Typography className={classes.title}>Space Invaders</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Paired Project • 2 Months
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Game development using Pixi.js
          </Typography>
        </div>
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <Grid className={classes.linksIcons}>
              <IconButton
                href="https://github.com/brendino500/space-invaders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
              <IconButton
                href="https://github.com/brendino500/space-invaders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
            </Grid>
            <Grid className={classes.icons}>
              <SiTypescript className={classes.techIcon} />
              <img
                src="https://i.ibb.co/3hPnV9k/00c39b71-e5f2-4ec9-8919-7710afba3f83-200x200.png"
                alt="pixijs"
                className="pixi-logo"
              />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <div>
            <a
              href="https://github.com/brendino500/space-invaders"
              target="_blank"
              rel="noopener noreferrer"
              className="project-img"
            >
              <img
                src="https://i.ibb.co/XxgR9c5/spaceinvaders.png"
                alt="space invaders"
                className={classes.projectImg}
              />
            </a>
          </div>
        </Hidden>
      </div>
    </Card>
  )
}
