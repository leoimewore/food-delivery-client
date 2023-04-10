import React from 'react'
import {Drawer, IconButton,List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {Link }from "react-router-dom"

const Drawbar = ({links,setValue,flag}) => {

const [open, setOpen] = useState(false) 
  return (
   <>
  { <Drawer PaperProps={{
    sx:{backgroundColor:"primary.main"}
   }} open={open} anchor={'left'} onClose={()=>(setOpen(false))}>
    
   <List>
    {links.map((link,index)=>(
    
       <ListItemButton key={index} divider 
       onClick={()=>{setOpen(false)
       setValue(index)}} component={Link} to={`/${link.toLowerCase().replace(" ","")}`}>
        <ListItemIcon>
<ListItemText sx={{color:"white"}} >{link}</ListItemText>
        </ListItemIcon>
       </ListItemButton>
    ))}
      </List>
      </Drawer>}
   {<IconButton onClick={()=>(setOpen(!open))} sx={{color:"white"}}>
    <MenuIcon/>
   </IconButton>}
   
   </>
  )
}

export default Drawbar