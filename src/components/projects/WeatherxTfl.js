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
  SiCss3,
  SiHtml5,
  SiBulma,
  SiSass,
  SiReact,
  SiNetlify,
  SiNpm,
  SiNodeDotJs,
} from 'react-icons/si'

export default function WeatherxTfl() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>08 . 2020</Typography>
          <Typography className={classes.title}>Weather x TfL</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Paired Project • 48 Hours
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Weather x Tfl <br /> • Frontend React app pulling from 5 external
            API's
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
              githubHref="https://github.com/brendino500/sei-project-2"
              projectHref="https://weather-bike-tube.netlify.app/"
            />
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiSass className={classes.techIcon} />
              <SiBulma className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <SiNetlify className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <ProjectImage
            href="https://weather-bike-tube.netlify.app/"
            src="https://i.ibb.co/47ds104/TFL1.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
      <Hidden smDown>
        <ProjectImage
          href="https://weather-bike-tube.netlify.app/"
          src="https://i.ibb.co/47ds104/TFL1.png"
          className={classes.projectImg}
        />
      </Hidden>
    </Card>
  )
}
