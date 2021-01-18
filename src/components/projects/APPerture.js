import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'

import { Card, Grid } from '@material-ui/core'
import { DiDjango } from 'react-icons/di'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiMaterialUi,
  SiSass,
  SiReact,
  SiHeroku,
  SiNpm,
  SiNodeDotJs,
} from 'react-icons/si'

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
            <Grid>
              <SiJavascript className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiSass className={classes.techIcon} />
              <SiMaterialUi className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiPython className={classes.techIcon} />
              <DiDjango className={classes.techIcon} />
              <SiPostgresql className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <SiHeroku className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
    </Card>
  )
}
