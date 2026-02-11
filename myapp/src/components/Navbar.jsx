import React from 'react'
import App from '../App'
import { AppBar, Button , Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><AppBar>
<Toolbar>
<h3 color>
    myapp
</h3>
<Link to ="/login">
<Button variant ='contained' color ='secondary'>Login </Button></Link>&nbsp;&nbsp;
<Link to="/signup">
<Button variant='contained' color='secondary'>signup</Button>
</Link> &nbsp;&nbsp;
<Link  to="/Data">
<Button variant='contained'color='secondary'>Data</Button>
</Link>&nbsp; &nbsp;
<Link to="/count">
<Button variant='contained'color='secondary'>count</Button>
</Link>&nbsp; &nbsp;
<Link to="/card">
<Button variant='contained'color='secondary'>card</Button>
</Link>&nbsp; &nbsp;

</Toolbar>


   </AppBar>
    </div>
  )
}

export default Navbar