import React from 'react'

import { Box, Grid, Typography } from '@material-ui/core'

function CajitaGrid() {
    return (
        <div>
        <Typography variant='h3'>Grid </Typography>
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Box border={2} > 
                        xs12
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Box border={2}>
                        xs12
                    </Box>
                </Grid>

            </Grid>
        </div >
    )
}

export default CajitaGrid