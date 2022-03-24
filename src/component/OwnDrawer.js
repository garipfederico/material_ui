import React from 'react'
import {
    makeStyles,
    Drawer,
    Divider
} from '@material-ui/core'
import Listas from './Listas'

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,

        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}))

const OwnDrawer = () => {

    const classes = estilos()

    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'    >
            <div className={classes.toolbar}></div>
            <Divider />
            <Listas/>
        </Drawer>
    )
}

export default OwnDrawer