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
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMaterialUi,
  SiReact,
  SiNpm,
} from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#323e47',
    border: 'none',
    boxShadow: 'none',
    height: 400,
  },
  content: {
    width: 500,
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
    display: 'flex',
    flexDirection: 'column',
  },
  linksIcons: {
    margin: 0,
    [theme.breakpoints.between('xs', 'sm')]: {
      alignItems: 'center',
    },
  },
  mobileImage: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    height: 400,
  },
  divider: {
    backgroundColor: '#d3c9c0',
    height: '2px',
    width: '9vw',
  },
  number: {
    fontSize: 18,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 5,
  },
  projectImg: {
    height: 'auto',
    width: '35vw',
    margin: '5vh 3vw 0 3vw',
  },
}))

export default function MaxwellAndSkinner() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div>
        <a
          href="https://maxwell-skinner.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-img"
        >
          <img
            src="https://i.ibb.co/KXW09Wt/homepage.png"
            alt="plants"
            className={classes.projectImg}
          />
        </a>
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>11 . 20</Typography>
          <Typography className={classes.title}>Maxwell & Skinner</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Solo Project • 1 Day
          </Typography>
        </CardContent>
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <Grid className={classes.linksIcons}>
              <IconButton
                href="https://maxwell-skinner.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
              <IconButton
                href="https://github.com/brendino500/maxwell-skinner"
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
              <SiMaterialUi className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <IoLogoVercel className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
      </div>
    </Card>
  )
}