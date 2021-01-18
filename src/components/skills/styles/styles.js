import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: '10vh',
    marginBottom: 10,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
      textAlign: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 24,
      textAlign: 'center',
      letterSpacing: 2,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 22,
      textAlign: 'center',
      letterSpacing: 4,
      marginBottom: 20,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 22,
      textAlign: 'center',
      letterSpacing: 4,
      marginBottom: 20,
    },
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: '10vh',
    marginBottom: 10,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
      textAlign: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 24,
      textAlign: 'center',
      letterSpacing: 2,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 22,
      textAlign: 'center',
      letterSpacing: 4,
      marginBottom: 20,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 22,
      textAlign: 'center',
      letterSpacing: 4,
      marginBottom: 20,
    },
  },
  iconAndText: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    [theme.breakpoints.up('xl')]: {
      margin: 10,
    },
    icons: {
      color: '#d3c9c0',
      fontSize: 30,
      textAlign: 'center',
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 18,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 11,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 16,
      letterSpacing: 2,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 15,
    },
  },
}))

export default useStyles
