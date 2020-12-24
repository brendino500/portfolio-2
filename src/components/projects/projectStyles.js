import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#323E47',
    border: 'none',
    boxShadow: 'none',
    height: 400,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '95vw',
      marginLeft: -30,
      height: '85vh',
    },
  },
  content: {
    width: 500,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 300,
    },
  },
  title: {
    fontSize: 40,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    letterSpacing: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 36,
    },
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 22,
    },
  },
  text: {
    flexGrow: 1,
    fontFamily: 'Work Sans',
    color: '#d3c9c0',
    fontSize: 13,
    letterSpacing: 1,
    margin: 10,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 11,
      width: '80vw',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 15,
    },
  },
  profileLinks: {
    color: '#d3c9c0',
  },
  techIcon: {
    color: '#d3c9c0',
    fontSize: 20,
    margin: 5,
  },
  iconLayout: {
    positon: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  linksIcons: {
    margin: 0,
    [theme.breakpoints.between('xs', 'sm')]: {
      alignItems: 'center',
    },
  },
  divider: {
    backgroundColor: '#d3c9c0',
    height: '2px',
    width: '9vw',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '30vw',
    },
  },
  number: {
    fontSize: 18,
    fontFamily: 'Libre Baskerville',
    color: '#d3c9c0',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 14,
    },
  },
  projectImg: {
    height: 'auto',
    width: '25vw',
    margin: '5vh 3vw 0 3vw',
  },
  details: {
    marginLeft: '3vw',
  },
  icons: {
    marginLeft: 10,
  },
}))

export default useStyles
