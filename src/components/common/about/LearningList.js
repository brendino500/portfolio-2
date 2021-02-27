import React from 'react'
import { List, ListItem } from '@material-ui/core'
import useStyles from '../styles/aboutStyles'

const LearningList = () => {
  const classes = useStyles()
  return (
    <List>
      <ListItem className={classes.list}>Data Structures & Algorithms</ListItem>
      <ListItem className={classes.list}>Jest</ListItem>
      <ListItem className={classes.list}>
        Chopin Nocturne in D♭ major, Op. 27 No. 2
      </ListItem>
      <ListItem className={classes.list}>Tagalog</ListItem>
      <ListItem className={classes.list}>Cello</ListItem>
    </List>
  )
}

export default LearningList
