import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { storeContext } from '../contexts/storeContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const [cartCount, setCartCount] = useState(0);

  const {getTotalAmount,cartItem}=useContext(storeContext)

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };
  
  const nonZeroCount=Object.entries(cartItem).filter(([id,qty])=>qty > 0).length;

  const navbarItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Mobile App", href: "#app" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <div className='flex flex-col md:flex-row justify-around items-center mt-3 gap-4 px-4'>
      <div>
        <Link to="/"><img src={assets.logo} alt="logo" className="h-10" /></Link>        
      </div>
      <div className='flex justify-around items-center'>
        <ul className='flex flex-col md:flex-row gap-4 text-center'>
          {navbarItems.map((item) => (
            <li key={item.name}>
              {item.name === "Home" ? (
                <Link to="/" onClick={()=>setMenu(item.name)}
                className={`cursor-pointer ${menu === item.name ? 
                  'underline underline-offset-4':'hover:underline hover:underline-offset-4'}`}
                >{item.name}
                </Link>
              ):(
              <a
              href={item.href}
              onClick={()=>setMenu(item.name)}
              className={`cursor-pointer ${menu === item.name ?
                'underline underline-offset-4':'hover:underline hover:underline-offset-4'
              }`}>{item.name}
              </a>)}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex gap-6 justify-center items-center'>
        <img src={assets.search_icon} alt="search icon" className="w-5 h-5" />
        <div className='relative'>
          <Link to="/cart"><img src={assets.basket_icon} alt="basket icon" className="w-6 h-6" /></Link>         
          {getTotalAmount() > 0 && (
            <div className='absolute -top-1 -right-0.5 w-5 h-5 flex items-center justify-center bg-orange-400 text-xs text-white rounded-full'>{nonZeroCount}
            </div>
          )}
        </div>
        <button onClick={()=>setShowLogin(true)} className='bg-orange-200 px-3 py-1.5 hover:bg-orange-500 rounded-full text-sm'>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
