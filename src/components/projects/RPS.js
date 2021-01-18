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
  SiCss3,
  SiHtml5,
  SiMaterialUi,
  SiReact,
  SiNpm,
  SiJest,
  SiNetlify,
} from 'react-icons/si'

export default function RPS() {
  const classes = useStyles()
  const text = '• Full TDD and SVG animations'
  const appLink = 'https://rpc-bt.netlify.app/'
  const imgLink = 'https://i.ibb.co/fFWpLQC/rps-screenshot.png'
  const githubLink = 'https://github.com/brendino500/rps-jest'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="01 . 21"
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
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiMaterialUi className={classes.techIcon} />
              <SiJest className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <SiNetlify className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
    </Card>
  )
}
