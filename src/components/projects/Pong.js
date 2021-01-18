import React from 'react'
import ProjectImage from './ProjectImage'
import useStyles from './projectStyles'
import GithubAndLink from './GithubAndLink'
import Details from './Details'

import { Card, Grid, Typography, Hidden } from '@material-ui/core'
import { SiJava } from 'react-icons/si'

export default function Tetris() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="11 . 2020"
          title="Pong"
          subtitle="Solo Project • 1 Day"
        />
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Game development in Java to refresh on knowledge in a strictly
            typed language before tackling TypeScript
          </Typography>
        </div>
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
