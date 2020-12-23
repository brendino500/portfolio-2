import React from 'react'
import Fade from 'react-reveal/Fade'

import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Hidden,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    marginBottom: 25,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 35,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 35,
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
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 20,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 14,
    },
  },
  listTitle: {
    flexGrow: 1,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    marginTop: '4%',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 18,
    },
  },
  list: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 15,
    },
  },
  image: {
    flexGrow: 1,
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
    margin: '7%',
  },
  imageMobile: {
    flexGrow: 1,
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
  },
  textContent: {
    flexGrow: 3,
  },
  content: {
    display: 'flex',
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Typography className={classes.title}>
        <br />
        WHO AM I?
      </Typography>
      <br />
      <Fade bottom cascade>
        <div className={classes.content}>
          <Hidden smDown>
            <div className={classes.image}>
              <img
                src="https://i.ibb.co/415wtzS/photo-for-website.jpg"
                alt="profile"
                className="profile-image"
              />
            </div>
          </Hidden>
          <Fade bottom cascade>
            <div className={classes.textContent}>
              <Typography className={classes.subtitle}>
                Hey, I'm Brenda Ty, a frontend developer living in London.
              </Typography>
              <br />
              <Grid maxWidth="md">
                <Fade bottom cascade>
                  <Typography className={classes.text}>
                    As a classical musician who turned into a professional
                    barista (yes, that is a thing!), I have always been
                    creative. Paired with my recent completion of the Software
                    Engineering bootcamp I hope to continue my learning and
                    bring my creativity into the workplace.
                  </Typography>
                  <br />

                  <Typography className={classes.text}>
                    When I'm not coding you'll find me brewing a tasty filter
                    coffee, taking photos, or {<s>not</s>} fighting the urge to
                    spend all my money on plants.
                  </Typography>
                  <br />
                  <Typography className={classes.listTitle}>
                    I'm currently learning:
                  </Typography>
                  <List>
                    <ListItem className={classes.list}>TypeScript</ListItem>
                    <ListItem className={classes.list}>Jest</ListItem>
                    <ListItem className={classes.list}>
                      Chopin Nocturne in D♭ major, Op. 27 No. 2
                    </ListItem>
                    <ListItem className={classes.list}>Korean</ListItem>
                    <ListItem className={classes.list}>Cello</ListItem>
                  </List>
                </Fade>
              </Grid>
            </div>
          </Fade>
        </div>
        <Hidden smUp>
          <div className={classes.imageMobile}>
            <img
              src="https://i.ibb.co/415wtzS/photo-for-website.jpg"
              alt="profile"
              className="profile-image"
            />
          </div>
        </Hidden>
      </Fade>
    </Container>
  )
}
