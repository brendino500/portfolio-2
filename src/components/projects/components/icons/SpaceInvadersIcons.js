import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
import { SiTypescript, SiNetlify } from 'react-icons/si'

const SpaceInvadersIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
      <SiTypescript className={classes.techIcon} />
      <img
        src="https://i.ibb.co/3hPnV9k/00c39b71-e5f2-4ec9-8919-7710afba3f83-200x200.png"
        alt="pixijs"
        className="pixi-logo"
      />
      <SiNetlify className={classes.techIcon} />
    </Grid>
  )
}

export default SpaceInvadersIcons
