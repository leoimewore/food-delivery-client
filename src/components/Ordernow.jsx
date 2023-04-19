import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardActions,
   CardContent, CardMedia, Typography,Button} from '@mui/material';
import { useState} from 'react';
import CardModal from './CardModal';
import menuData from './Slider/data';












const Ordernow = ({foodData,setFoodData}) => {

  const [showModal, setShowModal] = useState({})




  const [open, setOpen] = React.useState(false);
  const handleOpen = (value) =>{
    setOpen(true)
    setShowModal(value)

  }
  const handleClose = () => setOpen(false);

  const [value,setValue]=useState(0)

function handleChange(event, newValue){

  setValue(newValue)

}


  return (
    <>

 
    
    <Box sx={{ flexGrow: 1 ,marginTop:"5em",padding:"2em"}}>
    <Grid container spacing={{ xs: 2,md:2 }} columns={{ xs: 2, sm: 4, md: 12}}>

      {foodData.map((data, index) => (
        <Grid item xs={2} sm={2} md={4} key={index} sx={{display:"flex",justifyContent:"center"}}>
          {/* <Item>xs=2</Item> */}
          <Card sx={{maxWidth:350,':hover': {
              boxShadow: 20, // theme.shadows[20]
            }}}
           
          >
            <CardActionArea onClick={(event)=>handleOpen({"img":data.image,"title":data.header,"desc":data.desc})}>
            <CardMedia
            component="img"
            image={data.image}
            sx={{color:"primary"}}/>
            <CardContent>
              <Typography variant="h3" color="primary.main">{data.header}</Typography>
              <Typography variant='subtitle1' color="grey" sx={{fontFamily:'sans-serif',fontSize:"1em",}}>{data.desc}</Typography>

            </CardContent>
          
            
            </CardActionArea>

            <CardActions>
            <Button variant='outlined'>
              BUY
            </Button>

            </CardActions>
         

           

          </Card>
        </Grid>
      ))}
      <CardModal open={open} handleClose={handleClose} foodData={foodData} setFoodData={setFoodData} showModal={showModal} setShowModal={setShowModal}/>
    </Grid>
  </Box>
  </>
  )
}

export default Ordernow