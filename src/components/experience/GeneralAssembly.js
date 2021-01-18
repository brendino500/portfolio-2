import React from 'react'
import { Typography, Card } from '@material-ui/core'

import useStyles from './styles/styles'

export default function GeneralAssembly() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>General Assembly</Typography>
      <Typography className={classes.subtitle}>
        June 2020 ~ September 2020
      </Typography>
      <Typography className={classes.text}>
        • This was a 12-week intense coding course that recreated many aspects
        of a developers{' '}
        <i>
          typical daily routine including morning stand ups, pair programming
          and accountability for self-managed deadlines.
        </i>
        {<br />}
        {<br />}• The skills that I have learnt through four main projects
        include:{' '}
        <i>
          planning and wireframes, leading projects, time management and self
          study.
        </i>
        {<br />}
        {<br />}
      </Typography>
    </Card>
  )
}
