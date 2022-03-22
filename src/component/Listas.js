import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import { CloudQueue, Deck } from '@mui/icons-material/';


const Listas = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueue />
                    </ListItemIcon>
                    <ListItemText primary='Mi primer elemento'>
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Deck />
                    </ListItemIcon>
                    <ListItemText>
                    Segundo elemento (Otra forma de poner el texto)
                    </ListItemText>
                </ListItem>

                <Divider />

            </List>
        </div>
    )
}

export default Listas;