import React, { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { storeContext } from '../contexts/storeContext';

const Fooditem = ({ id, name, price, image, description }) => {
  const { addToCart, removeFromCart, cartItem } = useContext(storeContext);

  return (
    <div className='rounded-2xl shadow-lg p-4 flex flex-col items-center mt-6 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105'>

      <div className='relative'>
        <img src={image} alt={name} />

        {!cartItem[id] ? (
          <img
            className='absolute w-[35px] bottom-2 right-1 cursor-pointer'
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            alt='add to cart'
          />
        ) : (
          <div className='absolute flex flex-row bottom-2 right-1 items-center bg-white rounded-[40px] px-2 py-1'>
            <img
              className='w-5 h-5 cursor-pointer mx-1'
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt='remove icon'
            />
            <p className='px-2 font-medium'>{cartItem[id]}</p>
            <img
              className='w-5 h-5 cursor-pointer mx-1'
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt='add icon'
            />
          </div>
        )}
      </div>

      <div className='flex flex-row items-center justify-between w-full mt-4'>
        <h3 className='font-bold text-[20px]'>{name}</h3>
        <img src={assets.rating_starts} alt="rating" />
      </div>
      
      <p className='font-medium text-gray-500'>{description}</p>
      <p className='font-bold'>${price}</p>
    </div>
  );
};

export default Fooditem;
