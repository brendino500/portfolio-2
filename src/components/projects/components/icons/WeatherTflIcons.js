import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
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

const WeatherTflIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
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
  )
}

export default WeatherTflIcons
