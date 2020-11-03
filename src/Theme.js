import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: "#d3c9c0"
    },
    secondary: {
      main: "#323e47"
    },
    typography: {
      fontFamily: "Libre Baskerville",
      h1: {
        fontSize: 42,
        letterSpacing: 10,
      },
      h2: {
        fontFamily: "Libre Baskerville",
        fontSize: 30,
        letterSpacing: 5,
      },
      h3: {
        fontFamily: "Libre Baskerville",
        fontSize: 25,
        letterSpacing: 2,
      },
      subtitle2: {
        fontFamily: "Libre Baskerville",
        fontSize: 16,
        letterSpacing: 2,
      },
      p: {
        fontFamily: "Work Sans",
        fontSize: 18,
        letterSpacing: 1,
      }
    },
    overrides: {
      MuiTypography: {
        text: {
          fontFamily: "Libre Baskerville"
        }
      }
    }
  }
})