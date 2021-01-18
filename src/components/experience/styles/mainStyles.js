import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  table: {
    width: '80vw',
    display: 'flex',
    marginLeft: '10%',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: 0,
    },
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
    [theme.breakpoints.between('md', 'lg')]: {
      width: '95vw',
      marginLeft: 0,
    },
  },
}))

export default useStyles
