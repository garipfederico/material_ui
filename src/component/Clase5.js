import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
    juanito: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px'
    }

})

export default function Clase5() {
const classes = useStyle()

    return (
        <div>
        <p>Clase5</p>
            <Button
            className={classes.juanito}>
                MI BOTON PERSONALIZADO
            </Button>
        </div>
    )
}
