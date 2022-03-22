import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../temaConfig'
import Navbar from './Navbar'

function Clase7() {

    return (
        <ThemeProvider theme={theme}>
            <p>Clase7</p>
           <Navbar/>
        </ThemeProvider>
    )
}

export default Clase7