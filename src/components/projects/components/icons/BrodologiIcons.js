import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
import {
  SiJavascript,
  SiCss3,
  SiMongodb,
  SiNodeDotJs,
  SiMaterialUi,
  SiReact,
  SiHeroku,
  SiNpm,
} from 'react-icons/si'

const BrodologiIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
      <SiJavascript className={classes.techIcon} />
      <SiMaterialUi className={classes.techIcon} />
      <SiReact className={classes.techIcon} />
      <SiCss3 className={classes.techIcon} />
      <SiMongodb className={classes.techIcon} />
      <SiNodeDotJs className={classes.techIcon} />
      <SiNpm className={classes.techIcon} />
      <i className="devicon-express-original skills-details-icon"></i>
      <SiHeroku className={classes.techIcon} />
    </Grid>
  )
}

export default BrodologiIcons
