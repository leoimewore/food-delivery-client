import React from 'react'
import { Box } from '@mui/system'
import { CssBaseline,Grid } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





const style={
  
    minHeight:"100vh",
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


const links=["Home","Menu","About","Order Online","Contact Us"]

const App = () => {
 
  return (
    <Grid container>
      <Box sx={{...style}}>
        <CssBaseline/>
        </Box>
  
  
    <BrowserRouter><Navbar links={links}/></BrowserRouter>
    </Grid>



  
  )
}

export default App