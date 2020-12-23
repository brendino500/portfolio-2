import React from 'react'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  IconButton,
  Divider,
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
    backgroundColor: '#323e47',
    border: 'none',
    boxShadow: 'none',
    marginBottom: 40,
  },
  content: {
    width: '30vw',
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
  },
  techIcon: {
    color: '#d3c9c0',
    fontSize: 20,
    margin: 5,
    marginTop: '5%',
  },
  iconLayout: {
    positon: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  linksIcons: {
    [theme.breakpoints.between('xs', 'sm')]: {
      alignItems: 'center',
    },
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
    margin: '5vh 0 0 0',
  },
  details: {
    marginLeft: '3vw',
  },
  icons: {
    marginLeft: 10,
  },
}))

export default function WeatherxTfl() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>08 . 2020</Typography>
          <Typography className={classes.title}>Weather x TfL</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Paired Project • 48 Hours
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Weather x Tfl <br /> • Frontend React app pulling from 5 external
            API's
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

      <div>
        <a
          href="https://weather-bike-tube.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-img"
        >
          <img
            src="https://i.ibb.co/47ds104/TFL1.png"
            alt="project"
            className={classes.projectImg}
          />
        </a>
      </div>
    </Card>
  )
}
