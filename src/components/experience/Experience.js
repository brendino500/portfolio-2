import React from 'react'
import Fade from 'react-reveal/Fade'
import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  table: {
    width: '80vw',
    display: 'flex',
    marginLeft: '10%',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    margin: '4em 0 2em 0',
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
  text: {
    fontFamily: 'Work Sans',
    textTransform: 'uppercase',
    color: '#d3c9c0',
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 15,
    },
  },
  container: {
    width: '50vw',
  },
}))

function createData(date, role, location) {
  return { date, role, location }
}

const rows = [
  createData(
    'June 2020 - Sep 2020',
    'Software Engineering Immersive Student',
    '@General Assembly, London'
  ),
  createData('June 2018 - May 2020', 'Head Roaster', '@Craft London'),
  createData('July 2016 - Feb 2020', 'Freelance Photographer', '@Freelance'),
  createData('2017 - 2019', 'Piano Teacher', '@Freelance'),
  createData('2013 - 2016', 'Barista Trainer', '@Department of Coffee, London'),
  createData('2010 - 2013', 'MusB Music', '@University of Manchester'),
]

export default function Experience() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>EXPERIENCE</Typography>

      <div classes={classes.container}>
        <Fade bottom>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.date}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.text}
                    >
                      {row.date}
                    </TableCell>
                    <TableCell align="left" className={classes.text}>
                      {row.role}
                    </TableCell>
                    <TableCell align="right" className={classes.text}>
                      {row.location}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Fade>
      </div>
    </>
  )
}
