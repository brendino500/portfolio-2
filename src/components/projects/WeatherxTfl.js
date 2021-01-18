import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import WeatherTflIcons from './components/icons/WeatherTflIcons'

import { Card, Grid } from '@material-ui/core'

export default function WeatherxTfl() {
  const classes = useStyles()
  const text = '• Frontend React app pulling from 5 external APIs'
  const appLink = 'https://weather-bike-tube.netlify.app/'
  const imgLink = 'https://i.ibb.co/47ds104/TFL1.png'
  const githubLink = 'https://github.com/brendino500/sei-project-2'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="08 . 2020"
          title="Weather x TfL"
          subtitle="Paired Project • 48 Hours"
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
            <WeatherTflIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
    </Card>
  )
}
