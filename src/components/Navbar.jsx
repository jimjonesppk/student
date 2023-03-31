import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <Box>
    <AppBar>
       <Toolbar>
        <Typography>Student-App</Typography><br></br>
        <Button color='inherit'><Link to ='/'style={{color:'white',textDecoration:'none'}}>View</Link></Button>
        <Button color='inherit'><Link to='/add'style={{color:'white',textDecoration:'none'}}>Add</Link></Button>
        </Toolbar>
    </AppBar>
 </Box>
  )
}

export default Navbar
