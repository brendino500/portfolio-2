import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core'

import useStyles from '../styles/stalkStyles'

const IconsDetails = ({ link, icon, text }) => {
  const classes = useStyles()

  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <IconButton href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </IconButton>
      <Typography className={classes.text}>{text}</Typography>
    </Grid>
  )
}

export default IconsDetails
