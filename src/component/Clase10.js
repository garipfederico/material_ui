import React from 'react'


import theme from '../temaConfig'
import { ThemeProvider } from '@material-ui/core'

import Contenedor from './Contenedor'

const Clase10 = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Contenedor />
            </ThemeProvider>
        </div>
    )
}

export default Clase10;