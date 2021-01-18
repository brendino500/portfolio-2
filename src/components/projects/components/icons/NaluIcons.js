import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
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

const NaluIcons = () => {
  const classes = useStyles()
  return (
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
  )
}

export default NaluIcons
