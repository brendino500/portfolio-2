import React from 'react'
import { Hidden } from '@material-ui/core'
import useStyles from '../styles/projectStyles'
import ProjectImage from './ProjectImage'

const MobileImage = ({ appLink, imgLink }) => {
  const classes = useStyles()

  return (
    <Hidden smUp>
      <ProjectImage
        href={appLink}
        src={imgLink}
        className={classes.projectImg}
      />
    </Hidden>
  )
}

export default MobileImage
