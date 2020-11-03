import React from 'react';
import Theme from '../Theme'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';

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
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.root}>
        <AppBar position="static" style={{
            background: "transparent",
            boxShadow: "none",
          }}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography color="primary" variant="h1" className={classes.title}>
              Brenda Ty
            </Typography>
            <Button color="inherit" color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}