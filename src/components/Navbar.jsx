import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <Box>
    <AppBar>
       <Toolbar>
        <Typography>Products</Typography><br></br>
        <Button color='inherit'><Link to ='/'style={{color:'white',textDecoration:'none'}}>VIEW</Link></Button>
        <Button align="center" color='inherit'><Link to='/add'style={{color:'white',textDecoration:'none'}}>ADD PRODUCT</Link></Button>
        </Toolbar>
    </AppBar>
 </Box>
  )
}

export default Navbar
