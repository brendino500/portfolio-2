import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import PongIcons from './components/icons/PongIcons'

import { Card, Grid } from '@material-ui/core'

export default function Tetris() {
  const classes = useStyles()
  const text =
    '• Game development in Java to refresh on knowledge in a strictly typed language before tackling TypeScript'
  const imgLink = 'https://i.ibb.co/bbDcn53/pong-screenshot.png'
  const githubLink = 'https://github.com/brendino500/pong-java'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="11 . 2020"
          title="Pong"
          subtitle="Solo Project • 1 Day"
        />
        <ProjectDescription description={text} />
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <Grid>
              <GithubAndLink
                gridClassName={classes.linksIcons}
                profileClassName={classes.profileLinks}
                githubHref={githubLink}
              />
            </Grid>
            <PongIcons />
          </Grid>
        </div>
        <MobileImage appLink={githubLink} imgLink={imgLink} />
      </div>
      <DesktopImage appLink={githubLink} imgLink={imgLink} />
    </Card>
  )
}
