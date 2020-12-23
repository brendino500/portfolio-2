import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'

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
  SiMongodb,
  SiNodeDotJs,
  SiMaterialUi,
  SiTypescript,
  SiReact,
  SiHeroku,
  SiNpm,
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
    margin: '5vh 0 0 10vw',
  },
  details: {
    marginLeft: '3vw',
  },
  icons: {
    marginLeft: 10,
  },
}))

export default function JungleKobenhavn() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>10 . 20</Typography>
          <Typography className={classes.title}>Jungle København</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Solo Project • 14 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Fullstack TypeScript & React Hooks
            {/* After the 12 week bootcamp I wanted to{' '}
            <i>challenge myself to make an ecommerce site.</i> This is the
            closest thing I'll be to owning my own plant shop! */}
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
                href="https://github.com/brendino500/junglekobenhavn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
              <IconButton
                href="http://jungle-kobenhavn.herokuapp.com/"
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
              <SiJavascript className={classes.techIcon} />
              <SiTypescript className={classes.techIcon} />
              <SiMaterialUi className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiMongodb className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <i className="devicon-express-original skills-details-icon"></i>
              <SiHeroku className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
      </div>

      <div>
        <a
          href="http://jungle-kobenhavn.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-img"
        >
          <img
            src="https://i.ibb.co/9vMV4z7/JK1.png"
            alt="plants"
            className={classes.projectImg}
          />
        </a>
      </div>
    </Card>
  )
}
