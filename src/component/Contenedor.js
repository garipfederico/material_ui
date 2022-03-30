import React from 'react'

import {
    Hidden,
    makeStyles
} from '@material-ui/core'
import Navbar from './Navbar'
import OwnDrawer from './OwnDrawer'
import Cajita from './Cajita'
import CajitaGrid from './CajitaGrid'

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Contenedor = () => {
    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)
    const accionAbrir = () => {
        setAbrir(!abrir);
    };
    return (
        <div className={classes.root}>
            <Navbar />
            <Hidden xsDown>
                <OwnDrawer
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <OwnDrawer
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Cajita/>
                <CajitaGrid/>
            </div>
        </div>
    )
}

export default Contenedor;