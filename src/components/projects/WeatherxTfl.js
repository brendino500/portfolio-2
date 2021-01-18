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
  SiBulma,
  SiSass,
  SiReact,
  SiNetlify,
  SiNpm,
  SiNodeDotJs,
} from 'react-icons/si'

export default function WeatherxTfl() {
  const classes = useStyles()
  const text = '• Frontend React app pulling from 5 external APIs'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="08 . 2020"
          title="Weather x TfL"
          subtitle="Paired Project • 48 Hours"
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
