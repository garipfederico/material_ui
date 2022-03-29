import React from 'react'

import {Box} from '@material-ui/core'

function Cajita() {
  return (
    <div>
    <Box 
    color='primary.main'
    >
        Los margenes son similares a bootstrap
    </Box>
    <Box 
    color='primary.contrastText'
    bgcolor='primary.main'
    >
        asasasas
    </Box>
    <Box 
    color='primary.contrastText'
    bgcolor='primary.main'
    mr={2}
    >
        asasasas
    </Box>
    <Box 
    color='primary.contrastText'
    bgcolor='primary.main'
    mx={2}
    >
        margen en x (horizontal)
    </Box>
    <Box 
    color='primary.contrastText'
    bgcolor='primary.main'
    mt={2}
    >
        margen superior
    </Box>
    <Box 
    color='primary.contrastText'
    bgcolor='primary.main'
    p={2}
    >
        padding
    </Box>
    <Box
        m={2}
        p={5}
        border={2}
        borderColor= 'error.main'
        > Caja sin color, con margen y padding y bordes
    </Box>
    </div>
  )
}

export default Cajita