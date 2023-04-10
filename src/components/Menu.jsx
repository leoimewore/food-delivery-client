import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography,Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { useState} from 'react';
import {Link }from "react-router-dom"
import SearchBar from './SearchBar';
import HomeIcon from '@mui/icons-material/Home';









const Menu = ({foodData,setFoodData}) => {

  const [value,setValue]=useState(0)

function handleChange(event, newValue){

  setValue(newValue)

}


  return (
    <>

<AppBar sx={{background:"green",fontFamily: 'Nunito',color:"#fff",textTransform:"uppercase",height:"5rem"}} elevation={0}>
     <Toolbar sx={{width:"100%",margin:"0 auto"}}>
     <h1 style={{fontSize:"30px"}}>Naija Foods</h1>
     <Grid container spacing={1}>
      <Grid item xs={10}>
        <SearchBar
        foodData={foodData}
        setFoodData={setFoodData}/>

      </Grid>
      <Grid item xs={2}>
        <IconButton type='submit' aria-label="home" component={Link} to="/">
        <HomeIcon style={{fill:"#fff"}}/>

        </IconButton>
     

      </Grid>



     </Grid>

      </Toolbar>
    </AppBar>
 
    
    <Box sx={{ flexGrow: 1 ,marginTop:"5em",padding:"2em"}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      {foodData.map((data, index) => (
        <Grid item xs={2} sm={4} md={4} key={index} sx={{display:"flex"}}>
          {/* <Item>xs=2</Item> */}
          <Card sx={{maxWidth:400}}>
            <CardActionArea>
            <CardMedia
            component="img"
            image={data.image}
            sx={{color:"primary"}}/>
            <CardContent>
              <Typography variant="h3" color="primary.main">{data.header}</Typography>
              <Typography variant='subtitle1' color="grey" sx={{fontFamily:'sans-serif',fontSize:"1em",}}>{data.desc}</Typography>

            </CardContent>
            <CardActions sx={{marginLeft:"auto"}}>
              {/* <Button>Add to Cart</Button> */}
            </CardActions>
            </CardActionArea>
         

           

          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  </>
  )
}

export default Menu