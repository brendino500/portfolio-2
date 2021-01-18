import React from 'react'
import ProjectImage from './ProjectImage'
import useStyles from './projectStyles'
import GithubAndLink from './GithubAndLink'
import Details from './Details'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  IconButton,
  Divider,
  Hidden,
} from '@material-ui/core'

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
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Single page web design using Material UI <br />
            to improve styling and UX
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
