import React from 'react'
import { Grid,TextField,Box,Typography,Button,Card,CardContent } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import {useMediaQuery }from '@mui/material'
import { maxWidth } from '@mui/system';
import axios from "../axios.js"
import { useState } from 'react';
import {Link,useNavigate} from "react-router-dom"






const Register = () => {
    const navigate=useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [bool,setBool]=useState(false)
    const [registered, setRegistered]=useState(false)

    const [message,setMessage]=useState("")

    let title



    const handleRegister=async(e)=>{


        e.preventDefault()
        try{
            const resp=await axios.post("/user",{
                name:`${firstName} ${lastName}`,
                email:email,
                password:password,
                confirmPassword:confirmPassword
            
        })
                console.log(resp.data)
                setRegistered(true)
                setBool(true)
                localStorage.setItem("userInfo",JSON.stringify(resp.data))
                
                title="Registeration Successful"
                navigate("/")

    
                
                // Notification(`${fullName} is registered succesfully`,title,`success`)
    
                window.location.reload()
                
        }catch (error){
            console.log(error.response)
            title="Not Successful"
    
            if(error.response.data=== "That user already exists!"){
                setMessage(error.response.data)
                // Notification("That user already exists!",title,"danger")
    
            }else{
                setMessage(error.response.data.msg)
                // Notification(error.response.data.msg,title,"danger")
            }
            
        }




    }






    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const dynamicStyles = {
        
        ...matchesMD && {width:"700px"},
       
        
       

    }
  return (
    <div style={{position:"relative"}}>
        {/* <Box fullWidth sx={{backgroundColor:"white",padding:"2em",borderRadius:"6px",width:"35%", maxWidth:"1200px",position:"absolute",top:"20%",left:"30%",...dynamicStyles}}> */}
        <Box sx={{position:"absolute",left:"50%",transform:"translate(-50%,30%)",width:"400px",...dynamicStyles}}>
            <Card style={{maxWidth:"1000px",margin:"10px auto",padding:"20px 5px"}}>

                <CardContent>
                <Typography variant='h4' color="green" gutterBottom>Sign Up</Typography>
                    <form onSubmit={handleRegister}>
                        <Grid container spacing={1} >
                            <Grid item xs={12} sm={6}>
                                <TextField label="First Name" variant='outlined' value={firstName}
                                onInput={(e)=>setFirstName(e.target.value)} fullWidth required />
    
                            </Grid>
    
                            <Grid item xs={12} sm={6}>
                                <TextField label="Last Name" variant='outlined' fullWidth value={lastName}
                                onInput={(e)=>setLastName(e.target.value)} required />
    
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="email" label="Email" variant="outlined" fullWidth value={email} onInput={(e)=>setEmail(e.target.value)} required/>
    
                            </Grid>
    
                            <Grid xs={12} item>
                                <TextField type="text" label="Password" variant="outlined" fullWidth value={password} onInput={(e)=>setPassword(e.target.value)} required/>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="Retype Password" variant="outlined" fullWidth  value={confirmPassword}
                        onInput={(e)=>setConfirmPassword(e.target.value)} required/>
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