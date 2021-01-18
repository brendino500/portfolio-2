import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'

import { Card, Grid } from '@material-ui/core'
import { SiTypescript } from 'react-icons/si'

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
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
