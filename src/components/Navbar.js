import React from 'react'
import Theme from '../Theme'
import { makeStyles } from '@material-ui/core/styles'
import {
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <Button>Brenda Ty</Button>
            <Typography color="primary" variant="p" className={classes.title}>
              Brenda Ty
            </Typography>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Experience</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}
