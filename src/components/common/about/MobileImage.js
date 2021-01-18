import React from 'react'
import { Hidden } from '@material-ui/core'
import useStyles from '../styles/aboutStyles'

const MobileImage = () => {
  const classes = useStyles()

  return (
    <Hidden smUp>
      <div className={classes.imageMobile}>
        <img
          src="https://i.ibb.co/415wtzS/photo-for-website.jpg"
          alt="profile"
          className="profile-image"
        />
      </div>
    </Hidden>
  )
}

export default MobileImage
