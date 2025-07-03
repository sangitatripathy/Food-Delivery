import { Children, createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const storeContext=createContext();

const StoreContextProvider=(props)=>{

  const [cartItem,setCartItem]=useState({});

  const addToCart=(itemId)=>{
    if(!cartItem[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalAmount=()=>{
    let totalAmount=0
    for (const item in cartItem){
      if (cartItem[item] > 0){
        let itemInfo=food_list.find((product)=>product._id===item)
        totalAmount+=itemInfo.price*cartItem[item];
      }
    }
    return totalAmount
  }

  console.log(getTotalAmount(),"getTotalAmount")

  useEffect(()=>{
    console.log(cartItem);
  },[cartItem])

  const contextValue={
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalAmount
  }
  return(
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
}

export default StoreContextProvider;