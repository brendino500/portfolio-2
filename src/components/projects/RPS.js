import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import RPSIcons from './components/icons/RPSIcons'

import { Card, Grid } from '@material-ui/core'

export default function RPS() {
  const classes = useStyles()
  const text = '• Full TDD and SVG animations'
  const appLink = 'https://rpc-bt.netlify.app/'
  const imgLink = 'https://i.ibb.co/fFWpLQC/rps-screenshot.png'
  const githubLink = 'https://github.com/brendino500/rps-jest'

  return (
    <Card className={classes.root}>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
      <div className={classes.details}>
        <Details
          date="01 . 2021"
          title="Roche, Papier, Ciseaux"
          subtitle="Solo Project • 2 Weeks"
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
            <RPSIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
