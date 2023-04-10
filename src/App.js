import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Menu from "./components/Menu"
import menuData from "./components/Slider/data"
import { useState,useEffect } from 'react';








const links=["Home","Menu","About","Contact Us"]

const App = () => {

  const [foodData, setFoodData] = useState(menuData)
  // useEffect(() => {
  //   setFoodData(menuData)
  // }, [])

  const [flag,setFlag]=useState(false)
  


 
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
    { !flag&&<Navbar links={links}
     foodData={foodData}
     setFoodData={setFoodData}
     flag={flag}
     setFlag={setFlag}/>}
     <Routes>
     <Route exact path="/" element={<Homepage setFlag={setFlag}/>}/>
     <Route path="menu" element={<Menu 
        foodData={foodData}
        setFoodData={setFoodData}
        />} 
     />
     </Routes>
    </BrowserRouter>
   






   



  
  )
}

export default App