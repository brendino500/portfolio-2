import React from 'react'
import ProjectImage from './ProjectImage'
import useStyles from './projectStyles'
import GithubAndLink from './GithubAndLink'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  Divider,
  Hidden,
} from '@material-ui/core'
import { SiTypescript } from 'react-icons/si'

export default function SpaceInvaders() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <ProjectImage
          href="https://github.com/brendino500/space-invaders"
          src="https://i.ibb.co/XxgR9c5/spaceinvaders.png"
          className={classes.projectImg}
        />
      </Hidden>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>12 . 2020</Typography>
          <Typography className={classes.title}>Space Invaders</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Paired Project • 2 Months
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Game development using Pixi.js
          </Typography>
        </div>
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <GithubAndLink
              gridClassName={classes.linksIcons}
              profileClassName={classes.profileLinks}
              githubHref="https://github.com/brendino500/space-invaders"
              projectHref="https://space-invaders-bt.netlify.app/"
            />
            <Grid className={classes.icons}>
              <SiTypescript className={classes.techIcon} />
              <img
                src="https://i.ibb.co/3hPnV9k/00c39b71-e5f2-4ec9-8919-7710afba3f83-200x200.png"
                alt="pixijs"
                className="pixi-logo"
              />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <ProjectImage
            href="https://space-invaders-bt.netlify.app/"
            src="https://i.ibb.co/XxgR9c5/spaceinvaders.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
    </Card>
  )
}
