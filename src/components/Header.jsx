import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center m-5'>
      <div className='bg-[url("../../public/header_img.png")] bg-cover bg-center h-[65vh] w-[80vw] flex items-center justify-center rounded-4xl relative '>
        <div className=' absolute bottom-8 left-6 flex flex-col gap-4 items-start ml-4 animate-fadeIn '>
          <h2 className='text-[50px] font-bold text-white'>Order your <br/> favourite food here</h2>
          <p className='text-white'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisy your craving and elevate your dining experience,one delicious bite at a time.</p>
          <button className='bg-white py-2 px-4 rounded-4xl'>View More</button>
        </div>     
      </div>
    </div>
    
  )
}

export default Header