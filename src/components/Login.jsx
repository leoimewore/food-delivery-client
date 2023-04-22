import React from 'react'
import { Modal ,Box, Grid, Button, Typography,TextField} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import {useMediaQuery }from '@mui/material'
import {Link } from "react-router-dom"

const Login = ({openLogin,setOpenLogin,handleLoginClose}) => {

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const dynamicStyles = {
        
        ...matchesMD && {width:"50%",top:"30%",left:"17%"},
        ...matchesSM && {width:"60%",top:"30%",left:"20%"}
        
       

    }
   
   





  return (
    <div> <Modal
    open={openLogin}
    onClose={handleLoginClose}
    
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"  
>
<Box sx={{backgroundColor:"white",padding:"1em",borderRadius:"6px",width:"35%",position:"absolute",top:"20%",left:"30%",...dynamicStyles}}>
            <Typography variant='h3' color="primary" sx={{paddingBottom:"1em"}}>LOGIN</Typography>
            <form>
            <Grid container spacing={3} xs={12}>
                <Grid item xs={12}>
                    <TextField type="email" label="Email" variant='outlined' fullWidth required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" label="PasssWord" variant='outlined' fullWidth required/>
                </Grid>
                <Grid item xs={6} sx={{marginLeft:"auto",marginRight:"auto",padding:"1.5em"}}>
                    <Button type="submit" variant='contained' fullWidth component={Link} to="/ordernow">Submit</Button>

                </Grid>
                
            
            </Grid>

            <Grid item>
                <Button size='small' variant='text' component={Link} to="/register">Register here</Button>
                <Button size='small' variant='text'>Forgot Password</Button>
                    
                </Grid>

            </form>
        </Box>

</Modal></div>
  )
}

export default Login