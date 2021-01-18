import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
    marginTop: '40vh',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '55%',
    },
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Neuton',
    color: '#d3c9c0',
    fontSize: 45,
    letterSpacing: 2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 20,
    },
  },
}))

export default useStyles
