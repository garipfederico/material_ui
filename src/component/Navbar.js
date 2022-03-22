import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@material-ui/core/IconButton'
// Llamo a la funcion theme y le pido que me devuelva las el offset del toolbar y lo guardo en la constante
// useStyles

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.Toolbar
}))

const Navbar = () => {

  const classes = useStyles()

  return (
    <div>
      <AppBar >
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


