import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import APPertureIcons from './components/icons/AppertureIcons'

import { Card, Grid } from '@material-ui/core'

export default function APPerture() {
  const classes = useStyles()
  const text = '• Instagram x Unsplash <br />• Fullstack CRUD application'
  const appLink = 'http://apperture-project.herokuapp.com/'
  const imgLink = 'https://i.ibb.co/FJKBM8Q/Apperture.png'
  const githubLink = 'https://github.com/brendino500/APPerture'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="09 . 2020"
          title="APPerture"
          subtitle="Paired Project • 7 Days"
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
            <APPertureIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
    </Card>
  )
}
