import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import NaluIcons from './components/icons/NaluIcons'

import { Card, Grid } from '@material-ui/core'

export default function Nalu() {
  const classes = useStyles()
  const text = '•Fullstack MERN app with CRUD functionality'
  const appLink = 'https://naluwave.herokuapp.com/'
  const imgLink = 'https://i.ibb.co/R9ssBbs/Nalu1.png'
  const githubLink = 'https://github.com/brendino500/nalu'

  return (
    <Card className={classes.root}>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
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
              githubHref={githubLink}
              projectHref={appLink}
            />
          </Grid>
          <NaluIcons />
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
    </Card>
  )
}
