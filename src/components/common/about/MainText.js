import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from '../styles/aboutStyles'

const MainText = () => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.text}>
        As a classical musician who turned into a professional barista (yes,
        that is a thing!), I have always been creative. Paired with my recent
        completion of the Software Engineering bootcamp I hope to continue my
        learning and bring my creativity into the workplace.
      </Typography>
      <br />

      <Typography className={classes.text}>
        When I'm not coding you'll find me brewing a tasty filter coffee, taking
        photos, or {<s>not</s>} fighting the urge to spend all my money on
        plants.
      </Typography>
      <br />
      <Typography className={classes.listTitle}>
        I'm currently learning:
      </Typography>
    </>
  )
}

export default MainText
