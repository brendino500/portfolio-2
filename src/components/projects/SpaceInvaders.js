import React from 'react'
import ProjectImage from './components/ProjectImage'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'

import { Card, Grid, Hidden } from '@material-ui/core'
import { SiTypescript } from 'react-icons/si'

export default function SpaceInvaders() {
  const classes = useStyles()
  const text = '• Game development using Pixi.js'

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
        <Details
          date="12 . 2020"
          title="Space Invaders"
          subtitle="Paired Project • 2 Months"
        />
        <ProjectDescription description={text} />
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
