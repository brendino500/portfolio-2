import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'

import { Card, Grid } from '@material-ui/core'
import {
  SiJavascript,
  SiJest,
  SiHtml5,
  SiMaterialUi,
  SiReact,
  SiNpm,
  SiNodeDotJs,
  SiAirbnb,
  SiNetlify,
} from 'react-icons/si'

export default function SpaceInvaders() {
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
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiJest className={classes.techIcon} />
              <SiAirbnb className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiMaterialUi className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <SiNetlify className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
