import React from 'react'
import { Box,Grid,TextField,Card,CardContent,Typography,Button,CssBaseline } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import {useMediaQuery }from '@mui/material'
import { flexbox } from '@mui/system';








const style={
  
    minHeight:"150vh",
 
    width:"100%",

    objectFit:"cover",
    backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/welcome.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:"center center",
    maxWidth:"100%",
    
    padding: 0,
    margin: 0,
    overflow:"hidden"
    
  
  }

const Contact = () => {

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
   
    const dynamicStyles = {
        
        ...matchesMD && {width:"50%"},
        ...matchesSM && {width:"70%"}
        
       

    }






  return (
   
    
   <Box style={{...style}}>
    <CssBaseline/>

   
    {/* <Box sx={{position:'absolute',top:"10%",left:"5%",...dynamicStyles}}> */}


        <Box sx={{backgroundColor:"white",padding:"2em",borderRadius:"6px",width:"35%",position:"absolute",top:"20%",left:"10%",...dynamicStyles}}>
            <Typography variant='h2' color="primary" sx={{paddingBottom:"1em"}}>CONTACT US</Typography>
            <form>
            <Grid container spacing={1} xs={12}>
                <Grid item xs={12}>
                    <TextField label="FullName" variant='outlined' fullWidth required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="email" label="Email" variant='outlined' fullWidth required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="number" label="Mobile" variant='outlined' fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <TextField label="Message" multiline rows={2} variant="outlined" fullWidth required/>

                </Grid>
                <Grid item xs={6} sx={{marginLeft:"auto",marginRight:"auto"}}>
                    <Button type="submit" variant='contained' fullWidth>Submit</Button>

                </Grid>

            </Grid>
            </form>
        </Box>
    </Box> 
    // </Box>
    
  
  )
}

export default Contact