import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from '../styles/stalkStyles'

const Title = () => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.subtitle}>
        <br />
        <br />
        <br />

        <s>STALK ME...</s>
      </Typography>
      <Typography className={classes.title}>CONTACT</Typography>
    </>
  )
}

export default Title
