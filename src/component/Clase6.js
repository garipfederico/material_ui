import React from 'react'
import Button from '@material-ui/core/Button'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../temaConfig'

function Clase6() {

    return (
        <ThemeProvider theme={theme}>
            <p>Clase6</p>
            <Button variant="contained" color="primary">
                Botón
            </Button>

            <Button variant="contained" color="secondary">
                Botón
            </Button>
        </ThemeProvider>
    )
}

export default Clase6