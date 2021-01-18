import React from 'react'
import { Typography, Card } from '@material-ui/core'

import useStyles from './styles/styles'

export default function ManchesterUni() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>
        Manchester University. MusB
      </Typography>
      <Typography className={classes.subtitle}>2010 ~ 2013</Typography>
      <Typography className={classes.text}>
        • Specialised in classical piano performance.
        {<br />}• Experience performing in solo and ensemble recitals.
        {<br />}• Also studied harmony, ethnomusicology, aesthetics, and music &
        politics in the 19th century.
        {<br />}
        <br />• I am now a <i> slightly </i> better piano player.
      </Typography>
    </Card>
  )
}
