import React from 'react'
import useStyles from '../../styles/projectStyles'
import { Grid } from '@material-ui/core'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMaterialUi,
  SiReact,
  SiNpm,
} from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

const MaxwellSkinnerIcons = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.icons}>
      <SiJavascript className={classes.techIcon} />
      <SiMaterialUi className={classes.techIcon} />
      <SiReact className={classes.techIcon} />
      <SiHtml5 className={classes.techIcon} />
      <SiCss3 className={classes.techIcon} />
      <SiNpm className={classes.techIcon} />
      <IoLogoVercel className={classes.techIcon} />
    </Grid>
  )
}

export default MaxwellSkinnerIcons
