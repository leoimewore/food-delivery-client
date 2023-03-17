import React from 'react'

import { AppBar, Button, Toolbar,Tabs,Tab,useTheme,useMediaQuery } from '@mui/material'

import { useState } from 'react';

import Drawbar from './Drawbar';
import{Grid } from '@mui/material';














const Navbar = ({links}) => {

  const theme=useTheme()

  const [value, setValue] = useState(0)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (

<div style={{display:"flex",
      justifyContent:"center",
      alignItems:"center",
       minHeight:"100vh",
      color:"#fff",
      fontFamily: 'Nunito',
     textTransform:"uppercase"}}>


<AppBar sx={{background:"none",fontFamily: 'Nunito',color:"#fff",textTransform:"uppercase"}} elevation={0}>
     <Toolbar sx={{width:"100%",margin:"0 auto"}}>
          <h1>Naija Foods</h1>
          {/* <IconButton>
           <MenuIcon sx={{color:"#fff",fontSize:"2rem"}}/>
          </IconButton> */}

          {isMatch  ? <>  {<Drawbar links={links} setValue={setValue} />}</>:
          <Grid container spacing={2}>
           
                     
                      <Grid item xs={10}>
                          <Tabs 
                          TabIndicatorProps={{
                            style: {
                              backgroundColor: "green"
                            }
                          }}
                          value={value} textColor="inherit" indicatorColor='secondary' onChange={(e, val) => setValue(val)}
                          >
                              {links.map((link, index) => 
                              (<Tab 
                              key={index} 
                              label={link} 
                              to={`/${link.toLowerCase().replace(" ","")}`} 
                              sx={{fontFamily:"Nunito",fontSize:"1.0rem"}}
                              />))}
                             
  
                          </Tabs>
     
  
                      </Grid>
                      <Grid item xs={1} />
                     
                  </Grid>}

                  <Button variant='contained' sx={{backgroundColor:"green",fontFamily: 'Nunito'}}>Signup</Button>
                  <Grid item xs={0.5}></Grid>
                  <Button variant='contained' sx={{backgroundColor:"green",fontFamily: 'Nunito'}}>Login</Button>
  
  
     </Toolbar>
    </AppBar>




</div>





 

      

    
   




  )
}

export default Navbar