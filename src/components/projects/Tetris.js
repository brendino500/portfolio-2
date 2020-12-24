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
import { SiJavascript, SiCss3, SiHtml5, SiNetlify } from 'react-icons/si'

export default function Tetris() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <ProjectImage
          href="https://sei-project1-tetris.netlify.app/"
          src="https://i.ibb.co/LZcsFxy/tetris2.png"
          className={classes.projectImg}
        />
      </Hidden>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>07 . 2020</Typography>
          <Typography className={classes.title}>Tetris</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Solo Project • 7 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Vanilla JavaScript game coded only 3 weeks into formally learning
            web development
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
              githubHref="https://github.com/brendino500/tetris-game"
              projectHref="https://sei-project1-tetris.netlify.app/"
            />
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiNetlify className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <Hidden smUp>
          <ProjectImage
            href="https://sei-project1-tetris.netlify.app/"
            src="https://i.ibb.co/LZcsFxy/tetris2.png"
            className={classes.projectImg}
          />
        </Hidden>
      </div>
    </Card>
  )
}
