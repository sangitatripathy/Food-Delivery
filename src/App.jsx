import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Footer from './components/Footer.jsx'
import LoginPopup from './components/LoginPopup.jsx'

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className="min-h-screen flex flex-col">      
        <Navbar setShowLogin={setShowLogin}/> 
        <div className='flex-1'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/placeorder" element={<PlaceOrder/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes> 
      </div>     
    </div>
    <Footer/>
    </>   
  )
}

export default App