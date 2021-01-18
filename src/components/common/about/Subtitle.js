import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from '../styles/aboutStyles'

const Subtitle = () => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.subtitle}>
        Hey, I'm Brenda Ty, a frontend developer living in London.
      </Typography>
      <br />
    </>
  )
}
export default Subtitle
