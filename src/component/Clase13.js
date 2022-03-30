import React from 'react'
import CajitaGrid from './CajitaGrid'
import theme from '../temaConfig'

import { ThemeProvider } from '@material-ui/core'
import Contenedor from './Contenedor'

function Clase13() {
  return (
    <div>
    <ThemeProvider theme={theme}>
        <Contenedor></Contenedor>
    </ThemeProvider>
</div>
  )
}

export default Clase13