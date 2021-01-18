import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
import { SiJavascript, SiCss3, SiHtml5, SiNetlify } from 'react-icons/si'

const TetrisIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
      <SiJavascript className={classes.techIcon} />
      <SiHtml5 className={classes.techIcon} />
      <SiCss3 className={classes.techIcon} />
      <SiNetlify className={classes.techIcon} />
    </Grid>
  )
}

export default TetrisIcons
