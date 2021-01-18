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
  SiMongodb,
  SiNodeDotJs,
  SiMaterialUi,
  SiTypescript,
  SiReact,
  SiHeroku,
  SiNpm,
} from 'react-icons/si'

export default function JungleKobenhavn() {
  const classes = useStyles()
  const text = '• Fullstack Ecommerce site using TypeScript & React Hooks'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="10 . 2020"
          title="Jungle København"
          subtitle="Solo Project • 14 Days"
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
              githubHref="https://github.com/brendino500/junglekobenhavn"
              projectHref="http://jungle-kobenhavn.herokuapp.com/"
            />
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiTypescript className={classes.techIcon} />
              <SiMaterialUi className={classes.techIcon} />
              <SiReact className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiMongodb className={classes.techIcon} />
              <SiNodeDotJs className={classes.techIcon} />
              <SiNpm className={classes.techIcon} />
              <i className="devicon-express-original skills-details-icon"></i>
              <SiHeroku className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <ProjectImage
            href="http://jungle-kobenhavn.herokuapp.com/"
            src="https://i.ibb.co/9vMV4z7/JK1.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
      <Hidden smDown>
        <ProjectImage
          href="http://jungle-kobenhavn.herokuapp.com/"
          src="https://i.ibb.co/9vMV4z7/JK1.png"
          className={classes.projectImg}
        />
      </Hidden>
    </Card>
  )
}
