import React, { Component } from 'react'
import { Button, Icon, IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';

export default class Clase3 extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
