import React from 'react'
import Navbar from './components/Navbar';
import {HashRouter, Routes, Route } from "react-router-dom";

import Ordernow from "./components/Ordernow"
import menuData from "./components/Slider/data"
import { useState,useEffect } from 'react';
import Contact from './components/Contact';
import Login from './components/Login';
import Homepage from "./components/Homepage.jsx"
import Register from "./components/Register"








const links=["Home","Menu","About","Contact Us"]

const App = () => {

  const [foodData, setFoodData] = useState(menuData)
  const [openLogin,setOpenLogin]=useState(false)

  // useEffect(() => {
  //   setFoodData(menuData)
  // }, [])

  const [flag,setFlag]=useState(false)
  


 
  return (
    <HashRouter>
    {<Navbar links={links}
     foodData={foodData}
     setFoodData={setFoodData}
     flag={flag}
     openLogin={openLogin}
     setFlag={setFlag}/>}
     <Routes>
     <Route exact path="/" element={<Homepage setFlag={setFlag} openLogin={openLogin} setOpenLogin={setOpenLogin}/>}/>
     <Route path="ordernow" element={<Ordernow
        foodData={foodData}
        setFoodData={setFoodData}
        openLogin={openLogin} 
        setOpenLogin={setOpenLogin}
        />} 
      
     />
     <Route exact path="contactus" element={<Contact/>}/>
     <Route exact path="register" element={<Register/>}/>
    
     
     </Routes>
    </HashRouter>
   






   



  
  )
}

export default App