import React from 'react'
import { Box,CssBaseline,Grid,Button } from '@mui/material'
import useStyles from '../Button'
import {Link } from "react-router-dom"
import Login from './Login'
import { useTheme } from '@mui/material/styles';
import {useMediaQuery }from '@mui/material'
import Register from './Register'


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

const Homepage = ({setFlag,setOpenLogin,openLogin}) => {





  const handleOrderPage=()=>{

    setOpenLogin(true)
    // setFlag(true)
  }

  const handleLoginClose = () => setOpenLogin(false);


  const classes=useStyles()
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
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)",
          width: '100%',
          height:"100%",
          bgcolor: 'rgba(0, 0, 0, 0.4)',
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
        justifyContent:"center",fontSize:"3rem",textAlign:"center",textTransform:"capitalize",
        fontStyle:"italic"}}>
          Welcome to Naija Foods Restaurant
          </h1>
          <Button variant="contained" sx={{borderRadius:"0.5em",
       width:"15em",padding:"0.5em",
       fontFamily: 'Nunito',
       color:"primary"}} 
       
      //  component={Link}
      //  to="/ordernow"
       onClick={handleOrderPage}
       >Order Now</Button>
     </Grid>
 
      
  
  </Grid>


  <Login openLogin={openLogin} setOpenLogin={setOpenLogin} handleLoginClose={handleLoginClose}/>
  

</Box>



   </>
  )
}

export default Homepage