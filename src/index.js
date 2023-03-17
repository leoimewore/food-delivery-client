import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider,createTheme } from '@mui/material';
const theme= createTheme({
  palette:{
    primary:{
      main: "#008000"
    },
    secondary:{
      main:"#fff"
    }
  },

  typography:{
    fontFamily:"Nunito",
  
    subtitle1:{
      fontWeight:400,
      color:"rgba(36,0,27,0.8574561403508771)"
     
    },
    h4:{
        fontWeight:700,
        color:"rgba(36,0,27,0.8574561403508771)",
       
    },
  h5:{
    fontWeight:700,
    fontSize:"1rem",
    color:"rgba(36,0,27,0.8574561403508771)"

  },
    h6:{
      fontWeight:700,
      color:"rgba(36,0,27,0.8574561403508771)"
    }

  },
 
  
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}> 
 
  
 <App />


</ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

