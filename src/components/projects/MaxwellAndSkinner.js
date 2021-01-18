import React from 'react'
import ProjectImage from './components/ProjectImage'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'

import { Card, Grid, Hidden } from '@material-ui/core'

import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMaterialUi,
  SiReact,
  SiNpm,
} from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

export default function MaxwellAndSkinner() {
  const classes = useStyles()
  const text =
    '• Single page web design using Material UI to improve styling and UX'

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <ProjectImage
          href="https://maxwell-skinner.vercel.app/"
          src="https://i.ibb.co/KXW09Wt/homepage.png"
          className={classes.projectImg}
        />
      </Hidden>
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
              githubHref="https://github.com/brendino500/maxwell-skinner"
              projectHref="https://maxwell-skinner.vercel.app/"
            />
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiMaterialUi className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <IoLogoVercel className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <ProjectImage
            href="https://maxwell-skinner.vercel.app/"
            src="https://i.ibb.co/KXW09Wt/homepage.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
    </Card>
  )
}
