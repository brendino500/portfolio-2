import React from 'react'
import useStyles from '../../styles/projectStyles'
import { DiDjango } from 'react-icons/di'
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiMaterialUi,
  SiSass,
  SiReact,
  SiHeroku,
  SiNpm,
  SiNodeDotJs,
} from 'react-icons/si'

const APPertureIcons = () => {
  const classes = useStyles()
  return (
    <div>
      <SiJavascript className={classes.techIcon} />
      <SiHtml5 className={classes.techIcon} />
      <SiCss3 className={classes.techIcon} />
      <SiSass className={classes.techIcon} />
      <SiMaterialUi className={classes.techIcon} />
      <SiReact className={classes.techIcon} />
      <SiPython className={classes.techIcon} />
      <DiDjango className={classes.techIcon} />
      <SiPostgresql className={classes.techIcon} />
      <SiNpm className={classes.techIcon} />
      <SiNodeDotJs className={classes.techIcon} />
      <SiHeroku className={classes.techIcon} />
    </div>
  )
}

export default APPertureIcons
