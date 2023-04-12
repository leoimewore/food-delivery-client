import React from 'react'
import { IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react';
import menuData from './Slider/data';



const SearchBar = ({foodData,setFoodData}) => {
    let originalData=foodData
    const [searchQuery,setSearchQuery]=useState("")
  

   function handleSearch(event){
        const newData=menuData.filter((data)=>data.header.toLowerCase().split(" ").join("").includes(event.target.value))
        setFoodData(newData)
    }
 








  return (
    <form style={{marginLeft:"2em"}}>
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
                width: { sm: 300, md: 500 },
                "& .MuiInputBase-root": {
                    height: 40
                }
            }}
           
        />
        <IconButton aria-label="search">
            <SearchIcon style={{fill:"#fff"}}/>

        </IconButton>

    </form>
  )
}

export default SearchBar