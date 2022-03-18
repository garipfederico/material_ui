import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'


export default class Clase4 extends Component {
    render() {
        return (
            <div>
                <Typography variant="h1" color="primary">
                    Federico
                </Typography>
                <Typography variant="body1" align="center" color="secondary" gutterBottom >Lorem</Typography>
                <Typography variant="body1" align="center" color="primary" paragraph>Lorem</Typography>

            </div>
        )
    }
}
