import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import MaxwellSkinnerIcons from './components/icons/MaxwellSkinnerIcons'

import { Card, Grid } from '@material-ui/core'

export default function MaxwellAndSkinner() {
  const classes = useStyles()
  const text =
    '• Single page web design using Material UI to improve styling and UX'
  const appLink = 'https://maxwell-skinner.vercel.app/'
  const imgLink = 'https://i.ibb.co/KXW09Wt/homepage.png'
  const githubLink = 'https://github.com/brendino500/maxwell-skinner'

  return (
    <Card className={classes.root}>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
      <div className={classes.details}>
        <Details
          date="11 . 20"
          title="Maxwell & Skinner"
          subtitle="Solo Project • 1 Day"
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
            <MaxwellSkinnerIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
