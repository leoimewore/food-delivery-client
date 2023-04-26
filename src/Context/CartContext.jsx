import React, { createContext, useContext, useState} from "react";

const Context = createContext();


export const CartContext=({children})=>{

    const [showFoodCart,setShowFoodCart]=useState(false)

    return (
        <Context.Provider
        value={{
        setShowFoodCart,
        showFoodCart,
    }}
        >{children}





        </Context.Provider>
    )





}

export const useCartContext=()=>useContext(Context)





