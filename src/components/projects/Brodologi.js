import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import BrodologiIcons from './components/icons/BrodologiIcons'

import { Card, Grid } from '@material-ui/core'

export default function Brodologi() {
  const classes = useStyles()
  const text =
    '• Fullstack Ecommerce site exploring useContext and useReducer hooks'
  const appLink = 'https://brodologi.herokuapp.com/'
  const imgLink =
    'https://i.ibb.co/5GsKHsH/Screenshot-2021-01-30-at-20-39-49.png'
  const githubLink = 'https://github.com/brendino500/brodologi'

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Details
          date="01 . 2021"
          title="Brødologi"
          subtitle="Solo Project • 4 Days"
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
            <BrodologiIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
    </Card>
  )
}
