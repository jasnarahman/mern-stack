import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[name ,setName]=useState("jasna")
    var[a,seta]=useState("")

    const inputHandler=(e)=>{
        setName(e.target.value)
    }
     
    const submitHandler=()=>{
        seta(name)
    }
  return (
    <div>
        <h1>welcome {a}</h1>
    <TextField variant='outlined'onChange={inputHandler}/>
    <Button variant='contained'onClick={submitHandler}>add</Button>



    </div>
  )
}

export default Statebasics