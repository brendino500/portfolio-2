import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
import {
  SiJavascript,
  SiJest,
  SiHtml5,
  SiMaterialUi,
  SiReact,
  SiNpm,
  SiNodeDotJs,
  SiAirbnb,
  SiNetlify,
} from 'react-icons/si'

const AventyrIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
      <SiJavascript className={classes.techIcon} />
      <SiJest className={classes.techIcon} />
      <SiAirbnb className={classes.techIcon} />
      <SiHtml5 className={classes.techIcon} />
      <SiMaterialUi className={classes.techIcon} />
      <SiReact className={classes.techIcon} />
      <SiNpm className={classes.techIcon} />
      <SiNodeDotJs className={classes.techIcon} />
      <SiNetlify className={classes.techIcon} />
    </Grid>
  )
}

export default AventyrIcons
