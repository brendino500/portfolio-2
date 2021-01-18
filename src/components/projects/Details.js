import React from 'react'
import { CardContent, Typography, Divider } from '@material-ui/core'

import useStyles from './projectStyles'

const Details = ({ date, title, subtitle }) => {
  const classes = useStyles()

  return (
    <CardContent className={classes.content}>
      <Typography className={classes.number}>{date}</Typography>
      <Typography className={classes.title}>{title}</Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.subtitle}>{subtitle}</Typography>
    </CardContent>
  )
}

export default Details
