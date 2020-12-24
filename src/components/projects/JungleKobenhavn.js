import React from 'react'
import ProjectImage from './ProjectImage'
import useStyles from './projectStyles'

import {
  Card,
  Grid,
  Typography,
  CardContent,
  IconButton,
  Divider,
  Hidden,
} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
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

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.number}>10 . 2020</Typography>
          <Typography className={classes.title}>Jungle København</Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.subtitle}>
            Solo Project • 14 Days
          </Typography>
        </CardContent>
        <div className={classes.text}>
          <Typography className={classes.text}>
            • Fullstack Ecommerce site using TypeScript & React Hooks
          </Typography>
        </div>
        <div>
          <Grid
            container
            justify="space-between"
            className={classes.iconLayout}
          >
            <Grid className={classes.linksIcons}>
              <IconButton
                href="https://github.com/brendino500/junglekobenhavn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
              <IconButton
                href="http://jungle-kobenhavn.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon
                  className={('github-link', classes.profileLinks)}
                  fontSize="small"
                />
              </IconButton>
            </Grid>
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
