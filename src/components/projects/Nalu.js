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
  SiHeroku,
  SiNpm,
  SiMongodb,
  SiNodeDotJs,
} from 'react-icons/si'

export default function Nalu() {
  const classes = useStyles()
  const text = '•Fullstack MERN app with CRUD functionality'

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
        <Details
          date="08 . 2020"
          title="Nalu"
          subtitle="Group Project • 7 Days"
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
