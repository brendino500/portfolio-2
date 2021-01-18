import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80vw',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    fontSize: '40px',
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
}))

export default useStyles
