import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: 15,
    letterSpacing: 2,
    verticalAlign: 'text-bottom',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 15,
    },
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.footer}>
        I made this website all by myself using: Robin Dela's Hover Effect,
        React Hooks and Material UI.
      </Typography>
    </div>
  )
}
