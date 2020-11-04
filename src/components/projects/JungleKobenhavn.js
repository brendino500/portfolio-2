import React, { useEffect } from 'react'
import materialUI from '../../assets/materialUI.png'
import hoverEffect from 'hover-effect'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}))

export default function JungleKobenhavn() {
  const classes = useStyles()
  const theme = useTheme()

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#jungle-kobenhavn'),
      intensity: 0.3,
      image1: 'https://i.ibb.co/9vMV4z7/JK1.png',
      image2: 'https://i.ibb.co/W5C5qPf/JK2.png',
      displacementImage: 'https://i.ibb.co/jGFsy1r/8.jpg',
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 350 / 400,
    })
  }, [])

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </div>
      </div>
      <a
        href="http://jungle-kobenhavn.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          className={classes.image}
          id="jungle-kobenhavn"
          alt="jungle kobenhavn"
        />
      </a>
    </Card>
  )
}

// ;<div>
//   <a
//     href="http://jungle-kobenhavn.herokuapp.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <CardMedia
//       className={classes.image}
//       id="jungle-kobenhavn"
//       alt="jungle kobenhavn"
//     />
//   </a>
// </div>
