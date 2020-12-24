import React from 'react'
import ProjectImage from './ProjectImage'
import useStyles from './projectStyles'
import GithubAndLink from './GithubAndLink'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  Divider,
  Hidden,
} from '@material-ui/core'
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

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>09 . 2020</Typography>
          <Typography className={classes.title}>APPerture</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Paired Project • 7 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Instagram x Unsplash <br />• Fullstack CRUD application
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
              githubHref="https://github.com/brendino500/APPerture"
              projectHref="http://apperture-project.herokuapp.com/"
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
        <Hidden smUp>
          <ProjectImage
            href="http://apperture-project.herokuapp.com/"
            src="https://i.ibb.co/FJKBM8Q/Apperture.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
      <Hidden smDown>
        <ProjectImage
          href="http://apperture-project.herokuapp.com/"
          src="https://i.ibb.co/FJKBM8Q/Apperture.png"
          className={classes.projectImg}
        />
      </Hidden>
    </Card>
  )
}
