import React from 'react'
import Theme from '../../Theme'
import useStyles from './styles/styles'

import { Typography, ThemeProvider, Grid } from '@material-ui/core'
import { SiHeroku, SiNetlify } from 'react-icons/si'
import { SiJest } from 'react-icons/si'

export default function Familiar() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Typography className={classes.subtitle}>FAMILIAR</Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid className={classes.iconAndText}>
          <i className="devicon-typescript-plain skills-details-icon">
            <Typography className={classes.text}>TypeScript</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-mongodb-plain skills-details-icon">
            <Typography className={classes.text}>MongoDB</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-express-original skills-details-icon">
            <Typography className={classes.text}>Express</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-nodejs-plain skills-details-icon">
            <Typography className={classes.text}>Node.js</Typography>
          </i>
        </Grid>
        <Grid className={`${classes.iconAndText} material-ui-icons`}>
          <SiJest className="devicon-react-original skills-details-icon" />
          <Typography className={classes.text}>Jest</Typography>
        </Grid>
        <Grid className={`${classes.iconAndText} material-ui-icons`}>
          <SiHeroku className="devicon-react-original skills-details-icon" />
          <Typography className={classes.text}>Heroku</Typography>
        </Grid>
        <Grid className={`${classes.iconAndText} material-ui-icons`}>
          <SiNetlify className="devicon-react-original skills-details-icon" />
          <Typography className={classes.text}>Netlify</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
