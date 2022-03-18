import React from 'react'

// import Button from '@material-ui/core/Button'

// import Button from '@material-ui/core/Button'
//Son dos formas de importar distintas
// import { Button } from '@material-ui/core/'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Icon, IconButton } from '@material-ui/core'
import Clase4 from './component/Clase4'

function App() {
  return (
    <div>

      <Button>Este es un boton</Button>


      <Button color="secondary">
        color
      </Button>
      <Button
        color="primary"
        variant="outlined"
      >
        outlined
      </Button>
      <p>Lorem</p>

      <Button
        color="primary"
        variant="contained">
        con sombra
      </Button>

      <Button
        color="primary"
        variant="contained"
        disableElevation>
        sin sombra
      </Button>

      <p>lorem</p>
      <Button
        color="primary"
        variant="contained"
        href="https://google.com">
        href a google
      </Button>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        size="large">
        fullwidth
      </Button>

      <Button
        color="primary"
        variant="contained"
        size="small">
        small
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="medium">
        medium
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="large">
        large
      </Button>
      <p>Clase3</p>
      SVG icons (Son mas livianos)
      <DeleteIcon
        color='secondary'
      />

      <p>Font Icons (Son los de google) son mas faciles de llamar ya que se importan en el texto del componente, o sea se hace una sola importacion
        <Icon
          color='primary'
        >star</Icon></p>
      <p>Botones con iconos adentro
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      
        .    Icono despues del texto con propiedad endIcon
        <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
        endIcon-></Button>
      </p>
      <p>Otra variante mas es IconButton que al hacer mouseover hace un efecto de sombreado</p>
     <IconButton aria-label="delete">
       <DeleteIcon></DeleteIcon>
     </IconButton>
    <Clase4></Clase4>
    </div>
  );
}

export default App;
