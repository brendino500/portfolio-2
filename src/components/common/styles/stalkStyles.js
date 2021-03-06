import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1000,
    height: '100vh',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: 42,
    letterSpacing: 10,
    color: '#d3c9c0',
    textAlign: 'center',
    marginBottom: 25,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 30,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 35,
    },
  },
  subtitle: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 22,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 24,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 18,
    },
  },
  icon: {
    padding: 10,
    color: '#d3c9c0',
  },
  grid: {
    marginTop: '10%',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '20%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: '20%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: '5%',
    },
  },
  footer: {
    marginTop: '7%',
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: 15,
    letterSpacing: 2,
    verticalAlign: 'text-bottom',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 15,
    },
  },
}))

export default useStyles
