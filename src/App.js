import React from 'react'
import { Box } from '@mui/system'
import { CssBaseline,Grid } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';








const links=["Home","Menu","About","Order Online","Contact Us"]

const App = () => {
 
  return (
    <Grid container>
      
  
  
    <BrowserRouter>
    <Navbar links={links}/>
    <Homepage/>
    </BrowserRouter>
    </Grid>



  
  )
}

export default App