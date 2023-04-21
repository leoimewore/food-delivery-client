import React from 'react'
import { Box,Grid,TextField,Card,CardContent,Typography,Button,CssBaseline } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import {useMediaQuery }from '@mui/material'








const style={
  
    minHeight:"100vh",
 
    width:"100%",
    display:"relative",
    objectFit:"cover",
    backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/welcome.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:"center center",
    maxWidth:"100%",
    height: "auto",
    padding: 0,
    margin: 0,
    overflow:"hidden"
    
  
  }

const Contact = () => {

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const dynamicStyles = {
        
        ...matchesMD && {display:"flex",marginRight:"2em"}
    }






  return (
   
    
   <Box style={{...style}}>
    <CssBaseline/>

   
    <Box sx={{position:'absolute',top:"10%",left:"5%",...dynamicStyles}}>
    
        <div>
            <Card style={{maxWidth:"600px",padding:"10px 2px"}}>

                <CardContent>
                <Typography variant='h4' sx={{color:"green",textTransform:"uppercase"}} gutterBottom>Contact Us</Typography>
                <Typography variant='subtitl' component="p" color="grey" gutterBottom> Fill up the form and our team will get back to you</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="First Name" variant='outlined' fullWidth required />
    
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Last Name" variant='outlined' fullWidth required />
    
                            </Grid>
    
                            <Grid xs={12} item>
                                <TextField type="email" label="Email" variant="outlined" fullWidth required/>
    
                            </Grid>
    
                            <Grid xs={12} item>
                                <TextField type="number" label="Phone Number" variant="outlined" fullWidth required/>
                            </Grid>
    
                            <Grid xs={12} item>
                                <TextField label="Message" multiline rows={3} variant="outlined" fullWidth required/>
    
                            </Grid>
                            <Grid xs={12} item>
                               <Button type='submit' variant='contained' fullWidth>Submit</Button>
    
                            </Grid>
    
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    </Box> 
    </Box>
    
  
  )
}

export default Contact