import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from '../styles/aboutStyles'

const MainText = () => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.text}>
        I have a background in Classical piano performance, speciality coffee,
        portrait photography and teaching.
      </Typography>
      <br />

      <Typography className={classes.text}>
        When I'm not coding you'll find me brewing a tasty filter coffee,
        playing with my dog or {<s>not</s>} fighting the urge to spend all my
        money on plants.
      </Typography>
      <br />
      <Typography className={classes.listTitle}>
        I'm currently learning:
      </Typography>
    </>
  )
}

export default MainText
