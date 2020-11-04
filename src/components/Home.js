import React from 'react'

import Theme from '../Theme'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Libre Baskerville',
  },
  subtitle: {
    // fontFamily: 'Libre Baskerville',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.root}>
        <Typography color="primary" variant="h1" className={classes.title}>
          Brenda Ty
        </Typography>
        <br />
        <Typography color="primary" variant="h3" className={classes.subtitle}>
          Fullstack Devloper • Plant Horder
        </Typography>
      </div>
    </ThemeProvider>
  )
}
