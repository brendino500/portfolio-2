import React from 'react'
import ProjectImage from './components/ProjectImage'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'

import { Card, Grid, Hidden } from '@material-ui/core'
import { SiJava } from 'react-icons/si'

export default function Tetris() {
  const classes = useStyles()
  const text =
    '• Game development in Java to refresh on knowledge in a strictly typed language before tackling TypeScript'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="11 . 2020"
          title="Pong"
          subtitle="Solo Project • 1 Day"
        />
        <ProjectDescription description={text} />
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <Grid>
              <GithubAndLink
                gridClassName={classes.linksIcons}
                profileClassName={classes.profileLinks}
                githubHref="https://github.com/brendino500/pong-java"
              />
            </Grid>
            <Grid className={classes.icons}>
              <SiJava className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <ProjectImage
            href="https://github.com/brendino500/pong-java"
            src="https://i.ibb.co/bbDcn53/pong-screenshot.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
      <Hidden smDown>
        <ProjectImage
          href="https://github.com/brendino500/pong-java"
          src="https://i.ibb.co/bbDcn53/pong-screenshot.png"
          className={classes.projectImg}
        />
      </Hidden>
    </Card>
  )
}
