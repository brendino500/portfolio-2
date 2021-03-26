import React from 'react'
import Theme from '../../Theme'
import useStyles from './styles/styles'

import { Typography, ThemeProvider, Grid } from '@material-ui/core'
import { SiRedux, SiSvelte } from 'react-icons/si'

export default function Beginner() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Typography className={classes.subtitle}>DABBLED</Typography>
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
          <i className="devicon-java-plain skills-details-icon">
            <Typography className={classes.text}>Java</Typography>
          </i>
        </Grid>
        <Grid className={`${classes.iconAndText} material-ui-icons`}>
          <SiSvelte className="devicon-postgresql-plain skills-details-icon" />
          <Typography className={classes.text}>Svelte</Typography>
        </Grid>
        {/* <Grid className={classes.iconAndText}>
          <i className="devicon-python-plain skills-details-icon">
            <Typography className={classes.text}>Python</Typography>
          </i>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-django-plain skills-details-icon">
            <Typography className={classes.text}>Django</Typography>
          </i>
        </Grid> */}
        <Grid className={classes.iconAndText}>
          <i className="devicon-postgresql-plain skills-details-icon">
            <Typography className={classes.text}>PostgreSQL</Typography>
          </i>
        </Grid>
        <Grid className={`${classes.iconAndText} material-ui-icons`}>
          <SiRedux className="devicon-postgresql-plain skills-details-icon" />
          <Typography className={classes.text}>Redux</Typography>
        </Grid>
        <Grid className={classes.iconAndText}>
          <i className="devicon-react-original skills-details-icon">
            <Typography className={classes.text}>React Native</Typography>
          </i>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
