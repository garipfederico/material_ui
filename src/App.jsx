import React from 'react'
// import Button from '@material-ui/core/Button'
//Son dos formas de importar distintas
import { Button } from '@material-ui/core/'




function App() {
  return (
    <div>
     
     <Button color = "secondary">
     color
     </Button>
     <Button 
      color="primary"
      variant="outlined"
     >
       outlined
     </Button>
     <p>Lorem</p>
     
     <Button 
      color="primary"
      variant="contained">
       con sombra
     </Button>
    
     <Button 
      color="primary"
      variant="contained"
      disableElevation>
       sin sombra
     </Button>

    <p>lorem</p>
     <Button 
      color="primary"
      variant="contained"
      href="https://google.com">
       href a google
     </Button>
     <Button 
      color="primary"
      variant="contained"
      fullWidth
      size="large">
       fullwidth
     </Button>
    
     <Button 
      color="primary"
      variant="contained"
      size="small">
       small
     </Button>
     <Button 
      color="primary"
      variant="contained"
      size="medium">
       medium
     </Button>
     <Button 
      color="primary"
      variant="contained"
      size="large">
       large
     </Button>
    
     
    </div>
  );
}

export default App;
