import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'

import useStyles from './styles/navbarStyles'

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Typography className={classes.buttonTitle}>
            <Button className={classes.buttonTitle}>Brenda Ty</Button>
          </Typography>

          <Button className={classes.button}>Skills</Button>
          <Button className={classes.button}>Projects</Button>
          <Button className={classes.button}>About</Button>
          <Button className={classes.button}>Experience</Button>
          <Button className={classes.button}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
