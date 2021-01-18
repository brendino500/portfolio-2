import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '85%',
    marginTop: '10%',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '90vw',
    },
  },
  projectCards: {
    marginTop: '5%',
  },
  projects: {
    margin: 10,
    marginTop: '5vh',
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
  dividerLeft: {
    backgroundColor: '#d3c9c0',
    height: 2,
    width: '50vw',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '60vw',
      marginLeft: '5%',
    },
  },
  dividerRight: {
    backgroundColor: '#d3c9c0',
    height: 2,
    width: '50vw',
    marginLeft: '30vw',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '60vw',
      marginLeft: '30%',
    },
  },
}))

export default useStyles
