import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, List, ListItem, Card } from '@material-ui/core'

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

export default function ManchesterUni() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>
        Manchester University. MusB
      </Typography>
      <Typography className={classes.subtitle}>2010 ~ 2013</Typography>
      <Typography className={classes.text}>
        <List>
          <ListItem>• Specialised in classical piano performance.</ListItem>
          <ListItem>
            • Experience performing in solo and ensemble recitals.
          </ListItem>
          <ListItem>
            • Also studied harmony, ethnomusicology, aesthetics, and music &
            politics in the 19th century.
          </ListItem>
          <br />
          <ListItem>
            • I am now a <i> slightly </i> better piano player.
          </ListItem>
        </List>
      </Typography>
    </Card>
  )
}
