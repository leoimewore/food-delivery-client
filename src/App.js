import React from 'react'
import Navbar from './components/Navbar';
import {HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Ordernow from "./components/Ordernow"
import menuData from "./components/Slider/data"
import { useState,useEffect } from 'react';
import Contact from './components/Contact';








const links=["Home","Menu","About","Contact Us"]

const App = () => {

  const [foodData, setFoodData] = useState(menuData)
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
     setFlag={setFlag}/>}
     <Routes>
     <Route exact path="/" element={<Homepage setFlag={setFlag}/>}/>
     <Route path="ordernow" element={<Ordernow
        foodData={foodData}
        setFoodData={setFoodData}
        />} 
      
     />
     <Route exact path="contactus" element={<Contact/>}/>
     </Routes>
    </HashRouter>
   






   



  
  )
}

export default App