import { Button, ButtonBase } from '@mui/material'
import React, { useState } from 'react'

const  Count= () => {
    var[num,setnum]=useState(0)
    const count=()=>{
        setnum(num+1)
    }
    const subcount=()=>{
        setnum(num-1)
    }
  return (
    <div>
        <h1 >Count{num}</h1>
<Button variant ='contained'onClick={count}>+</Button>
<Button variant ='contained'onClick={subcount}>-</Button>


    </div>
  )
}

export default Count