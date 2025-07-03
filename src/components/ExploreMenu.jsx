import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='flex flex-col items-start w-[80vw] mx-auto' id='menu'>
      <h1 className='text-2xl font-bold text-center my-6'>Explore Our Menu</h1>
      <div className='flex flex-row gap-2 justify-around items-center mb-12 w-[80vw] mx-auto overflow-x-scroll lg:overflow-x-hidden'> 
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(category === item.menu_name?"all":item.menu_name)} key={index} className='flex flex-col justify-center items-center gap-1'>
              <img className={`rounded-full ${category === item.menu_name ? 'border-4 border-orange-500':""}`}  src={item.menu_image} alt="menu_image" />
              <p className=' cursor-pointer'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-6 border-gray-300 border-t-2 w-[90vw] mx-auto'/>
    </div>
  )
}

export default ExploreMenu