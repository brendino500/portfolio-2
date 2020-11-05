import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
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
    margin: 3,
    marginTop: '10%',
  },
}))

export default function JungleKobenhavn() {
  const classes = useStyles()

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#jungle-kobenhavn'),
      intensity: 0.3,
      image1: 'https://i.ibb.co/9vMV4z7/JK1.png',
      image2: 'https://i.ibb.co/W5C5qPf/JK2.png',
      displacementImage: 'https://i.ibb.co/jGFsy1r/8.jpg',
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 140 / 250,
    })
  }, [])

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>Jungle København</Typography>
          <Typography className={classes.subtitle}>
            Solo Project • 14 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            For this project, we really wanted to{' '}
            <i>push ourselves with Material UI</i> (we definitely had to prove
            our styling was better than in our Reactathon project... lol!) and{' '}
            <i>learning Material UI was such a rewarding experience.</i> We also
            implemented some <i>sexy parallax.</i>
          </Typography>
          <Typography className={classes.text}>
            We made our own Python Django API using REST Framework and Postgres
            Database. Users can register, sign in, create a profile, follow
            other users and upload their own photos.
          </Typography>
        </div>
        <Grid container justify="space-between">
          <Grid>
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
          <Grid>
            <SiJavascript className={classes.techIcon} />
            <SiTypescript className={classes.techIcon} />
            <SiMaterialUi className={classes.techIcon} />
            <SiReact className={classes.techIcon} />
            <SiHtml5 className={classes.techIcon} />
            <SiCss3 className={classes.techIcon} />
            <SiMongodb className={classes.techIcon} />
            <SiNodeDotJs className={classes.techIcon} />
          </Grid>
        </Grid>
      </div>
      <a
        href="http://jungle-kobenhavn.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          className={classes.image}
          id="jungle-kobenhavn"
          alt="jungle kobenhavn"
        />
      </a>
    </Card>
  )
}

// ;<div>
//   <a
//     href="http://jungle-kobenhavn.herokuapp.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <CardMedia
//       className={classes.image}
//       id="jungle-kobenhavn"
//       alt="jungle kobenhavn"
//     />
//   </a>
// </div>
