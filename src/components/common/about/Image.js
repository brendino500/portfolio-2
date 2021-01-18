import React from 'react'
import { Hidden } from '@material-ui/core'
import useStyles from '../styles/aboutStyles'

const Image = () => {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <div className={classes.image}>
        <img
          src="https://i.ibb.co/415wtzS/photo-for-website.jpg"
          alt="profile"
          className="profile-image"
        />
      </div>
    </Hidden>
  )
}

export default Image
