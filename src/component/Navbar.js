import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
// Llamo a la funcion theme y le pido que me devuelva las el offset del toolbar y lo guardo en la constante
// useStyles

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.Toolbar,// eliminar????

// Aca hay codigo que no he puesto(no se porque) pero que recien aparece en el video 10 en el minuto 16:18

  appBar: {
    width: `calc(100% - ${240}px)`,
    marginLeft: 240,
  },
}))

const Navbar = () => {

  const classes = useStyles()

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color='inherit'>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6">
            Tutorial Material-UI (Clase7)
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes}></div>

    </div>
  )
}



export default Navbar


