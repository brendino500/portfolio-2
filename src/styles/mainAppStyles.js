import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: '#d3c9c0',
    fontFamily: 'Libre Baskerville',
    letterSpacing: 2,
  },
  buttonTitle: {
    color: '#d3c9c0',
    fontFamily: 'Libre Baskerville',
    letterSpacing: 4,
    fontSize: 20,
    flexGrow: 1,
  },
  buttonGroup: {
    marginRight: 0,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    Paper: {
      backgroundColor: '#d3c9c0',
    },
  },
  burgerIcon: {
    color: '#d3c9c0',
  },
}))

export default useStyles
