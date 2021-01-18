import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import AventyrIcons from './components/icons/AventyrIcons'

import { Card, Grid } from '@material-ui/core'

export default function Aventyr() {
  const classes = useStyles()
  const text = '• Single page using TDD in Jest & Enzyme'
  const appLink = 'https://aventyr-login.netlify.app/'
  const imgLink = 'https://i.ibb.co/X5Yt3hM/aventyr-homepage.png'
  const githubLink = 'https://github.com/brendino500/aventyr-login'

  return (
    <Card className={classes.root}>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
      <div className={classes.details}>
        <Details
          date="11 . 2020"
          title="Äventyr"
          subtitle="Solo Project • 2 Days"
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
            <AventyrIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
