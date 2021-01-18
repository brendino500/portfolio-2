import React from 'react'
import Fade from 'react-reveal/Fade'
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Hidden,
} from '@material-ui/core'

import useStyles from './styles/aboutStyles'

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
