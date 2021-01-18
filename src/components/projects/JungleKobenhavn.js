import React from 'react'
import useStyles from './styles/projectStyles'
import GithubAndLink from './components/GithubAndLink'
import Details from './components/Details'
import ProjectDescription from './components/ProjectDescription'
import MobileImage from './components/MobileImage'
import DesktopImage from './components/DesktopImage'
import JungleKobenhavnIcons from './components/icons/JungleKobenhavnIcons'

import { Card, Grid } from '@material-ui/core'

export default function JungleKobenhavn() {
  const classes = useStyles()
  const text = '• Fullstack Ecommerce site using TypeScript & React Hooks'
  const appLink = 'http://jungle-kobenhavn.herokuapp.com/'
  const imgLink = 'https://i.ibb.co/9vMV4z7/JK1.png'
  const githubLink = 'https://github.com/brendino500/junglekobenhavn'

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
              githubHref={githubLink}
              projectHref={appLink}
            />
            <JungleKobenhavnIcons />
          </Grid>
        </div>
        <MobileImage appLink={appLink} imgLink={imgLink} />
      </div>
      <DesktopImage appLink={appLink} imgLink={imgLink} />
    </Card>
  )
}
