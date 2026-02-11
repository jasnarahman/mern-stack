import { Card } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Productcard = () => {
    var[c,setc]=useState([])
    axios.get("https://fakestoreapi.com/products")
    .then ((res)=>{
        setc(res.data)
        console.log(c)
    })
  return (

    <div>
        {c.map((val)=>{
            return(
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
        })}
    </div>
  )
}

export default Productcard