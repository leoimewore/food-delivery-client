import React from 'react'
import { Grid,TextField,Box,Typography,Button,Card,CardContent } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import {useMediaQuery }from '@mui/material'
import { maxWidth } from '@mui/system';

const Register = () => {






    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const dynamicStyles = {
        
        ...matchesMD && {width:"50%",top:"30%",left:"17%"},
        ...matchesSM && {width:"60%",top:"30%",left:"20%"}
        
       

    }
  return (
    <div>
        <Box fullWidth sx={{backgroundColor:"white",padding:"2em",borderRadius:"6px",width:"35%", maxWidth:"1200px",position:"absolute",top:"20%",left:"30%",...dynamicStyles}}>
        
            <Card style={{maxWidth:"1000px",margin:"10px auto",padding:"20px 5px"}}>

                <CardContent>
                <Typography variant='h4' color="green" gutterBottom>Sign Up</Typography>
                    <form>
                        <Grid container spacing={1} >
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
                                <TextField type="text" label="Password" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="Retype Password" variant="outlined" fullWidth required/>
                            </Grid>
    
                            <Grid xs={12} item>
                               <Button type='submit' variant='contained' fullWidth>Submit</Button>
    
                            </Grid>
    
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        
</Box>
</div>
  )
}

export default Register