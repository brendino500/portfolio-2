import React from 'react'
import ProjectImage from './components/ProjectImage'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'

import { Card, Grid, Typography, Hidden } from '@material-ui/core'

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

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="01 . 21"
          title="Roche, Papier, Ciseaux"
          subtitle="Solo Project • 2 Weeks"
        />
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Full TDD and SVG animations
          </Typography>
        </div>
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <GithubAndLink
              gridClassName={classes.linksIcons}
              profileClassName={classes.profileLinks}
              githubHref="https://github.com/brendino500/rps-jest"
              projectHref="https://i.ibb.co/fFWpLQC/rps-screenshot.png"
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
        <Hidden smUp>
          <ProjectImage
            href="https://aventyr-login.netlify.app/"
            src="https://i.ibb.co/X5Yt3hM/aventyr-homepage.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
      <Hidden smDown>
        <ProjectImage
          href="https://rpc-bt.netlify.app/"
          src="https://i.ibb.co/fFWpLQC/rps-screenshot.png"
          className={classes.projectImg}
        />
      </Hidden>
    </Card>
  )
}
