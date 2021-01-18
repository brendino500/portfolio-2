import React from 'react'
import { Typography, Card } from '@material-ui/core'

import useStyles from './styles/styles'

export default function CraftLondon() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>Craft London</Typography>
      <Typography className={classes.subtitle}>June 2018 ~ May 2020</Typography>
      <Typography className={classes.text}>
        • In charge of the full operations of the roastery.
        <br />
        • Selecting seasonal green beans from different suppliers.
        <br />
        • Roasted single origin espresso and filter coffee for four cafes and
        restaurants.
        <br />• trained new and current staff the craft of espresso and milk as
        well as <i>effective work flow</i> behind the bar.
      </Typography>
    </Card>
  )
}
