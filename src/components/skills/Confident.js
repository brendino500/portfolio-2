import React from 'react'
import Theme from '../../Theme'
import useStyles from './styles/styles'

import { Typography, Container, ThemeProvider, Grid } from '@material-ui/core'
import { SiMaterialUi, SiAdobelightroomclassic } from 'react-icons/si'

export default function Confident() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.root}>
        <Typography color="primary" className={classes.title}>
          CONFIDENT
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid className={classes.iconAndText}>
            <i className="devicon-javascript-plain skills-details-icon">
              <Typography className={classes.text}>JavaScript</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-html5-plain skills-details-icon">
              <Typography className={classes.text}>HTML</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-css3-plain skills-details-icon">
              <Typography className={classes.text}>CSS</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-sass-original skills-details-icon">
              <Typography className={classes.text}>SASS</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-react-original skills-details-icon">
              <Typography className={classes.text}>React.js</Typography>
            </i>
          </Grid>
          <Grid className={`${classes.iconAndText} material-ui-icons`}>
            <SiMaterialUi className="devicon-react-original skills-details-icon" />
            <Typography className={classes.text}>Material UI</Typography>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-git-plain skills-details-icon">
              <Typography className={classes.text}>Git</Typography>
            </i>
          </Grid>
          <Grid className={classes.iconAndText}>
            <i className="devicon-github-plain skills-details-icon">
              <Typography className={classes.text}>GitHub</Typography>
            </i>
          </Grid>
          <Grid className={`${classes.iconAndText} material-ui-icons`}>
            <SiAdobelightroomclassic className="devicon-react-original skills-details-icon" />
            <Typography className={classes.text}>Adobe Lightroom</Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
