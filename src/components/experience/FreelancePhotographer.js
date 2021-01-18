import React from 'react'
import { Typography, Card } from '@material-ui/core'

import useStyles from './styles/styles'

export default function FreelancePhotographer() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>Freelance Photographer</Typography>
      <Typography className={classes.subtitle}>
        July 2016 ~ February 2020
      </Typography>
      <Typography className={classes.text}>
        • I am <i>completely self taught</i> in photography.
        {<br />}• <i>Published in the Telegraph and Caffeine Magazine</i>{' '}
        multiple times.
        {<br />}• I focus on digital photography and I have been{' '}
        <i>commissioned by companies and individuals</i>
        {<br />}• Past clients include Kaffeine, Rosslyn, The Attendant, V69
        Coffee, Midas Coffee and The Roasting Party.
        {<br />}
        {<br />}
      </Typography>
      <Typography className={classes.smallerText}>
        Digital: Fuji XT-1, Fuji 35mm f1.4
        {<br />}
        Analogue: Canon AV-1, Canon 50mm f1.2
      </Typography>
    </Card>
  )
}
