import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from '../styles/projectStyles'

const ProjectDescription = ({ description }) => {
  const classes = useStyles()
  return (
    <div className={classes.text}>
      <Typography className={classes.text}>{description}</Typography>
    </div>
  )
}

export default ProjectDescription
