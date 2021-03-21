import React from 'react'
import Fade from 'react-reveal/Fade'
import TableRow from '@material-ui/core/TableRow'
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
} from '@material-ui/core/'

import useStyles from './styles/mainStyles'

function createData(date, role, location) {
  return { date, role, location }
}

const rows = [
  createData('2021 - Current', 'Junior Front End Developer', '@Square-Enix'),
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
