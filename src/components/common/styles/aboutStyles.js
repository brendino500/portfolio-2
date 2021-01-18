import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '42px',
    letterSpacing: '10px',
    color: '#d3c9c0',
    textAlign: 'center',
    marginBottom: 25,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 35,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 35,
    },
  },
  subtitle: {
    fontSize: 25,
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
      fontSize: 20,
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
      fontSize: 14,
    },
  },
  listTitle: {
    flexGrow: 1,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    marginTop: '4%',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 18,
    },
  },
  list: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 20,
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 15,
    },
  },
  image: {
    flexGrow: 1,
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
    margin: '7%',
  },
  imageMobile: {
    flexGrow: 1,
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
  },
  textContent: {
    flexGrow: 3,
  },
  content: {
    display: 'flex',
  },
}))

export default useStyles
