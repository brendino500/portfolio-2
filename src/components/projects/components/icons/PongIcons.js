import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
import { SiJava } from 'react-icons/si'

const PongIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
      <SiJava className={classes.techIcon} />
    </Grid>
  )
}

export default PongIcons
