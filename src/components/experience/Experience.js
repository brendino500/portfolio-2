import React from 'react'
import GeneralAssembly from './GeneralAssembly'
import FreelancePhotographer from './FreelancePhotographer'
import CraftLondon from './CraftLondon'
import ManchesterUni from './ManchesterUni'

import Fade from 'react-reveal/Fade'
import { HiOutlineCode } from 'react-icons/hi'
import { GiPhotoCamera } from 'react-icons/gi'
import { IoIosMusicalNotes } from 'react-icons/io'
import { BiCoffee } from 'react-icons/bi'

import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    margin: '0 auto',
    marginTop: '10vh',
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
  accordion: {
    backgroundColor: '#323e47',
  },
}))

export default function SimpleAccordion() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>
        <br />
        EXPERIENCE
      </Typography>
      <div className={classes.root}>
        <Fade bottom>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel13a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                <HiOutlineCode className="experience-icon" />
                Coding
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <GeneralAssembly />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <GiPhotoCamera className="experience-icon" />
                Photography
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FreelancePhotographer />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                <BiCoffee className="experience-icon" />
                Coffee
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CraftLondon />
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel14a-content"
              id="panel4a-header"
            >
              <Typography className={classes.heading}>
                <IoIosMusicalNotes className="experience-icon" />
                Music
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ManchesterUni />
            </AccordionDetails>
          </Accordion>
        </Fade>
      </div>
    </>
  )
}
