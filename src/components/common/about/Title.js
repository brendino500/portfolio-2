import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from '../styles/aboutStyles'

const Title = () => {
  const classes = useStyles()
  return (
    <Typography className={classes.title}>
      <br />
      WHO AM I?
    </Typography>
  )
}

export default Title
