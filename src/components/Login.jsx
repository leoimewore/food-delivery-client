import React from 'react'
import { Modal ,Box, Grid, Button, Typography,TextField} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import {useMediaQuery }from '@mui/material'
import {Link,useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from "../axios.js"

const Login = ({openLogin,setOpenLogin,handleLoginClose}) => {


    const navigate=useNavigate()
 

    const [loginEmail,setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")



    const handleLogin=async(event)=>{
        event.preventDefault()
        
        
        try{
        
       
           const resp=await axios.post("/login",{
                email:loginEmail,
                password:loginPassword,})
        
                localStorage.setItem("loginUser",JSON.stringify(resp.data))
                console.log(resp.data)
        
        
       
        
        
        
        
        
        
        
        
        
           
            navigate("/ordernow")
        
            
            window.location.reload()
           
                
                
        }catch (error){
            // setLoading(false)
            console.log(error)
           
            // setError(error.response.data.msg)
        
          
        
        
            
        }
        
        
         }


    

    

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const dynamicStyles = {
        
        ...matchesMD && {width:"500px"},
    }
   
   





  return (
    <div style={{position:"relative"}}> <Modal
    open={openLogin}
    onClose={handleLoginClose}
    
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"  
>
{/* <Box sx={{backgroundColor:"white",padding:"1.5em",borderRadius:"6px",width:"35%",position:"absolute",top:"20%",left:"30%",...dynamicStyles}}> */}

<Box sx={{backgroundColor:"white",borderRadius:"6px",position:"absolute",left:"50%",transform:"translateX(-50%)",top:"30%",padding:"1.5em",width:"300px",...dynamicStyles}}>
            <Typography variant='h3' color="primary" sx={{paddingBottom:"1em"}}>LOGIN</Typography>
            <form onSubmit={handleLogin}>
            <Grid container spacing={3} xs={12}>
                <Grid item xs={12}>
                    <TextField type="email" label="Email" variant='outlined' value={loginEmail} onInput={(e)=>setLoginEmail(e.target.value)} fullWidth required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="password" label="PasssWord" variant='outlined' value={loginPassword} onInput={(e)=>setLoginPassword(e.target.value)} fullWidth required/>
                </Grid>
                <Grid item xs={6} sx={{marginLeft:"auto",marginRight:"auto",padding:"1.5em"}}>
                    <Button type="submit" variant='contained' fullWidth >Submit</Button>

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