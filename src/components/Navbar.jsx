import React from 'react'

import { AppBar,Toolbar,Tabs,Tab,useTheme,useMediaQuery,IconButton, Typography,Stack } from '@mui/material'

import { useState} from 'react';

import Drawbar from './Drawbar';
import{Grid} from '@mui/material';
import {Link} from "react-router-dom"
import SearchBar from './SearchBar';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';















const Navbar = ({links,foodData,setFoodData,flag,setFlag}) => {






  

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


<AppBar elevation={0}>
     <Toolbar>
     
        <IconButton size='large' edge="start" aria-label="home" arial-label="logo" component={Link} to="/" onClick={()=>(setFlag(!flag))}>
        <RestaurantIcon style={{fill:"#fff"}}/>
        </IconButton>

       
        <Typography variant='h5' component="div" sx={{flexGrow:1}} color="#fff">
          Naija Foods
        </Typography>
          

          {isMatch && flag===false ? <>  {<Drawbar links={links} setValue={setValue} flag={flag} />}</>:
              flag===false &&<Stack direction="row" spacing={2}>
           
                     
                       
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
                     
                  </Stack>}
                  <Grid item xs={8} />
                 

                  {/* <Button variant='contained' className={classes.button}>Signup</Button>
                  <Grid item xs={0.5}></Grid>
                  <Button variant='contained' className={classes.button}>Login</Button>
   */}

  
   
    <Stack>
    {flag===true &&<SearchBar
    foodData={foodData}
    setFoodData={setFoodData}/>}

    </Stack>

    <IconButton size='large'>
    <ShoppingCartSharpIcon style={{fill:"white"}}/>
   </IconButton>

  

  
  
     </Toolbar>
    </AppBar>




</div>





 

      

    
   




  )
}

export default Navbar