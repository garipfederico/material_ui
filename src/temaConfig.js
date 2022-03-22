// import { createMuiTheme} from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';

const theme = createTheme({
    
    palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: grey[300],
        },
      },
    

})

export default theme;
