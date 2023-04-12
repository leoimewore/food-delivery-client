import React from 'react'
import { IconButton, TextField,Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react';
import menuData from './Slider/data';
import { width } from '@mui/system';



const SearchBar = ({foodData,setFoodData}) => {
    let originalData=foodData
    const [searchQuery,setSearchQuery]=useState("")
  

   function handleSearch(event){
        const newData=menuData.filter((data)=>data.header.toLowerCase().split(" ").join("").includes(event.target.value.toLowerCase()))
        setFoodData(newData)
    }
 








  return (
    <Grid container>
        <Grid item xs={12}>

       
    <form style={{marginLeft:"2em",display:"flex"}}>
        <TextField
            id="search-bar"
            className='text'
            onChange={handleSearch}
            variant='outlined'
            placeholder='Search...'
            size='small'
            color="secondary"
            inputProps={{ style: { fontFamily: 'nunito', color: 'white',borderColor:"#fff"} }}
            sx={{
                width: { sm: 300, md: 600 },
                "& .MuiInputBase-root": {
                    height: 40
                }
            }}
           
        />
        <IconButton aria-label="search" sx={{}}>
            <SearchIcon style={{fill:"#fff"}}/>

        </IconButton>

    </form>
    </Grid>
    </Grid>
  )
}

export default SearchBar