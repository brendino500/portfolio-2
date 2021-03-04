import React from 'react'
import Fade from 'react-reveal/Fade'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Container, Grid } from '@material-ui/core'

import useStyles from '../styles/stalkStyles'
import Title from './Title'
import Footer from './Footer'
import IconsDetails from './IconsDetails'

export default function Stalk() {
  const classes = useStyles()

  const email = <EmailIcon fontSize="large" className={classes.icon} />
  const github = <GitHubIcon fontSize="large" className={classes.icon} />
  const linkedIn = <LinkedInIcon fontSize="large" className={classes.icon} />
  const twitter = <TwitterIcon fontSize="large" className={classes.icon} />

  return (
    <Container className={classes.container}>
      <Title />
      <Fade bottom cascade>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="flex-start"
          className={classes.grid}
        >
          <IconsDetails
            link="mailto:brenda.ty@live.com"
            icon={email}
            text="brenda.ty@live.com"
          />
          <IconsDetails
            link="https://github.com/brendino500"
            icon={github}
            text="github.com/brendino500"
          />
          <IconsDetails
            link="https://www.linkedin.com/in/brendaty/"
            icon={linkedIn}
            text="linkedin.com/in/brendaty"
          />
          <IconsDetails
            link="https://twitter.com/brendino500"
            icon={twitter}
            text="@brendino500"
          />
        </Grid>
      </Fade>
      <Footer />
    </Container>
  )
}
