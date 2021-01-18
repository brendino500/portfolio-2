import React from 'react'
import Fade from 'react-reveal/Fade'
import { Typography } from '@material-ui/core'
import useStyles from '../styles/stalkStyles'

const Footer = () => {
  const classes = useStyles()

  return (
    <Fade bottom cascade>
      <Typography className={classes.footer}>
        I made this website all by myself using React and Material UI.
      </Typography>
    </Fade>
  )
}

export default Footer
