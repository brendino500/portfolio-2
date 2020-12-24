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

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <ProjectImage
          href="https://aventyr-login.netlify.app/"
          src="https://i.ibb.co/X5Yt3hM/aventyr-homepage.png"
          className={classes.projectImg}
        />
      </Hidden>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>11 . 2020</Typography>
          <Typography className={classes.title}>Äventyr</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Solo Project • 2 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Single page using TDD <br />• Jest & Enzyme
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
              githubHref="https://github.com/brendino500/aventyr-login"
              projectHref="https://aventyr-login.netlify.app/"
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
        <Hidden smUp>
          <ProjectImage
            href="https://aventyr-login.netlify.app/"
            src="https://i.ibb.co/X5Yt3hM/aventyr-homepage.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
    </Card>
  )
}
