"use client"
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Productscard = ({produits}) => {
  return (
    <React.Fragment>
{produits &&
<div
style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
{produits.map((art,ind)=>{
 return <Card sx={{ maxWidth: 'auto',margin: 1 }} key={ind}>
 <CardMedia
component="img"
alt="image"
height="160"
image={art.imageart}
 />
<CardContent>
<Typography gutterBottom variant="h6" component="div">
 {art.reference}
 </Typography>
<Typography variant="body2" color="text.secondary">
 Prix : {art.prix} DT
 </Typography>
</CardContent>
<CardActions>
<Button disabled={art.qtestock<=1}
 variant="contained" color="secondary" size="large"



>
{art.qtestock<=1? "OUT OF SOLD": "Add to cart"}
 </Button>
</CardActions>
</Card>
 })}</div>
 }
 </React.Fragment>
 

  )
}

export default Productscard
