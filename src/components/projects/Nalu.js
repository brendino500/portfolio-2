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
  SiHeroku,
  SiNpm,
  SiMongodb,
  SiNodeDotJs,
} from 'react-icons/si'

export default function Nalu() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <ProjectImage
          href="https://naluwave.herokuapp.com/"
          src="https://i.ibb.co/R9ssBbs/Nalu1.png"
          className={classes.projectImg}
        />
      </Hidden>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>08 . 2020</Typography>
          <Typography className={classes.title}>Nalu</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Group Project • 7 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            •Fullstack MERN app with CRUD functionality
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
              githubHref="https://github.com/brendino500/nalu"
              projectHref="https://naluwave.herokuapp.com/"
            />
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiSass className={classes.techIcon} />
              <SiBulma className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiMongodb className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <i className="devicon-express-original skills-details-icon"></i>
              <SiHeroku className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <ProjectImage
            href="https://naluwave.herokuapp.com/"
            src="https://i.ibb.co/R9ssBbs/Nalu1.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
    </Card>
  )
}
