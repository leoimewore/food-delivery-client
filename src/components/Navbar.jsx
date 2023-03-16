import React from 'react'

import { AppBar, Button, Toolbar,Grid,Tabs,Tab,useTheme,useMediaQuery } from '@mui/material'

import { useState } from 'react';

import Drawbar from './Drawbar';














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

    <Grid 
    container
    
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
          width: '100%',
          height:"100vh",
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px',
          display:"flex",
         textAlign:"center",
          justifyContent:"center",
          alignItems:"center"
          
        }}
      >
      
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








</div>





 

      

    
   




  )
}

export default Navbar