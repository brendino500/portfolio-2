import React from 'react'

import { Grid, IconButton } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

const GithubAndLink = ({
  gridClassName,
  profileClassName,
  githubHref,
  projectHref,
}) => {
  return (
    <Grid className={gridClassName}>
      <IconButton href={githubHref} target="_blank" rel="noopener noreferrer">
        <GitHubIcon
          className={('github-link', profileClassName)}
          fontSize="small"
        />
      </IconButton>
      <IconButton href={projectHref} target="_blank" rel="noopener noreferrer">
        <LinkIcon
          className={('github-link', profileClassName)}
          fontSize="small"
        />
      </IconButton>
    </Grid>
  )
}

//"https://github.com/brendino500/nalu"
// "https://naluwave.herokuapp.com/"

export default GithubAndLink
