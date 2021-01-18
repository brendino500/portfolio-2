import React from 'react'
import Fade from 'react-reveal/Fade'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Container, Typography, IconButton, Grid } from '@material-ui/core'

import useStyles from './styles/stalkStyles'

export default function Stalk() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Typography className={classes.subtitle}>
        <br />
        <br />
        <br />

        <s>STALK ME...</s>
      </Typography>
      <Typography className={classes.title}>CONTACT</Typography>
      <Fade bottom cascade>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="flex-start"
          className={classes.grid}
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <IconButton
              href="mailto:brenda.ty@live.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <Typography className={classes.text}>brenda.ty@live.com</Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <IconButton
              href="https://github.com/brendino500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <Typography className={classes.text}>
              github.com/brendino500
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <IconButton
              href="https://www.linkedin.com/in/brendaty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <Typography className={classes.text}>
              linkedin.com/in/brendaty
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <IconButton
              href="https://twitter.com/btcodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon fontSize="large" className={classes.icon} />
            </IconButton>
            <Typography className={classes.text}>@btcodes</Typography>
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom cascade>
        <Typography className={classes.footer}>
          I made this website all by myself using React and Material UI.
        </Typography>
      </Fade>
    </Container>
  )
}
