import React from 'react'
import { Box,CssBaseline,Grid,Button } from '@mui/material'


const style={
  
  minHeight:"100vh",
  display:"relative",
  width:"100%",
  objectFit:"cover",
  backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/homeimage2.jpg"})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  maxWidth:"100%",
  height: "auto",
  padding: 0,
  margin: 0,
  

}

const Homepage = () => {
  return (
   <>

<Box sx={{...style}}>
        <CssBaseline/>
        <Grid 
    container
    
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
          width: '100%',
          height:"100%",
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px',
          display:"flex",
         textAlign:"center",
          justifyContent:"center",
          alignItems:"center"
          
        }}
      >
     







         <CssBaseline/>
 
     <Grid item xs={8} >
        <h1 style={{color:"#fff",display:"flex",alignItems:"center",
        justifyContent:"center",fontSize:"3rem",textAlign:"center"}}>
          Welcome to Naija Foods Restaurant
          </h1>
          <Button variant="contained" sx={{borderRadius:"0.5em",
       width:"15em",padding:"0.5em",
       backgroundColor:"green",
       fontFamily: 'Nunito',
       color:"primary"}}>Order Now</Button>
     </Grid>
 
      
  
  </Grid>
</Box>



   </>
  )
}

export default Homepage