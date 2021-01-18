import React from 'react'
import { Hidden } from '@material-ui/core'
import useStyles from '../styles/projectStyles'
import ProjectImage from './ProjectImage'

const DesktopImage = ({ appLink, imgLink }) => {
  const classes = useStyles()

  return (
    <Hidden smDown>
      <ProjectImage
        href={appLink}
        src={imgLink}
        className={classes.projectImg}
      />
    </Hidden>
  )
}

export default DesktopImage
