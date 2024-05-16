import { AppBar, Toolbar, Tooltip, Typography, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <AppBar>
        <Toolbar>
            <Typography variant="h6">Home</Typography>
            <Button variant="Contained">Login</Button>  
            <Button variant="Contained">
            <Link to='/reg'  >Signup</Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            </Button>                          
            <Button variant="contained">
              <Link to='/u'>Click</Link>
              </Button>  
              <Button variant="contained">
              <Link to='/v'>View</Link>
              </Button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Navbar
