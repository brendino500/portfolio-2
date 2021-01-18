import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import SpaceInvadersIcons from './components/icons/SpaceInvadersIcons'

import { Card, Grid } from '@material-ui/core'

export default function SpaceInvaders() {
  const classes = useStyles()
  const text = '• Game development using Pixi.js'
  const appLink = 'https://github.com/brendino500/space-invaders'
  const imgLink = 'https://i.ibb.co/XxgR9c5/spaceinvaders.png'
  const githubLink = 'https://github.com/brendino500/space-invaders'

  return (
    <Card className={classes.root}>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
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
              githubHref={githubLink}
              projectHref={appLink}
            />
            <SpaceInvadersIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
