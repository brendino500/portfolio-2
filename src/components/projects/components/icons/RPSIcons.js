import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMaterialUi,
  SiReact,
  SiNpm,
  SiJest,
  SiNetlify,
} from 'react-icons/si'

const RPSIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
      <SiJavascript className={classes.techIcon} />
      <SiMaterialUi className={classes.techIcon} />
      <SiJest className={classes.techIcon} />
      <SiReact className={classes.techIcon} />
      <SiHtml5 className={classes.techIcon} />
      <SiCss3 className={classes.techIcon} />
      <SiNpm className={classes.techIcon} />
      <SiNetlify className={classes.techIcon} />
    </Grid>
  )
}

export default RPSIcons
