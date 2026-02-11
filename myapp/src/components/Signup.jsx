import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
    <h1>sign up</h1>
    <TextField label="Name" variant="outlined"/>
    <br /><br />
    <TextField label="Age" variant="outlined"/>
    <br /><br />
    <TextField label="address" variant="outlined"/>
    <br />
<Button variant="outlined">submit</Button>
    
    </div>
  )
}

export default Signup