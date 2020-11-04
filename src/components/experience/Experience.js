// import React from 'react'
// import GeneralAssembly from './GeneralAssembly'
// import FreelancePhotographer from './FreelancePhotographer'
// import CraftLondon from './CraftLondon'
// import ManchesterUni from './ManchesterUni'

// import { makeStyles } from '@material-ui/core/styles'
// import { Typography, Container } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//     fontFamily: 'Neuton',
//     fontSize: '42px',
//     letterSpacing: '10px',
//     color: '#d3c9c0',
//     textAlign: 'center',
//     [theme.breakpoints.between('xs', 'sm')]: {
//       fontSize: 30,
//     },
//     [theme.breakpoints.between('sm', 'md')]: {
//       fontSize: 38,
//     },
//     [theme.breakpoints.between('md', 'lg')]: {
//       fontSize: 40,
//     },
//   },
// }))

// export default function Experience() {
//   const classes = useStyles()

//   return (
//     <Container className={classes.root}>
//       <Typography className={classes.title}>EXPERIENCE</Typography>
//       <GeneralAssembly />
//       <FreelancePhotographer />
//       <CraftLondon />
//       <ManchesterUni />
//     </Container>
//   )
// }

import React from 'react'
import GeneralAssembly from './GeneralAssembly'
import FreelancePhotographer from './FreelancePhotographer'
import CraftLondon from './CraftLondon'
import ManchesterUni from './ManchesterUni'

import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 38,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 40,
    },
  },
  heading: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: 30,
    letterSpacing: 5,
    color: '#d3c9c0',
    textAlign: 'center',
  },
}))

export default function SimpleAccordion() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>EXPERIENCE</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Photography</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FreelancePhotographer />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Coffee</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CraftLondon />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Coding</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GeneralAssembly />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Music</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ManchesterUni />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
