import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, List, ListItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#394651',
    padding: 30,
    margin: 8,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    letterSpacing: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 25,
      marginTop: 0,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 25,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 30,
    },
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 20,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 18,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 18,
    letterSpacing: 1,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 15,
    },
  },
}))

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