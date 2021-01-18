import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'

import { Card, Grid } from '@material-ui/core'
import { SiJavascript, SiCss3, SiHtml5, SiNetlify } from 'react-icons/si'

export default function Tetris() {
  const classes = useStyles()
  const text =
    '• Vanilla JavaScript game coded only 3 weeks into formally learning web development'
  const appLink = 'https://sei-project1-tetris.netlify.app/'
  const imgLink = 'https://i.ibb.co/LZcsFxy/tetris2.png'
  const githubLink = 'https://github.com/brendino500/tetris-game'

  return (
    <Card className={classes.root}>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
      <div className={classes.details}>
        <Details
          date="07 . 2020"
          title="Tetris"
          subtitle="Solo Project • 7 Days"
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
              githubHref={githubLink}
              projectHref={appLink}
            />
            <Grid className={classes.icons}>
              <SiJavascript className={classes.techIcon} />
              <SiHtml5 className={classes.techIcon} />
              <SiCss3 className={classes.techIcon} />
              <SiNetlify className={classes.techIcon} />
            </Grid>
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
