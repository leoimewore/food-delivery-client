import React from 'react'

import { AppBar,Toolbar,Tabs,Tab,useTheme,useMediaQuery } from '@mui/material'

import { useState} from 'react';

import Drawbar from './Drawbar';
import{Grid} from '@mui/material';
import {Link} from "react-router-dom"















const Navbar = ({links,foodData,setFoodData,flag}) => {






  

  const theme=useTheme()

  const [value, setValue] = useState(0)
  const [searchQuery,setSearchQuery]=useState("")



  


 
  


    


  
  


 









  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (

<div style={{display:"flex",
      justifyContent:"center",
      alignItems:"center",
     
      color:"#fff",
      fontFamily: 'Nunito',
     textTransform:"uppercase"}}>


<AppBar sx={{background:"green",fontFamily: 'Nunito',color:"#fff",textTransform:"uppercase",height:"5rem"}} elevation={0}>
     <Toolbar sx={{width:"100%",margin:"0 auto"}}>
          <h1 style={{fontSize:"30px"}}>Naija Foods</h1>
          {/* <IconButton>
           <MenuIcon sx={{color:"#fff",fontSize:"2rem"}}/>
          </IconButton> */}

          {isMatch  ? <>  {<Drawbar links={links} setValue={setValue} flag={flag} />}</>:
              <Grid container spacing={1}>
           
                     
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
                              component={Link} 
                              to={`/${link.toLowerCase().replace(" ","")}`} 
                              sx={{fontFamily:"Nunito",fontSize:"1.0rem"}}
                              />))}
                             
  
                          </Tabs>
     
  
                      </Grid>
                      <Grid item xs={2} />
                     
                  </Grid>}
                  <Grid item xs={8} />
                 

                  {/* <Button variant='contained' className={classes.button}>Signup</Button>
                  <Grid item xs={0.5}></Grid>
                  <Button variant='contained' className={classes.button}>Login</Button>
   */}
  
     </Toolbar>
    </AppBar>




</div>





 

      

    
   




  )
}

export default Navbar